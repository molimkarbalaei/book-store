import React from 'react'
import { deleteBook } from '../helpers/HttpRequest';
import { Link } from 'react-router-dom';

const Card=({book, onDelete})=> {

    const deleteHandler = () => {
        // eslint-disable-next-line no-restricted-globals
        if (!confirm(`Are you sure to delete "${book.title}" ?`)) {
            return
        }
        deleteBook(book.id);
        onDelete()
    }

  return (
    <>
    <div className="card">
        <img src={book.covers.M} alt={book.title} />
        <div className="bottom">
            <h3 className='title'>{book.title}</h3>
            <div className='author-year-container'>
            <div className='author'>{book.author_name}</div>
            <p className='year'>{book.first_publish_year}</p>
            </div>
            <p className='general'>page number: {book.number_of_pages_median}</p>
        </div>
        <Link to={'/edit/'+ book.id} className='button-edit' >
            <i className="fas fa-edit"></i>
        </Link>
        <button className='button-delete' onClick={deleteHandler}>
            <i className="fas fa-trash"></i>
        </button>
    </div>
    </>
  )
}

export default Card