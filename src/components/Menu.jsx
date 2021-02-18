import React from 'react';
import '../App.css';



export default class Menu extends React.Component{

constructor(){
    super()
    
}

    render(){
        return(
           
                <nav className="menu">
                    <ul>
                        <li> <a> Inicio</a> </li>
                        <li> <a>Pendientes  </a> </li>
                        <li> <a> Realizadas</a> </li>
                    </ul>

                </nav>


          
        );
    }
}