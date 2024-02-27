"use server";

import * as z from "zod";
import { RegisterSchema } from "@/schemas";

// import { revalidatePath, revalidateTag  } from "next/cache";

   // Next.js cash functions 
    
    // revalidatePath
    // revalidateTag 

export const register = async ( values: z.infer<typeof RegisterSchema> ) => {
    // console.log(values); 
    const validatedFields = RegisterSchema.safeParse(values);

   if( !validatedFields.success) {
        return { error: "Invalid fields!"};

   }
   return { success: "Email Sent"}
}
