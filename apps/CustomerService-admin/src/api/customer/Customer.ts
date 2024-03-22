import { JsonValue } from "type-fest";

export type Customer = {
  addressId: string | null;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  orders: JsonValue;
  phone: string | null;
  updatedAt: Date;
};
