import {Home,CreateListing,CreateListing1,CreateListing2,CreateListing3,SignUp,ProductDetailApproval,ProductDetail} from './pages';
import { Route, Switch, Redirect } from "react-router-dom";
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signup" component={SignUp}/>
        <Route path="/create_listing_1" component={CreateListing}/>
        <Route path="/create_listing_2" component={CreateListing1}/>
        <Route path='/create_listing_3' component={CreateListing2}/>
        <Route path='/create_listing_4' component={CreateListing3}/>
        <Route path='/create_listing_4' component={CreateListing3}/>
        <Route path="/product_detail" component={ProductDetail}/>
        <Route path='/product_detail_approval' component={ProductDetailApproval}/>
      </Switch>
    </div>
  );
}

export default App;
