/* tslint:disable */
/* eslint-disable */
import { Role } from '../models/role';
export interface UserResponse {
  email?: string;
  id?: number;
  name?: string;
  roles?: Array<Role>;
}
