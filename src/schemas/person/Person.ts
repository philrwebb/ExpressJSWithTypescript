import { z } from 'zod';

export const CreatePersonSchema = z.object({
  active:  z.boolean(),
  givenNames:  z.string(),
  lastName:  z.string(),
  dob: z.preprocess((arg) => {
   if (typeof arg ==='string' || arg instanceof Date) {
     const date = new Date(arg);
     return isNaN(date.getTime()) ? undefined : date;
   }
   return undefined;
}, z.date({ required_error: "" })),
  GenderTypeid: z.number(),
});

export type CreatePersonDto = z.infer<typeof CreatePersonSchema>;

