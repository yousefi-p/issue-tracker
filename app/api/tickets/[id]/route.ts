import { NextResponse } from 'next/server';
import sql from "@/lib/db";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const id = url.pathname.split('/').pop();
  console.log('id: ', id)

  if (!id) {
    return NextResponse.json({ message: 'ID is required' }, { status: 400 });
  }

  try {
    const result = await sql `SELECT tickets_tb.ticket_id, tickets_tb.ticket_title, ticket_created_at, ticket_description, ticket_ip_address, ticket_os, 
             status_title_en, status_title_fa, priority_title_en, priority_title_fa, 
             users_tb.first_name, users_tb.last_name, ticket_created_at 
      FROM tickets_tb 
      JOIN statuses_tb ON (ticket_status_id = status_id) 
      JOIN priorities_tb ON (ticket_priority_id = priority_id) 
      JOIN users_tb ON (tickets_tb.refered_to = user_id) 
      WHERE tickets_tb.ticket_id = ${id}`;

    if (result.length === 0) {
      return NextResponse.json({ message: 'تیکت یافت نشد' }, { status: 404 });
    }
    console.log(result)
    return NextResponse.json(result[0]);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

