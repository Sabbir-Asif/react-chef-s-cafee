import { useEffect, useState } from "react";
import Recipee from '../recipee/Recipee'
import RecipeTable from "../recipeTable/RecipeTable";
import CookingTable from "../cookingTable/CookingTable";
const Recipes = () => {

    const [recipes, setRecipes] = useState([]);
    const [recipeCart, setRecipeCart] = useState([]);
    const [cookingCart, setCookingCart] = useState([]);
    const [totalTime, setTotalTime] = useState(0);
    const [totalCalories, setTotalCalories] = useState(0);

    useEffect(() => {
        fetch('/food.json')
            .then(res => res.json())
            .then(data => setRecipes(data));
    }, [recipeCart, cookingCart])

    const handleWantToCook = (recipee) => {
        const recipeExists = recipeCart.some((item) => item.id === recipee.id);
        if (recipeExists) {
            alert('You have already added this to you cooking cart');
        }
        else {
            const newRecipee = [...recipeCart, recipee];
            setRecipeCart(newRecipee);
        }
    }

    const handlePreparing = (recipee) => {
        const recipeExists = cookingCart.some((item) => item.id === recipee.id);
        if (!recipeExists) {
            setCookingCart([...cookingCart, recipee]);

            const updatedRecipeCart = recipeCart.filter((item) => item.id !== recipee.id);
            setRecipeCart(updatedRecipeCart);

            setTotalTime(totalTime + recipee.preparing_time);
            setTotalCalories(totalCalories + recipee.calories);
        } else {
            alert('This recipe is already being prepared');
        }
    }
    return (
        <div className="mt-20">
            <div className="flex flex-col items-center space-y-10 mb-28">
                <h2 className="text-5xl font-semibold">Our Recipes</h2>
                <h3 className="max-w-2xl">Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque. </h3>
            </div>
            <div className="flex flex-col md:flex-row md:gap-10">
                <div className="grid grid-cols-1 md:grid-cols-2 justify-between gap-6">
                    {
                        recipes.map(recipee => <Recipee
                            key={recipee.id}
                            recipee={recipee}
                            handleWantToCook={handleWantToCook}
                        ></Recipee>)
                    }
                </div>
                <div className=" p-6 bg-gray-50 border-2 border-gray-200 rounded-lg">
                    <h2 className="text-2xl font-semibold text-center mt-4">Want to Cook: {recipeCart.length}</h2>
                    <div className="h-0.5 bg-gray-300 my-6"></div>
                    <RecipeTable recipeCart={recipeCart} handlePreparing={handlePreparing}></RecipeTable>

                    <h2 className="text-2xl font-semibold text-center mt-4">Currently Cooking: {cookingCart.length}</h2>
                    <div className="h-0.5 bg-gray-300 my-6"></div>
                    <CookingTable cookingCart={cookingCart}
                        totalTime={totalTime}
                        totalCalories={totalCalories}></CookingTable>
                </div>

            </div>
        </div>
    );
};

export default Recipes;