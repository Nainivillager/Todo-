import { NextResponse } from "next/server";
export async function GET(request) {
  try {
    return NextResponse.json({ Message: "Hello frans Chai Peelo" });
  } catch (error) {}
}
