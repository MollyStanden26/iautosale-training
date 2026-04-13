import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET() {
  const cookieStore = cookies();
  const session = cookieStore.get("training-session");

  if (!session?.value) {
    return NextResponse.json({ user: null });
  }

  try {
    const user = JSON.parse(session.value);
    return NextResponse.json({ user });
  } catch {
    return NextResponse.json({ user: null });
  }
}
