import React from 'react';
import SearchForm from "../SearchForm/Form";
import Hotels from "../apiBackend/HotelDisplay";

function ViewALL() { 
    return (
        <div className = "Text">
            <h1>Hello This is the View all Site</h1>
            <SearchForm />
            <Hotels />
        </div>
       

    );
}

export default ViewALL;