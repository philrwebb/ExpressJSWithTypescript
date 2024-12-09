import { z } from 'zod';

export const CreateAddressSchema = z.object({
  active:  z.boolean(),
  addressLine1:  z.string(),
  addressLine2:  z.string(),
  addressLine3:  z.string(),
  suburb:  z.string(),
  postcode:  z.string(),
  state:  z.string(),
  AddressTypeid: z.number(),
  Personid: z.number(),
});

export type CreateAddressDto = z.infer<typeof CreateAddressSchema>;

