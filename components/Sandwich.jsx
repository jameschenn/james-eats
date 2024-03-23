import { Gltf } from '@react-three/drei/native';
import { INGREDIENTS, useSandwich } from "../store";
import { Ingredient } from './Ingredient';
const INGREDIENT_SPACING = 0.2


export const Sandwich = () => {
    const ingredients = useSandwich((state) => state.ingredients);

    return (
        <group>
            {ingredients.map((ingredient, index) => (
                <Ingredient 
                    key={ingredient.id + ingredient.name}
                    ingredient={ingredient}
                    position-y={index * INGREDIENT_SPACING}
                />
            ))}
        </group>
    )
}