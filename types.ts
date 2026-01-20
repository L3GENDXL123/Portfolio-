export interface ServiceCard {
  title: string;
  description: string;
  icon: string;
}

export interface ProjectItem {
  id: number;
  title: string;
  category: string;
  image: string;
}

export interface UserProfile {
  name: string;
  email: string;
  accountType: 'person' | 'company';
  industry: string;
}