import { NextResponse } from "next/server";
import data from "../../../lib/json/flash-sales.json";

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return NextResponse.json(data);
}
