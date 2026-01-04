import { User } from './types';
export interface Address {
  id: string;
  name: string;
  street: string;
  city: string;
  postalCode: string;
  country: string;
  phone: string;
  isDefault: boolean;
}
export interface PetProfile {
  id: string;
  name: string;
  species: 'dog' | 'cat' | 'other';
  breed: string;
  age: number;
  dietaryNeeds: string[];
}
export interface UserPreferences {
  newsletter: boolean;
  emailUpdates: boolean;
  emailPromotions: boolean;
  emailBlog: boolean;
  notificationsEmail: boolean;
  notificationsSms: boolean;
  language: string;
  country: string;
}
export interface ExtendedUser extends User {
  phone?: string;
  dateOfBirth?: string;
  avatar?: string;
  addresses: Address[];
  preferences: UserPreferences;
  pets: PetProfile[];
  loyaltyPoints: number;
}
export const mockExtendedUser: ExtendedUser = {
  id: '1',
  name: 'María García',
  email: 'maria@example.com',
  createdAt: new Date('2023-01-15'),
  phone: '+34 600 123 456',
  dateOfBirth: '1990-05-15',
  addresses: [{
    id: '1',
    name: 'Casa',
    street: 'Calle Verde 123, 3º A',
    city: 'Madrid',
    postalCode: '28001',
    country: 'España',
    phone: '+34 600 123 456',
    isDefault: true
  }, {
    id: '2',
    name: 'Oficina',
    street: 'Avenida Principal 45',
    city: 'Madrid',
    postalCode: '28002',
    country: 'España',
    phone: '+34 600 123 456',
    isDefault: false
  }],
  preferences: {
    newsletter: true,
    emailUpdates: true,
    emailPromotions: false,
    emailBlog: true,
    notificationsEmail: true,
    notificationsSms: false,
    language: 'es',
    country: 'ES'
  },
  pets: [{
    id: 'p1',
    name: 'Luna',
    species: 'dog',
    breed: 'Golden Retriever',
    age: 3,
    dietaryNeeds: ['Sin cereales', 'Alto en proteínas']
  }],
  loyaltyPoints: 450
};
export const mockOrders = [{
  id: 'PET-839201',
  date: '2023-10-12',
  status: 'in-transit',
  total: 54.99,
  itemsCount: 3,
  items: [{
    name: 'Comida Natural Perro Adulto',
    quantity: 2,
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1589924691195-41432c84c161?w=200&h=200&fit=crop'
  }, {
    name: 'Snacks Dentales',
    quantity: 1,
    price: 5.01,
    image: 'https://images.unsplash.com/photo-1582798358481-d199fb7347bb?w=200&h=200&fit=crop'
  }],
  shippingAddress: mockExtendedUser.addresses[0],
  paymentMethod: 'Tarjeta ****1234',
  trackingNumber: 'ES123456789'
}, {
  id: 'PET-839155',
  date: '2023-09-28',
  status: 'delivered',
  total: 32.5,
  itemsCount: 1,
  items: [{
    name: 'Champú Hipoalergénico',
    quantity: 1,
    price: 32.5,
    image: 'https://images.unsplash.com/photo-1585202900225-6d3ac20a6962?w=200&h=200&fit=crop'
  }],
  shippingAddress: mockExtendedUser.addresses[0],
  paymentMethod: 'PayPal',
  trackingNumber: 'ES987654321'
}, {
  id: 'PET-838902',
  date: '2023-08-15',
  status: 'delivered',
  total: 89.99,
  itemsCount: 4,
  items: [{
    name: 'Pack Ahorro Gato',
    quantity: 1,
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=200&h=200&fit=crop'
  }],
  shippingAddress: mockExtendedUser.addresses[1],
  paymentMethod: 'Tarjeta ****1234',
  trackingNumber: 'ES456789123'
}];