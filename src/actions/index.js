// Action creator
export const selectBreed = breed => {
    // Return an action
    return {
        type: "BREED_SELECTED",
        payload: breed
    };
};
