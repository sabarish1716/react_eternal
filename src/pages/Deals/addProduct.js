import React, { useState } from 'react';
import { Navbar,NavbarBrand,Nav,NavItem, NavLink,NavbarText,Button,
Row, Col,Container,Card,Input,FormGroup,Label} from 'reactstrap';
// import axios from 'axios';

export default function AddProduct ()
{
  const [state, setState] = useState({ ProductName:"", Quantity: "",Price:"" })

  const onChangeHandler = (e) => {
    console.log(e.target.value)
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const onSubmitHandler = (e) => {
    e.preventDefault()
    console.log(state)
    // axios.post('http://localhost:3000/api/profile/sample', state)
    // .then(res => {
    //   if (res.status === 200) {
    //     alert('created sucessfulluy')
    //     setState({ ProductName: "", Quantity: "",Price:"" })
    //   }
    //   else{
    //     alert("failed")
    //   }

    // })
  }


const Abc =()=>
{
<Row> <p style={{marginLeft:"100px"}}>Product Ingredients</p> <br/>

           <Col md={1} > </Col>

            <Col md={2} >  
                       Select Spice  <br/>
                       <FormGroup>
                       <Input type="select">
                       <option>Choose spice </option>
                       <option>White Rice </option>
                       <option>Ceylon Cinnamon </option>
                       <option>Kala Chana </option>
                       <option>Red raw rice </option>
                       <option>Sugar </option>
                       <option>Ragi </option>
                       <option>Wheat </option>
                       <option>Soya </option>
                       <option>Horse Gram </option>
                       <option>Green Gram </option>
                       <option>Mango Powder </option>
                       <option>Jaggery </option>
                       <option>Brown Sugar </option>
                       <option>Onion Dried </option>
                       <option>Tomato Dreid </option>
                       <option>Sea Salt </option>
                       <option>Barley </option>
                       <option>Deccicated Coconut </option>
                        </Input>
                       </FormGroup>
            </Col>

            <Col md={2} >  
                     Spice Name <br/>
          <p style={{backgroundColor:'grey'}}> <Input type="text" name='Product Name' onChange={onChangeHandler} /> </p>
            </Col>

           <Col md={2} >  
                 Spice Quantity in gm <br/>
               <Input type="text" name='Product Name' onChange={onChangeHandler} />
           </Col>

           <Col md={2} >  
                 Price  <br/>
    <p style={{backgroundColor:'grey'}}> <Input type="text" name='Product Name' onChange={onChangeHandler} /> </p>
           </Col>

           <Col md={3} ><Button onClick={Abc}> <h2> + </h2> </Button> </Col>
</Row>

};

const pagebg={background:"#FFFAE6"};

const heading={marginTop: 20, marginLeft: 130, marginBottom: 20};

const cards={borderRadius: 20};

const text={marginTop: 20};

const thirdrow={marginLeft:93};

const box={background:"#D8D9DA"};

const but={borderRadius:20, marginLeft:50, border:"none", background:"#D48836", height:36, width:170};

const but1={ border:"none", background:"#D48836", height:35}

return(

  <div style={pagebg}>
  <br/>
   
    <div style={heading}>

      <h3>World Cuisines </h3>

      <h6>Dashboard / <font color="grey" > World Cuisines  </font></h6>
    
    </div>
    

    <Container >
      
      <Card style={cards}>
   

      <Row style={text}>

        <Col md={1}/>
   
        <Col md={3} >  
         Status <font color="red" > * </font> <br/>
           <FormGroup>
           <Input type="select">
           <option>Select Category </option>
           <option>Indian </option>
           <option>Continental </option>
           <option>Sri Lankan </option>
           <option>Arabic </option>
            </Input>
           </FormGroup>
           
           </Col>

          <Col md={4} >  
           Product Name <font color="red" > * </font> <br/>
           <Input type="text" name='Product Name' onChange={onChangeHandler} />
          </Col>

          <Col md={3} >  
           Product Image <font color="red" > *  </font> <br/>
           <Input type="file" onChange={onChangeHandler} />
          </Col>

          <Col md={1}/>
    </Row>

    <Row>
      <Col md={1}/>
   
         
      <Col md={3} >  
         Status <font color="red" > *  </font> <br/>
           <Input type="select">
           <option>Active </option>
           <option>Inactive </option>
            </Input>
      </Col>

    <Col md={1}/>
    </Row>
<br/>



        <Row> <p style={thirdrow}>Product Ingredients</p> <br/>

           <Col md={1} > </Col>

            <Col md={2} >  
                       Select Spice  <br/>
                       <FormGroup>
                       <Input type="select">
                       <option>Choose spice </option>
                       <option>White Rice </option>
                       <option>Ceylon Cinnamon </option>
                       <option>Kala Chana </option>
                       <option>Red raw rice </option>
                       <option>Sugar </option>
                       <option>Ragi </option>
                       <option>Wheat </option>
                       <option>Soya </option>
                       <option>Horse Gram </option>
                       <option>Green Gram </option>
                        </Input>
                       </FormGroup>
            </Col>

            <Col md={2} >  
              Spice Name <br/>
               <Input type="text" name='Product Name' style={box} onChange={onChangeHandler} /> 
            </Col>

           <Col md={2} >  
                 Spice Quantity in gm <br/>
               <Input type="text" name='Product Name' onChange={onChangeHandler} />
           </Col>

           <Col md={2} >  
                 Price  <br/>
            <Input type="text" name='Product Name' style={box} onChange={onChangeHandler} />
           </Col>

           <Col md={3}  style={{marginTop:'21px'}}><Button onClick={Abc} style={but1}> <h6> + </h6> </Button> </Col>
</Row>




<Row>
<Col md={9}> </Col>
<Col md={3}> <Button style={but} onClick={onSubmitHandler}> <h6>Submit</h6> </Button>   </Col>
</Row>



<br/>
</Card>

</Container>


<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
</div>
  );


}
