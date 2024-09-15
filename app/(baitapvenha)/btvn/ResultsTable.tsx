"use client"
import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"


interface ResultItem {
  id: string;
  value: string;
  count: number;
}

const ResultsTable = ({ results, filterData }: {
  results: {
    [key: string]: number
  },
  filterData: { id: string, value: string }[]
}) => {

  function combineAndSortData(results: Record<string, number>, filterData: { id: string; value: string }[]): ResultItem[] {
    // Combine object and array data
    const combinedData = new Map<string, number>();

    Object.entries(results).forEach(([key, value]) => {
      combinedData.set(key, value);
    });

    filterData.forEach(item => {
      if (!combinedData.has(item.id)) {
        combinedData.set(item.id, 0);
      }
      combinedData.set(item.id, combinedData.get(item.id)! + 1);
    });

    // Filter out items that don't exist in the object
    const filteredData = filterData.filter(item => combinedData.has(item.id));

    // Sort the filtered data by count in descending order
    const sortedData = filteredData.sort((a, b) => combinedData.get(b.id)! - combinedData.get(a.id)!);

    // Add count to each item and return the result
    return sortedData.map(item => ({
      ...item,
      count: combinedData.get(item.id)!
    }));
  }
  const result = combineAndSortData(results, filterData);
  return (
    <div className="w-full">
      <Table >
        <TableCaption></TableCaption>
        <TableHeader>
          <TableRow >
            <TableHead colSpan={4} className="text-lg font-bold text-gray-500"> Results </TableHead>
          </TableRow>
          <TableRow>
            <TableHead>number</TableHead>
            <TableHead colSpan={2} className="w-[100px]">Materials</TableHead>
            <TableHead className="text-right">Count</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {result.map((data) => (
            <TableRow key={data.id}>
              <TableCell className="font-medium">{data.id}</TableCell>
              <TableCell colSpan={2}>{data.value}</TableCell>
              <TableCell className="text-right">{data.count}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Table>
        <TableRow>
          <TableHead colSpan={4} className="text-lg font-bold text-gray-500"> Top 3 materials </TableHead>
        </TableRow>
        <TableRow>
          <TableCell colSpan={1}>{result[0]?.value} </TableCell>
          <TableCell colSpan={1}>{result[1]?.value} </TableCell>
          <TableCell colSpan={1}>{result[2]?.value} </TableCell>
        </TableRow>

      </Table>
    </div>
  )
}

export default ResultsTable

