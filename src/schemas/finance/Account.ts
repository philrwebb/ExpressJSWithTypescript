import { z } from 'zod';

export const CreateAccountSchema = z.object({
  active:  z.boolean(),
  effFrom: z.preprocess((arg) => {
   if (typeof arg ==='string' || arg instanceof Date) {
     const date = new Date(arg);
     return isNaN(date.getTime()) ? undefined : date;
   }
   return undefined;
}, z.date({ required_error: "" })),
  effTo: z.preprocess((arg) => {
   if (typeof arg ==='string' || arg instanceof Date) {
     const date = new Date(arg);
     return isNaN(date.getTime()) ? undefined : date;
   }
   return undefined;
}, z.date({ required_error: "" })),
  Personid: z.number().int().positive(),
});

export type CreateAccountDto = z.infer<typeof CreateAccountSchema>;

