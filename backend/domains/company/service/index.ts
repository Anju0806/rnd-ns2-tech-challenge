import { CompanyRepo } from "../../../repo/company.repo";
import { RoomRepo } from "../../../repo/room.repo";
import { UserRepo } from "../../../repo/user.repo";

export class CompanyService {

  protected _companyRepo = new CompanyRepo();
  protected _roomRepo = new RoomRepo();
  protected _userRepo = new UserRepo();

  /* async getUsers(filter: { username?: string}): Promise<any> {
    return await this._userRepo.select(filter);
  } */
  async getUsers(page: number, pageSize: number, filter: { username?: string }): Promise<any> {
    const startIndex = (page - 1) * pageSize;
    const endIndex = page * pageSize;
  
    // Fetch users for the current page
    const users = await this._userRepo.selectWithPagination(startIndex, endIndex, filter);
  
    // Fetch the total number of users (totalRecords)
    const totalRecords = await this._userRepo.countUsers();
  
    // Calculate the total number of pages (totalOfPage)
    const totalOfPage = Math.ceil(totalRecords / pageSize);
  
    return {
      data: users,
      meta: {
        totalOfPage,
        page,
        totalOfRecord: totalRecords,
        pageSize,
      },
    };
  }
  

  async getUserCompanies(filter: { companyIds: number[]}): Promise<any> {
    return await this._companyRepo.select(undefined, [{ fieldName:'id', data: filter.companyIds }]);
  }

  async getCompanies(filter: { name?: string}): Promise<any> {
    return await this._companyRepo.select(filter);
  }

  async getCompanyRooms(filter: { name?: string, companyId?: number}): Promise<any> {    
    return await this._roomRepo.select(filter);
  }
//adding pagination
  async getUsersWithPagination(startIndex: number, endIndex: number, filter: any): Promise<any> {
    const users = await this._userRepo.selectWithPagination(startIndex, endIndex, filter);
    return users;
  }

  async countUsers(filter: any): Promise<number> {
    const totalRecords = await this._userRepo.countUsers(filter);
    return totalRecords;
  }

}
