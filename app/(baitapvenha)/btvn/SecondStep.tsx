import { Button } from '@/components/ui/button';
import { User } from '@/lib/db/schema/users';
import { cn } from '@/lib/utils';
import {  Popover, PopoverContent, PopoverTrigger } from '@nextui-org/react';
import React from 'react'
const SelectCell = ({ groupSelected, initValue, setResults, cell }:
    { groupSelected: string[], initValue: string, setResults: React.Dispatch<React.SetStateAction<{[key:string]:string}>>, cell: string }) => {
    const [value, setValue] = React.useState(initValue||"?")
    const [isOpen, setIsOpen] = React.useState(false);
   
    return (
        <Popover placement="bottom" showArrow={true} isOpen={isOpen} onOpenChange={(open) => setIsOpen(open)}>
            <PopoverTrigger>
                <Button  className={cn("rounded-full w-10 h-10 ",value!=="?"&&"bg-white border-2 text-black")}>{value}</Button>
            </PopoverTrigger>
            <PopoverContent>
                <div className="px-1 py-2 grid grid-rows-4 gap-2">
                    <div className="grid grid-cols-4 gap-2">
                        <Button className="col-start-2 col-span-1 rounded-full bg-blue-400"
                            onClick={() => {
                                setValue(groupSelected[0])
                                setResults((prevState)=>({...prevState,[cell]:groupSelected[0]}))
                                setIsOpen(false)
                            }}>{groupSelected[0]}</Button>
                        <Button className="col-start-3 col-span-1 rounded-full bg-blue-400"
                            onClick={() => {
                                setValue(groupSelected[1])
                                 setResults((prevState)=>({...prevState,[cell]:groupSelected[1]}))
                                setIsOpen(false)
                            }}>{groupSelected[1]}</Button>
                    </div>

                    <div className="grid grid-cols-5 gap-2">
                        <Button className="col-start-2 col-span-1 rounded-full bg-blue-400"
                            onClick={() => {
                                setValue(groupSelected[2])
                                 setResults((prevState)=>({...prevState,[cell]:groupSelected[2]}))
                                setIsOpen(false)
                            }}>
                            {groupSelected[2]}
                        </Button>
                        <Button className="col-start-3 col-span-1 rounded-full bg-blue-400"
                            onClick={() => {
                                setValue(groupSelected[3])
                                 setResults((prevState)=>({...prevState,[cell]:groupSelected[3]}))
                                setIsOpen(false)
                            }}>
                            {groupSelected[3]}
                        </Button>
                        <Button className="col-start-4 col-span-1 rounded-full bg-blue-400"
                            onClick={() => {
                                setValue(groupSelected[4])
                                 setResults((prevState)=>({...prevState,[cell]:groupSelected[4]}))
                                setIsOpen(false)
                            }}>
                            {groupSelected[4]}
                        </Button>
                    </div>

                    <div className="grid grid-cols-5 gap-2">
                        <Button className="col-start-2 col-span-1 rounded-full bg-blue-400"
                            onClick={() => {
                                setValue(groupSelected[5])
                                 setResults((prevState)=>({...prevState,[cell]:groupSelected[5]}))
                                setIsOpen(false)
                            }}>
                            {groupSelected[5]}
                        </Button>
                        <Button className="col-start-3 col-span-1 rounded-full bg-blue-400"
                            onClick={() => {
                                setValue(groupSelected[6])
                                 setResults((prevState)=>({...prevState,[cell]:groupSelected[6]}))
                                setIsOpen(false)
                            }}>
                            {groupSelected[6]}
                        </Button>
                        <Button className="col-start-4 col-span-1 rounded-full bg-blue-400"
                            onClick={() => {
                                setValue(groupSelected[7])
                                 setResults((prevState)=>({...prevState,[cell]:groupSelected[7]}))
                                setIsOpen(false)
                            }}>
                            {groupSelected[7]}
                        </Button>
                    </div>

                    <div className="grid grid-cols-4 gap-2">
                        <Button className="col-start-2 col-span-1 rounded-full bg-blue-400"
                            onClick={() => {
                                setValue(groupSelected[8])
                                 setResults((prevState)=>({...prevState,[cell]:groupSelected[8]}))
                                setIsOpen(false)
                            }}>
                            {groupSelected[8]}
                        </Button>
                        <Button className="col-start-3 col-span-1 rounded-full bg-blue-400"
                            onClick={() => {
                                setValue(groupSelected[9])
                                 setResults((prevState)=>({...prevState,[cell]:groupSelected[9]}))
                                setIsOpen(false)
                            }}>
                            {groupSelected[9]}
                        </Button>
                    </div>
                </div>
            </PopoverContent>

        </Popover>
    )
}

const SecondStep = (
    { groupSelected, results, setResults }:
    { groupSelected: string[], results: {[key:string]:string}, setResults: React.Dispatch<React.SetStateAction<{[key:string]:string}>>,currentUser?:User }
) => {

    return (
        <div className="grid grid-rows-9">
            <div className="grid grid-cols-9">
                <div className="col-start-1 col-span-1">
                    <SelectCell
                        groupSelected={groupSelected}
                        setResults={setResults}
                        cell="1"
                        initValue={results["1"]}
                    />
                </div>
            </div>
            <div className="grid grid-cols-9">
                <div className="col-start-1 col-span-1">
                    <SelectCell
                        groupSelected={groupSelected}
                        initValue={results["2"]}
                        setResults={setResults}
                        cell="2"
                    />
                </div>
                <div className="col-start-2 col-span-1">
                    <SelectCell
                        groupSelected={groupSelected}
                        initValue={results["3"]}
                        setResults={setResults}
                        cell="3"
                    />
                </div>
            </div>
            <div className="grid grid-cols-9">
                <div className="col-start-1 col-span-1">
                    <SelectCell
                        groupSelected={groupSelected}
                        initValue={results["4"]}
                        setResults={setResults}
                        cell="4"
                    />
                </div>
                <div className="col-start-2 col-span-1">
                    <SelectCell
                        groupSelected={groupSelected}
                        initValue={results["5"]}
                        setResults={setResults}
                        cell="5"
                    />
                </div>
                <div className="col-start-3 col-span-1">
                    <SelectCell
                        cell="6"
                        groupSelected={groupSelected}
                        initValue={results["6"]}
                        setResults={setResults}
                    />
                </div>
            </div>
            <div className="grid grid-cols-9">
                <div className="col-start-1 col-span-1">
                    <SelectCell
                        cell="7"
                        groupSelected={groupSelected}
                        initValue={results["7"]}
                        setResults={setResults}
                    />
                </div>
                <div className="col-start-2 col-span-1">
                    <SelectCell
                        cell="8"
                        groupSelected={groupSelected}
                        initValue={results["8"]}
                        setResults={setResults}
                    />
                </div>
                <div className="col-start-3 col-span-1">
                    <SelectCell
                        cell="9"
                        groupSelected={groupSelected}
                        initValue={results["9"]}
                        setResults={setResults}
                    />
                </div>
                <div className="col-start-4 col-span-1">
                    <SelectCell
                        cell="10"
                        groupSelected={groupSelected}
                        initValue={results["10"]}
                        setResults={setResults}
                    />
                </div>
            </div>
            <div className="grid grid-cols-9">
                <div className="col-start-1 col-span-1">
                    <SelectCell
                        cell="11"
                        groupSelected={groupSelected}
                        initValue={results["11"]}
                        setResults={setResults}
                    />
                </div>
                <div className="col-start-2 col-span-1">
                    <SelectCell
                        cell="12"
                        groupSelected={groupSelected}
                        initValue={results["12"]}
                        setResults={setResults}
                    />
                </div>
                <div className="col-start-3 col-span-1">
                    <SelectCell
                        cell="13"
                        groupSelected={groupSelected}
                        initValue={results["13"]}
                        setResults={setResults}
                    />
                </div>
                <div className="col-start-4 col-span-1">
                    <SelectCell
                        cell="14"
                        groupSelected={groupSelected}
                        initValue={results["14"]}
                        setResults={setResults}
                    />
                </div>
                <div className="col-start-5 col-span-1">
                    <SelectCell
                        cell="15"
                        groupSelected={groupSelected}
                        initValue={results["15"]}
                        setResults={setResults}
                    />
                </div>
            </div>
            <div className="grid grid-cols-9">
                <div className="col-start-1 col-span-1">
                    <SelectCell
                        cell="16"
                        groupSelected={groupSelected}
                        initValue={results["16"]}
                        setResults={setResults}
                    />
                </div>
                <div className="col-start-2 col-span-1">
                    <SelectCell
                        cell="17"
                        groupSelected={groupSelected}
                        initValue={results["17"]}
                        setResults={setResults}
                    />
                </div>
                <div className="col-start-3 col-span-1">
                    <SelectCell
                        cell="18"
                        groupSelected={groupSelected}
                        initValue={results["18"]}
                        setResults={setResults}
                    />
                </div>
                <div className="col-start-4 col-span-1">
                    <SelectCell
                        cell="19"
                        groupSelected={groupSelected}
                        initValue={results["19"]}
                        setResults={setResults}
                    />
                </div>
                <div className="col-start-5 col-span-1">
                    <SelectCell
                        cell="20"
                        groupSelected={groupSelected}
                        initValue={results["20"]}
                        setResults={setResults}
                    />
                </div>
                <div className="col-start-6 col-span-1">
                    <SelectCell
                        cell="21"
                        groupSelected={groupSelected}
                        initValue={results["21"]}
                        setResults={setResults}
                    />
                </div>
            </div>
            <div className="grid grid-cols-9">
                <div className="col-start-1 col-span-1">
                    <SelectCell
                        cell="22"
                        groupSelected={groupSelected}
                        initValue={results["22"]}
                        setResults={setResults}
                    />
                </div>
                <div className="col-start-2 col-span-1">
                    <SelectCell
                        cell="23"
                        groupSelected={groupSelected}
                        initValue={results["23"]}
                        setResults={setResults}
                    />
                </div>
                <div className="col-start-3 col-span-1">
                    <SelectCell
                        cell="24"
                        groupSelected={groupSelected}
                        initValue={results["24"]}
                        setResults={setResults}
                    />
                </div>
                <div className="col-start-4 col-span-1">
                    <SelectCell
                        cell="25"
                        groupSelected={groupSelected}
                        initValue={results["25"]}
                        setResults={setResults}
                    />
                </div>
                <div className="col-start-5 col-span-1">
                    <SelectCell
                        cell="26"
                        groupSelected={groupSelected}
                        initValue={results["26"]}
                        setResults={setResults}
                    />
                </div>
                <div className="col-start-6 col-span-1">
                    <SelectCell
                        cell="27"
                        groupSelected={groupSelected}
                        initValue={results["27"]}
                        setResults={setResults}
                    />
                </div>
                <div className="col-start-7 col-span-1">
                    <SelectCell
                        cell="28"
                        groupSelected={groupSelected}
                        initValue={results["28"]}
                        setResults={setResults}
                    />
                </div>
            </div>
            <div className="grid grid-cols-9">
                <div className="col-start-1 col-span-1">
                    <SelectCell
                        cell="29"
                        groupSelected={groupSelected}
                        initValue={results["29"]}
                        setResults={setResults}
                    />
                </div>
                <div className="col-start-2 col-span-1">
                    <SelectCell
                        cell="30"
                        groupSelected={groupSelected}
                        initValue={results["30"]}
                        setResults={setResults}
                    />
                </div>
                <div className="col-start-3 col-span-1">
                    <SelectCell
                        cell="31"
                        groupSelected={groupSelected}
                        initValue={results["31"]}
                        setResults={setResults}
                    />
                </div>
                <div className="col-start-4 col-span-1">
                    <SelectCell
                        cell="32"
                        groupSelected={groupSelected}
                        initValue={results["32"]}
                        setResults={setResults}
                    />
                </div>
                <div className="col-start-5 col-span-1">
                    <SelectCell
                        cell="33"
                        groupSelected={groupSelected}
                        initValue={results["33"]}
                        setResults={setResults}
                    />
                </div>
                <div className="col-start-6 col-span-1">
                    <SelectCell
                        cell="34"
                        groupSelected={groupSelected}
                        initValue={results["34"]}
                        setResults={setResults}
                    />
                </div>
                <div className="col-start-7 col-span-1">
                    <SelectCell
                        cell="35"
                        groupSelected={groupSelected}
                        initValue={results["35"]}
                        setResults={setResults}
                    />
                </div>
                <div className="col-start-8 col-span-1">
                    <SelectCell
                        cell="36"
                        groupSelected={groupSelected}
                        initValue={results["36"]}
                        setResults={setResults}
                    />
                </div>
            </div>
            <div className="grid grid-cols-9">
                <div className="col-start-1 col-span-1">
                    <SelectCell
                        cell="37"
                        groupSelected={groupSelected}
                        initValue={results["37"]}
                        setResults={setResults}
                    />
                </div>
                <div className="col-start-2 col-span-1">
                    <SelectCell
                        cell="38"
                        groupSelected={groupSelected}
                        initValue={results["38"]}
                        setResults={setResults}
                    />
                </div>
                <div className="col-start-3 col-span-1">
                    <SelectCell
                        cell="39"
                        groupSelected={groupSelected}
                        initValue={results["39"]}
                        setResults={setResults}
                    />
                </div>
                <div className="col-start-4 col-span-1">
                    <SelectCell
                        cell="40"
                        groupSelected={groupSelected}
                        initValue={results["40"]}
                        setResults={setResults}
                    />
                </div>
                <div className="col-start-5 col-span-1">
                    <SelectCell
                        cell="41"
                        groupSelected={groupSelected}
                        initValue={results["41"]}
                        setResults={setResults}
                    />
                </div>
                <div className="col-start-6 col-span-1">
                    <SelectCell
                        cell="42"
                        groupSelected={groupSelected}
                        initValue={results["42"]}
                        setResults={setResults}
                    />
                </div>
                <div className="col-start-7 col-span-1">
                    <SelectCell
                        cell="43"
                        groupSelected={groupSelected}
                        initValue={results["43"]}
                        setResults={setResults}
                    />
                </div>
                <div className="col-start-8 col-span-1">
                    <SelectCell
                        cell="44"
                        groupSelected={groupSelected}
                        initValue={results["44"]}
                        setResults={setResults}
                    />
                </div>
                <div className="col-start-9 col-span-1">
                    <SelectCell
                        cell="45"
                        groupSelected={groupSelected}
                        initValue={results["45"]}
                        setResults={setResults}
                    />
                </div>
            </div>
        </div>
    )
}


export default SecondStep