import { getGithubData } from '@/lib/github';
import axios from 'axios';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // AboutGithub.tsx needs languages, so include them
    const data = await getGithubData({ includeLanguages: true });
    return NextResponse.json(data);
  } catch (error: unknown) {
    let errorMessage = 'An unexpected error occurred';
    let statusCode = 500;

    if (axios.isAxiosError(error)) {
      errorMessage = error.message;
      statusCode = error.response?.status || 500;
    } else if (error instanceof Error) {
      errorMessage = error.message;
    }

    console.error('GitHub Stats API Error:', errorMessage);
    return NextResponse.json({ error: errorMessage }, { status: statusCode });
  }
}
