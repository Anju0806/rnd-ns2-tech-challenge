import { BaseRepo, delay } from "./base.repo";
import { IUser, users } from './data';

export class UserRepo extends BaseRepo<IUser> {
     constructor() {
          super(users);
     }

     async selectWithPagination(startIndex: number, endIndex: number, where?: Partial<IUser>, whereIn?: { fieldName: string, data: any[] }[]): Promise<IUser[]> {
          let rs = this._data;
          if (where) {
               rs = Object.entries(where).reduce((acc, [key, value]) => {
                    return acc.filter(r => r[key as keyof IUser] === value);
               }, rs);
          }
          if (whereIn) {
               rs = whereIn.reduce((acc, { fieldName, data }) => {
                    return acc.filter(r => data.includes(r[fieldName as keyof IUser]));
               }, rs);
          }

          const slicedUsers = rs.slice(startIndex, endIndex);

          for (const _ of slicedUsers) {
               await delay(1);
          }

          return Promise.resolve(slicedUsers);
     }

     async countUsers(where?: Partial<IUser>, whereIn?: { fieldName: string, data: any[] }[]): Promise<number> {
          let rs = this._data;
          if (where) {
               rs = Object.entries(where).reduce((acc, [key, value]) => {
                    return acc.filter(r => r[key as keyof IUser] === value);
               }, rs);
          }
          if (whereIn) {
               rs = whereIn.reduce((acc, { fieldName, data }) => {
                    return acc.filter(r => data.includes(r[fieldName as keyof IUser]));
               }, rs);
          }

          return Promise.resolve(rs.length);
     }
}
