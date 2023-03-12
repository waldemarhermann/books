const BookShow = ({ book, onDelete }) => {
  const handleDeleteBook = () => {
    onDelete(book.id);
  };

  return (
    <div className='book-show'>
      {book.title}
      <div className='actions'>
        <button className='delete' onClick={handleDeleteBook}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookShow;
