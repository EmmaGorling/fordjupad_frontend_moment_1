import { useState } from 'react';
import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [title, setTitle] = useState("Min serie-lista")
  return (
    <>
      <Header siteTitle={title} />

      <Footer siteTitle={title} />
    </>
  )
}

export default App
