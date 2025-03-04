import styles from "@/styles/TicketDetails.module.css";

export default async function AdminTicketDetail({ params }: { params: { id: string } }) {

  return (
    <div className={ styles.ticketBox + " container-fluid"}>
      <div className="m-5 p-3 bg-info bg-opacity-10 border border-info-subtle rounded" dir="rtl">
        <div className="row row-cols-sm-1 text-center border-bottom">
          <h5 className="col-xs-12">عنوان تیکت</h5>
          <p className="col-xs-12">عدم دسترسی به اینترنت</p>
        </div>
        <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 border-bottom">
          <div className="col-xs-6">
            <h5 className="">اولویت</h5>
            <p className="badge bg-info">کم</p>
          </div>
          <div className="col-xs-6">
            <h5 className="">وضعیت</h5>
            <p className="badge bg-info">باز</p>
          </div>
          <div className="col-xs-6">
            <h5 className="">شماره تیکت</h5>
            <p className="">19856</p>
          </div>
          <div className="col-xs-6">
            <h5 className="">کارشناس:</h5>
            <p className="">محمد هادی فیاض</p>
          </div>
        </div>
        <div className="d-flex flex-row border-bottom justify-content-between" dir="ltr">
          <div className=" d-flex flex-row px-2 border-end">
            <h5 className="">IP:</h5>
            <p className="">182.200.231.1</p>
          </div>
          <div className="d-flex flex-row border-end">
            <h5 className="col">سیستم‌عامل:</h5>
            <p className="col">Windows 10</p>

          </div>
          <div className="d-flex flex-row border-end">
            <h5 className="col">تاریخ: </h5>
            <p className="col">1403/12/1</p>

          </div>
          <div className="d-flex flex-row">
            <h5 className="col">ساعت: </h5>
            <p className="col">15:30:15</p>
          </div>
        </div>
        <div className={ styles.ticketDetail + " row row-cols-sm-1 border-bottom"}>
          <h5 className="col-xs-12">توضیحات</h5>
          <p className=" col-xs-12">توضیحات تیکت</p>
        </div>
        <div className={styles.answersBox + " row row-cols-sm-1 border-bottom"}>
          <h5 className=" col-xs-12">پاسخ ها</h5>
          <div className="col-xs-12">
            <div className="row row-cols-sm-1 border-end mb-3 mx-2">
              <div className="col-xs-12">
                <p>پاسخ اول</p>
              </div>
              <div className="col-xs-12">
                <p>پاسخ دوم</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row row-cols-sm-1">
          <div className="col-xs-12">
            <form className="row row-cols-lg-1 g-3">
              <div className="col-xs-12">
                <label className="form-lable" htmlFor="response">پاسخ:</label>
                <textarea className="form-control" id="response" name="response" required></textarea>
              </div>
              <div className="row-cols-xs-1 row-cols-sm-2">
                <button className="btn btn-success mt-10 col-xs-12 col-md-6" type="submit">ارسال پاسخ</button>
                <button className="btn btn-danger mt-10 col-xs-12 col-md-6" type="submit">بستن تیکت</button>
              </div>

            </form>
          </div>
          </div>
      </div>
    </div>
  );
}
