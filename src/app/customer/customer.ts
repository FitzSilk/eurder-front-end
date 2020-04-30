import {Address} from './address';

export interface Customer {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phoneNumber: string;
  address: Address;
}
