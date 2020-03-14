import React from 'react';

const Recipe = props => {
    return(
        <div>
            <h1>Title: {props.title}</h1>
            <h3>Calories: {Math.round(props.cal)}</h3>
            <img src={props.image} alt=""/>
        </div>
    );
}


export default Recipe;