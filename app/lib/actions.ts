"use server";

import { formSchema } from "@/lib/formSchema";
import prisma from "@/lib/prisma";
import { createSafeActionClient } from "next-safe-action";
import { redirect } from "next/navigation";
import * as z from "zod";

type CreateEntry = z.infer<typeof formSchema>;

// export async function createEntry(values: CreateEntry) {
//   const newEntry = await prisma.entry.create({
//     data: {
//       domain: values.domain,
//       name: values.name,
//       email: values.email,
//       createdAt: new Date(),
//     },
//   });

//   if (!newEntry) return { error: "Could not creat entry" };
//   if (newEntry.id) return { success: "New entry created!" };
// }

export const action = createSafeActionClient();

export const createSafeEntry = action(formSchema, async (values) => {
  if (!values) return { error: "Could not create entry" };

  const newEntry = await prisma.entry.create({
    data: {
      domain: values.domain,
      name: values.name,
      email: values.email,
      createdAt: new Date(),
    },
  });

  if (!newEntry) return { error: "Could not creat entry" };
  if (newEntry.id) return { success: "New entry created!" };
});
