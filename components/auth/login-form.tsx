"use client";
import { CardWrapper } from "@/components/auth/card-wrapper";
import * as z from "zod";
import {useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import {Input } from "@/components/ui/input";
import { LoginSchema } from "@/schemas";
import { Button } from "@/components/ui/button";
import { FormError } from "../form-error";
import { FormSuccess } from "@/components/form-success";
import { login } from "@/actions/login";
import { useTransition, useState } from "react";


export const LoginForm = () => {

  const [ isPending, startTransition] = useTransition();

  const [error, setError] = useState<string | undefined >("");
  const [success, setSuccess] = useState<string | undefined>("");

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  
  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
      
 
    setError("");
    setSuccess("");
    login(values);
    // in case of don't like server actions then simply use routes to server
    // axios.post("your/api/route", values).then() ..;

      // setPending();
       startTransition(()=> {
        login(values).then((data) => { 
          setError(data.error);
          setSuccess(data.success);
        });
     });

  }


  return (
    <CardWrapper
       headerLabel="Тавтай морилно уу"
       backButtonHref="/auth/register"
       backButtonLabel="Шинээр бүртгүүлэх бол энд дарна уу?"
       showSocial
       >
      <Form {...form} >
        <form onSubmit = { form.handleSubmit(onSubmit)} className="space-y-6">
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
                        disabled = { isPending }
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
                        disabled = { isPending }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            
          </div>
          <FormError message={error} />
          <FormSuccess message= { success} />
          <Button type="submit" className="w-full" disabled = { isPending }>
            Орох
          </Button>
        </form>
      </Form>
    </CardWrapper>
  )
}



