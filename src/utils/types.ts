export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  subcategory: string;
  petType: 'dog' | 'cat' | 'both';
  ageGroup: 'puppy' | 'kitten' | 'adult' | 'senior' | 'all';
  specialNeeds?: string[];
  benefits: string[];
  ingredients: string[];
  sustainability: string;
  weight: string;
  inStock: boolean;
  stock?: number;
  featured?: boolean;
  rating?: number;
  reviewCount?: number;
  isNew?: boolean;
  discount?: number;

  // Enhanced nutritional information
  nutritionalInfo?: {
    crudeProtein: string;
    crudeFat: string;
    crudeFiber: string;
    crudeAsh: string;
    moisture: string;
    calcium?: string;
    phosphorus?: string;
    omega3?: string;
    omega6?: string;
    taurine?: string;
    glucosamine?: string;
    chondroitin?: string;
    kcalPer100g?: number;
  };

  // Detailed feeding guide
  feedingGuide?: {
    petType: 'dog' | 'cat';
    guidelines: Array<{
      weightRange: string;
      dailyAmount: string;
      meals?: string;
    }>;
    notes?: string[];
  };

  // Quality certifications
  certifications?: string[];

  // Manufacturing details
  manufacturingInfo?: {
    madeIn: string;
    batchTracking: boolean;
    shelfLife: string;
    storageInstructions: string;
  };

  // Detailed ingredient breakdown
  ingredientDetails?: Array<{
    name: string;
    percentage?: string;
    purpose: string;
    benefits: string[];
  }>;
}
export interface CartItem {
  product: Product;
  quantity: number;
}
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  createdAt: Date;
}
export interface Notification {
  id: string;
  type: 'success' | 'error' | 'info' | 'warning';
  message: string;
  timestamp: number;
}
export interface CustomerData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
  province: string;
}
export interface ShippingMethod {
  id: string;
  name: string;
  description: string;
  price: number;
  estimatedDays: string;
  sustainable?: boolean;
}
export interface Order {
  id: string;
  items: CartItem[];
  customer: CustomerData;
  shipping: ShippingMethod;
  subtotal: number;
  tax: number;
  total: number;
  paymentMethod: string;
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered';
  createdAt: Date;
}
export const shippingMethods: ShippingMethod[] = [{
  id: 'standard',
  name: 'Envío Estándar',
  description: 'Entrega en 48-72 horas laborables',
  price: 4.99,
  estimatedDays: '2-3 días'
}, {
  id: 'express',
  name: 'Envío Exprés',
  description: 'Entrega en 24 horas laborables',
  price: 9.99,
  estimatedDays: '1 día'
}, {
  id: 'eco',
  name: 'Envío Ecológico',
  description: 'Entrega agrupada con huella de carbono compensada',
  price: 3.99,
  estimatedDays: '3-5 días',
  sustainable: true
}];
export const paymentMethods = [{
  id: 'card',
  name: 'Tarjeta de Crédito/Débito',
  icon: 'CreditCard'
}, {
  id: 'paypal',
  name: 'PayPal',
  icon: 'Wallet'
}, {
  id: 'transfer',
  name: 'Transferencia Bancaria',
  icon: 'Building'
}];