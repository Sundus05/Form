import { withStyles } from '@material-ui/styles';
import { Grid, Paper, Avatar } from '@material-ui/core';
import { styles } from './Form.style';
import CustomButton from '../component/CustomButton/CustomButton';
import InputField from '../component/Input/Input';
import { useFormik } from 'formik';
import RadioInput from '../component/RadioInput/RadioInput';
import * as yup from 'yup';



const FormContainer = ({ classes }) => {
    const validationSchema = yup.object({
        fname: yup
            .string('Enter your First Name')
            .matches(/^[a-zA-Z]+$/, 'Enter a valid name')
            .required('First Name is required'),
        lname: yup
            .string('Enter your First Name')
            .matches(/^[a-zA-Z]+$/, 'Enter a valid name')
            .required('Name is required'),
        email: yup
            .string('Enter your email')
            .email('Enter a valid email')
            .required('Email is required'),
        age: yup
            .number('Enter your age')
            .positive('age must be greater than zero')
            .required('Password is required'),
        gender: yup
        .string()
        .required("A radio option is required")

    });


    const formik = useFormik({
        initialValues: {
            fname: '',
            lname: '',
            email: '',
            age: '',
            gender: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (

        <Grid item lg={4} xs={12} className={classes.container}>
            <Paper className={classes.root}>
                <Grid align="center">
                    <Avatar className={classes.icon}></Avatar>
                    <h3 className={classes.headstyle}>EMPLOYEE FORM</h3>
                </Grid>


                <form onSubmit={formik.handleSubmit} className={classes.form}>

                    <InputField inputtype="text" inputlabel="First Name"
                        placeholder="Enter Your First Name"
                        name="fname"
                        value={formik.values.fname}
                        onChange={formik.handleChange}
                        error={Boolean(formik.errors.fname)}
                        helperText={formik.errors.fname}>

                    </InputField>


                    <InputField inputtype="text" inputlabel="Second Name"
                        placeholder="Enter Your Second Name"
                        name="lname"
                        value={formik.values.lname}
                        onChange={formik.handleChange}
                        error={Boolean(formik.errors.lname)}
                        helperText={formik.errors.lname}
                    ></InputField>



                    <InputField inputtype="email" inputlabel="Your Email"
                        placeholder="Enter Your Email"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        error={Boolean(formik.errors.email)}
                        helperText={formik.errors.email}
                    ></InputField>



                    <InputField inputtype="age" inputlabel="Your Age"
                        placeholder="Enter Your Age"
                        name="age"
                        value={formik.values.age}
                        onChange={formik.handleChange}
                        error={Boolean(formik.errors.age)}
                        helperText={formik.errors.age}
                    ></InputField>

                    <RadioInput onChange={formik.handleChange}
                    error={Boolean(formik.errors.gender)}
                    helperText={formik.errors.gender} 
                    touched={formik.touched.gender}
                    />




                    <CustomButton />




                </form>



            </Paper>

        </Grid>

    );
};

export default withStyles(styles)(FormContainer);