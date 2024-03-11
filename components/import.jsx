import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import React from "react";
import { Bug } from "lucide-react";

export default function DropdownWithImports() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex gap-2">
          <Bug size={15} /> Import/Export
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Dropdown Settings</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            Option 1<DropdownMenuShortcut>⇧⌘1</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Option 2<DropdownMenuShortcut>⇧⌘2</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Option 3<DropdownMenuShortcut>⇧⌘3</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Option 4<DropdownMenuShortcut>⇧⌘4</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
