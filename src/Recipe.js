import React from 'react';
import style from './Recipe.module.css';

const Recipe = props => {
    return(
        <div className={style.recipe}>
            <h1>{props.title}</h1>
            <ol>
                {props.ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p>{Math.round(props.cal)} Cals</p>
            <img className ="image" src={props.image} alt=""/>
        </div>
    );
}


export default Recipe;