import { Gltf } from '@react-three/drei/native';
import { INGREDIENTS, useSandwich  } from '../store';

const INGREDIENT_SCALE = 3;
const INGREDIENT_SCALE_Y = 5;


export const Ingredient = ({ingredient, ...props}) => {
    return (
        <group {...props}>
            <Gltf 
                src={INGREDIENTS[ingredient.name].src}
                scale={INGREDIENT_SCALE}
                scale-y={INGREDIENT_SCALE_Y + (ingredient.name === 'bread' ? 5 : 0)} //make sure bread slices are nice and thick compared to other ingredients
                 />
        </group>
    )
}