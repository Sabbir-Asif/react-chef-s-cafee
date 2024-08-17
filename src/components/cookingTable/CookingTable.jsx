import { useState } from "react";

const CookingTable = ({ cookingCart = [], totalTime, totalCalories }) => {

    const CookingTableData = ({ serialNumber, recipee }) => {
        return (
            <tr className="items-center">
                <th>{serialNumber}</th>
                <th>{recipee.name}</th>
                <th>{recipee.preparing_time} minutes</th>
                <th>{recipee.calories} calories</th>
            </tr>
        );
    };
   


    return (
        <div className="text-gray-400">
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cookingCart.length > 0 ? (
                                cookingCart.map((recipee, idx) => (
                                    <CookingTableData key={idx} serialNumber={idx + 1} recipee={recipee} />
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="5" className="text-center">No recipes available</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
                <div className="h-0.5 bg-gray-300 my-6"></div>
                <div className="flex justify-between mt-6 text-black font-medium">
                    <h3>Total Time: {totalTime}</h3>
                    <h3>Total Calories: {totalCalories}</h3>
                </div>
            </div>
        </div>
    );
};

export default CookingTable;