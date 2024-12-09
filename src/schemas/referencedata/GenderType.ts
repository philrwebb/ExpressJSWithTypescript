import { z } from 'zod';

export const CreateGenderTypeSchema = z.object({
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
  typeShortDescription:  z.string(),
  typeLongDescription:  z.string(),
  code:  z.string(),
});

export type CreateGenderTypeDto = z.infer<typeof CreateGenderTypeSchema>;

