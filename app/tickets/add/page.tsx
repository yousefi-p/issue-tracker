import React from 'react';
import styles from '@/styles/Ticket.module.css';



function AddTicket() {

  return (
    <div className={ styles.formControl + ' container-fluid'} dir='rtl'>
      <h1 className='mt-5 text-center'>ایجاد تیکت جدید</h1>
      <form className="row row-cols-lg-1 g-3">
        <div className='col-xs-12 mt-3'>
          <label className='form-lable' htmlFor="title">عنوان تیکت:</label>
          <input className='form-control' type="text" id="title" name="title" placeholder='عدم دسترسی به اینترنت' required aria-placeholder=''/>
        </div>
        <div className='col-xs-12 mt-3'>
          <label className='form-lable' htmlFor="priority">اولویت:</label>
          <select className='form-select' id="priority" name="priority" required>
            <option value="low">کم</option>
            <option value="medium">متوسط</option>
            <option value="high">زیاد</option>
          </select>
        </div>
        <div className='col-xs-12 mt-3'>
          <label className='form-lable' htmlFor="category">دسته بندی:</label>
          <select className='form-select' id="category" name="category" required>
            <option value="technical">فنی</option>
            <option value="sales">فروش</option>
            <option value="other">سایر</option>
          </select>
        </div>
        <div className={ styles.divTextArea + ' col-xs-12 col-sm-12 col-md-12 my-3 '}>
          <label className='form-lable' htmlFor="description">توضیحات:</label>
          <textarea className='form-control' id="description" name="description" required></textarea>
        </div>
        <button className='btn mt-10' type="submit">ایجاد تیکت</button>
      </form>
    </div>
  )
}

export default AddTicket
