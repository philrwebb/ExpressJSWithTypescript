import { z } from 'zod';

export const CreateContactSchema = z.object({
  active:  z.boolean(),
  details:  z.string(),
  ContactTypeid: z.number(),
  Personid: z.number(),
});

export type CreateContactDto = z.infer<typeof CreateContactSchema>;

