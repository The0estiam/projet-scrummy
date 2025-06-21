// app/api/project/route.ts
import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const body = await req.json()
  const { name, code } = body

  if (!name || !code) {
    return NextResponse.json({ error: 'Missing name or code' }, { status: 400 })
  }

  const project = await prisma.project.create({
    data: {
      name,
      code,
    },
  })

  return NextResponse.json(project)
}