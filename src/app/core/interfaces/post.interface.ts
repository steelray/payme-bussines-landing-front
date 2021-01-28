export interface IPost {
  slug: string;
  title: string;
  author: IPostAuthor,
  tags: IPostTag[],
  pictures: string[]
  published_at: number;
  description?: string;
  content?: string;
}

export interface IPostAuthor {
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface IPostTag {
  title: string;
}

export interface IPostQueryParams {
  q?: string;
  page?: number;
  limit?: number;
}