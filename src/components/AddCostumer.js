import React,{Component} from 'react';
import {costumers} from '../shared/costumers'
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody, Label, Col, Row ,Input} from 'reactstrap';
import '../App.css';
import { Control, Form, Errors, actions } from 'react-redux-form';
    
import {Link} from 'react-router-dom';


class AddCostumer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sno:'',
            id:'',
            cat:'',
            name:'',
            addr:'',
            phno:'',
            warehousesno:0,
            area:[],
            warehouses:[],
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
        this.props.resetFeedbackForm();
      }

      
    render() { 
        
            return (
                <div style={{paddingLeft:'40px', paddingRight:'40px' , borderRadius:'12px'}}>
                    <div className="incanvas" style={{}}>
                        <b>Add Costumer Details</b>
                        <Link type="button" className="topbutton float-right" to='/costumerdetails'>Save</Link>
                    </div>


                    <Form onSubmit={this.handleSubmit} model="costumer" style={{background:'white', borderRadius:'12px',paddingLeft:'40px', paddingRight:'40px',paddingTop:'40px'}}>

                        	
                        <Row className="form-group mb-2 formrow">
                            <div class="form-group mb-2" style={{fontSize:'15px'}}>
                                <label htmlFor="sno">S.no</label>
                                <Control.text model=".sno" class="formbox form-control" placeholder={costumers.length+1} value={this.state.value}/>
                            </div>

                            <div class="form-group mb-2 mx-4" style={{fontSize:'15px'}}>
                                <label htmlFor="name">Costumer Name</label>
                                <Control.text onChange={this.handleInputChange} model=".name" class="formbox form-control"/>
                            </div>

                            <div class="form-group mb-2 mx-4" style={{fontSize:'15px'}}>
                                <label htmlFor="cat">Category</label>
                                <Control.text model=".cat" class="formbox form-control"/>
                            </div>

                            <div class="form-group mb-2 mx-4" style={{fontSize:'15px'}}>
                                <label htmlFor="addr">Address</label>
                                <Control.text model=".addr" class="formbox form-control"/>
                            </div>

                        </Row>

                        <Row className="form-group mb-2 formrow">

                            <div class="form-group mb-2" style={{fontSize:'15px'}}>
                                <label htmlFor="phno">Contact Number</label>
                                <Control.text model=".phno" class="formbox form-control"/>
                            </div>

                            <div class="form-group mb-2 mx-4" style={{fontSize:'15px'}}>
                                <label htmlFor="warehouseno">Number Of Warehouses</label>
                                <Control.text model=".warehouseno" class="formbox form-control"/>
                            </div>

                        </Row>

                        <hr style={{width:'100%'}}></hr>

                        <div className="form-group mb-2 formrow" >

                            <h3 style={{textAlign:'center'}}>Add Warehouses</h3>

                            <Row className="form-group mb-2 formrow">

                                <div class="form-group mb-2 " style={{fontSize:'15px'}}>
                                    <label htmlFor="warehouses">Warehouse Name</label>
                                    <Control.text model=".warehouses[0]" class="formbox form-control"/>
                                </div>

                                <div class="form-group mb-2 mx-4 float-right" style={{fontSize:'15px'}}>
                                    <label htmlFor="area[0]">Area</label>
                                    <Control.text model=".area[0]" class="formbox form-control"/>
                                </div>

                            </Row>

                            <Row className="form-group mb-2 formrow">

                                <div class="form-group mb-2 " style={{fontSize:'15px'}}>
                                    <label htmlFor="warehouses[1]">Warehouse Name</label>
                                    <Control.text model=".warehouses[1]" class="formbox form-control"/>
                                </div>

                                <div class="form-group mb-2 mx-4 float-right" style={{fontSize:'15px'}}>
                                    <label htmlFor="area[1]">Area</label>
                                    <Control.text model=".area[1]" class="formbox form-control" />
                                </div>

                            </Row>

                            <Row className="form-group mb-2 formrow">

                                <div class="form-group mb-2 " style={{fontSize:'15px'}}>
                                    <label htmlFor="warehouses[2]">Warehouse Name</label>
                                    <Control.text model=".warehouses[2]" class="formbox form-control"/>
                                </div>

                                <div class="form-group mb-2 mx-4 float-right" style={{fontSize:'15px'}}>
                                    <label htmlFor="area[2]">Area</label>
                                    <Control.text model=".area[2]" class="formbox form-control" />
                                </div>

                            </Row>
                        </div>
                        

                        {/*Submit button for the form.*/}
                        <Row className="form-group">                            
                            <Col md={{size: 10, offset: 2}}>
                                <Button type="submit" color="primary">
                                    Save
                                </Button>
                            </Col>
                        </Row>
                </Form>

            </div>
            );
        };
}



export default AddCostumer;