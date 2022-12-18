export interface Category {
  id: string,
  name: string
}

export interface Product {
    id: string,
    title: string,
    price: number,
    images: string[],
    description: string,
    category: Category,
}


export interface CreateProductDTO extends Omit<Product, 'id' | 'category'>{
  categoryId: number,
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface UpdateProductDTO extends Partial<CreateProductDTO>{
  // title?: string,
  // price?: number,
  // images?: string[],
  // description?: string,
  // categoryId?: number,
}
