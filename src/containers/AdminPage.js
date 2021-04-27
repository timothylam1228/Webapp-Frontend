import React, { useState, useEffect } from 'react';
import jwt_decode from "jwt-decode";
import { Button, TextField, InputLabel, FormControl, OutlinedInput, InputAdornment } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';


const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    button: {
        margin: theme.spacing(1),
    },
}));

function AdminPage(props) {
    const axios = require('axios').default;


    const classes = useStyles();

    const [isLogin, setIsLogin] = React.useState(false);
    const [adminIslogin, setAdminIsLogin] = React.useState("");
    const [values, setValues] = React.useState({
        title: '',
        price: '',
        imgUrl: '',
        desc : ''
    });

    useEffect(() => {
        const loggedInUser = localStorage.getItem('token');
        if (loggedInUser) {
            var decoded = jwt_decode(loggedInUser);
            if (decoded.type == "admin") {
                setAdminIsLogin(true);
            }
        }
    }, []);

    const handleChange = (e) => {
        console.log(e.target)
        const value = e.target.value;
        const name = e.target.name;

        setValues({ ...values, [name]: value });
    };
    const addClicked = () => {
        if(values.imgUrl && values.price && values.title && values.desc){
            axios.post('http://localhost:3000/dev/add_item', {
                title: values.title,
                price: values.price,
                imgUrl: values.imgUrl,
                desc:values.desc
              })
                .then(function (response) {
                  if (response.data.message === "Registered") {
                    alert("Registration success!")
                  } else if (response.data.message === "Used") {
                    alert("This account has been used!")
                  }
          
                  console.log(response);
                })
                .catch(function (error) {
                  console.log(error);
                });
        }else{
            alert('Missing Field');
        }

    }

    return (
        <>
            {adminIslogin ?
                <>
                    <h1>Add items</h1>
                    <div className={classes.root} noValidate autoComplete="off">
                        <div>
                            <TextField
                                id="standard-textarea"
                                label="Title"
                                placeholder="Title"
                                multiline
                                name="title"
                                value={values.title}
                                onChange={(e) => handleChange(e)}
                                />
                            <TextField
                                id="standard-textarea"
                                placeholder="Price"
                                type="number"
                                name="price"
                                value={values.price}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onChange={handleChange}

                            />
                            <TextField
                                id="standard-textarea"
                                label="ImageUrl"
                                name="imgUrl"
                                placeholder="ImageUrl"
                                value={values.imgUrl}

                                multiline
                                onChange={handleChange}

                            />
                            <TextField
                                id="standard-textarea"
                                label="desc"
                                name="desc"
                                placeholder="desc"
                                value={values.desc}
                                multiline
                                onChange={handleChange}

                            />
                            <Button
                                variant="contained"
                                color="primary"
                                className={classes.button}
                                endIcon={<Icon>send</Icon>}
                                onClick={()=>{addClicked()}}
                            >
                                add
                             </Button>

                        </div>



                    </div>
                </>




                : <h1>no</h1>}
        </>

    )

}
export default AdminPage;