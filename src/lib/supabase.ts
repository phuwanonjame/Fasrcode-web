import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Project = {
  id: string;
  title: string;
  description: string;
  category: string;
  status: string;
  github_url?: string;
  demo_url?: string;
  image_url?: string;
  tech_stack: string[];
  is_public: boolean;
  created_at: string;
  updated_at: string;
};

export type TeamMember = {
  id: string;
  full_name: string;
  role: string;
  expertise: string[];
  bio?: string;
  avatar_url?: string;
  github_url?: string;
  linkedin_url?: string;
  is_visible: boolean;
  joined_at: string;
  created_at: string;
};

export type Announcement = {
  id: string;
  title: string;
  content: string;
  priority: string;
  author_id?: string;
  expires_at?: string;
  created_at: string;
};

export type QuickTool = {
  id: string;
  name: string;
  description: string;
  url: string;
  icon: string;
  category: string;
  order: number;
  created_at: string;
};
