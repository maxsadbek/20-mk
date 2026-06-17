export interface NewsItem {
  id: number;
  title: string;
  description: string;
  date: string;
  image?: string;
}

export interface Teacher {
  id: number;
  name: string;
  subject: string;
  image?: string;
}

export interface Achievement {
  id: number;
  title: string;
  description: string;
  year: string;
}

export interface GalleryItem {
  id: number;
  image: string;
  caption?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}
