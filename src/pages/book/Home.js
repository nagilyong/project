import React, { useState, useEffect } from 'react';
import BookItem from '../../components/BookItem';
import axios from 'axios'

import Pagination from 'react-js-pagination'
import styled from 'styled-components'

const PaginationBox = styled.div`
  .pagination { display: flex; justify-content: center; margin-top: 15px;}
  ul { list-style: none; padding: 0; }
  ul.pagination li {
    display: inline-block;
    width: 30px;
    height: 30px;
    border: 1px solid #e2e2e2;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem; 
  }
  ul.pagination li:first-child{ border-radius: 5px 0 0 5px; }
  ul.pagination li:last-child{ border-radius: 0 5px 5px 0; }
  ul.pagination li a { text-decoration: none; color: #337ab7; font-size: 1rem; }
  ul.pagination li.active a { color: white; }
  ul.pagination li.active { background-color: #337ab7; }
  ul.pagination li a:hover,
  ul.pagination li a.active { color: blue; }
  `;

const Home = () => {
    const a = "1";

    const [books, setBooks] = useState([]);

        const [page, setPage]   = useState(1);
        const [items, setItems] = useState(5);

        const getClick = () => {
            axios.get("/api/select")
            .then(res => setBooks(res.data))
        }
        const postClick = () => {
            axios.post("/api/select",{
                userId :11,
                id:101,
                body:'test body',
                title:'test title'
            })
            .then(res => console.log(res.data))
        }

        const handlePageChange = (page) => { setPage(page); };
        const itemChange = (e) => {
            setItems(Number(e.target.value))
        }
        console.log(items*(page-1), items*(page-1)+items)

    useEffect(()=>{      
        console.log("useEffect");
        //fetch("http://localhost:8080/select")
        //.then(res => res.json())
        //.then(res => {
        //    console.log("res", res);          
        //});

        axios.get("/api/select")
        //.then((res) => res.json())
        .then((res) => {
            console.log("res", res.data);
            setBooks(res.data);
    });

      }, []);

    if ( a === "2" ) {
        return (
            <div>
                참이면 보여줄 HTML
            </div>
        );    
    } else {
        return (
            <div>

                    <button onClick={getClick}>Get</button>
                    <button onClick={postClick}>Post</button>    
                    <select name="items" onChange={itemChange}>
                        <option value="5">5개</option>
                        <option value="10">10개</option>
                        <option value="15">15개</option>
                        <option value="20">20개</option>
                    </select>

                {books
                    .slice(
                    items*(page-1),
                    items*(page-1)+items)
                .map((book, index) => (
                    <BookItem key={book.ID} book={book}/>   
                ))}
                <PaginationBox>
                    <Pagination
                        activePage={page}
                        itemsCountPerPage={items}
                        totalItemsCount={books.length}
                        pageRangeDisplayed={5}
                        onChange={handlePageChange}>
                    </Pagination>
                </PaginationBox>
            </div>
        );
    }   
};


export default Home;