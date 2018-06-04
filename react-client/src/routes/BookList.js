import React from 'react';
import { connect } from 'dva';
import BookListTable from '../components/Books/BookListTable';


const BookList = ({ dispatch, booklist }) => {
  function handleDelete(id) {
    dispatch({
      type: 'booklist/delete',
      payload: id,
    });
  }
  return (
    <BookListTable onDelete={handleDelete} books={booklist} />
  );
};


// export default Booklist 
export default connect(({ booklist }) => ({
  booklist,
}))(BookList);