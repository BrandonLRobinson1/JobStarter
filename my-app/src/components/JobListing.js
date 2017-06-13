import React from 'react';
import Jobs from './Jobs'
import jsonListings from '../openJobs/openJobs.json';


class JobListing extends React.Component {
  constructor(){
    super();
  }

  render(){
  console.log(jsonListings, 'listing test')
    return(
      <div className="App">
        {jsonListings.map( (obj, index) => 
          <Jobs 
          obj={ obj }
          // obj={ JSON.parse( obj ) }
          index={index}
         />
        )}
      </div>
      )
  }
}

export default JobListing;