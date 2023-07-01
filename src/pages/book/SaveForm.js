import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';

const SaveForm = () => {
    const navigate = useNavigate();

    const [book, setBooks] = useState({
        title: "",
        content:""
    });

    const changeValue = (e) => {
        setBooks({
            ...book,
            [e.target.name] : e.target.value
        });
    }

    const submitBook = (e) => {
        e.preventDefault(); // 꼭 해주어야함

        const headers = {
            'Content-Type' : 'application/json'
        }

        axios.post("/api/save", JSON.stringify(book)
        ,{
            headers:headers // headers에 headers 객체 전달
        }).then((res) => {
            if (res.status === 200) {
                console.log("res", res.data);  
                navigate("/");    
            } else {
                console.log("res", "실패");
                navigate("/");
            }          
        });
    }

    return (
        <Form onSubmit={submitBook}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>제목</Form.Label>
                <Form.Control type="text" placeholder="제목을 입력하세요." onChange={changeValue} name="title"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>내용</Form.Label>
                <Form.Control type="text" placeholder="내용을 입력하세요." onChange={changeValue} name="content"/>
            </Form.Group>

            <Button variant="primary" type="submit">Submit</Button>
        </Form> 
    );
};

export default SaveForm;