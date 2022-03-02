import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
     <div>
        Welcome to our customer base!
        <Link to="/Login">Please Login.</Link>
     </div>
    )
  }
}
export default Home;