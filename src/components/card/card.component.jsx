import React from 'react';
import './card.styles.css';
import robo from './newMonster.png';



export const Card = props => (
 <div className='card-container'>
     <img
     alt="monster"
     //src={'https://robohash.org/3?set=set2'}
     src={robo}
     width="250"
     height="180"
     />
     <h2>{props.monster.name}</h2>
     <p>{props.monster.email}</p>    
</div>
);