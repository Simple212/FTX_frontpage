import React from "react";  
import Navbar2 from './Comp./Navbar2.js'
import Carousel2 from './Comp./Carousel2.js'

class App extends React.Component{
  render(){
    return(
      <div className="App">
      <Navbar2 />
      <Carousel2 />
      </div>
    )
  }
}

export default App