import React from 'react';
import {FETCH_OPTIONS,BASE_URL} from "./ApiCall";
import  { useState, useEffect } from "react";
import HotelCard from "../card/HotelCard";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card';


function Hotels() { 
    const [allHote, SetCurrectHotel] = useState([]);
    const url =  BASE_URL + "establishments";
    const hotelFecth = FETCH_OPTIONS;

    useEffect(() => {
        fetch(url,hotelFecth).then((reponse) => reponse.json()).then((hotelJson) => {
            console.log(hotelJson);
            SetCurrectHotel(hotelJson);
        }).catch((error) => console.log(error));
    }, []);

    return (
        <Container>
            <Row>
                {allHote.map(game => 
                <Col lg={6} className="boxGridHotels">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top"  src= {game.image}/>                     
                        <h1>{game.name}</h1>
                    </Card>
                </Col>
                )}
            </Row>
        </Container>     

    );
}
export default Hotels;
