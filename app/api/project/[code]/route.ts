// app/api/project/[code]/route.ts
import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET(_: Request, { params }: { params: { code: string } }) {
  const project = await prisma.project.findUnique({
    where: { code: params.code },
    include: { participants: true },
  });

  if (!project) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }

  return NextResponse.json(project);
}