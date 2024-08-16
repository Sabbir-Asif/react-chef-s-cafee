import { useEffect, useState } from "react";
import Recipee from '../recipee/Recipee'
const Recipes = () => {

    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch('/food.json')
            .then(res => res.json())
            .then(data => setRecipes(data));
    }, [])

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
                        key = {recipee.id}
                        recipee = {recipee}
                        ></Recipee>)
                    }
                </div>
                <div className="">
                    <h2 className="text-4xl">Something</h2>
                </div>
            </div>
        </div>
    );
};

export default Recipes;