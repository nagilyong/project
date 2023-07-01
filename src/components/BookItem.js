import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BookItem = (props) => {
    const {ID, TITLE, CONTENT} = props.book;

    return (
        <Card>
            <Card.Body>
                <Card.Title>제목 : {TITLE}</Card.Title>
                <Card.Title>내용 : {CONTENT}</Card.Title>
                <Link to={"/book/"+ID} className='btn btn-primary'>상세보기</Link>
            </Card.Body>
        </Card>
    );
};

export default BookItem;