import * as React from "react"

interface BoundedContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
    variant?: "narrow" | "default" | "wide"
}

export function BoundedContainer({
    children,
    className = "",
    variant = "default",
    ...props
}: BoundedContainerProps) {
    const maxWidth =
        variant === "narrow"
            ? "max-w-2xl"
            : variant === "wide"
                ? "max-w-7xl"
                : "max-w-5xl"

    return (
        <div
            className={`mx-auto w-full px-4 sm:px-6 lg:px-8 ${maxWidth} ${className}`}
            {...props}
        >
            {children}
        </div>
    )
}
