import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from 'antd'; 
import {Navbar, Homepage, Exchanges, Cryptocurrencies, CryptoDetails, News, Footer} from './components';    
import './App.css'  ;

const App = () => {
  return (
    <div className='app'>
        <div className='navbar'>
            <Navbar/>
        </div>
        <div className='main'>
            <Layout>
                <div className='routes'>
                    <Routes>
                        < Route exact path='/' element={<Homepage/>} />
                        < Route exact path='/exchanges' element={<Exchanges/>}/>
                        <Route exact path='/cryptocurrencies' element={<Cryptocurrencies/>} />
                        <Route exact path='/crypto/:coinId' element={<CryptoDetails/>} />
                        <Route exact path='/news' element={<News/>} />
                    </Routes>
                </div>
            </Layout>

        <div className='footer'>
            <Footer/>
        </div>
    </div>
    </div>
  )
}

export default App