import React,{ useState, useRef, useEffect } from "react";
import "../App.css";
import recipes from "../data/dummyRecipes";

function HealthyRecipes() {
const [playingVideoId, setPlayingVideoId] = useState(null);
   const videoRefs = useRef([]); // array of refs

   useEffect(() => {
    videoRefs.current.forEach((videoEl, idx) => {
      if (!videoEl) return;
      if (playingVideoId === idx) {
        videoEl.play();
      } else {
        videoEl.pause();
        videoEl.currentTime = 0;
      }
    });
  }, [playingVideoId]);


  return (
    <div className="recipes-page">
      <h2 className="recipes-title">🍏 Healthy Recipes</h2>
      <div className="recipes-list">
        {recipes.map((recipe, index) => (
          <div key={index} className="recipe-card">
            <img src={recipe.image} alt={recipe.title} className="recipe-img" />
            <h3 className="recipe-name">{recipe.title}</h3>
            <p className="recipe-description">{recipe.description}</p>

            <div className="recipe-columns">
              <div className="ingredients">
                <h4>Ingredients</h4>
                <ul>
                  {recipe.ingredients.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="method">
                <h4>Method</h4>
                <ol>
                  {recipe.method.map((step, i) => (
                    <li key={i}>{step}</li>
                  ))}
                </ol>
              </div>
            </div>

            <div className="recipe-video">
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                width="100%"
                controls
                onPlay={() => setPlayingVideoId(index)}
                onEnded={() => setPlayingVideoId(null)}
              >
                  <source src={recipe.video} type="video/mp4" />
              </video>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HealthyRecipes;
