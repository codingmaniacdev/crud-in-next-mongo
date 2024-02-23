import connectMongoDB from "@/libs/mongodb";
import User from "@/models/users";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const { name, email, country, state, city, zip, about } = await request.json();
  await connectMongoDB();
  await User.findByIdAndUpdate(id, { name, email, country, state, city, zip, about });
  return NextResponse.json({ message: "User updated successfully" });

}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const user = await User.findOne({ _id: id });
  return NextResponse.json({ user });
}