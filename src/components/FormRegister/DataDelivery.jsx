import { TextField, Button } from '@material-ui/core';
import React, { useState } from 'react';
function DataDelivery({ whenSending }) {
    const [zipcode, setZipcode] = useState("");
    const [address, setAddress] = useState("");
    const [number, setNumber] = useState("");
    const [state, setState] = useState("");
    const [city, setCity] = useState("");

    

    return (
        <form onSubmit={
            (event) => {
                event.preventDefault();
                whenSending({  });
            }
        }>
            <TextField
                value={zipcode}
                onChange={(event) => { setZipcode(event.target.value) }}
                id="zipcode"
                label="CEP"
                type="number"
                variant="outlined"
                margin="normal"
            />
            <TextField
                value={address}
                onChange={(event) => { setAddress(event.target.value) }}
                id="address"
                label="Endereço"
                type="text"
                variant="outlined"
                fullWidth
                margin="normal"
            />
            <TextField
                value={number}
                onChange={(event) => { setNumber(event.target.value) }}
                id="number"
                label="Número"
                type="number"
                variant="outlined"
                margin="normal"
            />
            <TextField
                value={state}
                onChange={(event) => { setState(event.target.value) }}
                id="state"
                label="Estado"
                type="text"
                variant="outlined"
                margin="normal"
            />
            <TextField
                value={city}
                onChange={(event) => { setCity(event.target.value) }}
                id="city"
                label="Cidade"
                type="text"
                variant="outlined"
                margin="normal"
            />
            <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth>

                Finalizar cadastro
            </Button>
        </form>
    );
}
export default DataDelivery;