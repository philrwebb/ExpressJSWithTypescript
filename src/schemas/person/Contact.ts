import { z } from 'zod';

export const CreateContactSchema = z.object({
  active:  z.boolean(),
  details:  z.string(),
  ContactTypeid: z.number().int().positive(),
  Personid: z.number().int().positive().optional(),
});

export type CreateContactDto = z.infer<typeof CreateContactSchema>;

