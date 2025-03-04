import { NextResponse } from 'next/server';
import sql  from '@/lib/db';


export async function GET() {
  try {
    
    const result = await sql `
      SELECT tickets_tb.ticket_id,tickets_tb.ticket_title, ticket_created_at, ticket_description, ticket_ip_address, ticket_os, 
             status_title_en, status_title_fa, priority_title_en, priority_title_fa, 
             users_tb.first_name, users_tb.last_name, ticket_created_at FROM tickets_tb 
			 JOIN statuses_tb ON (ticket_status_id = status_id) 
             JOIN priorities_tb ON (ticket_priority_id = priority_id) 
			 JOIN users_tb ON refered_to = users_tb.user_id `;
    const rows = result;
    console.log(rows);
    return NextResponse.json(rows);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}


export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { title, description, userId } = data;
    const result = await sql `
      INSERT INTO tickets (title, description, user_id, status, created_at)
      VALUES (@title, @description, @userId, 'open', GETDATE());
      SELECT SCOPE_IDENTITY() as id;
    `
    const insertedId = result
    return NextResponse.json({ id: insertedId }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}


