import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';

const UpdateFrom = () => {
    const navigate = useNavigate();

    const location = useLocation();
    const id = location.state.id;

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

    const [data, setData] = useState({
        ID: "",
        TITLE: "",
        CONTENT: "",

        title: "",
        content:""
    });

    const changeValue = (e) => {
        setData({
            ...data,
            [e.target.name] : e.target.value
        });
    }

    const submitData = (e) => {
        e.preventDefault(); // 꼭 해주어야함

        const headers = {
            'Content-Type' : 'application/json'
        }

        axios.post("/api/update", JSON.stringify(data)
        ,{
            headers:headers // headers에 headers 객체 전달
        }).then((res) => {
            if (res.status === 200) {
                console.log("res", res.data); 
                navigate('/book/1123'); 
            } else {
                console.log("res", "실패");
                navigate("/");
            }          
        });

    }

    return (
        <Form onSubmit={submitData}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>제목</Form.Label>
                <Form.Control type="text" placeholder="제목을 입력하세요." onChange={changeValue} name="title"   defaultValue={book.TITLE}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>내용</Form.Label>
                <Form.Control type="text" placeholder="내용을 입력하세요." onChange={changeValue} name="content" defaultValue={book.CONTENT}/>
            </Form.Group>

            <Button variant="primary" type="submit">Submit</Button>
        </Form> 
    );
};

export default UpdateFrom;