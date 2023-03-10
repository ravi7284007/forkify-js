import { async } from "regenerator-runtime";
import { API_URL, RES_PER_PAGE } from './config.js';
import { getJSON } from "./helper.js";

export const state = {
    recipe: {},
    search: {
        query: '',
        results: [],
        page: 1,
        resultsPerPage: RES_PER_PAGE
    }
};

export const loadRecipe = async function (id) {
    try {
        const data = await getJSON(`${API_URL}${id}`)

        let { recipe } = data.data;
        recipe = {
            id: recipe.id,
            title: recipe.title,
            publisher: recipe.publisher,
            sourceUrl: recipe.source_url,
            images: recipe.image_url,
            servings: recipe.servings,
            cookingTime: recipe.cooking_time,
            ingredients: recipe.ingredients
        }
        console.log(recipe);
    } catch (err) {
        console.log(err)
        throw err
    }
}
export const loadSearchResult = async function (query) {
    try {
        state.search.query = query;

        const data = await getJSON(`${API_URL}?search=${query}`)
        console.log(data);

        state.search.results = data.data.recipes.map(rec => {
            return {
                id: rec.id,
                title: rec.title,
                publisher: rec.publisher,
                sourceUrl: rec.source_url,
                images: rec.image_url,
            }
        })
    } catch (err) {
        console.log(err)
        throw err
    }
}

export const getSearchResultPage = function (page = state.search.page) {
    state.search.page = page;

    const start = (page - 1) * state.search.resultsPerPage  //0;
    const end = page * state.search.resultsPerPage //9;

    return state.search.results.slice(start, end)
}