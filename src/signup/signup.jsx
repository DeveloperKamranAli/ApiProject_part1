// // import React from "react";


import React from "react";
import { Input, Button, Grid, Container } from '@mui/material';
import { useForm, SubmitHandler } from "react-hook-form";

interface IFormInput {
  firstName: string;
  lastName: string;
  email: String;
  password: string
}

const Signup = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data, alert("Successfully SignUp"));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    <Container className="mt-5">
      <Grid container spacing={2}>
  <Grid item xs={6}>
  <Input fullWidth
        {...register("firstName", { required: true,})} 
        placeholder="First Name"
      />
      {errors.firstName && <span>This field is required</span>}
      
  </Grid>
  <Grid item xs={6}>
  <Input fullWidth
        {...register("lastName", { required: true, } )} 
        placeholder="Last Name"
      />
      {errors.lastName && <span>Inter Last Name</span>}
      
  </Grid>
  <Grid item xs={6}>
  <Input fullWidth
        {...register("email", { required: true,} )} 
        placeholder="Email"
      />
      {errors.lastName && <span>inter email Address</span>}
      
  </Grid>
  <Grid item xs={6}>
  <Input fullWidth
        {...register("password", { required: true, })} 
        placeholder="Password"
      />
      {errors.lastName && <span>This field is required and must be letters only</span>}
      
  </Grid>
</Grid>



    
      
      <Button type="submit">Submit</Button>
      
      </Container>
    </form>
 
  );
}

export default Signup;
