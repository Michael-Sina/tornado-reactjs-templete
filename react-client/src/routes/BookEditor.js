import React from 'react';
import { connect } from 'dva';
import BookEditorForm from '../components/Books/BookEditorForm';

const BookEditor =  () =>{
  return (
    <BookEditorForm />
  );
};

export default connect()(BookEditor);