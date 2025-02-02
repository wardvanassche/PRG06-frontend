import {Link} from "react-router";

function DishComponent({dish}) {

    return (
        <div
            className="max-w-sm w-full mx-auto bg-white shadow-lg rounded-lg overflow-hidden flex flex-col transition-transform transform hover:scale-105 hover:shadow-xl">
            <div className="p-6 flex flex-col justify-between flex-grow">
                <h1 className="text-3xl font-semibold text-gray-900 mb-3">{dish.dish}</h1>
                <h3 className="text-gray-700 text-lg mb-4">{dish.kitchen}</h3>

                <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                    By {dish.author}
                </p>

                <div className="flex justify-end mt-auto">
                    <Link
                        to={`/dishes/${dish.id}`}
                        className="inline-block bg-indigo-600 text-white px-6 py-3 font-medium rounded-lg shadow-md hover:bg-indigo-500 transition-colors duration-300"
                    >
                        Explore Dish
                    </Link>
                </div>
            </div>
        </div>


    )
}

export default DishComponent