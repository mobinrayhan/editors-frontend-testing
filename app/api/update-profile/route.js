// app/api/update-profile/route.js

import { API_ENDPOINT } from "helper/global";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const formData = await req.formData();
    const userCookie = (await cookies()).get("userSessionToken");

    const response = await fetch(API_ENDPOINT + "/user/update-profile", {
      method: "PATCH",
      body: formData,
      headers: {
        Cookie: `userSessionToken=${userCookie?.value}`,
        "x-api-key": process.env.API_KEY,
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        errorData?.message || `Request failed (${response.status})`
      );
    }

    const data = response.json();
    return NextResponse.json(
      { message: data?.message || "Success" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Update error:", error);

    return NextResponse.json(
      { message: error?.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
