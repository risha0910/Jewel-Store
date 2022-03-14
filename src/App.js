//npm i react-router-dom@5.2.0
//npm i redux react-redux bootstrap redux-persist
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Itemlist from './components/Itemlist';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Additem from './components/Additem';
import Cart from './components/Cart';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';
import rootReducer from './reducers/rootReducer';
import { Provider } from 'react-redux';
import Footer from './components/Footer';


function App() {
  const persistConfig = {
    key: 'root',
    storage
  }
  const persistedReducer = persistReducer(persistConfig, rootReducer)
  const store = createStore(persistedReducer) //creating normal store
  const persistor = persistStore(store)// converting normal store to persisted store taht is persistor


  return (
    <div className="App">
      <h2 style={{backgroundColor: 'black', padding:'5px',color:'whitesmoke', fontFamily:'math', borderRadius:'50px'}}><img src='https://th.bing.com/th/id/OIP.aYXXoJlcH9V5FiFayKhGxAHaHa?pid=ImgDet&rs=1'/>Welcome To The Jewel Store</h2>
      <Provider store={store}>
        <PersistGate persistor={persistor}>

          <Navbar />
          {/* navbar component is placed outside browser router coz we have to diplay navbar in all pages so routing isnt required */}
          <BrowserRouter>

            <Switch>
              <Route path='/' component={Itemlist} exact />
              <Route path='/additem' component={Additem} exact />
              <Route path='/cart' component={Cart} exact />
            </Switch>

          </BrowserRouter>
          <Footer/>

        </PersistGate>
      </Provider>


    </div>
  );
}

export default App;



