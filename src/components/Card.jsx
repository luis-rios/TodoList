import React from 'react';
import Calendario from './Calenario'
import '../App.css'

import Foto from '../assets/img/08.jpg'

function Card(){
    return(
        <div className="card" >



            <div className="nombre" >
                <Calendario/>
                    </div> 
                    

                <div  className="imagen"  style={{backgroundImage:`url(${Foto})`}} >
                   

                </div>

        </div>
    );
    
}

export default Card;