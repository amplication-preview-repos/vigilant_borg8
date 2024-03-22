import { InputJsonValue } from "../../types";

export type CustomerCreateInput = {
  addressId?: string | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  orders?: InputJsonValue;
  phone?: string | null;
};
