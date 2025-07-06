// Shared types/interfaces across the app

export interface Listing {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  price?: number;
  location?: string;
  createdAt?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
}
