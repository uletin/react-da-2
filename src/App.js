import React, {useState} from 'react';
import './App.css';
import NavBar from './components/NavBar';
import MyButton from './components/MyButton';
import Footer from './components/Footer';

const App = () => {

  const navHeading = "Navigation Bar"
  const navText = "SAUDI ABU SALMA"

  const [getNavBarValue, setNavBarValue] = useState("")

  const changeNavBarValue = () => {
    setNavBarValue("My Contact")
  }

  const clicked = () => {
    return alert("button dipencet")
  }

  const paragraph = () => {
    return <i> mantap bang </i>
  } 

  return (
    <>
      <NavBar navValue={navText} navHeading={navHeading} navBarValue={getNavBarValue}/>
      <h1>Ini Homepage</h1>
      <button onClick={() => changeNavBarValue()}>Ubah Navigasi</button>
      <MyButton clicked={clicked}/>
      <Footer paragraph={paragraph}/>
    </>
  )
}

export default App;
