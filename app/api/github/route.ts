import axios from 'axios';
import { NextResponse } from 'next/server';

// Allowlist of path prefixes that are safe to proxy to GitHub API
const ALLOWED_PATH_PREFIXES = [
  '/users/',
  '/repos/',
  '/search/',
  '/orgs/',
  '/gists/',
];

function isAllowedPath(path: string): boolean {
  return ALLOWED_PATH_PREFIXES.some((prefix) => path.startsWith(prefix));
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const path = searchParams.get('path');

  if (!path) {
    return NextResponse.json(
      { error: 'Path parameter is required' },
      { status: 400 }
    );
  }

  // SSRF protection: only allow known safe GitHub API path prefixes
  if (!isAllowedPath(path)) {
    return NextResponse.json({ error: 'Path not allowed' }, { status: 403 });
  }

  const token = process.env.GITHUB_TOKEN;

  if (!token) {
    return NextResponse.json(
      { error: 'GitHub token not configured' },
      { status: 500 }
    );
  }

  // Forward only safe query params (strip 'path' itself)
  const queryParams = Object.fromEntries(searchParams.entries());
  delete queryParams.path;

  try {
    const response = await axios.get(`https://api.github.com${path}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/vnd.github.v3+json',
      },
      params: queryParams,
    });

    return NextResponse.json(response.data);
  } catch (error: unknown) {
    let errorMessage = 'An unexpected error occurred';
    let statusCode = 500;

    if (axios.isAxiosError(error)) {
      errorMessage = error.message;
      statusCode = error.response?.status || 500;
    } else if (error instanceof Error) {
      errorMessage = error.message;
    }

    console.error('GitHub API Error:', errorMessage);
    return NextResponse.json({ error: errorMessage }, { status: statusCode });
  }
}
