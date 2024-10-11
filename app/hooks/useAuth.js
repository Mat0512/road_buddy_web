import { useState, useEffect } from "react";

const useAuth = () => {
    const [userType, setUserType] = useState("guest");

    useEffect(() => {
        // Simulate authentication flow
        const user = localStorage.getItem("userType"); // e.g., 'user' or 'service-provider'
        setUserType(user ? user : "guest");
    }, []);

    return { userType };
};

export default useAuth;
