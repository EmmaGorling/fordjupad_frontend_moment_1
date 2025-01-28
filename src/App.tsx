import { useState } from 'react';
import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import TvShows from './components/TvShows';

function App() {
  const [title, setTitle] = useState("Mina serier")
  return (
    <>
      <Header siteTitle={title} />
      <main>
        <TvShows />
      </main>
      <Footer siteTitle={title} />
    </>
  )
}

export default App
