import { client } from '@/sanity/lib/client';

export interface Pen {
  id: string; // The Sanity document ID
  title: string;
  description?: string;
  url: string;
}

export const getBestPens = async (): Promise<Pen[]> => {
  try {
    const query = `*[_type == "codepen"] | order(_createdAt desc) {
      "id": _id,
      title,
      description,
      url
    }`;

    const pens = await client.fetch<Pen[]>(query);
    return pens;
  } catch (error) {
    console.error('Failed to fetch CodePen data:', error);
    return [];
  }
};
