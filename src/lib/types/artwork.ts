export interface Artwork {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: ArtworkCategory;
  technique: ArtworkTechnique;
  images: ArtworkImage[];
  location: {
    city: string;
    country: string;
    coordinates?: {
      lat: number;
      lng: number;
    };
  };
  dimensions?: {
    width: number;
    height: number;
    unit: 'cm' | 'm';
  };
  year: number;
  colors: string[]; // Hex color codes
  dominantColor: string;
  orientation: 'landscape' | 'portrait' | 'square';
  featured: boolean;
  views: number;
  likes: number;
  createdAt: string;
  updatedAt: string;
}

export type ArtworkCategory =
  | 'mural'
  | 'street'
  | 'canvas'
  | 'digital'
  | 'commission'
  | 'exhibition';

export type ArtworkTechnique = 'spray' | 'stencil' | 'marker' | 'acrylic' | 'mixed' | 'digital';

export interface ArtworkImage {
  url: string;
  alt: string;
  width: number;
  height: number;
  blurDataURL?: string;
}

export interface ArtworkFilters {
  category?: ArtworkCategory;
  technique?: ArtworkTechnique;
  city?: string;
  color?: string;
  orientation?: 'landscape' | 'portrait' | 'square';
  featured?: boolean;
  year?: number;
}
