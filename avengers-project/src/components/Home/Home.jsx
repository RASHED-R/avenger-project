import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Cart from '../Cart/Cart';

import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
const Home = () => {

    const [allActors, setAllActors] = useState([])
    const [selectedActors, setSelectedActors] = useState([])
    const [totalSalary, setTotalSalary] = useState(0)
    const [remainingMoney, setRemainingMoney] = useState(0)
    const budget = 20000;
    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setAllActors(data))
    }, [])
    // console.log(allActors)
    const handleSelectedActor = (actor) => {
        let countSalary = actor.salary;
        const isExist = selectedActors.find((item) => item.id == actor.id)
        if (isExist) {
            return alert('Already Selected')
        } else {
            selectedActors.forEach(item => {
                countSalary += item.salary;
            });
            setTotalSalary(countSalary)
            const remainingBalance = budget - countSalary;
            if (countSalary > budget) {
                Swal.fire({
                    title: 'Error!',
                    text: 'You Have Not Enough Balance',
                    icon: 'error',
                    confirmButtonText: 'Cool'
                })
            } else {
                setRemainingMoney(remainingBalance);
                setSelectedActors([...selectedActors, actor]);
            }

        }
    }
    // console.log(selectedActors);
    return (
        <div>
            <div className="container mx-auto">
                <div className='grid grid-cols-3 gap-4'>
                    <div className="col-span-2 ... border grid grid-cols-2 gap-4">
                        {
                            allActors.map((actor, id) =>
                                <Card actor={actor} key={id} handleSelectedActor={handleSelectedActor}></Card>
                            )
                        }
                    </div>
                    <div className="...">
                        <h1>Total Actor: {selectedActors.length}</h1>
                        <h4>Remaining: {remainingMoney}</h4>
                        <h4>Total Cost: {totalSalary}</h4>
                        {
                            selectedActors.map((actor, id) => <Cart actor={actor} key={id} ></Cart>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;