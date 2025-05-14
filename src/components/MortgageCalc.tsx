import React, { FC, useState } from 'react';
//Components
import './mortgageCalcStyle.css';
import CalcForm from './CalcForm.tsx';
import ResultPanel from './ResultPanel.tsx';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Col, Button } from 'react-bootstrap';
//Spring
import { useSpring, animated } from '@react-spring/web';

const MortgageCalc: FC = () => {
    const [validated, setValidated] = useState<boolean>(false);

    const [mortgageAmount, setMortgageAmount] = useState<number | undefined>();
    const [mortgageTerm, setMortgageTerm] = useState<number | undefined>();
    const [intRate, setIntRate] = useState<number | undefined>();

    const [result, setResult] = useState<boolean>(false);
    const [rsTotal, setRsTotal] = useState<number | undefined>();
    const [rsMonthly, setRsMonthly] = useState<number | undefined>();
    const [fullNumb, setFullNumb] = useState<boolean | undefined>()

    const handleMortgageAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMortgageAmount(Number(event.target.value)); 
    };

    const handleMortgageTermChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMortgageTerm(Number(event.target.value)); 
    };

    const handleIntRateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIntRate(Number(event.target.value)); 
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFullNumb(event.target.id === 'revers-checkbox-1');
    };

    const calculateMortgage = () => {
        if (!mortgageAmount || !mortgageTerm || !intRate) return;

        const principal = mortgageAmount;
        const monthlyInterestRate = intRate / 100 / 12;
        const totalPayments = mortgageTerm * 12;

        let monthlyPayment = 
            (principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalPayments)) /
            (Math.pow(1 + monthlyInterestRate, totalPayments) - 1);

        let totalPayment = monthlyPayment * totalPayments;

        // Adjust calculation based on fullNumb state
        if (!fullNumb) {
            monthlyPayment = principal * monthlyInterestRate; // Interest-only monthly payment
            totalPayment = monthlyPayment * totalPayments; // Interest-only total payment
        }

        setRsMonthly(Number(monthlyPayment.toFixed(2)));
        setRsTotal(Number(totalPayment.toFixed(2)));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else if (form.checkValidity() === true && validated === true) {           
            calculateMortgage();
            setResult(true);
        }

        setValidated(true);
    }

    const handleClearAllBtn = () => {
        window.location.reload();
    }

    const anim = useSpring ({
        from: { opacity: 0, scale: 0, transform: 'rotateX(-400deg)' },
        to: { opacity: 1, scale: 1, transform: 'rotateX(0deg)' },
        config: { tention: 110, frection: 20 }
    });

    return (
        <Container fluid className='cs-bg-main p-0 d-flex flex-column align-items-center justify-content-center min-vh-100'>
            <animated.div style={anim} className='row bg-white cs-rounded cs-w shadow m-0'>
                <Col lg={6} xs={12} className='py-4 px-4 d-flex flex-column align-items-center justify-content-between gap-3'>
                    <Container fluid className='p-0 d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-between'>
                        <h1 className='h4 my-0 cs-fc-two cs-fw-700'>Mortgage Calculator</h1>
                        <Button onClick={handleClearAllBtn} className='px-0 cs-btn-clear bg-transparent border-0 cs-fc-one cs-transition shadow-none'>Clear All</Button>
                    </Container>

                    <CalcForm 
                        validated={validated} 
                        handleSubmit={handleSubmit}
                        handleMortgageAmountChange={handleMortgageAmountChange}
                        handleMortgageTermChange={handleMortgageTermChange}
                        handleIntRateChange={handleIntRateChange}
                        handleChange={handleChange}
                    />
                </Col>

                <ResultPanel 
                    result={result}
                    rsTotal={rsTotal}
                    rsMonthly={rsMonthly}
                    fullNumb={fullNumb}
                />
            </animated.div>
        </Container>
    );
}

export default MortgageCalc;