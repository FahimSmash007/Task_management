import { Tooltip, TooltipTrigger, TooltipContent } from "@radix-ui/react-tooltip";  // Tooltip from Radix UI
import { X } from "lucide-react";  // Lucide React icon

const CloseIconWithTooltip = () => (
  <Tooltip>
    <TooltipTrigger>
      <X className="w-5 h-5 text-gray-600 hover:text-red-500 cursor-pointer" />
    </TooltipTrigger>
    <TooltipContent>
      <span>Close</span>
    </TooltipContent>
  </Tooltip>
);

export default CloseIconWithTooltip;
