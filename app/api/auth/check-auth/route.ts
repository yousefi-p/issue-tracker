import { NextResponse } from 'next/server';

export async function GET() {
  // Replace with actual authentication check logic
  const isAuthenticated = true;

  if (isAuthenticated) {
    
    return NextResponse.json({ message: 'Authenticated' });
  } else {
    return NextResponse.json({ message: 'Not authenticated' }, { status: 401 });
  }
}