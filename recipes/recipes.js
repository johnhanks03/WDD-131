const recipes = [
  {
    author: "Provo High Culinary Students",
    url: "",
    isBasedOn: "",
    cookTime: "30 Min",
    datePublished: "2016-10-16",
    tags: ["Waffles", "Sweet Potato", "Side"],
    description: "Savory waffles made with sweet potato with a hint of ginger.",
    image: "./images/sweet-potato-waffle-md.jpg",
    recipeIngredient: [
      "2 separated eggs",
      "1/4 C Oil",
      "1/4 tsp salt",
      "1/4 tsp Cayenne pepper",
      "3/4 C milk",
      "1 Tbsp Brown Sugar",
      "2 tsp Shredded Ginger",
      "3/4 C Mashed Sweet Potatoes",
      "1 Tbsp Minced Shallots",
      "1 Tbsp Baking Powder",
      "1 Tbsp Chives",
      "1/4 C Cornmeal",
      "1 C Flour"
    ],
    name: "Sweet Potato Waffles",
    prepTime: "30 Min",
    recipeInstructions: [
      "Add the egg yolks, oil, salt, cayenne, sugar, ginger, shallots, sweet potatoes, and milk and mix well.",
      "Next add the cornmeal, chives, flour, and baking powder.",
      "Whip the egg whites until stiff and fold in.",
      "Cook until golden brown in a waffle iron. Serve with butter and wilted greens or honey."
    ],
    recipeYield: "6 waffles",
    rating: 4
  },
  {
    author: "Shane Thompson",
    url: "",
    isBasedOn: "",
    cookTime: "20 min",
    datePublished: "",
    tags: ["Chicken", "Entree"],
    description: "Delicious quick and easy creamy rice dish. The mustard, mushrooms, and lemon all blend together wonderfully.",
    image: "./images/escalopes-de-poulet-a-la-creme.webp",
    recipeIngredient: [
      "2 Chicken Tenders, Cubed",
      "4 Mushrooms, Sliced",
      "1/2 C Whipping Cream",
      "1-2 Tbsp Stone Ground Mustard",
      "1 tsp Lemon Juice",
      "Salt and Pepper to taste",
      "1 C Rice, uncooked",
      "4-5 oz Fresh Green Beans"
    ],
    name: "Escalope de Poulet a la Creme with steamed green beans (Chicken with Cream)",
    prepTime: "10 min",
    recipeInstructions: [
      "Add 1 1/2 cups of water to a pan and bring to a boil. Add the rice and reduce heat to low and simmer.",
      "Cube chicken then cook over medium high heat in a fry pan, add the mushrooms about halfway through.",
      "Pour in cream, mustard and salt and pepper. Stir and simmer until it thickens.",
      "Steam the green beans until tender.",
      "Serve sauce over rice, with the green beans on the side."
    ],
    recipeYield: "3 servings",
    rating: 4.5
  },
  {
    author: "Shane Thompson",
    url: "",
    isBasedOn: "",
    cookTime: "30 min",
    datePublished: "2018-09-19",
    tags: ["Potatoes", "Side"],
    description: "Easy and delicious oven roasted potatoes that go great with almost anything.",
    image: "./images/roasted-potatoes.webp",
    recipeIngredient: [
      "3-4 Medium Potatoes",
      "1 Tbsp Olive oil",
      "2 tsp Italian Seasoning",
      "1/2 tsp Salt",
      "1/2 tsp Ground Black Pepper",
      "1-2 tsp Hot Sauce (optional)"
    ],
    name: "Oven Roasted Potato Slices",
    prepTime: "10 min",
    recipeInstructions: [
      "Preheat oven to 400 deg F.",
      "Wash and thinly slice the potatoes.",
      "Mix together the oil, salt, pepper, Italian seasoning, and hot sauce.",
      "Toss the potatoes in the spice mixture and spread over a baking sheet.",
      "Bake for 30 min or until the desired crispiness is achieved."
    ],
    recipeYield: "",
    rating: 4
  },
  {
    author: "Shane Thompson",
    url: "",
    isBasedOn: "",
    cookTime: "20 min",
    datePublished: "2018-09-19",
    tags: ["Southwest", "Entree"],
    description: "Black beans and tomatoes served over a bed of rice. Top with cheese and scoop up with tortilla chips for maximum enjoyment.",
    image: "./images/black-beans-and-rice.jpg",
    recipeIngredient: [
      "1 Medium Onion, diced",
      "2 Cloves Garlic, minced",
      "1 Tbsp Olive oil",
      "1 Can Black Beans (15oz)",
      "1 Can Diced Tomatoes (15oz)",
      "1/8 tsp Cayenne Pepper (optional)",
      "2 C Brown Rice (uncooked)",
      "Grated Cheese",
      "Tortilla Chips"
    ],
    name: "Black Beans and Rice",
    prepTime: "10 min",
    recipeInstructions: [
      "Cook the brown rice.",
      "Heat the oil and cook onion and garlic until tender.",
      "Stir in the black beans, tomatoes, and cayenne.",
      "Bring to a boil, then simmer uncovered for 15 min.",
      "Serve over rice, topped with grated cheese and tortilla chips."
    ],
    recipeYield: "4 servings",
    rating: 3
  },
  {
    author: "Shane Thompson",
    url: "",
    isBasedOn: "",
    cookTime: "30 min",
    datePublished: "2018-09-19",
    tags: ["Chicken", "Entree", "Indian"],
    description: "Quick and easy chicken curry recipe made with easy to find ingredients.",
    image: "./images/chicken-curry.webp",
    recipeIngredient: [
      "4 Slices Bacon",
      "1 clove Garlic",
      "2 Tbsp Flour",
      "1 C water",
      "1 C Milk",
      "3 Tbsp Tomato Paste",
      "1/2 C Apple Sauce",
      "3-4 tsp Curry Powder",
      "2 tsp Chicken Bouillion",
      "3/4 C Sour Cream",
      "1-2 C Chicken, cubed",
      "2 C Rice, uncooked"
    ],
    name: "Chicken Curry",
    prepTime: "10 min",
    recipeInstructions: [
      "Cook the rice.",
      "Cook bacon until crisp and reserve some drippings.",
      "Cook chicken and cube it.",
      "Blend flour into bacon drippings then stir in milk, water, applesauce, tomato paste, curry, bouillion, and garlic.",
      "Simmer until rice is done.",
      "Before serving add bacon, chicken, and sour cream. Serve over rice."
    ],
    recipeYield: "5 servings",
    rating: 5
  },
  {
    author: "Shane Thompson",
    url: "",
    isBasedOn: "",
    cookTime: "11 min",
    datePublished: "2018-09-19",
    tags: ["Dessert"],
    description: "Delicious soft chocolate chip cookies with coconut.",
    image: "./images/chocolate-chip-cookies.jpg",
    recipeIngredient: [
      "1 Lb butter, softened",
      "1 C white sugar",
      "3 Eggs",
      "1 1/2 C Brown sugar",
      "1 tsp Baking soda",
      "1 tsp Vanilla extract",
      "1/4 tsp Salt",
      "5 C Flour",
      "2 C Chocolate Chips",
      "1 C Shredded Coconut"
    ],
    name: "Chocolate Chip Cookies",
    prepTime: "15 min",
    recipeInstructions: [
      "Preheat oven to 350F.",
      "Cream butter, white sugar, and eggs together.",
      "Add brown sugar, salt, baking soda, and vanilla.",
      "Add flour, chocolate chips, and coconut.",
      "Place on baking sheet and bake for 11-12 minutes."
    ],
    recipeYield: "8 dozen",
    rating: 5
  },
  {
    author: "Ester Kocht",
    url: "https://www.esterkocht.com/german-gooseberry-cake-with-vanilla-cream-and-crumble/",
    isBasedOn: "",
    cookTime: "45min",
    datePublished: "2023-10-10",
    tags: ["Dessert", "German"],
    description: "This gooseberry cake with crumble is easy to follow, a bit tart and not too sweet.",
    image: "./images/german-gooseberry-cake.jpg",
    recipeIngredient: [
      "180 g plain flour",
      "2 medium eggs",
      "100 g butter soft",
      "2 teaspoons vanilla sugar",
      "60 g sugar",
      "2 1/2 teaspoons baking powder"
    ],
    name: "Gooseberry Cake with Vanilla Cream and Crumble",
    prepTime: "30 min",
    recipeInstructions: [
      "Make the cake base batter.",
      "Make the crumble.",
      "Preheat the oven.",
      "Make the vanilla cream.",
      "Assemble and bake for 45 minutes."
    ],
    recipeYield: "12 servings",
    rating: 5
  },
  {
    author: "AllRecipes",
    url: "https://www.allrecipes.com/recipe/12409/apple-crisp-ii/",
    isBasedOn: "",
    cookTime: "45min",
    datePublished: "2023-10-10",
    tags: ["Dessert"],
    description: "This apple crisp recipe is a simple yet delicious fall dessert that's great served warm with vanilla ice cream.",
    image: "./images/apple-crisp.jpg",
    recipeIngredient: [
      "10 C apples, cored and sliced",
      "1 C white sugar",
      "1 Tbsp white flour",
      "1 tsp ground cinnamon",
      "3 Tbsp water",
      "1 C rolled oats",
      "1 C Flour",
      "1 C Brown sugar",
      "1/4 tsp baking powder",
      "1/4 tsp baking soda",
      "1/2 C butter, melted"
    ],
    name: "Apple Crisp",
    prepTime: "30 min",
    recipeInstructions: [
      "Preheat the oven to 350 degrees F.",
      "Prepare the apples and spice mixture.",
      "Combine oats, flour, brown sugar, baking powder, baking soda, and butter.",
      "Sprinkle topping over apples.",
      "Bake until top is golden brown and apples are bubbling."
    ],
    recipeYield: "12 servings",
    rating: 4
  }
];

const recipeContainer = document.querySelector("#recipe-container");
const searchForm = document.querySelector("#search-form");
const searchInput = document.querySelector("#search");

function randomRecipe(recipesList) {
  const randomIndex = Math.floor(Math.random() * recipesList.length);
  return recipesList[randomIndex];
}

function ratingTemplate(rating) {
  const rounded = Math.round(rating);
  let html = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">Rating: `;
  for (let i = 1; i <= 5; i++) {
    if (i <= rounded) {
      html += `<span aria-hidden="true">⭐</span>`;
    } else {
      html += `<span aria-hidden="true">☆</span>`;
    }
  }
  html += `</span>`;
  return html;
}

function tagsTemplate(tags) {
  return `
    <div class="tag-list">
      ${tags.map(tag => `<span class="tag">${tag}</span>`).join("")}
    </div>
  `;
}

function recipeTemplate(recipe) {
  return `
    <article class="recipe-card">
      <div class="recipe-image">
        <img src="${recipe.image}" alt="${recipe.name}">
      </div>
      <div class="recipe-info">
        ${tagsTemplate(recipe.tags)}
        <h2>${recipe.name}</h2>
        <p class="meta">Prep: ${recipe.prepTime} | Cook: ${recipe.cookTime}</p>
        ${ratingTemplate(recipe.rating)}
        <p class="description">${recipe.description}</p>
      </div>
    </article>
  `;
}

function renderRecipes(recipeList) {
  recipeContainer.innerHTML = "";

  if (recipeList.length === 0) {
    recipeContainer.innerHTML = `
      <div class="empty-message">
        <p>No recipes matched your search.</p>
      </div>
    `;
    return;
  }

  recipeList.forEach(recipe => {
    recipeContainer.innerHTML += recipeTemplate(recipe);
  });
}

function filterRecipes(query) {
  const lowerQuery = query.toLowerCase();

  return recipes.filter(recipe => {
    return (
      recipe.name.toLowerCase().includes(lowerQuery) ||
      recipe.description.toLowerCase().includes(lowerQuery) ||
      recipe.tags.find(tag => tag.toLowerCase().includes(lowerQuery))
    );
  });
}

function sortRecipes(recipeList) {
  return recipeList.sort((a, b) => a.name.localeCompare(b.name));
}

function handleSearch(event) {
  event.preventDefault();
  const query = searchInput.value.trim();

  if (query === "") {
    renderRecipes([randomRecipe(recipes)]);
    return;
  }

  const filteredRecipes = filterRecipes(query);
  const sortedRecipes = sortRecipes(filteredRecipes);
  renderRecipes(sortedRecipes);
}

searchForm.addEventListener("submit", handleSearch);

function init() {
  renderRecipes([randomRecipe(recipes)]);
}

init();