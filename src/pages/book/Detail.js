import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios'
import { Button } from 'react-bootstrap';

const Detail = () => {
    const navigate = useNavigate();

    const propsParam = useParams();
    const id = propsParam.id;
    console.log("아이디", id);

    const [book, setBook] = useState({
        ID: "",
        TITLE: "",
        CONTENT: ""
    });

    useEffect(()=>{      
        axios.get("/api/detail?id="+id)
        .then((res) => {
            console.log("res", res.data);
            setBook(res.data);
        });
    }, []);

    const deleteBook = () => {
        console.log("value", book.ID);
        axios.get("/api/delete?id="+book.ID)
        .then((res) => {
            console.log("res", res.data);
            navigate("/");
        });
    }

    const updateBook = () => {
        navigate('/updateForm', {
            state: {
            id: book.ID
            }
        });
    };

    return (
        <div>
            {/* <h1>책 상세 { id } </h1> */}
            <h1>책 상세</h1> 
            <h1>{ book.TITLE }</h1> 
            <h1>{ book.CONTENT }</h1> 
            <Button variant='warning' onClick={updateBook}>수정</Button>
            {' '}
            {/* <Button variant='danger' onClick={() => deleteBook(book.ID)}>삭제</Button> */}
            <Button variant='danger'  onClick={deleteBook}>삭제</Button>
        </div>
    );
};

export default Detail;