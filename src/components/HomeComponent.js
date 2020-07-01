import React,{Component} from 'react';



class Home extends Component {
    render() {         
    
        return (
            <div style={{paddingLeft:'40px', paddingRight:'40px' , borderRadius:'12px', fontSize:'20px'}}>
                HOME 
                <br/>
                This is a demo website Hosted for submission Task Porpose comprising the elements at front end.
                <br/>
                Modifications can be bade and the pages can be made more Dynamic as per we need. 
                <br/>
                Frontend is not connected to a permanent database as the application is for trial purposes and hence prevent the database accumulation at this point but the code is ready and is in the commented format in the action creaters file.
                <br/>
                Alerts have been used at various places for confirmation of data pushing and proper data updating in the database which will help in proper validation.
            </div>
        )
    }
}

export default Home;
