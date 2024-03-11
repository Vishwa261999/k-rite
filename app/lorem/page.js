"use client"

import Dark from "@/components/dark";
import Tags from "@/components/tags";
import Sort from "@/components/sort";
import Filter from "@/components/filter";
import DropdownMenu from "@/components/dropdownmenufilter";
import Meeting from "@/components/meeting";
import DropdownWithImports from "@/components/import";

export default function DropdownMenuDemo() {
    return (
        <div className="border border-gray-300 p-2 flex items-end justify-between overflow-x-scroll hide-scroll-bar">
            <div className="flex gap-2">
                <DropdownMenu />
                <Dark />
                <Tags />
                <Sort />
                <Filter />
            </div>
            <div className="flex  gap-2">
                <Meeting />
                <DropdownWithImports />
            </div>
        </div>

    )
}
