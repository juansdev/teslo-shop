export interface IPaginationOptions {
  page?: number;
  take?: number;
}

export interface IOptions {
  where?: {
    [key: string]: string;
  },
  paginationOptions: IPaginationOptions
}