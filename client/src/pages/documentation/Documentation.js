import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import DocNav from '../../components/docs/DocNav'
import HeaderHome from '../../components/home/HeaderHome'
import FooterHome from '../../components/home/FooterHome'

const Documentation = () => {

    let { url } = useRouteMatch();

    return (
        <div className="bg-brown-sand h-screen">
            <HeaderHome/>
            <DocNav/>
            <ul>
                <li>
                    <Link to={`${url}/rendering`}>Rendering with React</Link>
                </li>
                <li>
                    <Link to={`${url}/components`}>Components</Link>
                </li>
                <li>
                    <Link to={`${url}/props-v-state`}>Props v. State</Link>
                </li>
            </ul>
            <FooterHome/>
        </div>
       
    );
}

export default Documentation;