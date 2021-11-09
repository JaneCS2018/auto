import './App.css';
import React from 'react';
import UploadedInput from './components/Upload'
import 'semantic-ui-css/semantic.min.css'


class App extends React.Component{

  render(){
    return (
      <div className="App">
        <div className="container">
          <UploadedInput />
          <div>
         
          </div> 
        </div>
      </div>
    );

  }
 
}

export default App;
