import React from 'react'

function EditTicket() {
    const postComment = () => {
        const comment = document.getElementById('comment')?.ariaValueText;
        if (comment) {
            // Here you would typically send the comment to your server
            console.log("Comment posted:", comment);
            document.getElementById('comment')?.setHTMLUnsafe(""); // Clear the textarea after posting
        } else {
            alert("لطفا کامنت را وارد کنید.");
        }
    }
    const addComment = () => {
        return (
            <form action="">
                <div>
                    <label htmlFor="comment">کامنت:</label>
                    <textarea id="comment" name="comment" required></textarea>
                </div>
                <button type="submit" onClick={postComment}>ثبت کامنت</button>
            </form>
        )
    }
  return (
    <div>
      <form action="">
        <div>
          <label htmlFor="title">عنوان تیکت:</label>
          <input type="text" id="title" name="title" required />
        </div>
        <div>
          <label htmlFor="description">توضیحات:</label>
          <textarea id="description" name="description" required></textarea>
        </div>
        <div>
          <label htmlFor="status">وضعیت:</label>
          <select id="status" name="status">
            <option value="open">باز</option>
            <option value="closed">بسته شده</option>
          </select>
        </div>
        <button type="button" onClick={addComment}>ثبت کامنت</button>
        <button type="submit">ویرایش تیکت</button>
      </form>
    </div>
  )
}

export default EditTicket
