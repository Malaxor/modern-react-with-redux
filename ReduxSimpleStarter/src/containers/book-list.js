
import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component {

    renderList() {
        return this.props.books.map((book) => (
            
            <li key={book.tittle} className='list-group-item'>
                {book.title}
            </li>  
        ));
    }
    render() {
        return (
            <ul className='list-group col-sm-4'>
                {this.renderList()}
            </ul>
        )
    }
}
// the object that is retured will be available to BookList component as this.props
// this function is the nexsus between react and redux
function mapStateToProps(state) {

    return {
        books: state.books
    }
}
// connect takes a function (first argument) and a container (second argument)
// the container is a component that is aware of the state that is contained by redux
export default connect(mapStateToProps)(BookList);