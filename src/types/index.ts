export interface ICustomMetadata {
  title?: string;
  description?: string;
  image?: string;
  date?: string;
  type?: string;
}

export interface IIcon {
  name: string;
  path: string;
  color: string;
  hide?: boolean;
}

export interface Views {
  total: number;
}

export interface GithubRepoGQL {
  id: string;
  name: string;
  description: string;
  url: string;
  homepageUrl: string;
  primaryLanguage: {
    id: string;
    name: string;
    color: string;
  };
}
