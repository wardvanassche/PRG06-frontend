import {useState} from "react";
import {useNavigate} from "react-router";

function CreateDish() {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        dish: ``,
        kitchen: ``,
        author: ``,
        description: ``,
    });

    // Generieke handler voor het bijwerken van de state
    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setFormData({
            ...formData, [name]: value,
        });
    };

    async function createDish(dish) {
        try {
            const response = await fetch('http://145.24.222.221:8000/dishes', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dish)
            });

            const data = await response.json();

            navigate('/dishes');
            console.log(data);
        } catch (error) {
            console.error('Er is een fout opgetreden:', error);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        createDish(formData);
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
                <button
                    type="submit"
                    className="w-full py-3 px-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium"
                >
                    Submit
                </button>
            </form>
        </>

    )
}

export default CreateDish