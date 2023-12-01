import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

export const client = createClient({
  projectId: import.meta.env.VITE_REACT_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_REACT_SANITY_DB,
  apiVersion: import.meta.env.VITE_REACT_SANITY_API_VERSION,
  useCdn: true,
  token: import.meta.env.VITE_REACT_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source: SanityImageSource): string =>
  builder.image(source) as unknown as string;
