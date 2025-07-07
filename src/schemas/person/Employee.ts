import { z } from 'zod';

export const CreateEmployeeSchema = z.object({
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
  GenderTypeid: z.number().int().positive(),
  Departmentid: z.number().int().positive(),
});

export type CreateEmployeeDto = z.infer<typeof CreateEmployeeSchema>;

