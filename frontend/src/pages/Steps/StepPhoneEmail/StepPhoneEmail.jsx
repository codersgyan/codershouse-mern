import React from 'react';

const StepPhoneEmail = ({ onNext }) => {
    return (
        <>
            <div>Phone or Email component</div>
            <button onClick={onNext}>Next</button>
        </>
    );
};

export default StepPhoneEmail;
