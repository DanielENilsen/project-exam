import React from 'react'
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import Button from "react-bootstrap/Button";


function LoginForm() { 

    const {register, handleSubmit } = useForm();

    function onSubmit(data) {
        console.log("data",data);
    }


    return(
        <div>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group>
                    <Form.Control name = "email" type="text" placeholder="Enter your email" ref={register} />                
                </Form.Group>
                <Form.Group>
                    <Form.Control  name = "password" type="password" placeholder="Enter your password" ref={register} />                
                </Form.Group>
                <Form.Group>
                <Button type="submit">Submit</Button>           
                </Form.Group>
            </Form>
        </div>

    );
    

}

export default LoginForm;