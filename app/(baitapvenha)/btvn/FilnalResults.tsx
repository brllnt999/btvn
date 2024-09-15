"use client"
import { Button } from '@/components/ui/button'
import React from 'react'
import ResultsTable from './ResultsTable'
import {materialsData} from "./data"

const FilnalResults = ({
    setStep,
    results,
 }:
    {
        setStep: React.Dispatch<React.SetStateAction<number>>,
        step: number,
        results: {[key:string]:string},
    }) => {
      
       const chosenArray =  Object.values(results)

       function countFrequenciesAndItems<T>(array: T[]): {fre:{ [key: string]: number }, items: T[] } {
        const frequencyMap = new Map<T, number>();
        const items: T[] = [];
      
        array.forEach(item => {
          frequencyMap.set(item, (frequencyMap.get(item) || 0) + 1);
          items.push(item);
        });
        
        const fre =  Object.fromEntries(frequencyMap)
        return {
            fre,
          items
        };
      }
      
      const result =   countFrequenciesAndItems(chosenArray)
      
      const filterData =materialsData.filter(data => result.items.includes(data.id))
      
      
    return (
        <div className="flex flex-col">
            <div>
                <ResultsTable 
                results={result.fre}
                filterData={filterData}
                />
            </div>
          
            <Button onClick={()=>setStep(2)} > Back </Button>
        </div>
    )
}

export default FilnalResults