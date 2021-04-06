import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Container, FormControl, FormHelperText, Grid, InputLabel, NativeSelect, Paper, Select, TextField } from '@material-ui/core';
import { BrandCollection } from '../Utils/Constans';
import firebase from "../firebase";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(1),
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },

}));

const ProductPage = (props) => {
    const classes = useStyles();
    const [product, setProduct] = useState({});
    const [productList, setProducts] = useState([]);
    const onChange = (input) => {
        const { name, value } = input?.target;
        setProduct((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }

    useEffect(() => {
        const getProducts = async () => {
            try {
                //   const db = firebase.firestore().collection;
                const data = await firebase.firestore().collection(`${BrandCollection}`).get();
                const plist = data?.docs.map(doc => ({ id: doc.id, ...doc.data() }))
                setProducts(plist);
            } catch (err) {
                console.log(err)
            }
        }


        getProducts();
    }, [])

    return (
        //   <div className={classes.root}>
        <Container fixed>
            <div className={classes.root}>
                <br />
                <h2 textAlign="center">
                    Crear productos
                </h2>
                <form action="">
                    <Grid container spacing={3}>
                        <Grid item xs={3}>
                            <TextField
                                id="outlined-error-helper-text"
                                name="NameProduct"
                                label="Nombre"
                                // helperText="Incorrect entry."
                                variant="outlined"
                                fullWidth
                                onChange={onChange}
                            />
                        </Grid>
                        <Grid item xs={3}>

                            <FormControl variant="outlined" fullWidth>
                                <InputLabel htmlFor="outlined-age-native-simple">Marca</InputLabel>
                                <Select
                                    native
                                    value={product.brandId}
                                    onChange={onChange}
                                    label="Marca"
                                    inputProps={{
                                        name: 'brandId',
                                        id: 'outlined-age-native-simple',
                                    }}
                                    fullWidth
                                >
                                    <option aria-label="None" value="" />
                                    {productList.map(p => {
                                        return <option value={p?.id}>{p?.nameBrand}</option>
                                    })}

                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                id="outlined-error-helper-text"
                                label="Observaciones"
                                // defaultValue="Hello World"
                                name="Notes"
                                // helperText="Incorrect entry."
                                variant="outlined"
                                fullWidth
                                onChange={onChange}

                            />
                        </Grid>
                        <Grid item xs={3}>
                            <Button variant="contained" color="primary">Guardar</Button>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}

export default ProductPage;