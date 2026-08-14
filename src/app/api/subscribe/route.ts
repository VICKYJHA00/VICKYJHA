import { NextRequest, NextResponse } from 'next/server';

function isValidEmail(email: string): boolean {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body as { email?: string };

    if (!email || typeof email !== 'string' || !isValidEmail(email.trim())) {
      return NextResponse.json(
        { success: false, message: 'A valid email address is required.' },
        { status: 400 },
      );
    }

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    return NextResponse.json({
      success: true,
      message: 'Subscribed!',
    });
  } catch {
    return NextResponse.json(
      { success: false, message: 'Something went wrong.' },
      { status: 400 },
    );
  }
}
