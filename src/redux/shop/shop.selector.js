import {createSelector} from "reselect";

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

// convert an object into an array
export const selectCollectionsForPreview = createSelector(
    [selectCollections]
)

export const selectCollection = collectionUrlParam => (
    createSelector(
        [selectCollections],
        collections =>
            collections[collectionUrlParam]
    )
)


const testObject = {a: 1, b:2, c:3}
const arrayOfKeys = Object.keys(testObject)
// result ["a","b","c"]
// Next step is the way to get the array of values in the testObject
const arrayofValues = arrayOfKeys.map(key => testObject[key])
