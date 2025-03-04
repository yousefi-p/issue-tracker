import OpenTickets from '@/components/OpenTickets'
import SolvedTickets from '@/components/SolvedTickets'
import TicketList from '@/components/TicketList'
import WaitingTickets from '@/components/WaitingTickets'
import React from 'react'

function AdminPage() {
  
  return (
    <div className="container-fluid py-4 px-3 mx-auto text-center" dir="rtl">
    <div className="row row-cols-xs-1 row-cols-sm-2 row-cols-md-3 g-3">
      <div className="col-xs-12 col-sm-6 col-md-4 ">
        <OpenTickets />
      </div>
      <div className="col-xs-12 col-sm-6 col-md-4">
        <WaitingTickets />
      </div>
      <div className="col-xs-12 col-sm-6 col-md-">
        <SolvedTickets />
      </div>

    </div>
    <div className="row ">
      <div className="">
        <TicketList />
      </div>
    </div>
  </div>
  )
}

export default AdminPage
