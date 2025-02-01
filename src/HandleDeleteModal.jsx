import {useNavigate, useParams} from "react-router";

function HandleDeleteModal({ showModal, onClose }) {

    const params = useParams()
    const id = params.id;
    const navigate = useNavigate();

    const handleConfirmDelete = () => {
        deleteDish();
    };

    async function deleteDish() {
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

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 backdrop-blur">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm">
                <h2 className="text-xl font-semibold mb-4">Confirm Delete</h2>
                <p>Are you sure you want to delete this dish?</p>
                <div className="flex justify-end mt-6 space-x-4">
                    {showModal && (
                        <button
                            onClick={onClose}
                            className="text-white bg-gray-600 hover:bg-gray-700 rounded-md px-4 py-2 font-medium transition duration-300"
                        >
                            Cancel
                        </button>
                    )}
                    <button
                        onClick={handleConfirmDelete}
                        className="text-white bg-red-600 hover:bg-red-700 rounded-md px-4 py-2 font-medium transition duration-300"
                    >
                    Delete
                    </button>
                </div>
            </div>
        </div>
    )
}

export default HandleDeleteModal