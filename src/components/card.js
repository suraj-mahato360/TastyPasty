import React from 'react';

let Card = (props) => {
  const { recipes } = props
  return (
    <div className="container">
      <div className="outcome">
        <h3>Recipes Found</h3>
        <hr />
      </div>
        <div className="recipe">
          {recipes.map(recipe => {
            <div className="card">
            <div class="blog-img">
                <img src={recipe.recipe.image} />
            </div>
            <h3>{recipe.recipe.title}</h3>
            <p>Lorem ipsum dolor sit amet consectetur,<br /> adipisicing elit. Nam numquam error ex deleniti dolore perspiciatis reprehenderit! Tenetur voluptatem quis harum aliquam maiores aspernatur</p>
            <a href="#"><div className='get-content'><button className='b'>Get Recipe</button></div></a>
        </div>
          })}
          
          </div>
          </div>
  )
}
export default Card;
