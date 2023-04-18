import React from "react"
import {Link} from 'react-router-dom'
// //theme
// import "primereact/resources/themes/lara-light-indigo/theme.css";     
    
// //core
// import "primereact/resources/primereact.min.css";

// //icons
// import "primeicons/primeicons.css";      

export const NavBar=()=>{


    return(
        <>
        <ul>
            <li><Link to="login">login</Link></li>
            <li><Link to="products">products</Link></li>
            <li><Link to="cart">cart</Link></li>
            <li><Link to="">wellcome</Link></li>
        </ul>
        <div className="card">
            {/* <Menubar model={items} /> */}
        </div>
        </>
    )
}


