"use client"

import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface MethodologyCardProps {
    title: string
    subtitle: string
    animationSlot?: React.ReactNode
    deepDiveText: React.ReactNode
}

export function MethodologyCard({
    title,
    subtitle,
    animationSlot,
    deepDiveText,
}: MethodologyCardProps) {
    return (
        <Card className="card-glow border-zinc-800 bg-zinc-950/50 backdrop-blur-sm shadow-[0_0_30px_-5px_rgba(30,64,175,0.1)] transition-all duration-300 ease-out flex flex-col h-full overflow-hidden">
            {animationSlot && (
                <div className="w-full aspect-video bg-black/40 border-b border-zinc-800/50 relative overflow-hidden flex items-center justify-center">
                    {animationSlot}
                </div>
            )}
            <CardHeader className="flex-1">
                <CardTitle className="text-2xl text-zinc-100 tracking-tight mb-2">{title}</CardTitle>
                <CardDescription className="text-zinc-400">{subtitle}</CardDescription>
            </CardHeader>
            <CardContent className="mt-auto">
                <Accordion type="single" collapsible className="w-full border-t border-white/5 pt-2">
                    <AccordionItem value="deep-dive" className="border-none">
                        <AccordionTrigger className="text-sm text-blue-400 hover:text-blue-300 hover:no-underline py-2">
                            Deep Dive
                        </AccordionTrigger>
                        <AccordionContent className="text-zinc-400 text-sm leading-relaxed pb-4 pt-2">
                            {deepDiveText}
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </CardContent>
        </Card>
    )
}
