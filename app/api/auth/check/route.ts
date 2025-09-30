import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const { userId } = await auth();
    
    return NextResponse.json({
      authenticated: !!userId,
      userId: userId || null,
      timestamp: new Date().toISOString(),
    });
  } catch {
    return NextResponse.json(
      { error: "Authentication check failed", authenticated: false },
      { status: 500 }
    );
  }
}