import {Link, Outlet} from "react-router";

function Layout() {
    return (
        <>
            <body className="flex flex-col min-h-screen">

            <nav className="px-4 py-1 h-auto mb-4 w-full items-center bg-gray-50">
                    <div className="w-full justify-between items-center grid grid-cols-3 gap-4">
                        <div className="flex items-center">
                            <img className="h-16 w-16 my-3" alt="Logo"
                                 src="https://www.freeiconspng.com/uploads/food-png-6.png"/>
                            <span className="font-semibold text-2xl m-2">
                                Discover Dishes
                            </span>
                        </div>

                        <div className="flex space-x-16 justify-center text-lg">
                            <Link
                                to={"/"}
                                className="text-gray-900 font-semibold transition-all duration-300 ease-in-out hover:text-gray-500"
                            >
                                HOME
                            </Link>
                            <Link
                                to={"/dishes"}
                                className="text-gray-900 font-semibold transition-all duration-300 ease-in-out hover:text-gray-500"
                            >
                                DISHES
                            </Link>
                            <Link
                                to={"/dishes/create"}
                                className="text-gray-900 font-semibold transition-all duration-300 ease-in-out hover:text-gray-500"
                            >
                                CREATE
                            </Link>
                        </div>

                        <div className="flex items-center justify-end">
                            <p className="text-gray-400">
                                
                            </p>
                        </div>
                    </div>
            </nav>


            <main>
                <Outlet/>
            </main>

            <footer className="bg-gray-50 mt-auto">
                <div className="flex flex-wrap justify-center">
                    <div className="lg:w-1/5 md:w-1/2 w-full p-4">
                        <div className="p-8 rounded-xl">
                            <h4 className="mb-2 text-lg font-semibold">More Info</h4>
                            <p className="text-base">
                                "Discover a world of delicious dishes and share your culinary creations with us!"
                            </p>
                        </div>
                    </div>
                    <div className="lg:w-1/5 md:w-1/2 w-full p-4 flex justify-end">
                        <div className="p-8 rounded-xl flex flex-col">
                            <h4 className="mb-2 text-lg font-semibold">
                                Discover
                            </h4>
                            <div className="flex">
                                <Link to={"/"} className="mr-3 hover:underline">Home</Link>
                                <Link to={"/dishes"} className="mr-3 hover:underline">Dishes</Link>
                                <Link to={"/dishes/create"} className="hover:underline">Create</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="px-12 py-2 flex justify-center">
                    <p className="text-sm">© 2025 Discover Dishes. All rights reserved</p>
                </div>
            </footer>

            </body>
        </>

    )
}

export default Layout