fetch('https://www.themealdb.com/api/json/v1/1/search.php?s')
.then(res => res.json())
.then(data => displayFood(data.meals))

const displayFood = food => {
    const foodContainer = document.getElementById('food-container');
   for (let i = 0; i < 8; i++) {
       const foodItem = food[i];
       const foodDiv = document.createElement('div');
           foodDiv.className = 'food';
           foodDiv.innerHTML = `
            <div onclick="displayFoodDetails('${foodItem.strMeal}')">
               <img src="${foodItem.strMealThumb}">
               <h2> ${foodItem.strMeal}</h2>
            </div>
           `
           foodContainer.appendChild(foodDiv)
       
   }

}

// Food Details
const displayFoodDetails = (food) =>{
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${food}`;
    fetch(url)
    .then(res => res.json())
    .then(data => renderFoodInfo(data.meals[0]))
}

const renderFoodInfo = food => {
    const foodDetails = document.getElementById('food-details-container');
    foodDetails.className = 'food';
    foodDetails.innerHTML = `
        <img src="${food.strMealThumb}">
        <h2>${food.strMeal}</h2>
        <h4>Ingredients</h4>
        <p>${food.strIngredient1}</p>
        <p>${food.strIngredient2}</p>
        <p>${food.strIngredient3}</p>
        <p>${food.strIngredient4}</p>
        <p>${food.strIngredient5}</p>
        <p>${food.strIngredient6}</p>
        <p>${food.strIngredient7}</p>
        <p>${food.strIngredient8}</p>
        <p>${food.strIngredient9}</p>
        <p>${food.strIngredient10}</p>
        <button id="back">Back to Home</button>
    `
    const mainContainer = document.getElementById('main-container');
    const foodDetailsContainer = document.getElementById('foodDetails');
    mainContainer.style.display = 'none';
    foodDetailsContainer.style.display = 'block';
    
    document.getElementById('back').addEventListener('click', ()=>{
        mainContainer.style.display = 'block';
        foodDetailsContainer.style.display = 'none';

    })    
}

// Search Food Item
// document.getElementById('search-btn').addEventListener('click', ()=>{
//     const inputFood = document.getElementById('search-input');
//     console.log(inputFood.value);
// })