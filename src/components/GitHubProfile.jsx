import { useState, useEffect } from 'react';

const GitHubProfile = () => {
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const username = 'wadangkaa' // Replace with your GitHub username

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const [profileRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`),
          fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`)
        ]);

        const profileData = await profileRes.json();
        const reposData = await reposRes.json();

        setProfile(profileData);
        setRepos(reposData);
      } catch (error) {
        console.error('Error fetching GitHub data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-slate-900"></div>
      </div>
    );
  }

  return (
    <section className="py-32 bg-gradient-to-br from-black/50 to-slate-900/50 backdrop-blur-sm text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">
          GitHub <span className="text-blue-400">Activity</span>
        </h2>
        
        {profile && (
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 p-6 rounded-xl backdrop-blur-sm mb-8">
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <img 
                  src={profile.avatar_url} 
                  alt={profile.name} 
                  className="w-24 h-24 rounded-full"
                />
                <div className="text-center sm:text-left">
                  <h3 className="text-2xl font-bold text-white">{profile.name}</h3>
                  <p className="text-slate-300">{profile.bio}</p>
                  <div className="flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-6 mt-3">
                    <div>
                      <span className="font-semibold text-white">{profile.public_repos}</span>
                      <span className="text-slate-300 ml-1">Repositories</span>
                    </div>
                    <div>
                      <span className="font-semibold text-white">{profile.followers}</span>
                      <span className="text-slate-300 ml-1">Followers</span>
                    </div>
                    <div>
                      <span className="font-semibold text-white">{profile.following}</span>
                      <span className="text-slate-300 ml-1">Following</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {repos.map((repo) => (
                <a 
                  key={repo.id} 
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/5 p-6 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                >
                  <h4 className="text-lg font-semibold mb-2 break-words">{repo.name}</h4>
                  <p className="text-slate-300 text-sm mb-4 break-words">{repo.description}</p>
                  <div className="flex flex-wrap items-center gap-4">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full mr-1" 
                           style={{ backgroundColor: repo.language ? '#' : '#ddd' }}></div>
                      <span className="text-sm text-slate-300">{repo.language || 'No language'}</span>
                    </div>
                    <div className="flex items-center">
                      <i className="far fa-star mr-1"></i>
                      <span className="text-sm text-slate-300">{repo.stargazers_count}</span>
                    </div>
                    <div className="flex items-center">
                      <i className="fas fa-code-branch mr-1"></i>
                      <span className="text-sm text-slate-300">{repo.forks_count}</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <div className="text-center mt-8">
              <a 
                href={`https://github.com/${username}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-slate-300 hover:text-blue-400 transition-colors"
              >
                View All Repositories
                <i className="fas fa-arrow-right ml-2"></i>
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GitHubProfile; 