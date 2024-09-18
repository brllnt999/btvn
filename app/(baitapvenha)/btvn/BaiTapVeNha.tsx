"use client"
import * as React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardBody, CardFooter, CardHeader, CheckboxGroup, Chip } from "@nextui-org/react"
import { materialsData } from "./data"
import { CustomCheckbox } from "@/components/csr/CustomCheckbox"
import SecondStep from "./SecondStep"
import FilnalResults from "./FilnalResults"
import {  User } from "@/lib/db/schema/users"
import { updateUserAction } from "@/lib/actions/users"
import { UserSelect } from "./UserDisplay"
import { TAddOptimistic } from "./useOptimisticUsers"

const BaiTapVeNha = ({ allUsers, userId }: { allUsers: User[], userId: string }) => {
    const [currentUser,setCurrentUser] = React.useState<User>(allUsers.filter(user=>user.kindeId===userId)[0])
    const [selected,setSelected] = React.useState<string[]>(currentUser.selected as string[])
    const [results,setResults] = React.useState<{[key:string]:string}>(currentUser.results as {[key:string]:string})
    const isOwner = currentUser?.kindeId === userId
    const [step, setStep] = React.useState(1)
    const filterData = materialsData.filter(data => selected.includes(data.id))
    
    return (
        <div className="flex flex-cols grid sm:grid-cols-3 place-content-center">
            <div className="col-span-1 sm:col-span-2 py-6">
                <div className="flex flex-col items-center gap-6">
                    <div className="w-[90vw] md:w-4/5 flex flex-row justify-between items-center ">
                        <p className="text-2xl font-black" >
                            {step < 3 ? `STEP ${step} / 2` : "Results"}
                        </p>
                        <div className="w-[180px] origin-right scale-75 sm:scale-1 sm:w-[300px] ">
                            <UserSelect
                                userId={userId}
                                allUsers={allUsers}
                                setCurrentUser={setCurrentUser}
                                setSelected={setSelected}
                                setResults={setResults}
                            />
                        </div>
                    </div>
                    <Card className=" h-[60vh] sm:h-[80vh] w-[90vw] sm:w-4/5 p-6 grid gap-6 overflow-auto">
                        {
                            step === 1 ?
                                <CheckboxGroup
                                    className="gap-2 "
                                    orientation="horizontal"
                                    value={selected}
                                    onChange={(value) => setSelected([...value])}
                                >
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                                        {materialsData.map((data) => (
                                        <CustomCheckbox
                                                key={data.id}
                                                value={data.id}
                                                content={data.value}
                                                isDisable={!selected.includes(data.id) && selected.length > 9}
                                            />

                                        ))}
                                    </div>
                                </CheckboxGroup>
                                :
                                <SecondStep
                                    selected={selected}
                                    results={results}
                                    setResults={setResults}
                                    isDisable={!isOwner}

                                />
                        }
                    </Card>
                </div>
            </div>
            <div className={"sm:h-[100vh] relative sm:col-span-1 grid place-content-center"}>
                {step === 3 ?
                    <FilnalResults
                        setStep={setStep}
                        step={step}
                        results={results}
                    />
                    :
                    <ResultTable
                        filterData={filterData}
                        setStep={setStep}
                        step={step}
                        results={results}
                        currentUser={currentUser}
                        isOwner={isOwner}
                        selected={selected}
                        setSelected={setSelected}
                    />}
            </div>
        </div>

    )
}

export default BaiTapVeNha

export const Materials = ({ id, value, onClose, step,isOwner }:
    { id: string, value: string, onClose: (id: string) => void, step?: number,isOwner:boolean }) => {

    return (

        <>
       
            {step === 1
                ?(isOwner
                ?<Chip onClose={() => onClose(id)} size="lg">{value}</Chip>
                :<Chip size="lg">{value}</Chip>)

                : <Chip
                    endContent={
                        <div className="rounded-full font-bold">
                            {id}
                        </div>
                    }
                    size="lg">{value}</Chip>
            }
        </>


    )
}

const ResultTable = ({ filterData, setStep, step, results, currentUser, isOwner,selected,setSelected }:
    {

        filterData: { id: string; value: string }[],
        setStep: React.Dispatch<React.SetStateAction<number>>,
        step: number,
        results: { [key: string]: string },
        currentUser: User,
        isOwner: boolean,
        selected:string[],
        setSelected:React.Dispatch<React.SetStateAction<string[]>>
    }
) => {
    const [optimisticUser,setOptimisticUser] = React.useOptimistic(currentUser)
    const updateOptimisticUser:TAddOptimistic =(input) => {
            setOptimisticUser({...input.data})
    }
    console.log(optimisticUser)
    const onClose = (id: string) => {
        const updatedItems = selected.filter(item => item !== id);
        setSelected(updatedItems)
        updateOptimisticUser({
            data:{...currentUser,selected:updatedItems},
            action:"update"
        })
    }

    const [pending, startMutation] = React.useTransition()
    const stepOnesubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
      return setStep(2) 
        
    }
    const stepTwoSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        if (!isOwner) { return setStep(3) }
        const pendingInput = {...currentUser,selected:selected,results:results}
        try {
            startMutation(async () => {
                updateOptimisticUser && updateOptimisticUser({
                    data:pendingInput,
                    action:"update"
                })
                console.log("start mutating")
                await updateUserAction({
                   ...pendingInput
                })
                console.log("updatedone")
            })
        } catch (error) {
            console.log(error)
        }
        pending === false && setStep(3)
    }

    return (
        <Card className="w-[90vw] sm:w-[200px] md:w-[300px]">
            <CardHeader>
                Selected {filterData ? filterData.length : "0"}/10
            </CardHeader>
            <CardBody className=" ">
                <div className=" flex flex-1 flex-wrap gap-4">
                    {filterData &&
                        filterData.map((data) => (
                            <div key={data.id} className="relative">
                                <Materials
                                    id={data.id}
                                    value={data.value}
                                    onClose={onClose}
                                    step={step}
                                    isOwner={isOwner}
                                />
                            </div>
                        ))
                    }
                </div>
            </CardBody>
            <CardFooter className={step === 1 ? "flex justify-end" : "flex justify-between"}>

                {step === 1 ?
                    <Button disabled={filterData.length < 10 || pending} onClick={(e) => stepOnesubmit(e)}>
                        {pending ? "Saving" : "Next Step"}
                    </Button>
                    :
                    <>
                        <Button onClick={() => setStep(1)} >
                            Back
                        </Button>
                        <Button onClick={(e) => stepTwoSubmit(e)} disabled={isOwner&&(pending || Object.keys(results).length < 44)}>
                            {pending ? "Saving" : "Get Results"}
                        </Button>
                    </>
                }


            </CardFooter>
        </Card>
    )
}




