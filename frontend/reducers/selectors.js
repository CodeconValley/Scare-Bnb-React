export const selectAllHomes = state => Object.values(state.entities.homes);

export const selectRentals = (state, home) =>
  home && home.rental_ids
    ? home.rental_ids.map(id => state.entities.rentals[id])
    : [];

export const selectReviews = (state, home) =>
  home && home.review_ids
    ? home.review_ids.map(id => state.entities.reviews[id])
    : [];
