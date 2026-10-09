export interface ProjectItem {
  id: string;
  number: string;
  name: string;
  category: 'Client' | 'Personal';
  col1TopImage: string;
  col1BottomImage: string;
  col2Image: string;
  description: string;
  year: string;
  tools: string[];
  liveUrl?: string;
}

export interface ServiceItem {
  number: string;
  title: string;
  description: string;
}
