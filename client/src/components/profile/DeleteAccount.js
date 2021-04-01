import React from 'react';
import { Link, useParams } from 'react-router-dom';

const DeleteAccount = () => {

    const { id } = useParams();

    const handleDelete = () => {

        //======================================================================================//
        //                         Fetch API location + POST body-properties                    //
        //======================================================================================//
        

        fetch(`http://localhost:5000/api/delete/${id}`, {
            method: 'POST',
            body: JSON.stringify({
                id : {id}
            }),
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json; charset=UTF-8'
            }

        })
        .then(res => res.json())
        .then(res => window.location.href = "/")
        .catch((error) => {
            console.log(error)
        });
    };

    


    return (
        
        <div className="flex flex-col text-blue-naval">

            <div className="flex flex-row h-auto z-0">

                    <div className="flex flex-col w-nine m-5 text-2xl">

                        <h1 className="text-4xl text-center mt-8 mb-16">Are you sure you want to delete your account?</h1>

        
                        <div className="flex flex-row my-6 justify-around">
                            <button className="text-brown-white hover:underline bg-brown-yellow rounded-br-lg rounded-tl-lg p-3 2xl:text-lg 2xl:p-4 mb-3" onClick={handleDelete}>Please Delete</button>
                        </div>
                        <div className="flex flex-row my-6 justify-around">
                            <button className="text-brown-white hover:underline bg-blue-naval rounded-br-lg rounded-tl-lg p-3 2xl:text-lg 2xl:p-4 mb-3"><Link to={`/profile/${id}`}>Cancel</Link></button>
                        </div>

                    </div>
                </div>
        </div>
    );
}

export default DeleteAccount;