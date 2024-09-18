"use client"
import { User } from '@/lib/db/schema/users'
import { Select, SelectItem, Avatar } from "@nextui-org/react";
import React from 'react';


export const UserSelect = ({ allUsers,userId,setCurrentUser,setSelected,setResults }:
    {
        allUsers: User[],
        // activeId: string,
        // setActiveId: React.Dispatch<React.SetStateAction<string>>,
        userId:string,
        setCurrentUser:React.Dispatch<React.SetStateAction<User>>,
        setSelected:React.Dispatch<React.SetStateAction<string[]>>,
        setResults:React.Dispatch<React.SetStateAction<{[key:string]:string}>>,
    }
) => {
    const[ activeId, setActiveId] =React.useState(userId)
    const handleSelectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setActiveId(e.target.value);
        const inDutyUser = allUsers.find(user=>user.kindeId===e.target.value)||null
        inDutyUser&&setCurrentUser(inDutyUser)
        inDutyUser&&setSelected(inDutyUser.selected as string[])
        inDutyUser&&setResults(inDutyUser.results as {[key:string]:string})
        console.log("onUser:",inDutyUser?.results)
    };
    return (
        <Select
            items={allUsers}
            selectedKeys={[activeId]}
            onChange={handleSelectionChange}
            label="Active user"
            className="w-xs"
            variant="flat"
            classNames={{
                label: "group-data-[filled=true]:-translate-y-5",
                trigger: "min-h-16",
                listboxWrapper: "max-h-[400px]",
            }}
            listboxProps={{
                itemClasses: {
                    base: [
                        "rounded-md",
                        "text-default-500",
                        "transition-opacity",
                        "data-[hover=true]:text-foreground",
                        "data-[hover=true]:bg-default-100",
                        "dark:data-[hover=true]:bg-default-50",
                        "data-[selectable=true]:focus:bg-default-50",
                        "data-[pressed=true]:opacity-70",
                        "data-[focus-visible=true]:ring-default-500",
                    ],
                },
            }}
            popoverProps={{
                classNames: {
                    base: "before:bg-default-200",
                    content: "p-0 border-small border-divider bg-background",
                },
            }}
            renderValue={(items) => {
                return items.map((item) => (
                    <div key={item.key} className="flex items-center gap-2">
                        <Avatar
                            alt={item.data?.name ? item.data?.name : ""}
                            className="flex-shrink-0"
                            size="sm"
                            src={item.data?.picture ? item.data?.picture : ""}
                        />
                        <div className="flex flex-col">
                            <span>{item.data?.name}</span>
                            <span className="text-default-500 text-tiny">({item.data?.email})</span>
                        </div>
                    </div>
                ));
            }}
        >
            {(user) => (
                <SelectItem key={user.kindeId ? user.kindeId : user.id} textValue={user.name ? user.name : ''}>
                    <div className="flex gap-2 items-center">
                        <Avatar alt={user.name ? user.name : ''} className="flex-shrink-0" size="sm" src={user.picture ? user.picture : ''} />
                        <div className="flex flex-col">
                            <span className="text-small">{user.name}</span>
                            <span className="text-tiny text-default-400">{user.email}</span>
                        </div>
                    </div>
                </SelectItem>
            )}
        </Select>
    );
}


