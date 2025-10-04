import { NextResponse } from "next/server";
import path from "path";
import { promises as fs } from "fs";

// GET API example
export async function GET() {
  // Absolute path to the JSON file inside public/
  const filePath = path.join(process.cwd(), "public/json/flash-sales.json");

  // Read the file
  const fileData = await fs.readFile(filePath, "utf-8");
  const data = JSON.parse(fileData);

  return NextResponse.json(data);
}
