import React from 'react';
import style from './recipe.module.css';
const Recipe = ({title, calaries, image, ingredients}) =>{
    return(
        <div className = {style.recepy}>
            <h1>{title}</h1>
            <p>{calaries}</p>
            <ol>
                {ingredients.map(ingredient =>
                (
                    <li>{ingredient.text}</li>
                )
            ) }</ol>
            <img className ={style.recepy} src= {image} alt =""></img>
        </div>
    );
}

export default Recipe;


