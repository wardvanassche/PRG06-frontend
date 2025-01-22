import {Link, useNavigate, useParams} from "react-router";
import {useEffect, useState} from "react";

function Dish() {

    const params = useParams()
    const id = params.id;
    const [dish, setDish] = useState(null)

    const navigate = useNavigate();

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

    async function deleteDish(id) {
        try {
            const response = await fetch(`http://145.24.222.221:8000/dishes/${id}`, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json'
                }
            });

            // reload
            navigate('/dishes');
        } catch (error) {
            console.error('Er is een fout opgetreden:', error);
            return [];
        }
    }

    const handleDelete = () => {
        deleteDish(dish.id);
    }

    return(
        <>
            <h1>Show details for dish {id}</h1>

            {
                dish ? (
                        <article>
                            <h1>{dish.dish}</h1>
                            <h2>{dish.kitchen}</h2>
                            <p>{dish.author}</p>
                            <Link to={`/dishes/update/${dish.id}`}>Update</Link>
                            <button onClick={handleDelete}>Delete</button>
                        </article>
                    )
                    :
                    <h1>No dish</h1>
            }
        </>
    )
}

export default Dish