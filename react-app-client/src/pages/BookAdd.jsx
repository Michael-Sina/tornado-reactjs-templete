import React from 'react';
import HomeLayout from '../layouts/HomeLayout';
import BookEditor from '../components/BookEditor';

class BookAddPage extends React.Component {
  render () {
    return (
      <HomeLayout title="書籍追加">
        <BookEditor/>
      </HomeLayout>
    );
  }
}

export default BookAddPage;
