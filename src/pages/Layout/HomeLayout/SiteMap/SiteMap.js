import React from 'react'
import { Link } from 'react-router-dom'
const SiteMap = ({ data }) => {
    return (
        <div>
            {data.map(item => <li><Link to="/">{item.permission_key}</Link></li>)}
        </div>
    )
}

export default SiteMap