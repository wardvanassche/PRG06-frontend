import {useEffect, useState} from "react";
import DishComponent from "./DishComponent.jsx";

function Dishes() {

    const [dishes, setDishes] = useState(null);

    useEffect(() => {
        async function fetchDishes() {
            try {
                const response = await fetch('http://145.24.222.221:8000/dishes', {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json'
                    }
                });
                const data = await response.json();
                console.log(data);
                setDishes(data.items);
            } catch (error) {
                console.error('Er is een fout opgetreden:', error);
            }
        }

        fetchDishes();
    }, []);

    const showDishes = dishes ? dishes.map((dish) => (<DishComponent key={dish.id} dish={dish}/>)) : <h1>Loading</h1>;

    return (
        <>
            <div className="grid grid-cols-3 gap-y-10 m-10">
                {showDishes}
            </div>
        </>
    );

}

export default Dishes