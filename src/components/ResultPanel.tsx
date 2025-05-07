import React, { FC } from 'react';
//Bootstrap
import { Container, Col, Image } from 'react-bootstrap';
//Images
import IllImg from '../assets/images/illustration-empty.svg';

interface ResultPanelProps {
    result: boolean;
}

const ResultPanel: FC<ResultPanelProps> = ({ result }) => {
    return (
        <Col lg={6} xs={12} className='p-5 cs-bg-second cs-br-lb rounded-end-4'>
        {!result ? (
            <Container className='h-100 d-flex flex-column align-items-center justify-content-center gap-2'>
                <Image fluid src={IllImg} alt='illustration' />
                <h2 className='h3 text-white text-center'>Results shown here</h2>
                <p className='text-light text-center'>Complete the form and click “calculate repayments” to see what 
                your monthly repayments would be.</p>
            </Container>
        ): ''}
    </Col>
    );
}

export default ResultPanel;