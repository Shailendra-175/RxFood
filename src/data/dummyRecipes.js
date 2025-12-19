// src/data/dummyRecipes.js

const BASE = import.meta.env.BASE_URL;

const recipes = [
  {
    title: "Avocado Toast",
    description: "Whole grain bread topped with smashed avocado, olive oil, and cherry tomatoes.",
    image: "images/Avacado-Toast.png",
    ingredients: [
      "2 slices whole grain bread",
      "1 ripe avocado",
      "1 tsp olive oil",
      "Cherry tomatoes",
      "Salt & pepper"
    ],
    method: [
      "Toast the bread slices.",
      "Mash the avocado with olive oil, salt, and pepper.",
      "Spread the avocado on bread.",
      "Top with cherry tomatoes."
    ],
    video: `${BASE}Videos/Avacado Toast.mp4`,
  },
  {
    title: "Quinoa Salad",
    description: "A refreshing salad with quinoa, cucumber, bell peppers, and lemon dressing.",
    image: "images/Quinoa-Salad.png",
    ingredients: [
      "1 cup cooked quinoa",
      "1 cucumber",
      "1 red bell pepper",
      "1 tbsp lemon juice",
      "Olive oil, salt"
    ],
    method: [
      "Cook quinoa and let it cool.",
      "Chop cucumber and bell pepper.",
      "Mix everything with lemon juice and olive oil.",
      "Season with salt."
    ],
    video: `${BASE}Videos/Quinoa.mp4`
  },
  {
    title: "Smoothie Bowl",
    description: "Blend berries, banana, and yogurt, topped with granola and seeds.",
    image: "images/Smoothie-Bowl.png",
    ingredients: [
      "1 banana",
      "1/2 cup mixed berries",
      "1/2 cup yogurt",
      "Granola",
      "Chia seeds"
    ],
    method: [
      "Blend banana, berries, and yogurt until smooth.",
      "Pour into a bowl.",
      "Top with granola and chia seeds."
    ],
    video: `${BASE}Videos/Smoothie Bowl.mp4`
  }
];

export default recipes;
