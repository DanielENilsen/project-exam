import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

function PageFooter() { 
    return (
        <div>
            <Navbar  className = "footerNav" collapseOnSelect expand="lg" variant="dark"></Navbar>
        </div>
    );
}

export default PageFooter;