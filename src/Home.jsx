import {Link} from "react-router";

function Home() {
    return (
        <div className="flex items-center justify-center my-10 max-h-fit">
            <div className="bg-white shadow-lg rounded-lg max-w-4xl w-full flex items-center space-x-8">

                {/* Text Section */}
                <div className="flex-1 pl-8">
                    <h1 className="text-4xl font-bold text-blue-600 mb-4">About Us</h1>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                        Welcome to <span className="font-semibold text-gray-800">Discover Dishes</span>, your go-to
                        place
                        for discovering delicious dishes! Our mission is to bring food lovers together by sharing
                        amazing
                        recipes and inspiring creativity in the kitchen.
                    </p>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                        Whether you're a seasoned chef or just getting started, we provide a platform for you to
                        discover,
                        create, and enjoy mouth-watering dishes from around the world. Join us on this flavorful
                        journey!
                    </p>
                    <div className="flex justify-center space-x-4 mt-6">
                        <Link
                            to="/dishes"
                            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-500 transition transform hover:scale-105 duration-300"
                        >
                            View Dishes
                        </Link>
                        <Link
                            to="/dishes/create"
                            className="px-6 py-3 bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-700 transition transform hover:scale-105 duration-300"
                        >
                            Create a Dish
                        </Link>
                    </div>
                </div>

                {/* Image Section */}
                <div className="flex-1">
                    <img
                        className="w-full h-auto rounded-r-lg object-cover"
                        alt="Delicious Dish"
                        src="https://plus.unsplash.com/premium_photo-1661771822467-e516ca075314?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGlzaHxlbnwwfHwwfHx8MA%3D%3D"
                    />
                </div>

            </div>
        </div>

    )
}

export default Home