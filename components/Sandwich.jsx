import { Gltf } from '@react-three/drei/native';
import { INGREDIENTS, useSandwich } from "../store";
import { Ingredient } from './Ingredient';
const INGREDIENT_SPACING = 0.2


export const Sandwich = () => {
    const ingredients = useSandwich((state) => state.ingredients);

    return (
        <group>
            {
            ingredients.map((ingredient, index) => (
                <Ingredient 
                    key={ingredient.id + ingredient.name}
                    showPrice={index > 0 && index < ingredients.length - 1} //Check if it's either slices of bread cause it's part of the base price
                    ingredient={ingredient}
                    position-y={index * INGREDIENT_SPACING}
                />
            ))
            }
        </group>
    )
}