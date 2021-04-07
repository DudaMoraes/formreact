import { StepLabel, Stepper, Typography, Step } from '@material-ui/core';
import { React, useEffect, useState } from 'react';
import DataDelivery from './DataDelivery';
import { DataPersonal } from './DataPersonal';
import DataUser from './DataUser';

export function FormRegister({ whenSending }) {
    const [currentState, setCurrentStep] = useState(0);
    const [colectdata, setData] = useState({});
    useEffect(() => {
        if (currentState === forms.length - 1)
            whenSending(colectdata);
    })

    const forms = [
        <DataUser whenSending={colectData} />,
        <DataPersonal whenSending={colectData} />,
        <DataDelivery whenSending={colectData} />,
        <Typography variant="h5" >Obrigado pelo cadastro</Typography>
    ]
    function nextStep() {
        setCurrentStep(currentState + 1);
    }

    function colectData(data) {
        setData({ ...colectdata, ...data })
        nextStep();
    }

    return (
        <>
            <Stepper activeStep={currentState}>
                <Step><StepLabel>Login</StepLabel></Step>
                <Step><StepLabel>Pessoal</StepLabel></Step>
                <Step><StepLabel>Entrega</StepLabel></Step>
                <Step><StepLabel>Finalização</StepLabel></Step>
            </Stepper>
            {forms[currentState]}
        </>
    );
}



