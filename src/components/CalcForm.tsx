import React, { FC } from 'react';
//Bootstrap
import { Row, Col, Button, Image, Form, InputGroup } from 'react-bootstrap';
//Images
import CulcImg from '../assets/images/icon-calculator.svg';

interface CalcFormProps {
    validated: boolean;
    handleSubmit: (event: any) => void;
}

const CalcForm: FC<CalcFormProps> = ({ validated, handleSubmit }) => {
    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit} className='h-100'>
            <Row className='h-100'>
                <Form.Group as={Col} xs={12} controlId='validationCustom01' className='mb-3 cs-form-group'>
                    <Form.Label className='cs-fc-one'>Mortgage Amount</Form.Label>
                    <InputGroup hasValidation>
                        <InputGroup.Text className='border-end-0 border-2 cs-fc-three cs-fw-700 cs-bg-main cs-bc cs-transition cs-inputgroup'>£</InputGroup.Text>
                        <Form.Control 
                            required
                            type='number'
                            className='border-start-0 cs-bc border-2 shadow-none cs-transition cs-form-control cs-fw-700 cs-fc-two'
                        />
                        <Form.Control.Feedback type='invalid'>This field is requireds</Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>
                
                <Form.Group as={Col} lg={6} xs={12} controlId='validationCustom02' className='cs-form-group'>
                    <Form.Label className='cs-fc-one'>Mortgage Term</Form.Label>
                    <InputGroup hasValidation>
                        <Form.Control 
                            required
                            className='border-end-0 shadow-none cs-bc border-2 cs-fw-700 cs-fc-two cs-transition cs-form-control'
                            type='number'
                        />
                        <InputGroup.Text className='border-start-0 border-2 cs-fc-three cs-fw-700 cs-bg-main cs-bc cs-transition cs-inputgroup'>years</InputGroup.Text>
                        <Form.Control.Feedback type='invalid'>This field is requireds</Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>

                <Form.Group as={Col} lg={6} xs={12} controlId='validationCustom03' className='cs-form-group'>
                    <Form.Label className='cs-fc-one'>Interest Rate</Form.Label>
                    <InputGroup hasValidation>
                        <Form.Control 
                            required
                            className='border-end-0 cs-bc shadow-none border-2 cs-fw-700 cs-fc-two cs-transition cs-form-control'
                            type='number'
                            aria-describedby='validationRate'
                        />
                        <InputGroup.Text className='border-start-0 border-2 cs-fc-three cs-fw-700 cs-bg-main cs-bc cs-transition cs-inputgroup'>%</InputGroup.Text>
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
                            className='border border-2 rounded px-5 py-2 mb-2 cs-fw-700 cs-fc-two cs-radio cs-transition'
                            required
                        />
                        <Form.Check
                            label='Interest Only'
                            name='group1'
                            type='radio'
                            id='revers-checkbox-2'
                            className='border border-2 rounded px-5 py-2 cs-fw-700 cs-fc-two cs-radio cs-transition'
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
    );
}

export default CalcForm;