

export const headerReducer = (state = null, action) => {
    switch (action.type) {
        case "SET_KEY_ITEM":
            return action.payload;

        default:
            return state;
    }
}