export interface Project {
  id: string | number;
  slug: string;
  title: string;
  description: string;
  tech: string[];
  demo: string;
  github: string;
  image: string;
  image2: string;
  image3?: string;
  video: string;
}