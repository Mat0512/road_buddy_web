"use client";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation"; // Import usePathname to get the current route
import useAuth from "../hooks/useAuth";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
    const { userType } = useAuth();
    const router = useRouter();
    const pathname = usePathname(); // Get the current route path
    const [menuOpen, setMenuOpen] = useState(false);

    const navigate = (path) => {
        setMenuOpen(false);
        router.push(path);
    };

    const handleClose = () => {
        setMenuOpen(false);
    };

    // Don't render Navbar on auth pages
    if (pathname === "/auth/login" || pathname === "/auth/signup/user" || pathname === "/auth/signup/service-provider") {
        return null;
    }

    return (
        <nav className="p-4 bg-blue-600 text-white flex justify-between items-center">
            <div className="text-lg">Gas N Tire</div>
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
                ☰
            </button>
            <div className={`hidden md:flex`}>
                {userType === "user" && (
                    <button onClick={() => navigate("/user/dashboard")} className="p-2">
                        User Dashboard
                    </button>
                )}
                {userType === "service-provider" && (
                    <button onClick={() => navigate("/service-provider/dashboard")} className="p-2">
                        Provider Dashboard
                    </button>
                )}
                {userType === "guest" && (
                    <button onClick={() => navigate("/auth/login")} className="p-2">
                        Login
                    </button>
                )}
            </div>
            <MobileMenu menuOpen={menuOpen} onClose={handleClose} />
        </nav>
    );
}
