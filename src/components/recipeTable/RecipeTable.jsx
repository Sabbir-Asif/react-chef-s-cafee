
const RecipeTable = ({ recipeCart = [], handlePreparing }) => {

    const RecipeTableData = ({ serialNumber, recipee, handlePreparing }) => {
        return (
            <tr className="items-center">
                <th>{serialNumber}</th>
                <th>{recipee.name}</th>
                <th>{recipee.preparing_time} minutes</th>
                <th>{recipee.calories} calories</th>
                <div className="">
                    <button className="btn bg-green-400 text-sm font-medium rounded-full" onClick={()=> handlePreparing(recipee)}>Preparing</button>
                </div>
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
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            recipeCart.length > 0 ? (
                                recipeCart.map((recipee, idx) => (
                                    <RecipeTableData key={idx} serialNumber={idx + 1} recipee={recipee} handlePreparing={handlePreparing} />
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="5" className="text-center">No recipes available</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default RecipeTable;
