import React from "react";
import { twMerge } from "tailwind-merge";

interface GridContainerProps {
    children: React.ReactNode;
    className?: string;
}

export function GridContainer({ children, className }: GridContainerProps) {
    const defaultClass = "w-full max-w-grid mx-auto px-3"
    const combinateClasses = twMerge(defaultClass, className)
    return (
     <div className={combinateClasses}>
         {children}
     </div>
    )
}