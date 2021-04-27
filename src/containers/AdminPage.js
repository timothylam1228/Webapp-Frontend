import React, { useState, useEffect } from 'react';
import jwt_decode from "jwt-decode";
import { Button, TextField, FormControl,InputLabel,Input,InputAdornment } from '@material-ui/core';
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
    row: {
        '& .MuiTextField-row': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    margin: {
        margin: theme.spacing(1),
      },
}));

function AdminPage(props) {
    const axios = require('axios').default;
    const classes = useStyles();
    const [itemList, setItemList] = React.useState(null);
    const [adminIslogin, setAdminIsLogin] = React.useState("");
    const [values, setValues] = React.useState({
        title: '',
        price: '',
        img: '',
        desc: ''
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

    useEffect(() => {
        axios.get('http://localhost:3000/dev/get_item')
            .then((response) => {
                console.log(response.data.body)
                setItemList(response.data.body)
            })
    }, []);

    const handleChange = (e) => {
        console.log(e.target)
        const value = e.target.value;
        const name = e.target.name;
        console.log(values.title, values.price, values.img, values.desc)
        console.log(itemList)
        setValues({ ...values, [name]: value });
    };

    const addClicked = () => {
        if (values.img && values.price && values.title && values.desc) {
            axios.post('http://localhost:3000/dev/add_item', {
                title: values.title,
                price: values.price,
                img: values.img,
                desc: values.desc,
            })
                .then(function (response) {
                    if (response.data.message === "added") {
                        alert("Added success!")
                        setValues({
                            title: '',
                            price: '',
                            img: '',
                            desc: ''
                        })
                        window.location.reload()

                    } else {
                        alert("add fail")
                    }
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
        } else {
            alert('Missing Field');
        }
    }

    const editClicked = (e) => {
        console.log(e)
    }
    const editChanged = (e) => {
        let obj = {}
        console.log(itemList);
  
        // setItemList({
        //     [e.target.id]:{
        //         desc: "Cat Food",
        //         img: "https://images-na.ssl-images-amazon.com/images/I/81asWIyOp%2BL._AC_SL1500_.jpg",
        //         price: 20,
        //         title: "Cat Food",
        //     }
        // })
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
                                name="img"
                                placeholder="ImageUrl"
                                value={values.img}
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
                                onClick={() => { addClicked() }}
                            >
                                add
                             </Button>

                        </div>



                    </div>
                    <h1>Edit items</h1>

                    {itemList ? <>
                        {itemList.map(function (object, i) {
                            return <div className={classes.root} key={i}>
                                <TextField id="title" label="title" name="title" onChange={(e)=>{editChanged(e)}} multiline value={object.title} />
                                <TextField id="price" label="price" name="price" multiline  value={object.price} />
                                <TextField id="imgUrl" label="imgUrl" name="img" multiline value={object.img} />
                                <TextField id="Description" label="Description" name="desc" multiline  value={object.desc} />
                                <Button
                                variant="contained"
                                color="primary"
                                className={classes.button}
                                endIcon={<Icon>send</Icon>}
                                onClick={(e) => { editClicked(e) }}>
                                Edit
                             </Button>
                            </div>
                                ;
                        })}

                    </>
                        :
                        <>no</>}

                </>




                : <h1>no</h1>}
        </>

    )

}
export default AdminPage;