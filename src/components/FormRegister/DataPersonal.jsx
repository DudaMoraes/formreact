import { React, useState, useContext } from 'react';
import { Button, TextField, Switch, FormControlLabel } from '@material-ui/core';
import RegisterValidations from '../../contexts/RegisterValidations';
import useErrors from '../../hooks/useErrors';


export function DataPersonal({ whenSending }) {
    const [name, setname] = useState("");
    const [lastname, setlastname] = useState("");
    const [document, setDocument] = useState("");
    const [promotions, setPromotions] = useState(true);
    const [news, setNews] = useState(true);

    const validations = useContext(RegisterValidations);
    const [errors, validateFields, canSend] = useErrors(validations);

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            if (canSend()) {
                whenSending({ name, lastname, document, promotions, news });
            }
        }}>
            <TextField
                value={name}
                onChange={event => {
                    setname(event.target.value);
                }}
                id="name"
                type="text"
                label="Nome"
                variant="outlined"
                fullWidth margin="normal"
            />

            <TextField
                value={lastname}
                onChange={event => {
                    setlastname(event.target.value);
                }}
                id="lastname"
                type="text"
                label="Sobrenome"
                variant="outlined"
                fullWidth
                margin="normal"

            />

            <TextField
                value={document}
                onChange={event => {
                    setDocument(event.target.value);
                }}
                onBlur={validateFields}
                name="document"
                error={!errors.document.valid}
                helperText={errors.document.text}
                id="document"
                label="CPF"
                type="number"
                variant="outlined"
                fullWidth
                margin="normal"
            />

            <FormControlLabel
                label="Promoções"
                control={
                    <Switch
                        checked={promotions}
                        onChange={
                            event => {
                                setPromotions(event.target.checked)
                            }
                        }
                        name="promotions"
                        color="primary"
                    />}
            />

            <FormControlLabel
                label="news"
                control={
                    <Switch
                        checked={news}
                        onChange={
                            event => {
                                setNews(event.target.checked)
                            }
                        }
                        name="news"
                        color="primary" />}
            />
            <Button
                type="submit"
                variant="contained"
                color="primary">
                Próximo
            </Button>
        </form>
    );
}

