import * as z from "zod";

export const RegNoContext = z.object({
  params: z.object({
    regno: z.string(),
  }),
});

export type RegNoContext = z.infer<typeof RegNoContext>;
