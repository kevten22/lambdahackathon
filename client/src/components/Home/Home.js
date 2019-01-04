import React from 'react';
import {Link} from "react-router-dom";
import './Home.scss';

const Home = props => {
  return (
    <div className="home">
        {
            props.collections.map((ele,index) => (
                <div key={index}>
                    <Link to={`/collection/${ele.collectionName}`}>{ele.collectionName}</Link>
                </div>
                )
            )
        }
    </div>
  );
};

export default Home;