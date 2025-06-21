'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

interface Project {
  name: string;
  code: string;
  participants: { name: string; roles: string[] }[];
}

export default function ProjectPage() {
  const { code } = useParams();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof code !== 'string') return;

    fetch(`/api/project/${code}`)
      .then((res) => res.ok ? res.json() : null)
      .then((data) => {
        setProject(data);
        setLoading(false);
      });
  }, [code]);

  if (loading) return <div className="p-8">Chargement…</div>;
  if (!project) return <div className="p-8 text-red-500">Projet introuvable avec le code : {String(code)}</div>;

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-4">Projet : {project.name}</h1>
      <p className="text-gray-600 mb-2">Code : <span className="font-mono bg-gray-200 px-2 py-1 rounded">{project.code}</span></p>

      <section className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Participants</h2>
        {project.participants.length === 0 ? (
          <p className="text-gray-500 italic">Aucun participant pour l’instant</p>
        ) : (
          <ul className="list-disc pl-5">
            {project.participants.map((p, index) => (
              <li key={index}>{p.name} ({p.roles.join(', ')})</li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}