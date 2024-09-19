import { NextResponse } from "next/server";

export function middleware(request) {
  const url = new URL(request.url);
  const locale = url.searchParams.get("lang") || "en";

  const response = NextResponse.next();
  response.headers.set("x-locale", locale);

  return response;
}
