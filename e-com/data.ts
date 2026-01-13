type Products={
  id: number;
  name: string;
  description: string;
  category: 'men' | 'women' | 'kids';
  size: 's' | 'm' | 'l' | 'xl';
  img?: string;
  price: number;
  prev_price?: number;
  popularity: number;
  arrivalDate: string;
  discount?: number;
};

type ProductsData = Products[];

export const productsData: ProductsData = [
  {
    id: 1,
    name: 'Men\'s T-Shirt',
    description: 'A comfortable cotton t-shirt for men.',
    category: 'men',
    size: 'm',
    img: '/f1.jpg',
    price: 19.99,
    prev_price: 24.99,
    popularity: 85,
    arrivalDate: '2025-05-01',
    discount: 20,
  },
  {
    id: 2,
    name: 'Women\'s Dress',
    description: 'A stylish summer dress for women.',
    category: 'women',
    size: 's',
    img: '/f2.jpg',
    price: 49.99,
    prev_price: 59.99,
    popularity: 90,
    arrivalDate: '2025-04-15',
    discount: 15,
  },
  {
    id: 3,
    name: 'Kids\' Sneakers',
    description: 'Comfortable sneakers for kids.',
    category: 'kids',
    size: 'l',
    img: '/f4.jpg',
    price: 29.99,
    prev_price: 34.99,
    popularity: 75,
    arrivalDate: '2025-04-20',
    discount: 10,
  },
  {
    id: 4,
    name: 'Men\'s Jeans',
    description: 'Classic blue jeans for men.',
    category: 'men',
    size: 'l',
    img: '/f3.jpg',
    price: 39.99,
    prev_price: 49.99,
    popularity: 80,
    arrivalDate: '2025-03-30',
    discount: 25,
  },
  {
    id: 5,
    name: 'Women\'s Handbag',
    description: 'A trendy handbag for women.',
    category: 'women',
    size: 'm',
    img: '/f5.jpg',
    price: 34.99,
    prev_price: 39.99,
    popularity: 70,
    arrivalDate: '2025-04-10',
    discount: 12,
  },
  {
    id: 6,
    name: 'Kids\' Jacket',
    description: 'A warm jacket for kids.',
    category: 'kids',
    size: 'l',
    img: '/f6.jpg',
    price: 24.99,
    popularity: 65,
    arrivalDate: '2025-04-25',
    
  }
];