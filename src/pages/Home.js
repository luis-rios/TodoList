import React from 'react';
import Menu from '../components/Menu';
import Container from '../components/Container';
import Card from '../components/Card';
import Image from '../assets/img/bg.jpg';
import Task from '../assets/img/task.jpg'
import '../styles/Menu.css';

export default function Home(){
    return(
        <div className="Home" style={{backgroundImage:`url(${Task})`}}>
            <section className='presentacion' style={{backgroundImage:`url(${Image})`}}>
                <h2>Welcome to your task</h2>
            </section>
            <div className="container">
                <Menu/>
                <Container/>
                <Card/>     
            </div>
        </div>
    );
}