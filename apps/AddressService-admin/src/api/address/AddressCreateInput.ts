import { InputJsonValue } from "../../types";

export type AddressCreateInput = {
  address_1?: string | null;
  address_2?: string | null;
  city?: string | null;
  customers?: InputJsonValue;
  state?: string | null;
  zip?: number | null;
};
