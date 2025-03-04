import { TicketMessageType } from "@/lib/definitions";
import { useEffect, useState } from "react";

const TicketMessagesComponent = ({ id }: { id: number }) => {
  const [messages, setMessages] = useState<TicketMessageType[] | "No message" | null>(null);

  useEffect(() => {
    const fetchMessages = async () => {
      const result = (await fetch(`/api/messages/${id}/`)).ok
        ? await (await fetch(`/api/messages/${id}/`)).json()
        : "No message";
      setMessages(result);
    };
    fetchMessages();
  }, [id]);

  if (messages === null) {
    return <div>Loading messages...</div>;
  }

  if (messages === "No message") {
    return <div>No messages</div>;
  }

  return (
    <ul className="border rounded border-info px-3 p-2">
{messages.map(row => <li className="mx-2 p-2" key={row.ticket_id}>
      <h6 className="pb-1  border-bottom " ><span>{row.first_name} {row.last_name}</span><span className="float-start text-muted">{row.created_at.toLocaleString('fa-IR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
      }).toString()}</span></h6>
      <p className="">{row.message}</p></li>)
}
    </ul>
    
  );
};

export default TicketMessagesComponent