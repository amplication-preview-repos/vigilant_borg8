import { JsonValue } from "type-fest";

export type Address = {
  address_1: string | null;
  address_2: string | null;
  city: string | null;
  createdAt: Date;
  customers: JsonValue;
  id: string;
  state: string | null;
  updatedAt: Date;
  zip: number | null;
};
