import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCalendarAlt, faClipboardCheck, faEdit, faFileAlt, faHome} from '@fortawesome/free-solid-svg-icons'
import '../styles/Menu.css';



export default class Menu extends React.Component{

constructor(){
    super()
    
}

    render(){
        return(                   
            <div className="menu">
                <ul>
                    <li><button className="button"> <FontAwesomeIcon icon={faHome} style={{paddingRight:'10px'}}/>Inicio</button></li>
                    <li><button className="button"> <FontAwesomeIcon icon={faFileAlt} style={{paddingRight:'10px'}} /> Pendientes </button></li>
                    <li><button className="button"> <FontAwesomeIcon icon={faCalendarAlt} style={{paddingRight:'10px'}} /> Proxima semana </button> </li>
                    <li><button className="button"> <FontAwesomeIcon icon={faClipboardCheck} style={{paddingRight:'10px'}} /> Realizadas </button></li>
                    <li><button className="button"> <FontAwesomeIcon icon={faEdit} style={{paddingRight:'10px'}} /> Notas </button></li>
                </ul> 
            </div>                         
        );
    }
}