import React,{Component} from 'react';
import {AddCostumer} from './AddCostumer';
import {Link} from 'react-router-dom';
import {payments } from '../shared/payment';




class PaymentDetail extends Component {

   
    
    handleChange(costumer){
        return(
            <div>
                <td>{costumer.cat}</td>
                <td>{costumer.name}</td>
            </div>
        )
      }



    render() { 

        const costumerlist =payments.map((costumer) => {
            return (
                <tr>
                    <th>{costumer.id}</th>
                    <td>{costumer.cat}</td>
                    <td>{costumer.name}</td>
                    <td>{costumer.tranxid}</td>
                    <td>{costumer.phno}</td>
                    <td>{costumer.amtsent}</td>
                    <td>{costumer.type}</td>
                    <td>{costumer.otherinfo}</td>
                </tr>
            );
        });
    
        return (
            <div style={{paddingLeft:'40px', paddingRight:'40px' , borderRadius:'12px'}}>
                <div className="incanvas">
                    <b>Payment Details</b>
                    <Link type="button" className="topbutton float-right" to='/addpayment'>Add New</Link>
                </div>

                <div className="component" style={{background:'white', borderRadius:'12px',paddingLeft:'40px', paddingRight:'40px',paddingTop:'40px'}}>
                    <div >
                        <input type="text" className=" form-control-sm" placeholder="Search"></input>
                        <div className="float-right">
                            <button className="button2 mx-sm-1">Save</button>
                            <button className="button1 mx-sm-1">Delete</button>
                            <button className="button1 mx-sm-1">Edit</button>
                            <button className="button1 mx-sm-1">Filter</button>
                            <button className="button1 mx-sm-1">Print</button>
                        </div>
                    </div>
                </div>

                <div className="component"  style={{textAlign:'center'}}>
                    <table className="table" style={{fontSize:'15px'}}>
                        <thead>
                            <th scope="col">Sr No</th>
                            <th scope="col">Cat</th>
                            <th scope="col">Costumer name</th>
                            <th scope="col">Tranx ID</th>
                            <th scope="col">Contant No</th>
                            <th scope="col">Amount sent</th>
                            <th scope="col">Transaction Type</th>
                            <th scope="col">Other Information</th>
                        </thead>

                        <tbody>
                            {costumerlist}        
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default PaymentDetail;