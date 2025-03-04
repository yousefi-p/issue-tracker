import React from 'react'
import envelopeExclamation from 'bootstrap-icons/icons/envelope-exclamation.svg'

function OpenTickets({issue}:{issue: number}) {
    return (
        <div className="card text-bg-info mb-3 h-100" dir='rtl'>
            <div className="card-header display-6 text-center">تیکت‌های باز</div>
            <div className="card-body text-center">
            <img src={envelopeExclamation} alt="envelope-check" width="32" height="32" />
                <h5 className="card-title"><span>
                    {issue}
                </span> عدد
                </h5>
            </div>
        </div>
    )
}

export default OpenTickets
