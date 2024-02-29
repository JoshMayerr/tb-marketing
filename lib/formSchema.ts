import * as z from "zod";

export const formSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  domain: z
    .string()
    .regex(
      /^(?:(?:(?:[a-zA-z\-]+)\:\/{1,3})?(?:[a-zA-Z0-9])(?:[a-zA-Z0-9\-\.]){1,61}(?:\.[a-zA-Z]{2,})+|\[(?:(?:(?:[a-fA-F0-9]){1,4})(?::(?:[a-fA-F0-9]){1,4}){7}|::1|::)\]|(?:(?:[0-9]{1,3})(?:\.[0-9]{1,3}){3}))(?:\:[0-9]{1,5})?$/,
      "Must be a valid URL"
    ),
});
