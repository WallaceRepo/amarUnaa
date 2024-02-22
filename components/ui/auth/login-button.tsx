"use client";
import {useRouter} from "next/navigation";

interface LoginButtonProps {
    children: React.ReactNode;
    mode?: "modal" | "redirect",
    asChild?: boolean;
 
};

export const LoginButton = ({children, mode = "redirect", asChild }:LoginButtonProps) => {
    const onClick = () => {
       // console.log("clicked");
       const router = useRouter();
       router.push("auth/login");
    }

    if (mode === "modal") {
        return (
            <span>
                TODO implement modal
            </span>
        )
    }
    return (
        <span className="cursor=pointer" onClick={onClick}>
           {children}
        </span>
    );
}