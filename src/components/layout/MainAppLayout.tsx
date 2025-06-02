import React from 'react';
import { cn } from '@/lib/utils';
import NavigationHeader from '../templates/NavigationHeader'; // Path based on component hierarchy and common project structures

interface MainAppLayoutProps {
  children: React.ReactNode;
  title?: string; // Optional title for the page content area
  className?: string; // Optional additional class names for the root element
}

const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children, title, className }) => {
  return (
    <div className={cn("min-h-screen flex flex-col", className)}>
      <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/95 backdrop-blur-sm supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          {/* 
            NavigationHeader component is expected to contain the 'References' dropdown and React logo.
            It should implement its own internal layout (e.g., flex items-center justify-start gap-4)
            as per the "overall" layout requirements provided in the project context.
          */}
          <NavigationHeader />
        </div>
      </header>
      
      <main className="flex-1">
        <div className="container py-6 md:py-8"> {/* Responsive vertical padding */}
          {title && (
            <h1 className="mb-4 text-2xl font-semibold tracking-tight text-foreground md:mb-6 md:text-3xl">
              {title}
            </h1>
          )}
          {children}
        </div>
      </main>

      {/* 
        An optional footer could be added here if needed in the future.
        Example:
        <footer className="py-6 border-t border-border/40">
          <div className="container text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} References Dropdown Component. All rights reserved.
          </div>
        </footer> 
      */}
    </div>
  );
};

export default MainAppLayout;
