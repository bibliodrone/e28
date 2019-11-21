// /src/Favorites.js
// Adapted from Cart.js in Zipfoods.
export default class Favorites {

    /**
     * 
     */
    constructor() {
        // Retrieve favorites list from local storage
        let favorites = localStorage.getItem('favorites')

        // Parse JSON favorites to `items` object
        this.items = (favorites) ? JSON.parse(favorites) : [];
    }

    /**
     * Getter method for items
     */
    getItems() {
        return this.items;
    }

    /**
     * Update favorite posts list in localstorage
     */
    update() {
        localStorage.setItem('favorites', JSON.stringify(this.items))
    }

    /**
     * Add a new item by postId
     */
    add(postId) {

        // Check if post is already favorited;
        let item = this.getItem(postId)

        if (item) {
            // Do nothing; post is already a favorite.
        } else {
            // Add post to favorites
            this.items.push({
                id: postId,
            });
        }

        this.update();
    }

    /**
     * Remove favorite post via postId
     */
    remove(postId) {
        let item = this.getItem(postId);

        let itemIndex = this.items.indexOf(item);

        if (item) {
            this.items.splice(itemIndex, 1);
            this.update();
        }
    }

    /**
     * Get a post from posts via postId
     * or return null if post not found in items.
     */
    getItem(postId) {
        return this.items.find(({ id }) => id === postId) || null;
    }
}