import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t border-white/5">
            <div className="max-w-5xl mx-auto w-full px-6 py-8 md:py-10 flex flex-col sm:flex-row justify-between items-center gap-6">
                {/* Left Section: Copyright */}
                <div className="text-sm text-zinc-500 text-center sm:text-left">
                    © {new Date().getFullYear()} Portal. All rights reserved.
                </div>

                {/* Right Section: Links */}
                <div className="flex justify-center gap-6 text-sm text-zinc-400">
                    <Link
                        className="transition-colors duration-300 ease-out hover:text-zinc-100 focus-visible:ring-1 focus-visible:ring-blue-500/50 focus-visible:outline-none rounded-md px-2 py-1 -mx-2"
                        href="#"
                    >
                        Privacy
                    </Link>
                    <Link
                        className="transition-colors duration-300 ease-out hover:text-zinc-100 focus-visible:ring-1 focus-visible:ring-blue-500/50 focus-visible:outline-none rounded-md px-2 py-1 -mx-2"
                        href="#"
                    >
                        Terms
                    </Link>
                </div>
            </div>
        </footer>
    );
}
