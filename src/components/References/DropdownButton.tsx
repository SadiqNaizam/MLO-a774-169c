import React, { useState, useCallback } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Paperclip, ChevronDown } from 'lucide-react';

interface DropdownButtonProps {
  className?: string;
}

// Dummy data for dropdown items, as per requirements
const dropdownItems = [
  { id: 'doc1', label: 'Document Alpha', href: '#', external: false as const },
  { id: 'doc2', label: 'Specification Beta', href: '#', external: false as const },
  { id: 'doc3', label: 'Guidelines Gamma', href: '#', external: false as const },
  { id: 'divider1', type: 'separator' as const },
  { id: 'link1', label: 'External Resource', href: 'https://example.com', external: true as const },
];

const DropdownButton: React.FC<DropdownButtonProps> = ({ className }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpenChange = useCallback((open: boolean) => {
    setIsOpen(open);
  }, []);

  return (
    <DropdownMenu onOpenChange={handleOpenChange}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline" // Base Shadcn variant for border and core styling
          className={cn(
            // Layout requirements from input:
            "flex items-center px-4 py-2 rounded-md shadow-sm", 
            // Specific background and hover from requirements (bg-buttonBackground -> bg-card):
            "bg-card hover:bg-gray-100", 
            // Text color for button content:
            "text-foreground", 
            // variant="outline" provides border-input which maps to --border CSS variable.
            className
          )}
        >
          <Paperclip className="mr-2 h-5 w-5 text-primary" strokeWidth={2} />
          <span className="font-medium text-foreground">References</span>
          {/* ChevronIcon layout: ml-auto pushes it to the right as per requirements */}
          <ChevronDown
            className={cn(
              "ml-auto h-5 w-5 text-secondary-foreground transition-transform duration-200",
              isOpen && "rotate-180"
            )}
            strokeWidth={2}
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="start">
        <DropdownMenuLabel>Reference Documents</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {dropdownItems.map((item) =>
          item.type === 'separator' ? (
            <DropdownMenuSeparator key={item.id} />
          ) : (
            <DropdownMenuItem key={item.id} asChild className="cursor-pointer">
              <a 
                href={item.href} 
                target={item.external ? '_blank' : '_self'} 
                rel={item.external ? 'noopener noreferrer' : undefined}
                className="w-full h-full flex items-center"
              >
                {item.label}
              </a>
            </DropdownMenuItem>
          )
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownButton;
