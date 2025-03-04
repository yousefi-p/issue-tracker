import OpenTickets from "@/components/OpenTickets";
import SolvedTickets from "@/components/SolvedTickets";
import TicketList from "@/components/TicketList";
import WaitingTickets from "@/components/WaitingTickets";

export default async function Home() {
  const req = (await fetch(process.env.URL+"/api/tickets"));
  if (!req.ok) {
    return <div>Loading...</div>;
  }
  const tickets = await req.json();
  const openTicket = tickets.filter((ticket: { status_title_en: string; }) => ticket.status_title_en === "open" || ticket.status_title_en === "pending").length | 0;
  const inProgressTicket = tickets.filter((ticket: { status_title_en: string; }) => ticket.status_title_en === "inprogress");
  const closedTicket = tickets.filter((ticket: { status_title_en: string; }) => ticket.status_title_en === "closed");

  return (
    <div className="container-fluid py-4 px-3 mx-auto text-center" dir="rtl">
      <div className="row row-cols-xs-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div className="col-xs-12 col-sm-6 col-md-4 ">
          <OpenTickets issue={openTicket}/>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-4">
          <WaitingTickets issue={inProgressTicket.length}/>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-">
          <SolvedTickets issue={closedTicket.length}/>
        </div>
      </div>

      <div className="row mt-3 mb-3">
        <TicketList tickets={tickets} />
      </div>
      <div className="" z-index="100">
        <button type="button" className="btn btn-warning position-absolute bottom-0 end-0 me-2 mb-5 rounded-pill px-4 py-3">ثبت درخواست</button>
      </div>
    </div>
  );
}
