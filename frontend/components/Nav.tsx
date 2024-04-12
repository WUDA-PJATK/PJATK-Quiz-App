"use client"
import Image from "next/image"
import { ModeToggle } from "./ui/toggle-mode"

export default function Nav() {

    return (
        <header>
            <nav className="p-4">
                <ul className="flex items-center justify-between">
                    <li>
                        <a
                            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
                            href="/"
                        >
                            By{" "}
                            <h1 className="font-bold">WUDA</h1> 
                        </a>
                    </li>
                    <li>
                        <ModeToggle/>
                    </li>
                </ul>
            </nav>
        </header>
    )
}