import { Button } from "@/components/ui/button";
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
import { SquarePlus } from "lucide-react";

export default function Meeting(params) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex gap-2">
          <SquarePlus size={15} /> Meeting
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Meeting Settings</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            📅 Schedule Meeting
            <DropdownMenuShortcut>⇧⌘M</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            📊 View Agenda
            <DropdownMenuShortcut>⌘A</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            🕒 Set Reminder
            <DropdownMenuShortcut>⇧⌘R</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            📝 Meeting Notes
            <DropdownMenuShortcut>⌘N</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            📢 Announcements
            <DropdownMenuShortcut>⇧⌘A</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            📹 Start Recording
            <DropdownMenuShortcut>⇧⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
