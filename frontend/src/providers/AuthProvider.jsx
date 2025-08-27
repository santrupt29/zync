import { createContext, useEffect } from "react";
import { useAuth } from "@clerk/clerk-react";
import { axiosInstance } from "../lib/axios.js";
import toast from "react-hot-toast";
import React from "react";
const AuthContext = createContext();

export default function AuthProvider({ children }) {
    const {getToken} = useAuth();

    useEffect(() => {
        // setup axios interceptor
        const interceptor = axiosInstance.interceptors.request.use(async (config) => {
            try {
                const token = await getToken();
                if (token) {
                    config.headers.Authorization = `Bearer ${token}`;
                }
            } catch (error) {
               if (error.message?.incudes("auth") || error.message?.incudes("token")) {
                toast.error("Authentication issue. Please refresh the page.")
            }
            console.log("Error getting token:", error);
            }
            return config;
        }, (error) => {
            console.error("Axios request Error:", error);
            return Promise.reject(error);
        });
        // Clean up function to remove the interceptor, to avoid memory leaks
        return () => {
            axiosInstance.interceptors.request.eject(interceptor);
        };

        }, [getToken]);

        return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
        

}