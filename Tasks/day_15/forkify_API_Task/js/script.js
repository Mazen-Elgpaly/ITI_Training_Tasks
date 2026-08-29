let searchInput = document.querySelector(`#searchInput`);
let userSelect = document.querySelector(`#userSelect`);
let dataRow = document.querySelector(`#dataRow`);

(function () {
  const recipeList = [
    "carrot",
    "broccoli",
    "asparagus",
    "cauliflower",
    "corn",
    "cucumber",
    "green pepper",
    "lettuce",
    "mushrooms",
    "onion",
    "potato",
    "pumpkin",
    "red pepper",
    "tomato",
    "beetroot",
    "brussel sprouts",
    "peas",
    "zucchini",
    "radish",
    "sweet potato",
    "artichoke",
    "leek",
    "cabbage",
    "celery",
    "chili",
    "garlic",
    "basil",
    "coriander",
    "parsley",
    "dill",
    "rosemary",
    "oregano",
    "cinnamon",
    "saffron",
    "green bean",
    "bean",
    "chickpea",
    "lentil",
    "apple",
    "apricot",
    "avocado",
    "banana",
    "blackberry",
    "blackcurrant",
    "blueberry",
    "boysenberry",
    "cherry",
    "coconut",
    "fig",
    "grape",
    "grapefruit",
    "kiwifruit",
    "lemon",
    "lime",
    "lychee",
    "mandarin",
    "mango",
    "melon",
    "nectarine",
    "orange",
    "papaya",
    "passion fruit",
    "peach",
    "pear",
    "pineapple",
    "plum",
    "pomegranate",
    "quince",
    "raspberry",
    "strawberry",
    "watermelon",
    "salad",
    "pizza",
    "pasta",
    "popcorn",
    "lobster",
    "steak",
    "bbq",
    "pudding",
    "hamburger",
    "pie",
    "cake",
    "sausage",
    "tacos",
    "kebab",
    "poutine",
    "seafood",
    "chips",
    "fries",
    "masala",
    "paella",
    "som tam",
    "chicken",
    "toast",
    "marzipan",
    "tofu",
    "ketchup",
    "hummus",
    "chili",
    "maple syrup",
    "parma ham",
    "fajitas",
    "champ",
    "lasagna",
    "poke",
    "chocolate",
    "croissant",
    "arepas",
    "bunny chow",
    "pierogi",
    "donuts",
    "rendang",
    "sushi",
    "ice cream",
    "duck",
    "curry",
    "beef",
    "goat",
    "lamb",
    "turkey",
    "pork",
    "fish",
    "crab",
    "bacon",
    "ham",
    "pepperoni",
    "salami",
    "ribs",
  ];

  let selectOptions = ``;

  for (const option of recipeList) {
    selectOptions += `<option value="${option}">${option}</option>`;
  }

  userSelect.innerHTML = selectOptions;
})();

async function getRecipes(searchTerm = `Pizza`) {
  try {
    dataRow.innerHTML = `
      <div class="col-12 text-center py-5">
        Searching delicious recipes...
      </div>
    `;

    let response = await fetch(
      `https://forkify-api.jonas.io/api/v2/recipes?search=${searchTerm}`,
    );

    let responseData = await response.json();

    displayRecipes(responseData.data.recipes);
  } catch (err) {
    console.log(`An Error: ${err}`);

    dataRow.innerHTML = `
      <div class="col-12 text-center py-5">
        Something went wrong. Please try again.
      </div>
    `;
  }
}

getRecipes();

function displayRecipes(recipes) {
  if (!recipes || recipes.length === 0) {
    dataRow.innerHTML = `
      <div class="col-12 text-center py-5">
        No recipes found. Try another search!
      </div>
    `;

    return;
  }

  let contentContainer = ``;

  for (const recipe of recipes) {
    contentContainer += `
      <div class="col-12 col-sm-6 col-md-4 col-lg-3">
        <div class="card recipe-card h-100 shadow-sm">
          
          <img
            src="${recipe.image_url}"
            class="card-img-top"
            alt="${recipe.title}"
          >

          <div class="card-body d-flex flex-column">
            <h2 class="card-title fs-5 fw-bold">
              ${recipe.title}
            </h2>

            <p class="card-text text-secondary mt-auto">
              ${recipe.publisher}
            </p>
          </div>

        </div>
      </div>
    `;
  }

  dataRow.innerHTML = contentContainer;
}

searchInput.addEventListener(`input`, function (e) {
  getRecipes(e.target.value.toLowerCase());
});

userSelect.addEventListener(`change`, function (e) {
  getRecipes(e.target.value.toLowerCase());
});
