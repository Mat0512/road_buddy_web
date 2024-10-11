"use client";

import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import Navbar from "./components/Navbar";
import "./globals.css";
const queryClient = new QueryClient();

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="bg-gray-100">
                <QueryClientProvider client={queryClient}>
                    <Navbar />
                    <main>{children}</main>
                </QueryClientProvider>
            </body>
        </html>
    );
}
