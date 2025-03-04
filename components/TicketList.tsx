'use client'
import React from 'react'
import styles from '@/styles/List.module.css'
import { Tickets } from '@/lib/definitions'
import { useRouter } from 'next/navigation'

function TicketList(ticketsData:Tickets) {
  // if(ticketsData === null || ticketsData === undefined || ticketsData.tickets === null || ticketsData.tickets === undefined) return (
  //   <div>Error</div>
  // )
  const router = useRouter();
  return (
    <table className="table table-striped table-hover" dir='rtl'>
      <thead>
        <tr className='table-primary '>
          <th scope="col">ردیف</th>
          <th scope="col">موضوع</th>
          <th scope="col">وضعیت</th>
          <th scope="col">تاریخ ثبت</th>
          <th scope="col">کارشناس</th>
          <th scope="col"></th> 

        </tr>
      </thead>
      <tbody>
        {ticketsData.tickets.map((ticket) => 
            <tr key={ticket.ticket_id}>
              <td >{ticket.ticket_id}</td>
              <td>{ticket.ticket_title}</td>
              <td>{ticket.status_title_fa}</td>
              <td>{ticket.ticket_created_at.toLocaleString('fa-IR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
      }).toString()}</td>
              <td>{ticket.first_name +' '+ ticket.last_name }</td>
              <td><button type='button' className='btn btn-success' onClick={() => router.push('/tickets/'+ticket.ticket_id.toString())}>جزئیات</button></td>
            </tr>
        )}
      </tbody>
    </table>
  );
}

export default TicketList
