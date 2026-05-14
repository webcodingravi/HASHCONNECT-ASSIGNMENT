import { useState } from "react";
import { Link, Outlet } from 'react-router-dom'
import FooterSection from './Home/FooterSection'
import { Menu, X } from "lucide-react";


const Layout=() => {
    const [isOpen, setIsOpen]=useState(false);
    const manus=[
        {
            label: "Home",
            link: '/'
        },

        {
            label: "Work",
            link: '/work'
        },

        {
            label: "About",
            link: '/about'
        },

        {
            label: "Contact",
            link: '/contact'
        },



    ]
    return (
        <>
            <div className="min-h-screen bg-slate-50 text-slate-900">
                <header className="sticky top-0 z-50 border-b border-white/10 bg-white backdrop-blur-xl">
                    <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8">

                        {/* LOGO */}
                        <a
                            href="#"
                            className="text-sm md:text-lg font-semibold tracking-[0.35em] text-black/80 uppercase"
                        >
                            HASHCONNECT
                        </a>

                        {/* DESKTOP MENU */}
                        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-black/80">
                            {manus&&
                                manus.map((item, index) => (
                                    <Link
                                        key={index}
                                        to={item.link}
                                        className="transition hover:text-black/100"
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                        </nav>

                        {/* MOBILE BUTTON */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden text-black/80"
                        >
                            {isOpen? <X size={28} />:<Menu size={28} />}
                        </button>
                    </div>

                    {/* MOBILE MENU */}
                    <div
                        className={`
          md:hidden
          overflow-hidden
          transition-all
          duration-500
          ${isOpen? "max-h-[500px] opacity-100":"max-h-0 opacity-0"}
        `}
                    >
                        <nav className="flex flex-col gap-6 border-t border-white/10 bg-black px-6 py-8 text-white">

                            {manus&&
                                manus.map((item, index) => (
                                    <Link
                                        key={index}
                                        to={item.link}
                                        onClick={() => setIsOpen(false)}
                                        className="text-lg font-light tracking-wide transition hover:translate-x-2 hover:text-purple-400"
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                        </nav>
                    </div>
                </header>


                <main>
                    {<Outlet />}
                </main>

                <FooterSection />

            </div>
        </>
    )
}

export default Layout