import React from "react";

const PaymentDetail = ({ row }) => {
    return (
        <div>
            PaymentDetails
            <table border="1">
                <thead>
                    <tr>
                        <td>Credit Amount</td>
                        <td>Interest Rate</td>
                        <td>Loan Term</td>
                        <td>Montly Payment Amount</td>
                        <td>Total Credit</td>
                    </tr>
                </thead>
                <tbody>
                {
                     row.map((item,index) => (
                        <tr key={index}>
                            <td>{item.creditAmount}</td>
                            <td>{item.interestRate}</td>
                            <td>{item.loanTerm}</td>
                            <td>{item.montlyPaymentAmount}</td>
                            <td>{item.totalCredit}</td>
                        </tr>
                      ))
                 }
                </tbody>
            </table>
        </div>
    );
};

export default PaymentDetail;
