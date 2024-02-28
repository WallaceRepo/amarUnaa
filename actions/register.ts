"use server";

import * as z from "zod";
import { RegisterSchema } from "@/schemas";
import bcrypt from "bcrypt";

import { db } from "@/lib/db";

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

   const { email, name, password} = validatedFields.data;
   const hashedPassword = await bcrypt.hash(password, 10);

   const existingUser = await db.user.findUnique({
    where: { email},
   });

   if (existingUser) {
    return { error: "Имэйл хаяг бүртгэгдсэн байна!"}
   }
    
   await db.user.create ({
    data: {
        name, 
        email, 
        password: hashedPassword,
    }
   });

   // TODO: send verification token email

   return { success: "Шинэ хэрэглэгчээр амжилттай бүртгэлээ!"}
}
