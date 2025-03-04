'use client';

import TicketList from "@/components/TicketList";

async function AdminAllTicketsPage() {
  const req = (await fetch(process.env.URL+"/api/tickets"));
  if (!req.ok) {
    return <div>Loading...</div>;
  }
  const tickets = await req.json();

  return (
    <div className="">
      <TicketList tickets={tickets}/>
    </div>
  );
}

export default AdminAllTicketsPage;
