import {Link} from "react-router";

function Home() {
    return (
        <div className="flex flex-col text-gray-900 px-4 my-8">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-3xl text-center">
                <h1 className="text-5xl font-bold text-blue-600 mb-4">About Us</h1>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    Welcome to <span className="font-semibold text-gray-800">PRG06</span>, your go-to place for
                    exploring delicious dishes!
                    Our mission is to bring food lovers together by sharing amazing recipes and inspiring creativity in
                    the kitchen.
                </p>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    Whether you're a seasoned chef or just getting started, we provide a platform for you to discover,
                    create,
                    and enjoy mouth-watering dishes from around the world. Join us on this flavorful journey!
                </p>
                <div className="flex justify-center space-x-4 mt-6">
                    <Link
                        to="/dishes"
                        className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-500 transition duration-300"
                    >
                        View Dishes
                    </Link>
                    <Link
                        to="/dishes/create"
                        className="px-6 py-3 bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-700 transition duration-300"
                    >
                        Create a Dish
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home