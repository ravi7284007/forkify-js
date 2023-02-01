import * as model from './model.js';
import recipeView from './views/recipeView.js';
import SearchView from './views/seachView.js';
import resultView from './views/resultView.js';
import paginationView from './views/paginationView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import recipeView from './views/recipeView.js';
import { async } from 'regenerator-runtime';

if (module.hot) {
  module.hot.accept();
}

const controlRecipes = async function () {
  try {
    // const id = window.location.hash.slice(1);
    const id = '5ed6604591c37cdc054bc886';

    if (!id) return;
    recipeView.renderSpinner()

    await model.loadRecipe(id)
    // const { recipe } = model.state
    // Rendering recipe

    recipeView.render(model.state.recipe)
    // const recipeView = new recipeView(model.state.recipe)


  } catch (error) {
    recipeView.renderError();
  }
}

const controlSearchResults = async function () {
  try {
    resultView.renderSpinner()

    const query = SearchView.getQuery()
    if (!query) return;


    await model.loadSearchResult(query)

    // resultView.render(model.state.search.results)
    resultView.render(model.getSearchResultPage());

    paginationView.render(model.state.search)
  } catch (err) {
    console.log(err);
  }
}

controlSearchResults()

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
  SearchView.addHandlerSearch(controlSearchResults)
}
init()