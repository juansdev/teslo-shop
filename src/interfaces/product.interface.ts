export interface IProduct {
  id: string;
  description: string;
  images: string[];
  inStock: number;
  price: number;
  sizes: ISize[];
  slug: string;
  tags: string[];
  title: string;
  // type: IType;
  gender: ICategory
}

export type ICategory = 'men' | 'women' | 'kid' | 'unisex';
export type ISize = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL' | 'XXXL';
export type IType = 'shirts' | 'pants' | 'hoodies' | 'hats';