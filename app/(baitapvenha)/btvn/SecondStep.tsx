import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Popover, PopoverContent, PopoverTrigger } from '@nextui-org/react';
import React from 'react'
const SelectCell = ({ selected, initValue, cell,setResults,isDisable }:
    { selected: string[], initValue: { [key: string]: string }, cell: string ,
    setResults:React.Dispatch<React.SetStateAction<{[key:string]:string}>>,
isDisable:boolean    
}
) => {
    const [value, setValue] = React.useState("?")
    const [isOpen, setIsOpen] = React.useState(false);
    React.useEffect(() => {
        setValue(initValue[cell])
    }, [initValue])
    return (
        <Popover placement="bottom" showArrow={true} isOpen={isOpen} onOpenChange={(open) => setIsOpen(open)}>
            <PopoverTrigger>
                <Button className={cn("rounded-full w-10 h-10 ", value !== undefined && "bg-white border-2 text-black")}>{value !== undefined ? value : "?"}</Button>
            </PopoverTrigger>
            <PopoverContent>
                <div className="px-1 py-2 grid grid-rows-4 gap-2">
                    <div className="grid grid-cols-4 gap-2">
                        <Button disabled={isDisable} className="col-start-2 col-span-1 rounded-full bg-blue-400"
                            onClick={() => {
                                setValue(selected[0])
                                setResults((prev)=>({...prev,[cell]:selected[0]}))
                                setIsOpen(false)
                            }}>{selected[0]}</Button>
                        <Button disabled={isDisable} className="col-start-3 col-span-1 rounded-full bg-blue-400"
                            onClick={() => {
                                setValue(selected[1])
                                setResults((prev)=>({...prev,[cell]:selected[1] }))
                                setIsOpen(false)
                            }}>{selected[1]}</Button>
                    </div>

                    <div className="grid grid-cols-5 gap-2">
                        <Button disabled={isDisable} className="col-start-2 col-span-1 rounded-full bg-blue-400"
                            onClick={() => {
                                setValue(selected[2])
                                setResults((prev)=>({...prev,[cell]:selected[2] }))
                                setIsOpen(false)
                            }}>
                            {selected[2]}
                        </Button>
                        <Button disabled={isDisable} className="col-start-3 col-span-1 rounded-full bg-blue-400"
                            onClick={() => {
                                setValue(selected[3])
                                setResults((prev)=>({...prev,[cell]:selected[3] }))
                                setIsOpen(false)
                            }}>
                            {selected[3]}
                        </Button>
                        <Button disabled={isDisable} className="col-start-4 col-span-1 rounded-full bg-blue-400"
                            onClick={() => {
                                setValue(selected[4])
                                setResults((prev)=>({...prev,[cell]:selected[4] }))
                                setIsOpen(false)
                            }}>
                            {selected[4]}
                        </Button>
                    </div>

                    <div className="grid grid-cols-5 gap-2">
                        <Button disabled={isDisable} className="col-start-2 col-span-1 rounded-full bg-blue-400"
                            onClick={() => {
                                setValue(selected[5])
                                setResults((prev)=>({...prev,[cell]:selected[5] }))
                                setIsOpen(false)
                            }}>
                            {selected[5]}
                        </Button>
                        <Button disabled={isDisable} className="col-start-3 col-span-1 rounded-full bg-blue-400"
                            onClick={() => {
                                setValue(selected[6])
                                setResults((prev)=>({...prev,[cell]:selected[6] }))
                                setIsOpen(false)
                            }}>
                            {selected[6]}
                        </Button>
                        <Button disabled={isDisable} className="col-start-4 col-span-1 rounded-full bg-blue-400"
                            onClick={() => {
                                setValue(selected[7])
                                setResults((prev)=>({...prev,[cell]:selected[7] }))
                                setIsOpen(false)
                            }}>
                            {selected[7]}
                        </Button>
                    </div>

                    <div className="grid grid-cols-4 gap-2">
                        <Button disabled={isDisable} className="col-start-2 col-span-1 rounded-full bg-blue-400"
                            onClick={() => {
                                setValue(selected[8])
                                setResults((prev)=>({...prev,[cell]:selected[8] }))
                                setIsOpen(false)
                            }}>
                            {selected[8]}
                        </Button>
                        <Button disabled={isDisable} className="col-start-3 col-span-1 rounded-full bg-blue-400"
                            onClick={() => {
                                setValue(selected[9])
                                setResults((prev)=>({...prev,[cell]:selected[9] }))
                                setIsOpen(false)
                            }}>
                            {selected[9]}
                        </Button>
                    </div>
                </div>
            </PopoverContent>

        </Popover>
    )
}

const SecondStep = (
    { selected, results,setResults,isDisable}:
        {
            isDisable:boolean,selected: string[],results:{[key:string]:string},setResults:React.Dispatch<React.SetStateAction<{[key:string]:string}>>
        }
) => {
    return (
        <div className="grid grid-rows-9">
            <div className="grid grid-cols-9">
                <div className="col-start-1 col-span-1">
                    <SelectCell
                        selected={selected}                  
                        cell="1"
                        initValue={results}
                        setResults={setResults}
                        isDisable={isDisable}
                    />
                </div>
            </div>
            <div className="grid grid-cols-9">
                <div className="col-start-1 col-span-1">
                    <SelectCell
                        selected={selected}
                        initValue={results}
                        setResults={setResults}
                        isDisable={isDisable}
                      
                        cell="2"
                    />
                </div>
                <div className="col-start-2 col-span-1">
                    <SelectCell
                        selected={selected}
                        initValue={results}
                        setResults={setResults}
                        isDisable={isDisable}
                      
                        cell="3"
                    />
                </div>
            </div>
            <div className="grid grid-cols-9">
                <div className="col-start-1 col-span-1">
                    <SelectCell
                        selected={selected}
                        initValue={results}
                        setResults={setResults}
                        isDisable={isDisable}
                      
                        cell="4"
                    />
                </div>
                <div className="col-start-2 col-span-1">
                    <SelectCell
                        selected={selected}
                        initValue={results}
                        setResults={setResults}
                        isDisable={isDisable}
                      
                        cell="5"
                    />
                </div>
                <div className="col-start-3 col-span-1">
                    <SelectCell
                        cell="6"
                        selected={selected}
                        initValue={results}
                        setResults={setResults}
                        isDisable={isDisable}
                      
                    />
                </div>
            </div>
            <div className="grid grid-cols-9">
                <div className="col-start-1 col-span-1">
                    <SelectCell
                        cell="7"
                        selected={selected}
                        initValue={results}
                        setResults={setResults}
                        isDisable={isDisable}
                      
                    />
                </div>
                <div className="col-start-2 col-span-1">
                    <SelectCell
                        cell="8"
                        selected={selected}
                        initValue={results}
                        setResults={setResults}
                        isDisable={isDisable}
                      
                    />
                </div>
                <div className="col-start-3 col-span-1">
                    <SelectCell
                        cell="9"
                        selected={selected}
                        initValue={results}
                        setResults={setResults}
                        isDisable={isDisable}
                      
                    />
                </div>
                <div className="col-start-4 col-span-1">
                    <SelectCell
                        cell="10"
                        selected={selected}
                        initValue={results}
                        setResults={setResults}
                        isDisable={isDisable}
                      
                    />
                </div>
            </div>
            <div className="grid grid-cols-9">
                <div className="col-start-1 col-span-1">
                    <SelectCell
                        cell="11"
                        selected={selected}
                        initValue={results}
                        setResults={setResults}
                        isDisable={isDisable}
                      
                    />
                </div>
                <div className="col-start-2 col-span-1">
                    <SelectCell
                        cell="12"
                        selected={selected}
                        initValue={results}
                        setResults={setResults}
                        isDisable={isDisable}
                      
                    />
                </div>
                <div className="col-start-3 col-span-1">
                    <SelectCell
                        cell="13"
                        selected={selected}
                        initValue={results}
                        setResults={setResults}
                        isDisable={isDisable}
                      
                    />
                </div>
                <div className="col-start-4 col-span-1">
                    <SelectCell
                        cell="14"
                        selected={selected}
                        initValue={results}
                        setResults={setResults}
                        isDisable={isDisable}
                      
                    />
                </div>
                <div className="col-start-5 col-span-1">
                    <SelectCell
                        cell="15"
                        selected={selected}
                        initValue={results}
                        setResults={setResults}
                        isDisable={isDisable}
                      
                    />
                </div>
            </div>
            <div className="grid grid-cols-9">
                <div className="col-start-1 col-span-1">
                    <SelectCell
                        cell="16"
                        selected={selected}
                        initValue={results}
                        setResults={setResults}
                        isDisable={isDisable}
                      
                    />
                </div>
                <div className="col-start-2 col-span-1">
                    <SelectCell
                        cell="17"
                        selected={selected}
                        initValue={results}
                        setResults={setResults}
                        isDisable={isDisable}
                      
                    />
                </div>
                <div className="col-start-3 col-span-1">
                    <SelectCell
                        cell="18"
                        selected={selected}
                        initValue={results}
                        setResults={setResults}
                        isDisable={isDisable}
                      
                    />
                </div>
                <div className="col-start-4 col-span-1">
                    <SelectCell
                        cell="19"
                        selected={selected}
                        initValue={results}
                        setResults={setResults}
                        isDisable={isDisable}
                      
                    />
                </div>
                <div className="col-start-5 col-span-1">
                    <SelectCell
                        cell="20"
                        selected={selected}
                        initValue={results}
                        setResults={setResults}
                        isDisable={isDisable}
                      
                    />
                </div>
                <div className="col-start-6 col-span-1">
                    <SelectCell
                        cell="21"
                        selected={selected}
                        initValue={results}
                        setResults={setResults}
                        isDisable={isDisable}
                      
                    />
                </div>
            </div>
            <div className="grid grid-cols-9">
                <div className="col-start-1 col-span-1">
                    <SelectCell
                        cell="22"
                        selected={selected}
                        initValue={results}
                        setResults={setResults}
                        isDisable={isDisable}
                      
                    />
                </div>
                <div className="col-start-2 col-span-1">
                    <SelectCell
                        cell="23"
                        selected={selected}
                        initValue={results}
                        setResults={setResults}
                        isDisable={isDisable}
                      
                    />
                </div>
                <div className="col-start-3 col-span-1">
                    <SelectCell
                        cell="24"
                        selected={selected}
                        initValue={results}
                        setResults={setResults}
                        isDisable={isDisable}
                      
                    />
                </div>
                <div className="col-start-4 col-span-1">
                    <SelectCell
                        cell="25"
                        selected={selected}
                        initValue={results}
                        setResults={setResults}
                        isDisable={isDisable}
                      
                    />
                </div>
                <div className="col-start-5 col-span-1">
                    <SelectCell
                        cell="26"
                        selected={selected}
                        initValue={results}
                        setResults={setResults}
                        isDisable={isDisable}
                      
                    />
                </div>
                <div className="col-start-6 col-span-1">
                    <SelectCell
                        cell="27"
                        selected={selected}
                        initValue={results}
                        setResults={setResults}
                        isDisable={isDisable}
                      
                    />
                </div>
                <div className="col-start-7 col-span-1">
                    <SelectCell
                        cell="28"
                        selected={selected}
                        initValue={results}
                        setResults={setResults}
                        isDisable={isDisable}
                      
                    />
                </div>
            </div>
            <div className="grid grid-cols-9">
                <div className="col-start-1 col-span-1">
                    <SelectCell
                        cell="29"
                        selected={selected}
                        initValue={results}
                        setResults={setResults}
                        isDisable={isDisable}
                      
                    />
                </div>
                <div className="col-start-2 col-span-1">
                    <SelectCell
                        cell="30"
                        selected={selected}
                        initValue={results}
                        setResults={setResults}
                        isDisable={isDisable}
                      
                    />
                </div>
                <div className="col-start-3 col-span-1">
                    <SelectCell
                        cell="31"
                        selected={selected}
                        initValue={results}
                        setResults={setResults}
                        isDisable={isDisable}
                      
                    />
                </div>
                <div className="col-start-4 col-span-1">
                    <SelectCell
                        cell="32"
                        selected={selected}
                        initValue={results}
                        setResults={setResults}
                        isDisable={isDisable}
                      
                    />
                </div>
                <div className="col-start-5 col-span-1">
                    <SelectCell
                        cell="33"
                        selected={selected}
                        initValue={results}
                        setResults={setResults}
                        isDisable={isDisable}
                      
                    />
                </div>
                <div className="col-start-6 col-span-1">
                    <SelectCell
                        cell="34"
                        selected={selected}
                        initValue={results}
                        setResults={setResults}
                        isDisable={isDisable}
                      
                    />
                </div>
                <div className="col-start-7 col-span-1">
                    <SelectCell
                        cell="35"
                        selected={selected}
                        initValue={results}
                        setResults={setResults}
                        isDisable={isDisable}
                      
                    />
                </div>
                <div className="col-start-8 col-span-1">
                    <SelectCell
                        cell="36"
                        selected={selected}
                        initValue={results}
                        setResults={setResults}
                        isDisable={isDisable}
                      
                    />
                </div>
            </div>
            <div className="grid grid-cols-9">
                <div className="col-start-1 col-span-1">
                    <SelectCell
                        cell="37"
                        selected={selected}
                        initValue={results}
                        setResults={setResults}
                        isDisable={isDisable}
                      
                    />
                </div>
                <div className="col-start-2 col-span-1">
                    <SelectCell
                        cell="38"
                        selected={selected}
                        initValue={results}
                        setResults={setResults}
                        isDisable={isDisable}
                      
                    />
                </div>
                <div className="col-start-3 col-span-1">
                    <SelectCell
                        cell="39"
                        selected={selected}
                        initValue={results}
                        setResults={setResults}
                        isDisable={isDisable}
                      
                    />
                </div>
                <div className="col-start-4 col-span-1">
                    <SelectCell
                        cell="40"
                        selected={selected}
                        initValue={results}
                        setResults={setResults}
                        isDisable={isDisable}
                      
                    />
                </div>
                <div className="col-start-5 col-span-1">
                    <SelectCell
                        cell="41"
                        selected={selected}
                        initValue={results}
                        setResults={setResults}
                        isDisable={isDisable}
                      
                    />
                </div>
                <div className="col-start-6 col-span-1">
                    <SelectCell
                        cell="42"
                        selected={selected}
                        initValue={results}
                        setResults={setResults}
                        isDisable={isDisable}
                      
                    />
                </div>
                <div className="col-start-7 col-span-1">
                    <SelectCell
                        cell="43"
                        selected={selected}
                        initValue={results}
                        setResults={setResults}
                        isDisable={isDisable}
                      
                    />
                </div>
                <div className="col-start-8 col-span-1">
                    <SelectCell
                        cell="44"
                        selected={selected}
                        initValue={results}
                        setResults={setResults}
                        isDisable={isDisable}
                      
                    />
                </div>
                <div className="col-start-9 col-span-1">
                    <SelectCell
                        cell="45"
                        selected={selected}
                        initValue={results}
                        setResults={setResults}
                        isDisable={isDisable}
                      
                    />
                </div>
            </div>
        </div>
    )
}


export default SecondStep