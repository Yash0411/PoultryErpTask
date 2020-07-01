import * as ActionTypes from './ActionTypes';
import { costumers } from '../shared/costumers';
import {fetch } from 'cross-fetch';
import { payments,total } from '../shared/payment';


export const addCostumer = (costumer)=>
{
    return(
        {
            type:ActionTypes.ADD_COSTUMERS,
            payload:costumer
        }
    )
}

export const postCostumer = (values)=>(dispatch)=>{
const newCostumer ={
        id:costumers.length+1,
        cat:values.cat,
        name:values.name,
        addr:values.addr,
        phno:values.phno,
        warehousesno:values.warehousesno,
        area:values.area,
        warehouses:values.warehouses
}
const newCost ={
        id:costumers.length+1,
        cat:values.cat,
        name:values.name,
        totalamt:0,
        notranx:0,
}
costumers.push(newCostumer)
total.push(newCost)

/*return fetch("../shared/costumer.json",
{
    method:'POST',
    body:JSON.stringify(newCostumer),
    headers: {
            'Content-Type':'application/json'
    },
    credentials:'same-origin'
})

                .then(response=>{
                        if (response.ok)
                        {
                                return response;
                        }
                        else
                        {
                                let error = new Error('Error '+response.status+": "+response.statusText);
                                error.response = response;
                                throw error;
                        }
                },
                error=>{
                        let errmess = new Error(error.message);
                        throw errmess;
                })
                .then(response=>response.json())
                .then(response=>dispatch(addCostumer(response)))
                .catch(error=>{console.log('Post Costumer ',error.message);
                        alert('Your Costumer could not be posted\nError: '+error.message)
        });*/

}

export const costumerFailed = (errmess)=>({
        type:ActionTypes.COSTUMERS_FAILED,
        payload:errmess
})

export const costumersLoading=()=>({
        type:ActionTypes.COSTUMERS_LOADING
});


/*export const fetchCostumers = ()=>(dispatch)=>
{       
        dispatch(costumersLoading(true))
        return fetch(costumers)
                .then(response=>{
                        if (response.ok)
                        {
                                return response;
                        }
                        else
                        {
                                let error = new Error('Error '+response.status+": "+response.statusText);
                                error.response = response;
                                throw error;
                        }
                },
                error=>{
                        let errmess = new Error(error.message);
                        throw errmess;
                })
                .then(response=>response.json())
                .then(costumers=>dispatch(addCostumer(costumers)))

}*/



export const addPayment = (payment)=>
{
    return(
        {
            type:ActionTypes.ADD_PAYMENTS,
            payload:payment
        }
    )
}

export const postPayment = (values)=>(dispatch)=>{
const name = values.name
const newPayment ={
        id:payments.length+1,
        cat:values.cat,
        name:values.name,
        tranxid:values.tranxid,
        amtsent:values.amt,
        type:values.type,
        phno:values.phno,
        otherinfo:values.other,
}

const abc = total.filter(a => a.name===values.name)
if(abc.length==0){
        alert("No such costumer exist in your Data")
}
else{
        payments.push(newPayment)
        total.filter(a => a.name===values.name)[0].notranx=abc[0].notranx+1;
        total.filter(a => a.name===values.name)[0].totalamt=abc[0].totalamt+parseInt(values.amt);
}
}


export const paymentFailed = (errmess)=>({
        type:ActionTypes.PAYMENTS_FAILED,
        payload:errmess
})

export const paymentsLoading=()=>({
        type:ActionTypes.PAYMENTS_LOADING
});
