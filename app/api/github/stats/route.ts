import { getGithubData } from '@/lib/github';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const data = await getGithubData({ includeLanguages: true });
    return NextResponse.json(data);
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : 'An unexpected error occurred';
    console.error('GitHub Stats API Error:', errorMessage);
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
