import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header/header'
import Main from './Main/main'
import Footer from './Footer/footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Header/>
  <Main/>
  <Footer/>
  </React.StrictMode>,
)
