import {Link} from "react-router";

function DishComponent({dish}) {

    return (
        <div className="bg-indigo-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 max-w-md mx-auto mb-6">
            <Link
                to={`/dishes/${dish.id}`}
                className="text-indigo-600 hover:text-indigo-400 hover:underline text-sm mb-4 block"
            >
                View Details
            </Link>
            <div className="flex flex-col space-y-4">
                <h1 className="text-2xl font-semibold text-gray-900">{dish.dish}</h1>
                <h2 className="text-lg text-gray-700">{dish.kitchen}</h2>
                <p className="text-gray-500 text-base">{dish.author}</p>
            </div>
        </div>
    )
}

export default DishComponent