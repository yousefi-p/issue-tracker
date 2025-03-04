import { NextResponse } from 'next/server';
import sql from '@/lib/db';
import { TicketMessageType } from '@/lib/definitions';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const ticketId = url.pathname.split('/').pop();
  console.log(ticketId)

  if (ticketId === undefined) {
    return NextResponse.json({ message: 'ID is required' }, { status: 400 });
  }
  try {
    const result: TicketMessageType[] = await sql `SELECT ticket_id, created_at, users_tb.first_name, users_tb.last_name, messages_tb.message FROM messages_tb JOIN users_tb ON (created_by = users_tb.user_id) WHERE ticket_id = ${Number(ticketId)};`;
    
    if (result.length === 0) {
      return NextResponse.json({ message: 'پیغام یافت نشد' }, { status: 404 });
    }
    console.log(result)
    return NextResponse.json(result);
  } catch (error: any) {
    console.log(error)
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}


// export async function POST(request: Request, { params }: { params: { id: string } }) {
//   const ticketId = params.id;
//   try {
//     const data = await request.json();
//     const { userId, comment } = data;
//     const pool = await poolPromise;
//     const query = `
//       INSERT INTO comments (ticket_id, user_id, comment, created_at)
//       VALUES (@ticketId, @userId, @comment, GETDATE());
//       SELECT SCOPE_IDENTITY() as id;
//     `;
//     const result = await pool.request()
//       .input('ticketId', ticketId)
//       .input('userId', userId)
//       .input('comment', comment)
//       .query(query);
//     const insertedId = result.recordset[0].id;
//     return NextResponse.json({ id: insertedId }, { status: 201 });
//   } catch (error: any) {
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }
// }
