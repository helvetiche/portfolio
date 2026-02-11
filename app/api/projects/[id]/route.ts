import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/firebase-admin';

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const body = await request.json();
    const { id } = await params;

    const { title, description, tags, github, live, imageUrl } = body;

    if (!title || !description) {
      return NextResponse.json({ error: 'missing required fields' }, { status: 400 });
    }

    const updateData = {
      title,
      description,
      tags: tags || [],
      github: github || '',
      live: live || '',
      imageUrl: imageUrl || '',
      updatedAt: new Date().toISOString()
    };

    await db.collection('projects').doc(id).update(updateData);

    return NextResponse.json({ 
      success: true, 
      project: { id, ...updateData }
    });
  } catch (error) {
    console.error('Error updating project:', error);
    return NextResponse.json({ error: 'server is broken' }, { status: 500 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    
    await db.collection('projects').doc(id).delete();

    return NextResponse.json({ success: true, id });
  } catch (error) {
    console.error('Error deleting project:', error);
    return NextResponse.json({ error: 'server is broken' }, { status: 500 });
  }
}
