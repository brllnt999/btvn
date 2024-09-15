"use client"
import * as React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardBody, CardFooter, CardHeader, CheckboxGroup, Chip } from "@nextui-org/react"
import { materialsData } from "./data"
import { CustomCheckbox } from "@/components/csr/CustomCheckbox"
import SecondStep from "./SecondStep"
import FilnalResults from "./FilnalResults"
import { User } from "@/lib/db/schema/users"
import { updateUserAction } from "@/lib/actions/users"
import { UserSelect } from "./UserDisplay"


const BaiTapVeNha = ({ allUsers, session }: { allUsers: User[], session: { user: { id: string; name?: string | undefined; email?: string | undefined; }; } | null }) => {
    const sessionUserId = session?.user.id
    const [activeId, setActiveId] = React.useState<string>(sessionUserId as string | '')
    const [currentUser, setCurrentUser] = React.useState<User>(allUsers.filter(user => user.kindeId === sessionUserId)[0])
    const [groupSelected, setGroupSelected] = React.useState<string[]>(
        currentUser.selected as string[]
    );
    const [results, setResults] = React.useState<{[key:string]:string}>(
        currentUser.results as {[key:string]:string}
    )
    const resetData = () => {
        setGroupSelected([])
        setResults({})
    }
    React.useEffect(() => {
        console.log('main atv id:', activeId)
        if (activeId === "") { resetData() }
        if (activeId !== "") {
            setCurrentUser(allUsers.filter(user => user.kindeId === activeId)[0])
            console.log('current User now:', currentUser)
            setResults(currentUser.results as {[key:string]:string})
            setGroupSelected(currentUser.selected as string[])
        }
    }, [activeId,setActiveId])
   
    const filterData = materialsData.filter(data => groupSelected.includes(data.id))

    const [step, setStep] = React.useState(1)
    return (
        <div className="flex flex-cols grid sm:grid-cols-3 place-content-center">
            <div className="col-span-1 sm:col-span-2 py-6">
                <div className="flex flex-col items-center gap-6">
                    <div className="w-[100vw] w-4/5 flex flex-row justify-between items-center ">
                        <p className="text-3xl font-black" >
                            {step < 3 ? `STEP ${step} / 2` : "Results"}
                        </p>
                        <div className="w-[180px] origin-right scale-75 sm:scale-1 sm:w-[300px] ">
                            <UserSelect
                                allUsers={allUsers}
                                activeId={activeId}
                                setActiveId={setActiveId}
                            />
                        </div>
                    </div>
                    <Card className=" h-[60vh] sm:h-[80vh] w-[90vw] sm:w-4/5 p-6 grid gap-6 overflow-auto">
                        {
                            step === 1 ?
                                <CheckboxGroup
                                    className="gap-2 "
                                    orientation="horizontal"
                                    value={groupSelected}
                                    onChange={(value) => setGroupSelected([...value])}
                                >
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                                        {materialsData.map((data) => (

                                            <CustomCheckbox
                                                key={data.id}
                                                value={data.id}
                                                content={data.value}
                                                isDisable={!groupSelected.includes(data.id) && groupSelected.length > 9}
                                            />

                                        ))}
                                    </div>
                                </CheckboxGroup>
                                :
                                <SecondStep
                                    groupSelected={groupSelected}
                                    results={results}
                                    setResults={setResults}
                                    currentUser={currentUser}
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
                        values={groupSelected}
                        setValues={setGroupSelected}
                        filterData={filterData}
                        setStep={setStep}
                        step={step}
                        results={results}
                        currentUser={currentUser}
                    />}
            </div>
        </div>

    )
}

export default BaiTapVeNha

export const Materials = ({ id, value, onClose, step }:
    { id: string, value: string,  onClose: (id: string) => void, step?: number }) => {

    return (

        <>
            {step === 1
                ? <Chip onClose={() => onClose(id)} size="lg">{value}</Chip>
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

const ResultTable = ({ values, setValues, filterData, setStep, step, results, currentUser }:
    {
        values: string[],
        setValues: React.Dispatch<React.SetStateAction<string[]>>,
        filterData: { id: string; value: string }[],
        setStep: React.Dispatch<React.SetStateAction<number>>,
        step: number,
        results: {[key:string]:string} ,
        currentUser: User
    }
) => {
    const onClose = (id: string) => {
        const updatedItems = values.filter(item => item !== id);
        setValues(updatedItems)
    }

    const [pending, startMutation] = React.useTransition()
    const stepOnesubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        console.log("submit one")
        try {
            startMutation(async () => {
                console.log("start mutating")
                await updateUserAction({
                    id: currentUser.id,
                    name: currentUser.name,
                    email: currentUser.email,
                    selected: values,
                    results: "",
                    kindeId: currentUser.kindeId,
                    picture: currentUser.picture,
                })
                console.log("updatedone")
            })
        } catch (error) {
            console.log(error)
        } 
      pending===false && setStep(2)  
    }
    const stepTwoSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        try {
            startMutation(async () => {
                await updateUserAction({
                    id: currentUser.id,
                    name: currentUser.name,
                    email: currentUser.email,
                    selected: values,
                    results: results,
                    kindeId: currentUser.kindeId,
                    picture: currentUser.picture,
                })
                console.log("updatedone")
            })
        } catch (error) {
            console.log(error)
        } 
        pending===false && setStep(3) 
    }

    return (
        <Card className="w-[90vw] sm:w-[200px] md:[300px]">
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
                                />
                            </div>
                        ))
                    }
                </div>
            </CardBody>
            <CardFooter className={step === 1 ? "flex justify-end" : "flex justify-between"}>

                {step === 1 ?
                    <Button disabled={filterData.length < 10||pending} onClick={(e) => stepOnesubmit(e)}>
                       {pending?"Saving": "Next Step"}
                    </Button>
                    :
                    <>
                        <Button onClick={() => setStep(1)} >
                            Back
                        </Button>
                        <Button onClick={(e) => stepTwoSubmit(e)} disabled={pending||Object.keys(results).length<45}>
                           {pending?"Saving": "Get Results"}
                        </Button>
                    </>
                }


            </CardFooter>
        </Card>
    )
}




