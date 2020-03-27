import React from 'react'
import logo from '../../img/logo.svg'
import DropdownItem from './DropdownItem'

const listItems = [
    {
        "title":"Movies",
        "links":[
            {
                "text":"Top Rated Films",
                "url": "#"
            },
            {
                "text":"Most Popular Films",
                "url": "#"
            },
            {
                "text":"Top Box Office",
                "url": "#"
            }
        ]
    },
    {
        "title":"TV Shows",
        "links":[
            {
                "text":"Top Rated Shows",
                "url": "#"
            },
            {
                "text":"Most Popular Shows",
                "url": "#"
            },
            {
                "text":"Browse TV Shows by Genre",
                "url": "#"
            }
        ]
    }
]

export default function NavBar() {
    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-custom"> 
            <a className="navbar-brand" href="/">
                <img src={logo} height="40" alt=""/>
            </a>
            <div className="collapse navbar-collapse float-right" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <DropdownItem items={listItems}/>
                </ul>
            </div>
        </nav>

    )
}
