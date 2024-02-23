import connectMongoDB from "@/libs/mongodb";
import User from "@/models/users";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { name, email, country, state, city, zip, about } = await request.json();

  await connectMongoDB();
  await User.create({ name, email, country, state, city, zip, about });
  return NextResponse.json({ message: "User created successfully" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const users = await User.find();
  return NextResponse.json({ users });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await User.findByIdAndDelete(id);
  return NextResponse.json({ message: "User Deleted" }, { status: 200 });
}