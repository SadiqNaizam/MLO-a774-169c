import React from 'react';
import { cn } from '@/lib/utils';
import { Atom } from 'lucide-react'; // Using Atom icon for React logo representation

interface ReactLogoProps {
  className?: string;
  href?: string; // Optional URL for the logo to link to
  size?: number; // Optional size for the icon
}

const ReactLogo: React.FC<ReactLogoProps> = ({
  className,
  href = "https://react.dev", // Default link to React's official website
  size = 28, // Default icon size, visually matches the mockup relative to other elements
}) => {
  // Using text-primary for icon color as per PRD icon color / tailwind 'primary' definition
  const logoIcon = <Atom className="text-primary" style={{ width: size, height: size }} strokeWidth={2} />;

  // Layout requirements: "flex items-center".
  // Margin (e.g., "ml-4") is specified in layout requirements for reactLogo, 
  // but should be applied by the parent component (e.g., NavigationHeader using overall gap-4) 
  // to maintain component reusability.
  const containerClasses = "flex items-center";

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="React Website" // Accessibility: describes the link's purpose
        className={cn(containerClasses, className)}
      >
        {logoIcon}
      </a>
    );
  }

  // If no href is provided, render the logo as a non-interactive div
  return (
    <div className={cn(containerClasses, className)} aria-label="React Logo">
      {logoIcon}
    </div>
  );
};

export default ReactLogo;
