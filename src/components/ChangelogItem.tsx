import * as React from "react"
import { Badge } from "@/components/ui/badge"

interface ChangelogItemProps {
    version: string
    date: string
    tags?: string[]
    title: string
    description: React.ReactNode
}

export function ChangelogItem({
    version,
    date,
    tags = [],
    title,
    description,
}: ChangelogItemProps) {
    const getTagColor = (t: string) => {
        const lowerT = t.toLowerCase()
        if (lowerT.includes("feature") || lowerT.includes("optimization") || lowerT.includes("improvement")) {
            return "bg-blue-500/10 text-blue-400 border-blue-500/20"
        } else if (lowerT.includes("fix") || lowerT.includes("hotfix")) {
            return "bg-rose-500/10 text-rose-400 border-rose-500/20"
        }
        // Default muted tag
        return "bg-zinc-800/50 text-zinc-300 border-zinc-700/50"
    }

    return (
        <div className="relative pl-8 md:pl-10 pb-12 group">
            {/* Timeline Dot exactly on the vertical line (left-0 of parent) */}
            <div className="absolute -left-[3.5px] top-[32px] md:top-[40px] h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.6)] z-10" />

            {/* Content Card (Bento Box rules) */}
            <div className="rounded-xl border border-white/5 bg-zinc-950/80 backdrop-blur-xl transition-all duration-300 ease-out hover:border-white/10 hover:bg-zinc-900/40 p-6 md:p-8 overflow-hidden">

                {/* Metadata Row */}
                <div className="flex flex-wrap items-center gap-3 mb-4">
                    {/* Version Badge */}
                    <Badge variant="outline" className="font-mono text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20 uppercase tracking-widest px-3 py-1">
                        v{version}
                    </Badge>
                    <span className="text-zinc-400 text-sm">{date}</span>
                    {/* Dynamic Tags */}
                    {tags.length > 0 && (
                        <div className="flex gap-2">
                            {tags.map((tag) => (
                                <Badge key={tag} variant="outline" className={`text-[10px] font-bold uppercase ${getTagColor(tag)} px-2 py-0.5`}>
                                    {tag}
                                </Badge>
                            ))}
                        </div>
                    )}
                </div>

                {/* Content */}
                <div>
                    <h3 className="text-xl font-medium tracking-tight text-zinc-100 mb-3 group-hover:text-white transition-colors">
                        {title}
                    </h3>
                    <div className="text-zinc-400 leading-relaxed text-sm space-y-4">
                        {description}
                    </div>
                </div>
            </div>
        </div>
    )
}
