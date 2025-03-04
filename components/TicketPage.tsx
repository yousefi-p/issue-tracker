'use client'

import { Ticket } from "@/lib/definitions";
import styles from "@/styles/TicketDetails.module.css";
import { useEffect, useState } from "react";
import TicketMessagesComponent from "./TicketMessages";


function TicketPage( ticketData: Ticket) {
  const [ticket, setTicket] = useState<Ticket | null>(null);
  const [loading, setLoading] = useState(true);



  useEffect(() => {
    setTicket(ticketData);
    setLoading(false);
  }, [ticketData]);

  

  if (loading) {
    return <div>Loading...</div>;
  }

  if (ticket === null) {
    return <div>Can not get Ticket Data.</div>;
  } else {
    return (
      <div className={styles.ticketBox + " container-fluid"}>
        <div className="m-5 p-3 bg-info bg-opacity-10 border border-info-subtle rounded" dir="rtl">
          <div className="row row-cols-sm-1 text-center border-bottom">
            <h5 className="col-xs-12">عنوان</h5>
            <p className="col-xs-12">{ticket.ticket_title}</p>
          </div>
          <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 border-bottom">
            <div className="col-xs-6">
              <h5 className="">اولویت</h5>
              <p className="badge bg-info">{ticket.priority_title_fa}</p>
            </div>
            <div className="col-xs-6">
              <h5 className="">وضعیت</h5>
              <p className="badge bg-info">{ticket.status_title_fa}</p>
            </div>
            <div className="col-xs-6">
              <h5 className="">شماره تیکت</h5>
              <p className="">#{ticket.ticket_id}</p>
            </div>
            <div className="col-xs-6">
              <h5 className="">کارشناس:</h5>
              <p className="">{ticket.first_name + " " + ticket.last_name}</p>
            </div>

            </div>
            <div className="mt-2 border-bottom text-end">
                <h5 className="header">شرح تیکت:</h5>
                <div className="py-2 bg-secondary bg-opacity-10 border border-warning-subtle rounded shadow">
                  <p className="p-2 text-break">
                    {ticket.ticket_description}
                  </p>
                
              </div>
          </div>
          <div className="mt-2 text-end">
            <h5>پیام‌ها:</h5>
            <TicketMessagesComponent id={ticket.ticket_id }   />
          </div>
        </div>
      </div>
    );
  }
}

export default TicketPage;
