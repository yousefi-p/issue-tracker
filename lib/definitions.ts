export type Ticket = {
    ticket_id: number, 
    ticket_title: string, 
    ticket_description: string, 
    priority_title_fa: string, 
    status_title_fa: string, 
    first_name: string, 
    last_name: string, 
    ticket_created_at: Date
}

export type Tickets = {
    tickets: Ticket[];
}

export type TicketMessageType = {
    ticket_id: string
    created_at: Date,
    first_name: string,
    last_name: string,
    message: string
}

export type TicketMessagesType = {
    ticketMessages: TicketMessageType[]
}
