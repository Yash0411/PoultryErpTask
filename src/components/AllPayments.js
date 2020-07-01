import React,{Component} from 'react';
import {AddCostumer} from './AddCostumer';
import {Link} from 'react-router-dom';
import {payments, total } from '../shared/payment';
import { costumers } from '../shared/costumers';


class AllPayments extends Component {

   
    
    handleChange(costumer){
        return(
            <div>
                <td>{costumer.cat}</td>
                <td>{costumer.name}</td>
            </div>
        )
      }



    render() { 

        const costumerlist =total.map((costumer) => {
            return (
                <tr>
                    <th>{costumer.id}</th>
                    <td>{costumer.cat}</td>
                    <td>{costumer.name}</td>
                    <td>{costumer.totalamt}</td>
                    <td>{costumer.notranx}</td>
                </tr>
            );
        });
    
        return (
            <div style={{paddingLeft:'40px', paddingRight:'40px' , borderRadius:'12px'}}>
                <div className="incanvas">
                    <b>All Payments Reports</b>
                </div>

                <div className="component" style={{background:'white', borderRadius:'12px',paddingLeft:'40px', paddingRight:'40px',paddingTop:'40px'}}>
                    <div >
                        <input type="text" className=" form-control-sm" placeholder="Search"></input>
                        <div className="float-right">
                            <button className="button1 mx-sm-1">Filter</button>
                            <button className="button1">Print</button>
                        </div>
                    </div>
                </div>

                <div className="component"  style={{textAlign:'center'}}>
                    <table className="table" style={{fontSize:'15px'}}>
                        <thead>
                            <th scope="col">Sr No</th>
                            <th scope="col">Cat</th>
                            <th scope="col">Costumer name</th>
                            <th scope="col">Total Amount Sent</th>
                            <th scope="col">No. of Transactions</th>
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

export default AllPayments;