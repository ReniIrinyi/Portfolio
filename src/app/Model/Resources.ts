export interface Resources {
  categories: Category[];
}

export interface Category {
  name: string;
  header: string;
  resources: Resource[];
}

export interface Resource {
  id: number;
  name: string;
  title: string;
  img: string;
  url: string;
  info: string;
}
