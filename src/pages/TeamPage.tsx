import { useEffect, useState } from 'react';
import { supabase, TeamMember } from '../lib/supabase';
import { TeamCard } from '../components/TeamCard';
import { Users } from 'lucide-react';

export function TeamPage() {
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadTeamMembers();
  }, []);

  const loadTeamMembers = async () => {
    setLoading(true);
    
    // 1. Fetch data from Supabase
    const { data, error } = await supabase
      .from('team_members')
      .select('*')
      .eq('is_visible', true)
      .order('joined_at', { ascending: true });

    if (error) {
      console.error('Error loading team members:', error);
      setLoading(false);
      return;
    }
    
    // 2. Define the new members to be added client-side
   const newMembers: TeamMember[] = [
  {
    id: 'temp-tangpanitan-id',
    full_name: 'Tangpanitan Spt',
    role: 'CEO/CEO',
    is_visible: true,
    joined_at: new Date('2023-01-01').toISOString(),
    avatar_url: undefined,
    expertise: ['Leadership', 'Business Development'],
    created_at: new Date().toISOString(),
  },
  {
    id: 'temp-phuwanon-id',
    full_name: 'Phuwanon Kaewdang',
    role: 'Full Stack Developer',
    is_visible: true,
    joined_at: new Date('2023-03-15').toISOString(),
    avatar_url: undefined,
    expertise: ['React', 'Node.js', 'Database Management', 'Cloud Deployment'],
    created_at: new Date().toISOString(),
  },
  {
    id: 'temp-yanisa-id',
    full_name: 'Yanisa Yaswanwilai',
    role: 'Programmer',
    is_visible: true,
    joined_at: new Date('2023-05-20').toISOString(), // 📅 You can adjust the date if needed
    avatar_url: undefined,
    expertise: ['JavaScript', 'TypeScript', 'React', 'RESTful APIs'],
    created_at: new Date().toISOString(),
  },
];

    if (data) {
      // 3. Combine fetched data with new members
      const combinedMembers = [...data, ...newMembers];
      
      // Re-sort the combined list to maintain the 'joined_at' order
      combinedMembers.sort((a, b) => new Date(a.joined_at).getTime() - new Date(b.joined_at).getTime());

      setMembers(combinedMembers);
    }
    
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-sm font-medium text-blue-600 dark:text-blue-400 mb-6">
            <Users className="w-4 h-4" />
            Meet the Team
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            The People Behind FastCode
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Our diverse team of talented developers, designers, and innovators working together to build exceptional POS solutions
          </p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div
                key={i}
                className="h-96 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 animate-pulse"
              />
            ))}
          </div>
        ) : members.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {members.map(member => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Team members information coming soon
            </p>
          </div>
        )}
      </div>
    </div>
  );
}