export interface IProductList {
  products: IProduct[];
}

export type IProduct = Readonly<{
  product_id: string;
  name: string;
  price: number;
  image: string;
}>;

export type IProductWithDesc = IProduct & Readonly<{
  description?: string
}>
