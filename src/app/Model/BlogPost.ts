export interface BlogPost {
  id: number;
  date: Date;
  name: string;
  url?: string; // Optional property
  url2?: string; // Optional property
  mockup: string;
  header: string;
  img?: string; // Optional property
  img2?: string; // Optional property
  short: string;
  text: string;
  conclusion: string;
}
