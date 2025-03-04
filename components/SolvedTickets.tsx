import envelopeCheck from 'bootstrap-icons/icons/envelope-check.svg'

function SolvedTickets({issue}: {issue: number}) {
  return (
    <div className="card text-bg-success mb-3 h-100" dir='rtl'>
    <div className="card-header display-6 text-center">تیکت‌های رفع شده</div>
    <div className="card-body text-center">
    <img src={envelopeCheck} alt="envelope-check" width="32" height="32" />
        <h5 className="card-title"><span>
            {issue}
        </span>عدد
        </h5>
    </div>
</div>
  )
}

export default SolvedTickets
