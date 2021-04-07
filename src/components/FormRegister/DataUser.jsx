import { Button, TextField } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import RegisterValidations from '../../contexts/RegisterValidations';
import useErrors from '../../hooks/useErrors';

function DataUser({ whenSending }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const validations = useContext(RegisterValidations);
    const [errors, validateFields, canSend] = useErrors(validations);


    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            if (canSend()) {
                whenSending({ email, password });
            }
        }}>
            <TextField
                value={email}
                onChange={(event) => { setEmail(event.target.value) }}
                id="email"
                label="Email"
                type="email"
                required
                variant="outlined"
                fullWidth
                margin="normal" />
            <TextField
                value={password}
                onChange={(event) => { setPassword(event.target.value) }}
                onBlur={validateFields}
                error={!errors.password.valid}
                helperText={errors.password.text}
                id="password"
                name="password"
                label="Senha"
                type="password"
                required
                variant="outlined"
                fullWidth
                margin="normal" />
            <Button
                type="submit"
                variant="contained"
                color="primary">

                Proximo
            </Button>
        </form>
    );
}

export default DataUser;