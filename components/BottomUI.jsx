import { SafeAreaView, ScrollView, Text, View } from "react-native"
import { INGREDIENTS, useSandwich } from "../store"
import { IngredientButton } from "./IngredientButton"

function captializeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export const BottomUI = () => {
    const addIngredient = useSandwich((state) => state.addIngredient);
    const total = useSandwich((state) => state.total);
    const [addedToCart, setAddedToCart] = useSandwich((state) => [state.addedToCart, state.setAddedToCart])

    return (
        <SafeAreaView edges={"bottom"}>
            <View style={bottomUIStyles.bottomUIView}>
                {addedToCart ? (
                    <View>
                        <Text
                        style={bottomUIStyles.addedToCartText}
                        >
                        Total - ${total.toFixed(2)}
                        </Text>
                        <Text
                        style={bottomUIStyles.confirmationText}
                        >
                        Order sent successfully, it will be ready in 5 minutes! James will directly deliver it to your home 🛵
                        </Text>
                        <IngredientButton
                        title={`Cancel order`}
                        color="#fff"
                        backgroundColor="#7C4DFF"
                        bold
                        onClick={() => setAddedToCart(false)}
                        />
                    </View>                    
                ) : (                
                <>
                <View style={bottomUIStyles.bottomUIStylesTop}>
                    <Text style={bottomUIStyles.storeName}>
                        James' Sandwicherie
                    </Text>
                    <Text>⭐️⭐️⭐️⭐️⭐️</Text>
                </View>
                <Text style={bottomUIStyles.storeDescription}>
                    Sandwiches made with love by James
                </Text>
                <View style={bottomUIStyles.bottomUIStylesBottom} />
                <Text style={bottomUIStyles.cost}>
                    Your Creation
                </Text>
                <Text style={bottomUIStyles.instructions}>
                    Compose your sandwich by adding ingredients
                </Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={bottomUIStyles.ingredientsScroll}>
                    {Object.keys(INGREDIENTS).map((ingredient) => (
                        <View key={ingredient} style={bottomUIStyles.ingredient}>
                            <IngredientButton 
                                title={
                                    INGREDIENTS[ingredient].icon + `${captializeFirstLetter(ingredient)} (+$${INGREDIENTS[ingredient].price.toFixed(2)})`
                                }
                                onClick={() => addIngredient(ingredient)}
                            />
                        </View>
                    ))}
                </ScrollView>
                <IngredientButton 
                    title={`Add to cart ($${total.toFixed(2)})`}
                    color="#fff"
                    backgroundColor="#7C4Dff"
                    bold
                    onClick={() => setAddedToCart(true)}
                />
                </>
                )}
            </View>
        </SafeAreaView>
    )
}

const bottomUIStyles = {
    bottomUIView: {
        padding: 20
    },
    bottomUIStylesTop: {
        flexDirection: "row",
        gap: 8,
        alignItems: "center"
    },
    storeName: {
        flexShrink: 1,
        fontSize: 22,
        fontWeight: "900",
    },
    storeDescription: {
        color: "#666"
    },
    bottomUIStylesBottom: {
        height: 1,
        backgroundColor: "#ececec",
        marginVertical: 20,
    },
    cost: {
        fontSize: 16,
        fontWeight: "900",
        textAlign: "center"
    },
    instructions: {
        textAlign: "center",
        color: "#666"
    },
    ingredientsScroll: {
        marginTop: 8,
        marginBottom: 8,
        marginLeft: -20,
        marginRight: -20
    },
    ingredient: {
        padding:10,
    },
    addedToCartText: {
        fontSize: 16,
        fontWeight: "900",
    },
    confirmationText: {
        color: "#666",
        marginTop: 4,
        marginBottom: 16,
    }
}