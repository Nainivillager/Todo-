import { NextRequest, NextResponse } from "next/server";
import DbCon from "../../libs/db";
import Todomodel from "../../../models/todo";
export async function POST(request: NextRequest) {
  try {
    const { title, desc } = await request.json();
    await DbCon();

    const CreateNew = await Todomodel.create({
      title,
      desc,
    });

    return NextResponse.json(
      { success: true, message: "Todo Created Succesfullly", todo: CreateNew },
      { status: 200 }
    );
  } catch (error) {
    console.error("error creating todo", error);
    return NextResponse.json(
      {
        success: false,
        message: "Nahi Nahi Solanki Kuch to gadbad hai! Internal Server Error",
      },
      { status: 500 }
    );
  }
}
