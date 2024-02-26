import * as z from "zod";

export const LoginSchema = z.object({
    email: z.string().email({ message:"Имэйл хаягаа оруулна уу" }),
    password: z.string().min(6)
});
