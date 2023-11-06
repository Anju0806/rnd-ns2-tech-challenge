import { CompanyService } from "../service";
import companyLoader from './companyDataLoader'; // Import the DataLoader

export default {
  Query: {
    async Users(parent: any, args: any, context: any, info: any): Promise<any> {
      const { page , pageSize, filter } = args;
      const _companyService = new CompanyService();
    
      // Fetch the total number of users (totalRecords)
      const totalRecords = await _companyService.countUsers(filter);
    
      // Determine the pageSize
      const calculatedPageSize = pageSize ? pageSize : totalRecords;
    
      // Calculate the start and end indexes for pagination
      const startIndex = (page - 1) * calculatedPageSize;
      const endIndex = page * calculatedPageSize;
    
      // Fetch users for the current page with pagination
      const users = await _companyService.getUsersWithPagination(startIndex, endIndex, filter);
      // Load companies for users using DataLoader
      const userIds = users.map((user: any) => user.id);
      const companies = await companyLoader.loadMany(userIds);

      // Combine users and their companies in the response
      const usersWithCompanies = users.map((user: any, index: any) => ({
        ...user,
        companies: companies[index],
      }));

      // Calculate the total number of pages (totalOfPage)
      const totalOfPage = Math.ceil(totalRecords / calculatedPageSize);
    
      return {
        data: usersWithCompanies,
        meta: {
          totalOfPage,
          page,
          totalOfRecord: totalRecords,
          pageSize: calculatedPageSize,
        },
      };
    },       
        
    async Companies(parent: any, args: any, context: any, info: any): Promise<any> {
      const { filter } = args;      
      const _companyService = new CompanyService();
      const data = await _companyService.getCompanies(filter);
      return { data };
    },
    async Rooms(parent: any, args: any, context: any, info: any): Promise<any> {
      const { filter } = args;      
      const _companyService = new CompanyService();
      const data = await _companyService.getCompanyRooms(filter);
      return { data };
    },      
  },
  CompanyType:{
    async rooms(parent: any, args: any, context: any, info: any): Promise<any> {
      const { id } = parent   
      const _companyService = new CompanyService();
      const data = await _companyService.getCompanyRooms({ companyId: id });
      return data;
    },          
  },
  UserType:{
    async companies(parent: any, args: any, context: any, info: any): Promise<any> {
      const { companyIds } = parent   
      const _companyService = new CompanyService();
      const data = await _companyService.getUserCompanies({ companyIds });
      return data;
    },          
  },
  
};
