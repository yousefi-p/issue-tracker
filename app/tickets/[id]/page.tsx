'use server'
import TicketPage from "@/components/TicketPage";
import { TicketMessagesType, Ticket } from "@/lib/definitions";
import { Suspense } from "react";

export default async function TicketDetail({ params }: { params: { id: string } }) {

  let ticketMessages: TicketMessagesType = {
    ticketMessages: []
  };
 

  const data = await params;
    const res = await fetch(process.env.URL + `/api/tickets/${data.id}`);
    if(!res.ok){
      return ('خطا در دریافت تیکت');
    }
    
    // const messages = await fetch(`/api/tickets/${essages`);

    const ticket= await res.json();
    // const ticketMessages = await messages.json();
  return (
    <Suspense fallback={<div className="text-center text-danger" dir="rtl">در حال دریافت اطلاعات....</div>}>
      {ticket && <TicketPage {...ticket} />}
    </Suspense>
  );
}
