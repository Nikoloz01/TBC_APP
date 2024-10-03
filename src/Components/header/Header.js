import React from 'react';
import {Link} from 'react-router-dom';

export default function Header() {

    return (
        <nav>
            <div className="main-container">





                <div className="end">
                    <Link to={"/"}>
                        <span>Home</span>
                    </Link>
                    <Link to={"/Blog"}>

                    <span>Blog</span>
                    </Link>
                    

                    <Link to={"/ProfileCardContainer"}>
                    <span>Profile</span>
                    </Link>


                   
                    <Link to={"/contact"}>
                        <span>Contact</span>
                    </Link>

                    <Link to={"/Assignments3"}>
                        <span>Assignments3</span>
                    </Link>
                </div>
            </div>
        </nav>
    )
}