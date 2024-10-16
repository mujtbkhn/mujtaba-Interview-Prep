import { useEffect, useState } from "react"

export default function List() {
    const [searchText, setSearchText] = useState('')
    const [cars, setCars] = useState([])

    useEffect(() => {

        const combined = CAR_LIST.map((car) => {
            const price = PRICE_LIST.find(p => p.car_id === car.id)?.price
            return { ...car, price }
        })
        console.log(combined)
        setCars(combined)
    }, [])

    const filteredCars = cars.filter((car, i) =>
        car.make.toLowerCase().includes(searchText.toLowerCase()) ||
        car.model.toLowerCase().includes(searchText.toLowerCase()) ||
        String(car.price).includes(searchText)
    )

    return (
        <div className="App" style={{ marginTop: 20 }}>
            {/* create search box */}
            <input type="text" placeholder="search" onChange={(e) => setSearchText(e.target.value)} />
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Make</th>
                        <th>Model</th>
                        <th>Type</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredCars.map((item, i) => (
                        <tr key={i}>
                            <td>{item.id}</td>
                            <td>{item.make}</td>
                            <td>{item.model}</td>
                            <td>{item.type}</td>
                            <td>{item.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {/* render row format */}
            {/* <div style={{ fontSize: 20, color: "black" }}>
        <span style={{ marginRight: 20 }}>Id</span> 
        <span style={{ marginRight: 20 }}>Make</span>
        <span style={{ marginRight: 20 }}>Model</span>
        <span style={{ marginRight: 20 }}>Type</span>
        <span style={{ marginRight: 20 }}>Price</span>
      </div> */}
        </div>
    );
}

// RENDER THE COLUMNS: make, model, type, price
// Create a search box, search cars by make, model, price

export const CAR_LIST = [
    {
        id: 1,
        make: "Mitsubishi",
        model: "Lancer",
        type: "Used",
    },
    { id: 2, make: "Honda", model: "Vezel", type: "New" },
    { id: 3, make: "Honda", model: "Civic", type: "Used" },
    { id: 4, make: "Audi", model: "A3", type: "New" },
    { id: 5, make: "Audi", model: "A4", type: "Used" },
    { id: 6, make: "Audi", model: "A7", type: "New" },
    { id: 7, make: "BMW", model: "i8", type: "Used" },
];

export const PRICE_LIST = [
    { car_id: 1, price: 1000 },
    { car_id: 2, price: 2000 },
    { car_id: 3, price: 3000 },
    { car_id: 4, price: 4000 },
    { car_id: 5, price: 5000 },
    { car_id: 6, price: 6000 },
    { car_id: 7, price: 7000 },
];
