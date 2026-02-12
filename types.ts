
export interface Pet {
  id: string;
  name: string;
  age: string;
  breed: string;
  location: string;
  distance: string;
  status: string;
  image: string;
  bio: string;
  temperament: string[];
}

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  badge?: string;
  description: string;
}

export interface Order {
  id: string;
  productName: string;
  date: string;
  price: number;
  status: 'Shipped' | 'Delivered' | 'Pending';
  image: string;
}

export interface MessageThread {
  id: string;
  name: string;
  lastMessage: string;
  time: string;
  avatar: string;
  unreadCount?: number;
  online?: boolean;
}
