import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/firebase-admin';

export async function GET() {
  try {
    const projectsRef = db.collection('projects');
    const snapshot = await projectsRef.get();
    
    const projects = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    return NextResponse.json({ projects });
  } catch (error) {
    console.error('Error fetching projects:', error);
    return NextResponse.json({ error: 'server is broken' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const { title, description, tags, github, live, imageUrl } = body;

    if (!title || !description) {
      return NextResponse.json({ error: 'missing required fields' }, { status: 400 });
    }

    const projectData = {
      title,
      description,
      tags: tags || [],
      github: github || '',
      live: live || '',
      imageUrl: imageUrl || '',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    const docRef = await db.collection('projects').add(projectData);

    return NextResponse.json({ 
      success: true, 
      project: { id: docRef.id, ...projectData }
    });
  } catch (error) {
    console.error('Error creating project:', error);
    return NextResponse.json({ error: 'server is broken' }, { status: 500 });
  }
}
