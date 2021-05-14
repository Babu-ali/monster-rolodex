import React from 'react';
import './card.styles.css';

export const Card = props => (
 <div className='card-container'>
     <img
     alt="monster"
     src="./robo.png"
     width="180"
     height="180"
     />
     <h2>{props.monster.name}</h2>
     <p>{props.monster.email}</p>    
</div>
);