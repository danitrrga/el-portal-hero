import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t border-white/5 bg-[#050507] py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center border border-white/10">
                        <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_5px_rgba(59,130,246,0.8)]"></div>
                    </div>
                    <span className="text-sm font-semibold text-white">Portal Inc.</span>
                </div>
                <div className="flex gap-8 text-sm text-slate-500">
                    <Link className="hover:text-white transition-colors" href="#">
                        Privacy
                    </Link>
                    <Link className="hover:text-white transition-colors" href="#">
                        Terms
                    </Link>
                    <Link className="hover:text-white transition-colors" href="#">
                        Twitter
                    </Link>
                    <Link className="hover:text-white transition-colors" href="#">
                        GitHub
                    </Link>
                </div>
                <div className="text-sm text-slate-600">
                    © 2024 Portal Inc. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
