import { FaRegClock } from "react-icons/fa6";
import { AiOutlineFire } from "react-icons/ai";

const Recipee = ({ recipee, handleWantToCook }) => {
    const { name, description, image, ingredients, preparing_time, calories } = recipee;
    return (
        <div className="card bg-gray-50 rounded-lg shadow-sm p-6">
            <figure>
                <img
                    src={image}
                    alt="Food" className="h-48 w-full rounded-lg" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className="text-gray-400">{description}</p>
                <div className="mt-4">
                    <h2 className="text-lg font-medium">Ingredients: {ingredients.length}</h2>
                    <div className="mt-6 text-gray-400">
                        {
                            ingredients.map((ingredient, idx) => <li key={idx}>{ingredient}</li>)
                        }
                    </div>
                </div>
                <div className="h-0.5 bg-gray-400 my-4"></div>
                <div className="flex justify-start gap-6 font-light">
                    <div className="flex items-center gap-2">
                        <FaRegClock className="text-xl" />
                        <h3> {preparing_time} minutes</h3>
                    </div>
                    <div className="flex items-center gap-1">
                        <AiOutlineFire className="text-xl" />
                        <h3>{calories} calories</h3>
                    </div>
                </div>
                <div className="card-actions justify-start mt-6">
                    <button className="btn bg-green-400 text-lg font-medium rounded-full" onClick={() => handleWantToCook(recipee)}>Want to Cook</button>
                </div>
            </div>
        </div>
    );
};

export default Recipee;