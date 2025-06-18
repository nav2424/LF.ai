'use client';

import { useState, useEffect } from 'react';
import { createBrowserClient } from '@supabase/ssr';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();

      if (!data?.user) {
        router.push('/login');
      } else {
        setUser(data.user);
        setLoading(false);
      }
    };

    getUser();
  }, []);

  if (loading) return <p className="p-8 text-lg">Loading your dashboard...</p>;

  return (
    <main className="p-8 space-y-6">
      <h1 className="text-3xl font-bold">Welcome back, {user.user_metadata?.name || 'Entrepreneur'} 👋</h1>
      <p className="text-gray-600">Logged in as: <strong>{user.email}</strong></p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <section className="p-6 border rounded-lg shadow-sm bg-white">
          <h2 className="text-xl font-semibold">🚀 Strategy</h2>
          <p className="text-sm text-gray-600">AI-powered plan based on your goals.</p>
        </section>

        <section className="p-6 border rounded-lg shadow-sm bg-white">
          <h2 className="text-xl font-semibold">🛠 Build</h2>
          <p className="text-sm text-gray-600">Generate landing pages and digital products.</p>
        </section>

        <section className="p-6 border rounded-lg shadow-sm bg-white">
          <h2 className="text-xl font-semibold">📣 Marketing</h2>
          <p className="text-sm text-gray-600">Launch multi-platform campaigns.</p>
        </section>

        <section className="p-6 border rounded-lg shadow-sm bg-white">
          <h2 className="text-xl font-semibold">💰 Monetize</h2>
          <p className="text-sm text-gray-600">Set up payments and track income goals.</p>
        </section>
      </div>
    </main>
  );
}
