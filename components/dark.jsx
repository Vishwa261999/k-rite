import {
  Cloud,
  LifeBuoy,
  Mail,
  Users
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

export default function Dark() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline"> Desk ▼</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Options</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Cloud className="mr-2 h-4 w-4" />
            <span>Cloud Storage</span>
            <DropdownMenuShortcut>⌘C</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Users className="mr-2 h-4 w-4" />
            <span>Manage Users</span>
            <DropdownMenuShortcut>⌘U</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Mail className="mr-2 h-4 w-4" />
            <span>Mail</span>
            <DropdownMenuShortcut>⌘M</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <LifeBuoy className="mr-2 h-4 w-4" />
            <span>Help</span>
            <DropdownMenuShortcut>⌘H</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
