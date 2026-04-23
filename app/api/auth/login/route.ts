import { NextResponse } from "next/server";

const TRAINING_USERS = [
  { email: "sarah.whitfield@iautosale.co.uk", password: "training2026", name: "Sarah Whitfield", role: "Site Manager" },
  { email: "emma.richardson@iautosale.co.uk", password: "training2026", name: "Emma Richardson", role: "Sales Rep" },
  { email: "james.thornton@iautosale.co.uk", password: "training2026", name: "James Thornton", role: "Admin" },
  { email: "liam.patel@iautosale.co.uk", password: "training2026", name: "Liam Patel", role: "Recon Tech" },
  { email: "kirsty.pullen@yahoo.co.uk", password: "training2026", name: "Kirsty Isabel Pullen", role: "Sales Rep" },
  { email: "jmptrades93@gmail.com", password: "training2026", name: "Jamie Miller", role: "Sales Rep" },
  { email: "joshlawler63@gmail.com", password: "training2026", name: "Josh Lawler", role: "Sales Rep" },
  { email: "beecroftshanon@gmail.com", password: "training2026", name: "Shanon Beecroft", role: "Sales Rep" },
  { email: "rileybelch21@gmail.com", password: "training2026", name: "Riley Belcher", role: "Sales Rep" },
  { email: "demo@iautosale.co.uk", password: "demo", name: "Demo User", role: "Sales Rep" },
];

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }

    const user = TRAINING_USERS.find(
      (u) => u.email === email.toLowerCase() && u.password === password
    );

    if (!user) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 }
      );
    }

    const sessionData = JSON.stringify({
      name: user.name,
      email: user.email,
      role: user.role,
    });

    const response = NextResponse.json({
      user: { name: user.name, email: user.email, role: user.role },
    });

    response.cookies.set("training-session", sessionData, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    return response;
  } catch {
    return NextResponse.json(
      { error: "Invalid request" },
      { status: 400 }
    );
  }
}
