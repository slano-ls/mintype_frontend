import Link from "next/link";
import Navbar from "./Navbar";
import React, { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {

    return (
        <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <Navbar />
            <main style={{ flex: 1 }}>{children}</main>
            <div style={{ textAlign: "center", marginTop: "auto", }}>
                <p style={{ color: "var(--sub-color)", fontFamily: 'lexend', fontWeight: 'normal' }}>
                    Built by <Link href={"https://github.com/slano-ls"} style={{ textDecoration: "underline", color: "var(--sub-color)" }}>Saihaj Law</Link>
                </p>
            </div>
        </div>
    )
}

export default Layout
