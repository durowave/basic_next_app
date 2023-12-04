import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest){
    const data = [{
        id:1,
        name:"Milk",
        price:2.5
    },{
        id:2,
        name:"Bread",
        price:3.5
    }]
    return NextResponse.json(data)
}