import React,{Component} from 'react';
import '../App.css';
import Home from './HomeComponent';
import CostumerDetail from './CostumerDetails';
import PaymentDetails from './PaymentDetails';
import Addcostumer from './AddCostumer';
import {costumers } from '../shared/costumers';
import { Switch, Route, Redirect,withRouter } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import AddPayment from './AddPayment';
import AllPayments from './AllPayments';
import { Navbar, NavbarBrand } from 'reactstrap';
import { postCostumer, fetchCostumers, postPayment } from '../redux/ActionCreaters';
import AddCostumer from './AddCostumer';
import {actions } from 'react-redux-form';
import {connect} from 'react-redux';

const mapStateToProps = state=>
{
  return{
      costumers : state.costumers,
      payments : state.payments
  }
}

const mapDispatchToProps = (dispatch)=>
{
  return (
    {
      //fetchCostumers:()=>{dispatch(fetchCostumers())},
      resetFeedbackForm:()=>{dispatch(actions.reset('costumer'))},
      postCostumer:(values)=>dispatch(postCostumer(values)),
      resetPaymentForm:()=>{dispatch(actions.reset('payment'))},
      postPayment:(values)=>dispatch(postPayment(values)),
    }
  )
}

class Main extends Component {

    /*componentDidMount()
    {
        this.props.fetchCostumers();
    }*/
    
    render() {      
    
        return (
        <div className="all">
            <nav className="navbar navbar-light bg-light sticky-top navclass" style={{}}>
                <NavbarBrand ><b>Poultry ERP Project</b></NavbarBrand>
                <div className="float-right">
                    <NavLink type="button"className="btn btn-outline-success my-2 my-sm-0 btn1 mx-sm-1"  to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                    <button className="btn btn-outline-success my-2 my-sm-0 btn1 mx-sm-1" type="button">My Documents</button>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="button">Logout<span className="fa fa-logout fa-lg"></span> </button>
                </div>
            </nav>

            <div className="cover">
                <div class=" text-dark sidenav" style={{height: '100%',
                                                            position: 'fixed',
                                                            top: '0',
                                                            left: '0',
                                                            overflowx: 'hidden',
                                                            paddingTop: '7rem',
                                                            background: '#FFFFFF 0% 0% no-repeat padding-box'}}>

                    <div className="">
                        <strong class="p-3 mb-2 bn1">Data input</strong>
                        <hr width="50%" align="left" style={{paddingLeft:'20%', color:'#707070'}}></hr>
                        <NavLink className="sidebaritem p-2 mb-3 fa fa-home fa-lg  mx-sm-1"  to='/costumerdetails' style={{paddingTop:'20px'}}>Add Profile information</NavLink>
                        <NavLink className="sidebaritem p-2 mb-3 fa fa-home fa-lg  mx-sm-1"  to='/paymentdetails' style={{paddingTop:'20px'}}>Payment Transactions</NavLink>
                    </div>
                    <br/>
                    <div className="">
                        <strong class="p-3 mb-2 bn1 ">Reports</strong>
                        <hr width="50%" align="left" style={{paddingLeft:'20%', color:'#707070'}}></hr>
                        <NavLink className="sidebaritem p-2 mb-3 fa fa-home fa-lg mx-sm-1"  to='/allpayments' style={{paddingTop:'20px'}}>Payment Report</NavLink>
                    </div>
                </div>
                <div className="main">
                    <Switch>
                        <Route path='/home' component={Home} />
                        <Route exact path='/costumerdetails' component={CostumerDetail} />
                        <Route exact path='/addcostumer' component={()=><AddCostumer resetFeedbackForm={this.props.resetFeedbackForm} postCostumer={this.props.postCostumer}/>} />
                        <Route exact path='/paymentdetails' component={PaymentDetails} />
                        <Route exact path='/addpayment' component={()=><AddPayment resetPaymentForm={this.props.resetPaymentForm} postCostumer={this.props.postPayment}/>} />
                        <Route exact path='/allpayments' component={AllPayments} />
                        <Redirect to="/home" />
                    </Switch>
  
                </div>
            </div>
        </div>
        );
      }
};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));