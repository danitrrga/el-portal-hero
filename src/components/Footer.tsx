import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t border-slate-800/30 bg-transparent py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex gap-8 text-sm text-slate-500">
                    <Link className="hover:text-white transition-all duration-300" href="#">
                        Privacy
                    </Link>
                    <Link className="hover:text-white transition-all duration-300" href="#">
                        Terms
                    </Link>
                    <Link className="hover:text-white transition-all duration-300" href="#">
                        Twitter
                    </Link>
                    <Link className="hover:text-white transition-all duration-300" href="#">
                        GitHub
                    </Link>
                </div>
                <div className="text-sm text-slate-600">
                    © 2026 PORTAL. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
