import React, { useEffect, useState } from 'react';
import {NavLink , useRouteMatch , Switch , Route} from 'react-router-dom'
import User from './User.js';
import './Users.css';

function Users() {
    const [users, setUsers] = useState([]);
    const {path , url} = useRouteMatch();

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => setUsers(data))
    }, []);


    return (
        <>
            {
                users.map((user) => (
                    <li key={user.id}>
                        <NavLink to={`${url}/${user.id}`} activeClassName="active" >{user.name}</NavLink>
                    </li>
                ))
            }

            <Switch>
                <Route exact path={path}>
                    <h3>Please select a user.</h3>
                </Route>
                <Route path={`${path}/:id`} component={User} />
            </Switch>

        </>
    )
}

export default Users;
