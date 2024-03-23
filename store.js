import { create } from "zustand";

export const INGREDIENTS = {
    bread: {
      price: 0.5,
      icon: "🍞",
    },
    lettuce: {
      price: 0.5,
      icon: "🥬",
    },
    mushroom: {
      price: 1,
      icon: "🍄",
    },
    tomato: {
      price: 0.5,
      icon: "🍅",
    },
    cheese: {
      price: 1,
      icon: "🧀",
    },
    chicken: {
      price: 2,
      icon: "🍗",
    },
    sausage: {
      price: 1.5,
      icon: "🌭",
    },
    salami: {
      price: 1.5,
      icon: "🍖",
    },
    bacon: {
      price: 1.5,
      icon: "🥓",
    },
    patty: {
      price: 2,
      icon: "🍔",
    },
  };

  export const useSandwich = create((set) => ({
    //makes sure we always start with two pieces of bread for our sandwich
    ingredients: [
      {
        id: 0,
        name: "bread",
      },
      {
        id: 1,
        name: "bread",
      },
    ],
    //price
    total: 5,
    
    //add ingredients, and we make sure to always add the bread at the end with each added ingredient
    addIngredient: (ingredient) =>
      set((state) => ({
        total: state.total + INGREDIENTS[ingredient].price,
        ingredients: [
          ...state.ingredients.slice(0, -1),
          {
            name: ingredient,
            id: state.ingredients.length,
          },
          {
            name: "bread",
            id: 1,
          },
        ],
      })),
    //filter and remove ingredient by ID
    removeIngredient: (ingredient) =>
      set((state) => ({
        total: state.total - (INGREDIENTS[ingredient.name]?.price || 0),
        ingredients: state.ingredients.filter((ing) => ing.id !== ingredient.id),
      })),
  }));