import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.formData();
  return NextResponse.json({ message: "Payment processed successfully" });
}
