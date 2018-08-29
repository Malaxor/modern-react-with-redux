
import React, { Component } from 'react';
import { connect } from 'react-redux';
import selectBook  from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {

    renderList() {
        return this.props.books.map((book) => (
            
            <li 
                key={book.title} 
                className='list-group-item'
                onClick={() => this.props.selectBook(book)}
            >
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
// anything returned from this function will end up as props
// on the BookList container
function mapDispatchToProps(dispatch) {
// whenever selectBook is called, the result should be passed to all our reducers
    return bindActionCreators({ selectBook: selectBook }, dispatch);
}
// connect takes a function (first argument) and a container (second argument)
// the container is a component that is aware of the state that is contained by redux
export default connect(mapStateToProps, mapDispatchToProps)(BookList);