import {Link, useNavigate, useParams} from "react-router";
import {useEffect, useState} from "react";

function Dish() {

    const params = useParams()
    const id = params.id;
    const [dish, setDish] = useState(null)

    const navigate = useNavigate();

    async function deleteDish(id) {
        try {
            const response = await fetch(`http://145.24.222.221:8000/dishes/${id}`, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json'
                }
            });
            console.log("dish deleted");

            // reload
            navigate('/dishes');

        } catch (error) {
            console.error('Er is een fout opgetreden:', error);
            return [];
        }
    }

    async function fetchDish(id) {
        try {
            const response = await fetch(`http://145.24.222.221:8000/dishes/${id}`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json'
                }
            });
            const data = await response.json();
            console.log(data)
            setDish(data);
        } catch (error) {
            console.error('Er is een fout opgetreden:', error);
            return [];
        }
    }

    useEffect(() => {
        fetchDish(id);
    }, []);

    const handleDelete = () => {
        deleteDish(dish.id);
    }

    return(
        <>
            {dish ? (
                <article className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6 my-8 relative">
                    <h1 className="text-3xl font-semibold text-gray-900 mb-2">{dish.dish}</h1>
                    <h2 className="text-xl text-gray-700 mb-4">{dish.kitchen}</h2>
                    <h3 className="text-sm text-gray-500 mb-2">By {dish.author}</h3>
                    <p className="text-sm text-gray-500 mb-6">{dish.description}</p>

                    <div className="flex justify-between items-center mt-4">
                        <Link
                            to="/dishes"
                            className="text-white bg-gray-600 hover:bg-gray-700 rounded-md px-4 py-2 font-medium transition duration-300"
                        >
                            Back
                        </Link>

                        <div className="flex space-x-4">
                            <Link
                                to={`/dishes/update/${dish.id}`}
                                className="text-white bg-indigo-600 hover:bg-indigo-700 rounded-md px-4 py-2 font-medium transition duration-300"
                            >
                                Update
                            </Link>
                            <button
                                onClick={handleDelete}
                                className="text-white bg-red-600 hover:bg-red-700 rounded-md px-4 py-2 font-medium transition duration-300"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </article>

            ) : (
                <h1 className="text-center text-gray-700 text-xl mt-8">No dish</h1>
            )}
        </>
    )
}

export default Dish