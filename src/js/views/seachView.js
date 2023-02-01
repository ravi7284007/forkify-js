class SearchView {
    _ParentElement = document.querySelector('.search');

    getQuery() {
        const query = this._ParentElement.querySelector('.search__filed').value;
        this._clearInput()
        return query
    }

    _clearInput() {
        this._ParentElement.querySelector('.search__filed').value = ''

    }

    addHandlerSearch(handler) {
        this._ParentElement.addEventListener('submit', function (e) {
            e.preventDefault();
            handler()
        })
    }
}

export default new SearchView()