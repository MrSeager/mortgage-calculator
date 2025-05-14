import React, { FC } from 'react';
//Bootstrap
import { Container, Col, Image } from 'react-bootstrap';
//Images
import IllImg from '../assets/images/illustration-empty.svg';

interface ResultPanelProps {
    result: boolean;
    rsTotal: number | undefined;
    rsMonthly: number | undefined;
    fullNumb: boolean | undefined;
}

const ResultPanel: FC<ResultPanelProps> = ({ result, rsTotal, rsMonthly, fullNumb }) => {
    return (
        <Col lg={6} xs={12} className='px-5 py-4 cs-bg-second cs-rounded-sec'>
            {!result ? (
                <Container className='h-100 d-flex flex-column align-items-center justify-content-center gap-1'>
                    <Image fluid src={IllImg} alt='illustration' />
                    <h2 className='h3 text-white text-center'>Results shown here</h2>
                    <p className='m-0 text-light text-center'>Complete the form and click “calculate repayments” to see what 
                    your monthly repayments would be.</p>
                </Container>
            ): 
                <Container className='h-100 m-0 p-0 d-flex flex-column gap-3'>
                    <h2 className='h4 text-white'>Your result</h2>
                    <p className='text-light cs-fs'>Your results are shown below based on the information you provided. 
                    To adjust the results, edit the form and click “calculate repayments” again.</p>
                    <Container className='cs-bc-two d-flex flex-column cs-bg-therd px-3 py-2 rounded rounded-3 h-100'>
                        <Container className='py-4 h-50 d-flex flex-column justify-content-center gap-2'>
                            <p className='m-0 text-light'>Your monthly {fullNumb ? 'repayments' : 'interest'}</p>
                            <h3 className='m-0 cs-fc-four display-6'>£{Number(rsMonthly).toLocaleString('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h3>
                        </Container>
                        <Container className='py-4 h-50 border-top d-flex flex-column justify-content-center gap-2'>
                            <p className='m-0 text-light'>Total you'll {fullNumb ? 'repay' : 'interest'} over the term</p>
                            <h4 className='m-0 text-white'>£{Number(rsTotal).toLocaleString('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h4>
                        </Container>
                    </Container>
                </Container>
            }
        </Col>
    );
}

export default ResultPanel;