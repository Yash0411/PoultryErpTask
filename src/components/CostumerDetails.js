import React,{Component} from 'react';
import {AddCostumer} from './AddCostumer';
import {Link} from 'react-router-dom';
import {costumers } from '../shared/costumers';
import '../App.css';


class CostumerDetail extends Component {

   
    
    handleChange(costumer){
        return(
            <div>
                <td>{costumer.cat}</td>
                <td>{costumer.name}</td>
            </div>
        )
      }


    render() { 
        
        const costumerlist =costumers.map((costumer) => {
            return (
                <tr key={costumer.id}>
                    <th><input type="checkbox" className="m-1" onChange={this.handleChange(costumer)}></input>{costumer.id}</th>
                    <td>{costumer.cat}</td>
                    <td>{costumer.name}</td>
                    <td>{costumer.addr}</td>
                    <td>{costumer.phno}</td>
                    <td>{costumer.warehouses.length}</td>
                    <td></td>
                    <td>{costumer.area}</td>
                </tr>
            );
        });
    
        return (
            <div style={{paddingLeft:'40px', paddingRight:'40px' , borderRadius:'12px'}}>
                <div className="incanvas">
                    <strong>Costumer Details</strong>
                    <Link type="button" className="topbutton float-right" to='/addcostumer'>Add New</Link>
                </div>

                <div className="component" style={{background:'white', borderRadius:'12px',paddingLeft:'40px', paddingRight:'40px',paddingTop:'40px'}}>
                    <div >
                        <input type="text" className=" form-control-sm" placeholder="Search"></input>
                        <div className="float-right">
                            <button className="button2 mx-sm-1">Save</button>
                            <button className="button1 mx-sm-1">Delete</button>
                            <button className="button1 mx-sm-1">Edit</button>
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
                            <th scope="col">Address</th>
                            <th scope="col">Contant No</th>
                            <th scope="col">No Of Warehouses</th>
                            <th scope="col">Warehouse Name</th>
                            <th scope="col">Area</th>
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

export default CostumerDetail;