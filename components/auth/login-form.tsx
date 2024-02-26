"use client";
import { CardWrapper } from "@/components/auth/card-wrapper";
import * as z from "zod";
import {useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import {Input } from "@/components/ui/input";
import { LoginSchema } from "@/schemas";
import { Button } from "@/components/ui/button";


export const LoginForm = () => {

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  return (
    <CardWrapper
       headerLabel="Тавтай морилно уу"
       backButtonHref="/auth/register"
       backButtonLabel="Шинээр бүртгүүлэхүү?"
       showSocial
       >
      <Form {...form} >
        <form onSubmit = { form.handleSubmit(()=> {})} className="space-y-6">
          <div className="space-y-4">
            <FormField control={form.control} name="email"  render={({ field }) => ( 
                  <FormItem>
                    <FormLabel>
                      Имэйл
                    </FormLabel>
                    <FormControl>
                      <Input 
                        {...field}
                        placeholder="имэйлнэр@жишээ.com"
                        type="email"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

             <FormField control={form.control} name="password"  render={({ field }) => ( 
                  <FormItem>
                    <FormLabel>
                      Нууц үг
                    </FormLabel>
                    <FormControl>
                      <Input 
                        {...field}
                        placeholder="******"
                        type="password"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            
          </div>
          <Button type="submit" className="w-full">
            Орох
          </Button>
        </form>
      </Form>
    </CardWrapper>
  )
}



