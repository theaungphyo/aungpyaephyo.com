import { z } from 'zod';
export const ProjectSchema = z.object({
  id: z.number().min(1),
  title: z.string().min(1),
  description: z.string().min(1),
  image: z.string().min(1),
  demo: z.string().nullish(),
  skills: z.string().min(1),
  year: z.number().min(1),
  made_at: z.string().nullish(),
  apk: z.string().nullish(),
});
export type ProjectType = z.infer<typeof ProjectSchema>;