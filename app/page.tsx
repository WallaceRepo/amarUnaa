import { Poppins } from "next/font/google";
import {cn } from "@/lib/utils";
import {Button} from "@/components/ui/button";
import { LoginButton } from "@/components/ui/auth/login-button";

const font = Poppins({ 
  subsets: ["latin"],
  weight: ["600"]
})

export default function Home() {
  return (
      <main className="flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from bg-purple-100 to-blue-200">
        <div className="space-y-6">
          <h1 className={cn("text-sm font-semibold text-purple drop-shadow-md",
           font.className,)}>
           🚀 Бүртгүүлэх
          </h1>
          <p className="text-purple text-md">Тавтай хайна уу</p>
          <LoginButton>
            <Button variant="secondary" size = "lg">
              Орох
            </Button>
          </LoginButton>
        </div>
      </main>
    
  );
}
