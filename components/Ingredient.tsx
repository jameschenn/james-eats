import { Gltf, Text3D } from '@react-three/drei/native';
import { INGREDIENTS, useSandwich  } from '../store';
import { Suspense } from 'react';
import fontPath from "../assets/fonts/Poppins_Bold.json";

const INGREDIENT_SCALE = 3;
const INGREDIENT_SCALE_Y = 5;


export const Ingredient = ({ingredient, showPrice, ...props}) => {

    const removeIngredient = useSandwich((state) => state.removeIngredient);

    return (
        <group {...props}>
            {showPrice && (
                <Suspense>
                    <group
                        onClick={(e) => {
                            e.stopPropagation();
                            removeIngredient(ingredient)
                        }}
                    >
                        <mesh position-x={0.7} position-y={0.042}>
                            <planeGeometry args={[0.9, 0.16]} />
                            <meshStandardMaterial color="white" opacity={0.42} transparent />
                        </mesh>
                        <Text3D
                            font={fontPath}
                            scale={0.1}
                            bevelSegments={3}
                            bevelEnabled
                            bevelThickness={0.001}
                            position-x={0.42}
                        >
                        ${INGREDIENTS[ingredient.name].price.toFixed(2)}
                        </Text3D>
                        <Text3D
                            font={fontPath}
                            scale={0.1}
                            bevelSegments={3}
                            bevelEnabled
                            bevelThickness={0.001}
                            position-x={0.82}
                        >
                        X
                        <meshBasicMaterial color="red" />
                        </Text3D>
                    </group>
                </Suspense>
            )}
            <Gltf 
                src={INGREDIENTS[ingredient.name].src}
                scale={INGREDIENT_SCALE}
                scale-y={INGREDIENT_SCALE_Y + (ingredient.name === 'bread' ? 5 : 0)} //make sure bread slices are nice and thick compared to other ingredients
                 />
        </group>
    )
}