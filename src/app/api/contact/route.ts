import { NextResponse } from 'next/server';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const VALID_SUBJECTS = [
  'General Inquiry',
  'Freelance / Contract Work',
  'Job Opportunity',
  'Open Source Collaboration',
  'Speaking / Mentoring',
  'Other',
];

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message, subject } = body as {
      name?: string;
      email?: string;
      message?: string;
      subject?: string;
    };

    if (!name || !email || !message || !subject) {
      return NextResponse.json(
        { success: false, message: 'All fields are required.' },
        { status: 400 },
      );
    }

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Please provide a valid email address.' },
        { status: 400 },
      );
    }

    if (!VALID_SUBJECTS.includes(subject)) {
      return NextResponse.json(
        { success: false, message: 'Please select a valid subject.' },
        { status: 400 },
      );
    }

    // Simulate network / sending delay
    const delay = 300 + Math.random() * 500;
    await new Promise((resolve) => setTimeout(resolve, delay));

    return NextResponse.json({
      success: true,
      message: "Message received! I'll get back to you soon.",
    });
  } catch {
    return NextResponse.json(
      { success: false, message: 'Invalid request body.' },
      { status: 400 },
    );
  }
}