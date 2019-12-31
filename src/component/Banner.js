import React from 'react'

export default function Banner({title, subtitle, children}) {
    return (
        <div className = 'banner'>
           <h2>{title}</h2>
           <div></div>
           <p>{subtitle}</p>
           {children}
        </div>
    )
}
