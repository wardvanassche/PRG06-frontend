import {Link, Outlet} from "react-router";

function Layout() {
    return (
        <>
            <header className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-6 shadow-lg flex items-center justify-center">
                <h1 className="text-4xl font-extrabold text-center tracking-wide">PRG06</h1>
            </header>

            <nav className="bg-gray-900 py-4 shadow-md">
                <div className="flex justify-center space-x-8">
                    <Link
                        to="/"
                        className="text-white text-lg font-medium hover:text-blue-400 transition duration-300"
                    >
                        Home
                    </Link>
                    <Link
                        to="/dishes"
                        className="text-white text-lg font-medium hover:text-blue-400 transition duration-300"
                    >
                        Dishes
                    </Link>
                    <Link
                        to="/dishes/create"
                        className="text-white text-lg font-medium hover:text-blue-400 transition duration-300"
                    >
                        Create Dishes
                    </Link>
                </div>
            </nav>

            <main className="p-8 max-w-4xl mx-auto">
                <Outlet />
            </main>
        </>

    )
}

export default Layout