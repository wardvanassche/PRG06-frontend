import {Link, useNavigate, useParams} from "react-router";
import {useEffect, useState} from "react";

function UpdateDish() {

    const params = useParams();
    const id = params.id;
    const navigate = useNavigate();

    async function fetchDish() {
        try {
            const response = await fetch(`http://145.24.222.221:8000/dishes/${id}`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json'
                }
            });
            const data = await response.json();
            console.log(data)
            setFormData(data);
        } catch (error) {
            console.error('Er is een fout opgetreden:', error);
            return [];
        }
    }

    useEffect(() => {
        fetchDish(id);
    }, [])

    const [formData, setFormData] = useState({
        dish: '',
        kitchen: '',
        author: '',
        description: '',
    });

    async function updateDish(dish) {
        try {
            const response = await fetch(`http://145.24.222.221:8000/dishes/${id}`, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dish)
            });

            const data = await response.json();

            navigate(
                `/dishes/${id}`
            )
            console.log(data);

            setFormData({
                dish: '',
                kitchen: '',
                author: '',
                description: '',
            })
        } catch (error) {
            console.error('Er is een fout opgetreden:', error);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        updateDish(formData);
    };

    // Generieke handler voor het bijwerken van de state
    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setFormData({
            ...formData, [name]: value,
        });
    };

    return (
        <>
            <form
                onSubmit={handleSubmit}
                className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg my-10"
            >
                <div className="mb-4">
                    <label htmlFor="dish" className="block text-lg font-medium text-gray-600 mb-2"> Dish: </label>
                    <input
                        type="text"
                        id="dish"
                        name="dish"
                        placeholder="Poke Bowl"
                        value={formData.dish}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 rounded-lg bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 placeholder:italic"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="kitchen" className="block text-lg font-medium text-gray-600 mb-2"> Kitchen: </label>
                    <input
                        type="text"
                        id="kitchen"
                        name="kitchen"
                        placeholder="Hawaiian"
                        value={formData.kitchen}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 rounded-lg bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 placeholder:italic"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="author" className="block text-lg font-medium text-gray-600 mb-2"> Author: </label>
                    <input
                        type="text"
                        id="author"
                        name="author"
                        placeholder="Anna Smith"
                        value={formData.author}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 rounded-lg bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 placeholder:italic"
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="description"
                           className="block text-lg font-medium text-gray-600 mb-2"> Description: </label>
                    <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        placeholder="Enter a brief description..."
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 h-32 rounded-lg bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none transition duration-300 placeholder:italic"
                    ></textarea>
                </div>
                <div className="flex space-x-4">
                    <Link
                        to={`/dishes/${id}`}
                        className="w-1/2 text-white bg-gray-600 hover:bg-gray-700 rounded-md px-6 py-3 font-medium text-center transition duration-300"
                    >
                        Cancel
                    </Link>
                    <button
                        type="submit"
                        className="w-1/2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </>

    )
}

export default UpdateDish