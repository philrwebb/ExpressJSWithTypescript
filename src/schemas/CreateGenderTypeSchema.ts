import { z } from 'zod';

export const CreateGenderTypeSchema = z.object({
  typeShortDescription: z.string(),
  typeLongDescription: z.string(),
  code: z.string(),
  effFrom: z.preprocess((arg) => {
    if (typeof arg === 'string' || arg instanceof Date) {
      const date = new Date(arg);
      return isNaN(date.getTime()) ? undefined : date;
    }
    return undefined;
  }, z.date()),
  effTo: z.preprocess((arg) => {
    if (typeof arg === 'string' || arg instanceof Date) {
      const date = new Date(arg);
      return isNaN(date.getTime()) ? undefined : date;
    }
    return undefined;
  }, z.date()),
  active: z.boolean(),
});

export type CreateGenderTypeDto = z.infer<typeof CreateGenderTypeSchema>;
