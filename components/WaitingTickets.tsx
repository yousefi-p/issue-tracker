import envelopePaper from 'bootstrap-icons/icons/envelope-paper.svg'

function WaitingTickets({issue}: {issue: number}) {
  return (
    <div className="card text-bg-warning mb-3 h-100" dir='rtl'>
    <div className="card-header display-6 text-center">تیکت‌های در انتظار</div>
    <div className="card-body text-center">
    <img src={envelopePaper} alt="envelope-check" width="32" height="32" />
        <h5 className="card-title"><span>
            {issue}
        </span>عدد
        </h5>
    </div>
</div>
  )
}

export default WaitingTickets
