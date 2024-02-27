import React from 'react';

const Card = ({ actor, handleSelectedActor }) => {
    // console.log(actor)
    const { name, age, image, role, salary } = actor;
    // console.log(name)
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center p-0">
                    <h2 className="card-title">{name}</h2>
                    <p>Age: {age}</p>
                    <div className="flex justify-between">
                        <p>Role: {role}</p>
                        <p className='ms-4'>Salary: {salary} $</p>
                    </div>
                    <div className="card-actions">
                        <button className="btn btn-primary" onClick={() => handleSelectedActor(actor)}> Select</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;