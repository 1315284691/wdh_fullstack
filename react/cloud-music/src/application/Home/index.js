import React from 'react';
import { renderRoutes } from 'react-router-config';
import { NavLink } from 'react-router-dom';

function Home(props) {
    const { route } = props;
    console.log(route);
    return (
        <div>Home
            <NavLink to="/recommend">recommend</NavLink>
            <NavLink to="/singers">singers</NavLink>
            <NavLink to="/rank">rank</NavLink>
            {renderRoutes(route.routes)}
        </div>
    )
}

export default Home;