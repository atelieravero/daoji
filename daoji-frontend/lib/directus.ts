import { createDirectus, rest } from '@directus/sdk';

// 1. Define your Collection Types for strict TypeScript autocomplete
interface Post {
  id: number;
  status: string;
  section: string;
  sort: number | null;
  title: string;
  content: string;
  cover_image: string | null;
  is_pinned: boolean;
  is_event: boolean;
  event_dates: string[] | null;
  event_venue: string | null;
  event_url: string | null;
  date_created: string;
  date_updated: string;
}

interface Schema {
  posts: Post[];
}

// 2. Initialize the client securely
const directus = createDirectus<Schema>(process.env.NEXT_PUBLIC_DIRECTUS_URL as string).with(rest());

export default directus;