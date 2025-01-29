import {Link} from "react-router";

function DishComponent({dish}) {

    return(
        <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6 my-8">
            <Link
                to={`/dishes/${dish.id}`}
                className="text-indigo-600 hover:text-indigo-400 hover:underline text-sm mb-4 block"
            >
                View Details
            </Link>
            <div className="flex flex-col space-y-4">
                <h1 className="text-2xl font-semibold text-gray-900">{dish.dish}</h1>
                <h2 className="text-lg text-gray-700">{dish.kitchen}</h2>
                <h3 className="text-gray-500 text-base">{dish.author}</h3>
            </div>
        </div>
    )
}

export default DishComponent