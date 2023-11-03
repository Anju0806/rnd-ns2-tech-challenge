import { CompanyService } from "../service";
export default {
  Query: {
    async Users(parent: any, args: any, context: any, info: any): Promise<any> {
      const { page = 1, pageSize, filter } = args;
      const _companyService = new CompanyService();
    
      // Fetch the total number of users (totalRecords)
      const totalRecords = await _companyService.countUsers(filter);
    
      // Determine the pageSize
      const calculatedPageSize = pageSize ? pageSize : totalRecords;
    
      // Calculate the start and end indexes for pagination
      const startIndex = (page - 1) * calculatedPageSize;
      const endIndex = page * calculatedPageSize;
    
      // Fetch users for the current page with pagination
      const data = await _companyService.getUsersWithPagination(startIndex, endIndex, filter);
    
      // Calculate the total number of pages (totalOfPage)
      const totalOfPage = Math.ceil(totalRecords / calculatedPageSize);
    
      return {
        data,
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
