import { useSandwich } from "../store"

export const Sandwich = () => {
    const ingredients = useSandwich((state) => state.ingredients);

    return (
        <group>

        </group>
    )
}