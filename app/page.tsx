// app/page.tsx
'use client';

import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white p-10">
      <h1 className="text-3xl font-bold mb-6">Bienvenue sur Scrumy</h1>
      <button
        onClick={() => router.push('/create')}
        className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
      >
        Créer un projet
      </button>
    </main>
  );
}