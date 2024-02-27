"use client";
import { CardWrapper } from "@/components/auth/card-wrapper";
import * as z from "zod";
import {useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import {Input } from "@/components/ui/input";
import { RegisterSchema } from "@/schemas";
import { Button } from "@/components/ui/button";
import { FormError } from "../form-error";
import { FormSuccess } from "@/components/form-success";
import { register } from "@/actions/register";
import { useTransition, useState } from "react";


export const RegisterForm = () => {

  const [ isPending, startTransition] = useTransition();

  const [error, setError] = useState<string | undefined >("");
  const [success, setSuccess] = useState<string | undefined>("");

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
  });
  
  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
      
 
    setError("");
    setSuccess("");

  //  register(values);
    // in case of don't like server actions then simply use routes to server
    // axios.post("your/api/route", values).then() ..;

      // setPending();
       startTransition(()=> {
        register(values).then((data) => { 
          setError(data.error);
          setSuccess(data.success);
        });
     });

  }


  return (
    <CardWrapper
       headerLabel="Шинэ бүртгэл үүсгэх "
       backButtonHref="/auth/login"
       backButtonLabel="Бүртэлтэй бол энд дарна уу"
       showSocial
       >
      <Form {...form} >
        <form onSubmit = { form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <FormField control={form.control} name="name"  render={({ field }) => ( 
                  <FormItem>
                    <FormLabel>
                      Бүтэн нэр
                    </FormLabel>
                    <FormControl>
                      <Input 
                        {...field}
                        placeholder="Таны нэр, овог нэр"
                        type="name"
                        disabled = { isPending }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
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
            Бүртгэл үүсгэх
          </Button>
        </form>
      </Form>
    </CardWrapper>
  )
}



