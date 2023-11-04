import DataLoader from 'dataloader';
import { CompanyService } from "../service"; 

// Create a batch loading function for companies
async function batchLoadCompanies(companyIds: any) {
  
  const _companyService = new CompanyService();
  const companies = await _companyService.getUserCompanies({ companyIds });

  // Organize the companies in the order of the provided IDs
  const companyMap = new Map();
  companies.forEach((company: any) => {
    companyMap.set(company._id.toString(), company);
  });

  // Return companies in the same order as the input IDs
  return companyIds.map((companyId: any) => companyMap.get(companyId.toString()));
}

// Create a DataLoader instance for companies
const companyLoader = new DataLoader(batchLoadCompanies);

export default companyLoader;
