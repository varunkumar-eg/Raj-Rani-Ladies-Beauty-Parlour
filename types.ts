
export interface Service {
  id: string;
  title: string;
  description: string;
  category: 'Hair' | 'Skin' | 'Makeup' | 'Other';
  price?: string;
  imageUrl: string;
}

export interface Testimonial {
  id: number;
  name: string;
  text: string;
  rating: number;
}
