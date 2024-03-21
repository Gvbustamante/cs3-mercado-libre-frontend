const initialState = {
    categories: [],
    loading: false,
    error: null,
};

function categoriesReducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}

export default categoriesReducer;
