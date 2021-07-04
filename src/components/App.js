import React from 'react';
import '../style/App.css';
import Cardlist from './Cardlist';
import * as collegeData from './colleges.json';

const App = () => {

  console.log(collegeData.default.colleges);
  return (
    <React.Fragment>
      <h3 className='container'>Colleges in North India</h3>
      <Cardlist colleges={collegeData.default.colleges}/>
    </React.Fragment>
  )
}

export default App

