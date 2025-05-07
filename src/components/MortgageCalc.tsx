import React, { FC, useState } from 'react';
//Components
import './mortgageCalcStyle.css';
import CalcForm from './CalcForm.tsx';
import ResultPanel from './ResultPanel.tsx';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Button, Image, Form, InputGroup } from 'react-bootstrap';
//Spring
import { useSpring, animated } from '@react-spring/web';
//Images
import IllImg from '../assets/images/illustration-empty.svg';
import CulcImg from '../assets/images/icon-calculator.svg';

const MortgageCalc: FC = () => {
    const [validated, setValidated] = useState<boolean>(false);
    const [result, setResult] = useState<boolean>(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
        if (validated)
            setResult(true);
    }

    const handleClearAllBtn = () => {
        window.location.reload();
    }

    return (
        <Container fluid className='cs-bg-main p-0 d-flex flex-column align-items-center justify-content-center min-vh-100'>
            <Row className='bg-white rounded rounded-4 cs-w shadow m-0'>
                <Col lg={6} xs={12} className='py-4 px-4 d-flex flex-column align-items-center justify-content-between gap-3'>
                    <Container fluid className='p-0 d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-between'>
                        <h1 className='h4 my-0 cs-fc-two cs-fw-700'>Mortgage Calculator</h1>
                        <Button onClick={handleClearAllBtn} className='px-0 cs-btn-clear bg-transparent border-0 cs-fc-one cs-transition shadow-none'>Clear All</Button>
                    </Container>

                    <CalcForm 
                        validated={validated} 
                        handleSubmit={handleSubmit}
                    />
                </Col>

                <ResultPanel 
                    result={result}
                />
            </Row>
        </Container>
    );
}

export default MortgageCalc;