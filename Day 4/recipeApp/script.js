const meals = document.getElementById("mealContainer");


getRandomMeal();


async function getRandomMeal() {
   const resp = await fetch(
      "https://www.themealdb.com/api/json/v1/1/random.php"
   );
   const respData = await resp.json();
   const randomMeal = await respData.meals[0];
   console.log(randomMeal);

   addMeal(randomMeal, true);
}

async function getMealById() {
   const mealId = await fetch(
      "www.themealdb.com/api/json/v1/1/lookup.php?i=52772" + id
   );
}

async function getMealBySearch() {
   const mealSearch = await fetch(
      "www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata" + term
   );
}

function addMeal(mealData, random = false) {
   const meal = document.createElement("div");
   meal.classList.add("meal");

   meal.innerHTML = `
      <div class="meal-card">
        <div class="meal-header">
        ${random ?`<span class="random-meals"> Random Recipe </span>`: ''}
          
          <img src="${mealData.strMealThumb}" 
          alt="${mealData.strMeal}"/>
        </div>
        <div class="meal-body">
          <h4>${mealData.strMeal}</h4>
          <button class="like-btn" id="like_btn" onclick="chicken()">
            <i class="fas fa-heart" id="like_heart"></i>
          </button>
        </div>
      </div>
   
  `;
// we put event listner here cause, outside it is not defined
  meal.querySelector(".meal-body .like-btn").addEventListener("click", (e)=>{
    e.target.classList.toggle('active');
  })

  meals.appendChild(meal);
}

function addMealToLS(){

}

function getMealsFromLS() {
  const mealIds = localStorage.getItem 
}