export default `
                            # PaginationType describes the pagination information for a data set.
  type PaginationType {
    totalOfPage: Int        # The total number of pages available.
    page: Int               # The current page number.
    totalOfRecord: Int      # The total number of records in the data set.
    pageSize: Int           # The number of records displayed on each page.
  }  
 
  type UsersResponseType {
    data: [UserType]
    meta: PaginationType  # Metadata containing pagination information.
  }

  type UserType {
    id: Int
    username: String
    companies: [CompanyType]
  }

  type CompaniesResponseType {
    data: [CompanyType]
  }

  type RoomType {
    id: Int
    name: String
  }

  type CompanyType {
    id: Int
    name: String
    rooms: [RoomType]
  }
  
  type RoomsResponseType {
    data: [RoomType]
  }

  input RoomFilterInput {    
    name: String
  }

  input CompanyFilterInput {    
    name: String
  }

  type Query {
    Companies(filter: CompanyFilterInput): CompaniesResponseType
    Rooms(filter: RoomFilterInput): RoomsResponseType
    Users(page: Int, pageSize: Int): UsersResponseType
  }
`;
