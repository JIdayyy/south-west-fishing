import React from 'react';
import errorContent from '@Content/errorFallback.json';

const PaymentErrorFallback = () => (
    <div className="w-full h-screen font-extrabold">
        {errorContent.payment_error}
    </div>
);
export default PaymentErrorFallback;
