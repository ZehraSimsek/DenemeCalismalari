import React from 'react'
import { useParams, Link, useRouteMatch } from 'react-router-dom'
import { useEffect, useState } from 'react';

function User() {
    const { id } = useParams();
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);
    const {url} = useRouteMatch();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(res => res.json())
            .then(data => setUser(data))
            .finally(() => setLoading(false));
    }, [id]);

    return (
        <div>
            <h1>UserDetails</h1>
            {loading && <div>Loading...</div>}

            {!loading &&
                <code>
                    {JSON.stringify(user)}
                </code>}

            <br />
            <br />
            <Link to={`${url}/${parseInt(id) + 1}`}>Next User ({parseInt(id) + 1})</Link>




        </div>
    )
}

export default User 