import View from "./View.js";
// import icons from 'url:../img/icons.svg'
import { state } from "../model.js";

class PaginationView extends View {
    _ParentElement = document.querySelector('.pagination');

    _generateMarkup() {
        const numPages = Math.ceil(this._data.results.length / this._data.resultsPerPage);
        alert(numPages);

        if (this._data.page === 1 && numPages > 1) {
            return `Page 1, others`;
        }
    }
}

export default new PaginationView()