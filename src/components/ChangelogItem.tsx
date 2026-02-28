import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ChangelogItemProps {
    version: string
    date: string
    tag: "Feature" | "Fix" | "Improvement"
    title: string
    description: React.ReactNode
}

export function ChangelogItem({
    version,
    date,
    tag,
    title,
    description,
}: ChangelogItemProps) {
    const getTagColor = (t: string) => {
        switch (t) {
            case "Feature":
                return "bg-blue-500/10 text-blue-400 border-blue-500/20"
            case "Fix":
                return "bg-red-500/10 text-red-400 border-red-500/20"
            default:
                return "bg-zinc-500/10 text-zinc-400 border-zinc-500/20"
        }
    }

    return (
        <div className="relative pl-8 md:pl-0">
            {/* Timeline Dot (Mobile overlay / desktop side) */}
            <div className="absolute left-[7px] top-8 md:top-8 h-3 w-3 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)] md:left-[-23px] transform -translate-x-1/2 md:translate-x-0 border-2 border-zinc-950 z-10" />

            <Card className="card-glow border-zinc-800 bg-zinc-950/50 backdrop-blur-sm transition-all duration-300 ease-out hover:border-blue-500/30 mb-8 overflow-hidden shadow-[0_0_30px_-5px_rgba(30,64,175,0.05)] hover:shadow-[0_0_30px_-5px_rgba(30,64,175,0.15)]">
                <CardHeader className="pb-3 flex flex-col sm:flex-row sm:items-start sm:justify-between space-y-2 sm:space-y-0">
                    <div className="flex items-center space-x-3">
                        <Badge variant="outline" className={`font-mono text-xs font-semibold ${getTagColor(tag)}`}>
                            v{version}
                        </Badge>
                        <span className="text-zinc-500 text-sm font-mono">{date}</span>
                    </div>
                    <Badge variant="outline" className="w-fit text-xs border-zinc-800 text-zinc-400">
                        {tag}
                    </Badge>
                </CardHeader>
                <CardContent>
                    <CardTitle className="text-xl text-zinc-100 tracking-tight mb-3">
                        {title}
                    </CardTitle>
                    <div className="text-zinc-400 leading-relaxed text-sm">
                        {description}
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
