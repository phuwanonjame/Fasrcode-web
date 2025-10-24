/*
  # FastCode Database Schema

  ## Overview
  This migration creates the core schema for the FastCode internal office website,
  supporting project management, team profiles, announcements, and authentication.

  ## New Tables

  ### 1. `projects`
  Stores information about POS and cloud-based projects built by FastCode.
  - `id` (uuid, primary key) - Unique identifier
  - `title` (text) - Project name
  - `description` (text) - Project description
  - `category` (text) - e.g., "POS Cloud", "Inventory", "Payment API"
  - `status` (text) - "active", "maintenance", "archived"
  - `github_url` (text, nullable) - Link to GitHub repository
  - `demo_url` (text, nullable) - Link to live demo
  - `image_url` (text, nullable) - Project screenshot/thumbnail
  - `tech_stack` (text[], array) - Technologies used
  - `is_public` (boolean) - Whether visible on public projects page
  - `created_at` (timestamptz) - Creation timestamp
  - `updated_at` (timestamptz) - Last update timestamp

  ### 2. `team_members`
  Stores profiles of FastCode team members.
  - `id` (uuid, primary key) - Links to auth.users
  - `full_name` (text) - Member's full name
  - `role` (text) - Job title/role
  - `expertise` (text[], array) - Areas of expertise
  - `bio` (text, nullable) - Short biography
  - `avatar_url` (text, nullable) - Profile photo URL
  - `github_url` (text, nullable) - GitHub profile
  - `linkedin_url` (text, nullable) - LinkedIn profile
  - `is_visible` (boolean) - Whether shown on public team page
  - `joined_at` (timestamptz) - Date joined FastCode
  - `created_at` (timestamptz) - Creation timestamp

  ### 3. `announcements`
  Internal announcements for the office hub/dashboard.
  - `id` (uuid, primary key) - Unique identifier
  - `title` (text) - Announcement title
  - `content` (text) - Announcement body
  - `priority` (text) - "low", "medium", "high"
  - `author_id` (uuid) - References team_members(id)
  - `expires_at` (timestamptz, nullable) - Optional expiration date
  - `created_at` (timestamptz) - Creation timestamp

  ### 4. `quick_tools`
  Links to internal tools and resources for the dashboard.
  - `id` (uuid, primary key) - Unique identifier
  - `name` (text) - Tool name
  - `description` (text) - Tool description
  - `url` (text) - Tool URL
  - `icon` (text) - Icon name (lucide-react)
  - `category` (text) - Tool category
  - `order` (integer) - Display order
  - `created_at` (timestamptz) - Creation timestamp

  ## Security

  ### RLS Policies
  All tables have Row Level Security enabled with appropriate policies:
  
  - **projects**: Public read for public projects, authenticated read for all, authenticated write for internal use
  - **team_members**: Public read for visible members, authenticated users can read all and update own profile
  - **announcements**: Authenticated read only (internal dashboard)
  - **quick_tools**: Authenticated read only (internal dashboard)

  ## Notes
  - All timestamps use `timestamptz` for proper timezone handling
  - Arrays used for tech_stack and expertise for flexible storage
  - Foreign keys ensure referential integrity
  - Default values prevent null issues
*/

-- Create projects table
CREATE TABLE IF NOT EXISTS projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  category text NOT NULL,
  status text NOT NULL DEFAULT 'active',
  github_url text,
  demo_url text,
  image_url text,
  tech_stack text[] DEFAULT '{}',
  is_public boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create team_members table
CREATE TABLE IF NOT EXISTS team_members (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name text NOT NULL,
  role text NOT NULL,
  expertise text[] DEFAULT '{}',
  bio text,
  avatar_url text,
  github_url text,
  linkedin_url text,
  is_visible boolean DEFAULT true,
  joined_at timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now()
);

-- Create announcements table
CREATE TABLE IF NOT EXISTS announcements (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  content text NOT NULL,
  priority text NOT NULL DEFAULT 'medium',
  author_id uuid REFERENCES team_members(id) ON DELETE SET NULL,
  expires_at timestamptz,
  created_at timestamptz DEFAULT now()
);

-- Create quick_tools table
CREATE TABLE IF NOT EXISTS quick_tools (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text NOT NULL,
  url text NOT NULL,
  icon text NOT NULL DEFAULT 'link',
  category text NOT NULL,
  "order" integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS on all tables
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE team_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE announcements ENABLE ROW LEVEL SECURITY;
ALTER TABLE quick_tools ENABLE ROW LEVEL SECURITY;

-- Projects policies
CREATE POLICY "Public projects visible to everyone"
  ON projects FOR SELECT
  USING (is_public = true);

CREATE POLICY "Authenticated users can view all projects"
  ON projects FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert projects"
  ON projects FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update projects"
  ON projects FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete projects"
  ON projects FOR DELETE
  TO authenticated
  USING (true);

-- Team members policies
CREATE POLICY "Visible team members shown to everyone"
  ON team_members FOR SELECT
  USING (is_visible = true);

CREATE POLICY "Authenticated users can view all team members"
  ON team_members FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Users can insert own profile"
  ON team_members FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON team_members FOR UPDATE
  TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

-- Announcements policies
CREATE POLICY "Authenticated users can view announcements"
  ON announcements FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can create announcements"
  ON announcements FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update announcements"
  ON announcements FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete announcements"
  ON announcements FOR DELETE
  TO authenticated
  USING (true);

-- Quick tools policies
CREATE POLICY "Authenticated users can view quick tools"
  ON quick_tools FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can manage quick tools"
  ON quick_tools FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update quick tools"
  ON quick_tools FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete quick tools"
  ON quick_tools FOR DELETE
  TO authenticated
  USING (true);

-- Insert sample data for projects
INSERT INTO projects (title, description, category, status, github_url, tech_stack, is_public) VALUES
('POS Cloud', 'Cloud-based point of sale system with real-time inventory sync and analytics dashboard', 'POS Cloud', 'active', 'https://github.com/fastcode/pos-cloud', ARRAY['React', 'Node.js', 'PostgreSQL', 'Redis'], true),
('Inventory Manager', 'Advanced inventory management system with predictive analytics and automated ordering', 'Inventory', 'active', 'https://github.com/fastcode/inventory-manager', ARRAY['Next.js', 'TypeScript', 'Supabase'], true),
('Payment API', 'Unified payment processing API supporting multiple providers and currencies', 'Payment API', 'active', 'https://github.com/fastcode/payment-api', ARRAY['Node.js', 'Express', 'Stripe', 'PayPal'], true),
('Kitchen Display System', 'Real-time kitchen order management for restaurants', 'POS Cloud', 'active', 'https://github.com/fastcode/kds', ARRAY['React', 'Socket.io', 'MongoDB'], true),
('Customer Loyalty Platform', 'Comprehensive loyalty and rewards system for businesses', 'Customer', 'maintenance', 'https://github.com/fastcode/loyalty', ARRAY['Vue.js', 'Python', 'Django'], true);

-- Insert sample data for quick tools
INSERT INTO quick_tools (name, description, url, icon, category, "order") VALUES
('POS Dev Environment', 'Access development environment for POS Cloud', 'https://dev.fastcode.io', 'code', 'Development', 1),
('API Documentation', 'Complete API docs for all FastCode services', 'https://docs.fastcode.io', 'book-open', 'Documentation', 2),
('Design System', 'FastCode UI component library and guidelines', 'https://design.fastcode.io', 'palette', 'Design', 3),
('Monitoring Dashboard', 'Real-time system health and performance metrics', 'https://monitor.fastcode.io', 'activity', 'Operations', 4),
('Team Wiki', 'Internal knowledge base and documentation', 'https://wiki.fastcode.io', 'library', 'Documentation', 5);
