import React from 'react';
import {Header, Main, Footer, Portfolio, Blog, Shop, Contacts, Other} from './components'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import * as data from './data'

// console.log(data);

function App(props) {
  // const quantity = (arr, flag) => flag ? arr : arr.slice(-3)
  const {articles, showPage} = data  
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" render={() => <Main articles={articles} />} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/blog" render={()=> <Blog articles={articles} />} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/contacts" component={Contacts} />
          <Route component={Other} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
