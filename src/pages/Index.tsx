import React from 'react';
import MainAppLayout from '../components/layout/MainAppLayout';

/**
 * IndexPage serves as the main landing page for the Documentation Portal.
 * It utilizes MainAppLayout to provide a consistent header (with NavigationHeader)
 * and structure, and displays introductory content related to the documentation.
 */
const IndexPage: React.FC = () => {
  return (
    <MainAppLayout title="Documentation Portal">
      <div className="space-y-6">
        <div>
          <p className="text-lg text-foreground leading-relaxed">
            Welcome to the References Dropdown Component documentation portal. 
            This page demonstrates the 'References' dropdown component and the React logo integrated into a navigation header.
          </p>
          <p className="mt-2 text-muted-foreground">
            The navigation header above provides quick access to reference materials via the dropdown menu and a link to the official React website through the React logo.
          </p>
        </div>

        {/* Placeholder for actual documentation content sections */}
        <div className="p-6 bg-card border border-border rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold text-primary mb-4">
            Getting Started
          </h2>
          <p className="text-card-foreground mb-3">
            This section would typically contain an introduction to the project or system being documented. 
            For instance, it might cover installation, core concepts, or a quick start guide.
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
            <li>Overview of the component library</li>
            <li>How to integrate the References dropdown</li>
            <li>Key features and benefits</li>
          </ul>
        </div>

        <div className="p-6 bg-card border border-border rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold text-primary mb-4">
            API Reference
          </h2>
          <p className="text-card-foreground">
            Detailed API documentation for various components and modules would be found here. 
            Each entry might describe props, methods, and usage examples.
          </p>
           <p className="mt-2 text-sm text-muted-foreground">
            (Content for API reference would be populated here.)
          </p>
        </div>

        <div className="p-6 bg-card border border-border rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold text-primary mb-4">
            Tutorials & Guides
          </h2>
          <p className="text-card-foreground">
            Step-by-step tutorials and practical guides help users understand how to use the components effectively in different scenarios.
          </p>
           <p className="mt-2 text-sm text-muted-foreground">
            (Links to various guides and tutorials would appear here.)
          </p>
        </div>

      </div>
    </MainAppLayout>
  );
};

export default IndexPage;
