'use client';

import { useState, useEffect } from 'react';
import { createBrowserClient } from '@supabase/ssr';

export default function Home() {
  const [user, setUser] = useState(null);

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      if (data?.user) {
        setUser(data.user);
      }
    };
    getUser();
  }, []);

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">Welcome to LaunchFlow.ai 👋</h1>
      {user ? (
        <p className="mt-4">Logged in as <strong>{user.email}</strong></p>
      ) : (
        <p className="mt-4">You are not logged in. <a href="/login" className="text-blue-600 underline">Go to login</a></p>
      )}
    </main>
  );
}
