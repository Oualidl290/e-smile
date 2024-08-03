import React from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

const PayPalCheckoutButton = () => {
    return (
        <PayPalScriptProvider options={{ "client-id": "AVd-_thwFL4xf9PYXvKLnP0DPfbMI__u5cB_n9mMx9R0iGu24FV8bt3dDRGY3vtSWyqHpNoM2xiUZBRT" }}>
            <PayPalButtons
                createOrder={(_data, actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                                amount: {
                                    value: "100.00",
                                },
                            },
                        ],
                    });
                }}
                onApprove={async (_data, actions) => {
                    const details = await actions.order.capture();
                        alert("Transaction completed by " + details.payer.name.given_name);
                }}
            />
        </PayPalScriptProvider>
    );
};

export default PayPalCheckoutButton;
