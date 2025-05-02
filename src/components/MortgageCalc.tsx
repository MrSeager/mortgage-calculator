import React, { FC, useState } from 'react';
//Components
import './mortgageCalcStyle.css';
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
    }

    return (
        <Container fluid className='cs-bg-main d-flex flex-column align-items-center justify-content-center vh-100'>
            <Row className='bg-white rounded rounded-4 w-75 shadow'>
                <Col lg={6} xs={12} className='py-4 px-4 d-flex flex-column align-items-center justify-content-between gap-3'>
                    <Container className='p-0 d-flex flex-row align-items-center justify-content-between'>
                        <h1 className='h4 my-0 cs-fc-two cs-fw-700'>Mortgage Calculator</h1>
                        <Button className='cs-btn-clear bg-transparent border-0 cs-fc-one cs-transition'>Clear All</Button>
                    </Container>

                    <Form noValidate validated={validated} onSubmit={handleSubmit} className='h-100'>
                        <Row className='h-100'>
                            <Form.Group as={Col} xs={12} controlId='validationCustom01' className='mb-3'>
                                <Form.Label className='cs-fc-one'>Mortgage Amount</Form.Label>
                                <InputGroup hasValidation>
                                    <InputGroup.Text className='border-end-0 border-2 cs-fc-three cs-fw-700 cs-bg-main cs-bc'>£</InputGroup.Text>
                                    <Form.Control 
                                        required
                                        type='number'
                                        className='border-start-0 cs-bc border-2'
                                    />
                                    <Form.Control.Feedback type='invalid'>This field is requireds</Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                            
                            <Form.Group as={Col} lg={6} xs={12} controlId='validationCustom02'>
                                <Form.Label className='cs-fc-one'>Mortgage Term</Form.Label>
                                <InputGroup hasValidation>
                                    <Form.Control 
                                        required
                                        className='border-end-0 cs-bc border-2'
                                        type='number'
                                    />
                                    <InputGroup.Text className='border-start-0 border-2 cs-fc-three cs-fw-700 cs-bg-main cs-bc'>years</InputGroup.Text>
                                    <Form.Control.Feedback type='invalid'>This field is requireds</Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>

                            <Form.Group as={Col} lg={6} xs={12} controlId='validationCustom03'>
                                <Form.Label className='cs-fc-one'>Interest Rate</Form.Label>
                                <InputGroup hasValidation>
                                    <Form.Control 
                                        required
                                        className='border-end-0 cs-bc border-2'
                                        type='number'
                                        aria-describedby='validationRate'
                                    />
                                    <InputGroup.Text className='border-start-0 border-2 cs-fc-three cs-fw-700 cs-bg-main cs-bc'>%</InputGroup.Text>
                                    <Form.Control.Feedback type='invalid'>This field is requireds</Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>

                            <Form.Group as={Col} xs={12} controlId='validationCustom04' className='my-3'>
                                <Form.Label className='cs-fc-one'>Mortgage Type</Form.Label>
                                <Form>
                                    <Form.Check
                                        label='Repayment'
                                        name='group1'
                                        type='radio'
                                        id='revers-checkbox-1'
                                        className='border border-2 rounded px-5 py-2 mb-2 cs-fw-700 cs-fc-two'
                                        required
                                    />
                                    <Form.Check
                                        label='Interest Only'
                                        name='group1'
                                        type='radio'
                                        id='revers-checkbox-1'
                                        className='border border-2 rounded px-5 py-2 cs-fw-700 cs-fc-two'
                                        required
                                    />
                                </Form>
                                <Form.Control.Feedback type='invalid'>This field is requireds</Form.Control.Feedback>
                            </Form.Group>

                            <Col xs={12}>
                                <Button type='submit' 
                                    className='cs-btn-submit cs-fc-two cs-fw-700 cs-transition border-0 rounded-pill py-2 px-4 d-flex flex-row align-items-center gap-2'
                                >
                                    <Image fluid src={CulcImg} alt='culc img' /> Calculate Repayments</Button>
                            </Col>
                        </Row>
                    </Form>

                </Col>
                <Col lg={6} xs={12} className='p-5 cs-bg-second cs-br-lb rounded-end-4'>
                    {!result ? (
                        <Container className='d-flex flex-column align-items-center justify-content-center gap-2'>
                            <Image fluid src={IllImg} alt='illustration' />
                            <h2 className='h3 text-white text-center'>Results shown here</h2>
                            <p className='text-light text-center'>Complete the form and click “calculate repayments” to see what 
                            your monthly repayments would be.</p>
                        </Container>
                    ): ''}
                </Col>
            </Row>
        </Container>
    );
}

export default MortgageCalc;