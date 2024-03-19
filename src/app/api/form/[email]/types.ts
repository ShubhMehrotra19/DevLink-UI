import * as z from "zod";

export const EmailContext = z.object({
  params: z.object({
    email: z.string(),
  }),
});

export type EmailContext = z.infer<typeof EmailContext>;
