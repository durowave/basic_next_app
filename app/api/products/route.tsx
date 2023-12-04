import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import prisma from "@/prisma/client";

// GET
export async function GET(request:NextRequest){
  const allPruducts = await prisma.products.findMany();
  return NextResponse.json(allPruducts);
}

// POST
export async function POST(request:NextRequest) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors,{status:400})
  const data = await prisma.products.create({
    data:{
      name:body.name,
      price:body.price
    }
  })
  const allData = await prisma.products.findMany();
  return NextResponse.json({msg:`${data.name} (ID:${data.id}) is addedd successfully`,fulldata:allData})
}




