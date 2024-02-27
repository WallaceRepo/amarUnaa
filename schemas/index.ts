import * as z from "zod";

export const LoginSchema = z.object({
    email: z.string().email({ message:"Имэйл хаягаа оруулна уу" }),
    password: z.string().min(1, {message: "Нууц үгээ оруулна уу"} ),
     
});

export const RegisterSchema = z.object({
    email: z.string().email({ message:"Имэйл хаягаа оруулна уу" }),
    password: z.string().min(6, {message: "Хамгийн багадаа 6 тэмдэгт оруулна уу"} ),
    name: z.string().min(1, {message: "Нэрээ оруулна уу"}),
     
});