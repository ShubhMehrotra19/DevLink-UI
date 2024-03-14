import * as z from "zod";

export const ProfileCreateProps = z.object({
  firstName: z.string(),
  lastName: z.string(),
  username: z.string(),
  description: z.string().optional(),
  email: z.string(),
  avatar: z.string().optional(),
  image: z.string(),
  github: z.string(),
  linkedin: z.string().optional(),
  twitter: z.string().optional(),
  portfolio: z.string().optional(),
  hashtags: z.array(z.string()).optional(),
});

export type ProfileCreateProps = z.infer<typeof ProfileCreateProps>;

export const ProfileUpdateProps = z.object({
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  username: z.string().optional(),
  description: z.string().optional(),
  email: z.string().optional(),
  avatar: z.string().optional().optional(),
  image: z.string().optional(),
  github: z.string().optional(),
  linkedin: z.string().optional(),
  twitter: z.string().optional(),
  portfolio: z.string().optional(),
  hashtags: z.array(z.string()).optional(),
});

export type ProfileUpdateProps = z.infer<typeof ProfileUpdateProps>;
