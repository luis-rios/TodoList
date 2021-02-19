import React from 'react';
import Menu from '../components/Menu';

import Container from '../components/Container';
import Card from '../components/Card';
import '../App.css';
import Calendario from '../components/Calenario';



export default function Home(){

    return(

        <div className="styles">
            <Menu/>
            <Container/>
            <Card/>
       

     
        </div>


    );
}