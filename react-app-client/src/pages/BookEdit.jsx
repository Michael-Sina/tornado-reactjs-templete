import React from 'react';
import HomeLayout from '../layouts/HomeLayout';
import BookEditor from '../components/BookEditor';
import { get } from '../utils/request';

class BookEditPage extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      book: null
    };
  }

  componentWillMount () {
    const bookId = this.context.router.params.id;
    get('http://localhost:32704/book/' + bookId)
      .then(res => {
        this.setState({
          book: res
        });
      });
  }

  render () {
    const {book} = this.state;
    return (
      <HomeLayout title="書籍編集">
        {
          book ? <BookEditor editTarget={book}/> : 'loading...'
        }
      </HomeLayout>
    );
  }
}

BookEditPage.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default BookEditPage;
