import { NextResponse } from "next/server";
import data from "../../../lib/json/flash-sales.json";

export async function GET() {
  return NextResponse.json(data);
}
