import React from 'react';
import SearchForm from "../SearchForm/Form";



function HomePage() { 
    return (
        <div className = "heroSection">
            <div className = "heroText">
                <h1 className = "heroText__text">Find your booking on Holidaze</h1>
            </div>
            <SearchForm />            
        </div>
    );
}

export default HomePage;