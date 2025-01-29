import {Link, Outlet} from "react-router";

function Layout() {
    return (
        <>
            <header className="bg-blue-600 text-white p-4">
                <h1 className="text-3xl font-bold text-center">PRG06</h1>
            </header>
            <nav className="bg-gray-800 p-4">
                <div className="flex justify-center space-x-6">
                    <Link
                        to="/"
                        className="text-white hover:text-blue-400 transition duration-300"
                    >
                        Home
                    </Link>
                    <Link
                        to="/about"
                        className="text-white hover:text-blue-400 transition duration-300"
                    >
                        About
                    </Link>
                    <Link
                        to="/dishes"
                        className="text-white hover:text-blue-400 transition duration-300"
                    >
                        Dishes
                    </Link>
                    <Link
                        to="/dishes/create"
                        className="text-white hover:text-blue-400 transition duration-300"
                    >
                        Create dishes
                    </Link>
                </div>
            </nav>
            <main className="p-6">
                <Outlet />
            </main>
        </>
    )
}

export default Layout