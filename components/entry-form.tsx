"use client";

import { createSafeEntry } from "@/app/lib/actions";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { formSchema } from "@/lib/formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAction } from "next-safe-action/hooks";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { z } from "zod";
import Success from "./success";
import { Loader2Icon } from "lucide-react";

export default function EntryForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      domain: "",
      email: "",
    },
  });

  const { status, execute } = useAction(createSafeEntry, {
    onError() {
      toast.error("Failed to add to waitlist.");
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    execute(values);
  }

  return (
    <>
      {status === "hasSucceeded" ? (
        <Success />
      ) : (
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Join Waitlist</CardTitle>
            <CardDescription>
              Add your email and we will reach out soon!
            </CardDescription>
          </CardHeader>

          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Full Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="name@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="domain"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Domain</FormLabel>
                      <FormControl>
                        <Input placeholder="https://example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex justify-end">
                  <Button disabled={status === "executing"} type="submit">
                    {status === "executing" ? (
                      <Loader2Icon className="animate-spin" />
                    ) : (
                      "Submit"
                    )}
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      )}
    </>
  );
}
