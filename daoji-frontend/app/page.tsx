import directus from '@/lib/directus';
import { readItems } from '@directus/sdk';

export default async function Home() {
  // Fetch all published posts from your AliCloud backend
  const posts = await directus.request(
    readItems('posts', {
      filter: { status: { _eq: 'published' } },
      sort: ['-date_created'], // Sort by newest first
    })
  );

  return (
    <main className="p-10 font-sans max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Daoji CMS Connection Test</h1>
      
      <div className="grid gap-6">
        {posts.map((post) => (
          <div key={post.id} className="border border-gray-200 p-6 rounded-xl shadow-sm bg-white">
            <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
            <div className="flex gap-2 mb-4">
              <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs uppercase tracking-wide">
                {post.section}
              </span>
              {post.is_pinned && (
                <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs uppercase tracking-wide">
                  Pinned
                </span>
              )}
            </div>

            {/* Display Event Details if it's an event */}
            {post.is_event && post.event_dates && (
              <div className="bg-blue-50 border border-blue-100 text-blue-800 p-4 rounded-lg mb-4">
                <strong>Event Dates:</strong> {post.event_dates.join(', ')}
                {post.event_venue && <div className="mt-1"><strong>Venue:</strong> {post.event_venue}</div>}
              </div>
            )}

            {/* Note: We will use a proper Markdown renderer later */}
            <div className="text-gray-600 line-clamp-3">
              {post.content}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}