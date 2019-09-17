import React from 'react'
import Nav from './Navigation'
import Razzle from './Razzle'
import Wallet from './fridaywallet'

class Home extends React.Component{
  render(){
    return (
      <div>
        <Nav />
        <Razzle />
        <Wallet />
      </div>
    )
  }
}

export default Home