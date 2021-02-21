import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCalendarAlt, faClipboardCheck, faEdit, faFileAlt, faHome} from '@fortawesome/free-solid-svg-icons'
import '../App.css';


export default class Menu extends React.Component{

constructor(){
    super()
    
}

    render(){
        return(                   
            <div className="menu">
                <ul>
                    <li> <button> <FontAwesomeIcon icon={faHome} style={{paddingRight:'10px'}}/>Inicio</button></li>
                    <li> <button> <FontAwesomeIcon icon={faFileAlt} style={{paddingRight:'10px'}} /> Pendientes </button></li>
                    <li><button> <FontAwesomeIcon icon={faCalendarAlt} style={{paddingRight:'10px'}} /> Proxima semana </button> </li>
                    <li> <button> <FontAwesomeIcon icon={faClipboardCheck} style={{paddingRight:'10px'}} /> Realizadas </button></li>
                    <li><button> <FontAwesomeIcon icon={faEdit} style={{paddingRight:'10px'}} /> Notas </button></li>
                </ul> 
            </div>                         
        );
    }
}