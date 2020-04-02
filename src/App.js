import React from 'react';
import Table from './Table'

//App component
class App extends React.Component {
  state = {  }
  render() { 
    return ( 
      <div className='container'>
        <Table />
      </div>
     );
  }
}

export default App;