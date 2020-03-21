import React from 'react'

export default function DropdownItem(props) {
    return (
        <div>
        {
            props.items.map(item => {
                return (
                    <li key={item.title} className="nav-item dropdown my-sm-0 float-right">
                        <a className="nav-link dropdown-toggle text-dark mr-5" href="/" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {item.title}<i className="fas fa-chevron-down" style={{margin:"0px 12px"}}></i>
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        {item.links.map(link => {
                                return (
                                    <a key={link.text} className="dropdown-item" href={link.url}>{link.text}</a>
                                )
                            })}
                        </div>
                    </li>
                )
            })
        }
        </div>
    )
}
