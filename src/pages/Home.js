import React from 'react';
import Menu from '../components/Menu';
import Container from '../components/Container';
import Card from '../components/Card';
import '../App.css';
import '../styles/Menu.css';
import Image from '../assets/img/bg.jpg';
import Dropdown from 'react-bootstrap/Dropdown';

export default function Home(){

    return(

        <div>
            <section className='presentacion' style={{backgroundImage:`url(${Image})`}}>
                <h2>Welcome to your task</h2>
            </section>
            <Menu/>
            <Container/>

            <Card/>

            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Dropdown Button
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

     
        </div>


    );
}