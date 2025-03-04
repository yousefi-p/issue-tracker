// app/tickets/page.tsx


import TicketList from "@/components/TicketList";

async function AllTicketsPage() {
  const req = (await fetch(process.env.URL+"/api/tickets"));
  if (!req.ok) {
    return <div>Loading...</div>;
  }
  const tickets = await req.json();
  
  return (
    <div className="container-fluid">
      <TicketList tickets={tickets}/>
    </div>
  );
}

export default AllTicketsPage;
