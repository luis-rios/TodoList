import React from 'react';
import Calendario from './Calenario'

import '../App.css'
import Dibujo from '../assets/img/06.jpg'

function Card(){
    return(
        <div className="card">



            <div className="nombre" >
                <Calendario/>
                    </div> 
                    

                <div  className="imagen"  style={{backgroundImage:`url(${Dibujo})`}}>
                   

                </div>

        </div>
    );
    
}

export default Card;