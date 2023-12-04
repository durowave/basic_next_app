import { NextRequest, NextResponse } from "next/server";
import schema from "../../products/schema";
import prisma from "@/prisma/client";

// export function GET(request:NextRequest,
//     {params}:{params:{id:number;};}){
//     // fetch data from database

//     if(params.id > 10){
//         return NextResponse.json([{id:1}])
//     }
// }

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const user = await prisma.user.findUnique({
    where: { id: parseInt(params.id) },
  });
  if (!user)
    return NextResponse.json([{ error: "User Not Found" }, { status: 404 }]);
  return NextResponse.json(user);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await request.json();
  const user = await prisma.user.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!user)
    return NextResponse.json({ error: "User not Exist" }, { status: 404 });
  const updatedUser = await prisma.user.update({
    where: { id: parseInt(params.id) },
    data: {
      name: body.name,
      email: body.email,
    },
  });

  return NextResponse.json(updatedUser, { status: 201 });
}

// export function DELETE(
//     request:NextRequest,
//     {params}:{params:{id:number}}
// ){
//     if (params.id > 10)
//         return NextResponse.json({error:'User not found'},{status:400});
//     return NextResponse.json({});
// }

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const user = await prisma.user.findUnique({
    where:{id:parseInt(params.id)}
  })

  if(!user)
    return NextResponse.json({error:"User not found"},{status:404})
  const delUser = await prisma.user.delete({
    where:{id:parseInt(params.id)}
  })
  const liveUsers = await prisma.user.findMany();
  return NextResponse.json({msg:`${delUser.name} is Sucessfully deleted.`,users:liveUsers},{status:201})
}
