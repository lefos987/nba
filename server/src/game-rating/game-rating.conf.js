export const finalScoreRatingCategories = [
    {
        condition: (val) => val < 5,
        rating: 10
    },
    {
        condition: (val) => val <= 10,
        rating: 5
    },
    {
        condition: (val) => val <= 15,
        rating: 0
    },
    {
        condition: (val) => val > 15 && (val <= 20),
        rating: -5
    },
    {
        condition: (val) => val > 20,
        rating: -10
    }
];

export const overtimeRating = {
    rating: 20
};