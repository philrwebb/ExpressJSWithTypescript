import { z } from 'zod';

export const CreateDepartmentSchema = z.object({
  active:  z.boolean(),
  departmentName:  z.string(),
});

export type CreateDepartmentDto = z.infer<typeof CreateDepartmentSchema>;

