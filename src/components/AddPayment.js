import React,{Component} from 'react';
import {payments} from '../shared/payment'
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody, Label, Col, Row } from 'reactstrap';
import '../App.css';
import { Control, Form, Errors, actions } from 'react-redux-form';
    
import {Link} from 'react-router-dom';


class AddPayment extends Component {

    constructor(props) {
        super(props);
        this.state = {
            
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    

    handleSubmit(values) {
        alert(JSON.stringify(values))
        this.props.postCostumer(values);
        this.props.resetPaymentForm();
      }
    

      
    render() { 
        
            return (
                <div style={{paddingLeft:'40px', paddingRight:'40px' , borderRadius:'12px'}}>
                    <div className="incanvas" style={{}}>
                        <b>Add Payment Details</b>
                        <Link type="button" className="topbutton float-right" to='/paymentdetails'>Save</Link>
                    </div>


                    <Form onSubmit={this.handleSubmit} model="payment" style={{background:'white', borderRadius:'12px',paddingLeft:'40px', paddingRight:'40px',paddingTop:'40px'}}>

                        	
                        <Row>
                            <div class="form-group mb-2" style={{fontSize:'15px'}}>
                                <label htmlFor=".sno">S.no</label>
                                <Control.text onChange={this.handleInputChange} model=".sno" class="formbox form-control" placeholder={payments.length+1} value={payments.length+1}/>
                            </div>

                            <div class="form-group mb-2 mx-4" style={{fontSize:'15px'}}>
                                <label htmlFor=".name">Costumer Name</label>
                                <Control.text onChange={this.handleInputChange} model=".name" class="formbox form-control" />
                            </div>

                            <div class="form-group mb-2 mx-4" style={{fontSize:'15px'}}>
                                <label htmlFor=".cat">Category</label>
                                <Control.text model=".cat" class="formbox form-control"/>
                            </div>

                            <div class="form-group mb-2 mx-4" style={{fontSize:'15px'}}>
                                <label htmlFor=".tranxid">Transaction ID</label>
                                <Control.text onChange={this.handleInputChange} model=".tranxid" class="formbox form-control" />
                            </div>

                        </Row>

                        <Row>
                            <div class="form-group mb-2" style={{fontSize:'15px'}}>
                                <label htmlFor=".amt">Amount Sent</label>
                                <Control.text onChange={this.handleInputChange} model=".amt" class="formbox form-control" required/>
                            </div>

                            <div class="form-group mb-2 mx-4" style={{fontSize:'15px'}}>
                                <label htmlFor="name">Transaction Type</label>
                                <Control.text onChange={this.handleInputChange} model=".type" class="formbox form-control" />
                            </div>

                            <div class="form-group mb-2 mx-4" style={{fontSize:'15px'}}>
                                <label htmlFor="phno">Pnone Number</label>
                                <Control.text onChange={this.handleInputChange} model=".phno" class="formbox form-control"/>
                            </div>

                        </Row>

                           <div class="form-group mb-2" style={{fontSize:'15px'}}>
                                <label htmlFor="other">Other Information</label>
                                <Control.text onChange={this.handleInputChange} model=".other" class="formbox form-control" />
                            </div>

                        

                        <hr style={{width:'100%'}}></hr>

                        

                        {/*Submit button for the form.*/}
                        <Row className="form-group">
                                <Col md={{size:10, offset: 2}}>
                                    <Button type="submit" color="primary">
                                    Save Payment
                                    </Button>
                                </Col>
                            </Row>
                </Form>

            </div>
            );
        };
}



export default AddPayment;