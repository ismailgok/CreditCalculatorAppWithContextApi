import { useContext } from "react";
import FormContext from "./Context/FormContext";
import PaymentDetail from "./PaymentDetail";
const ShortList = ({ result }) => {
    const { completed, setCompleted, row, setRow } = useContext(FormContext);
    const PaymentDetails = (e) => {
        e.preventDefault();

        for(let i = 1;i<= result.loanTerm; i++){
            setRow((lastRows) => [...lastRows,result])
        }
        setCompleted(true);
    };
    return (
        <div>
            ShortList
            <br />
            <table border="1">
                <thead>
                    <tr>
                        <td>Total Credit</td>
                        <td>Interest Rate</td>
                        <td>Montly Payment</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{result.creditAmount} TL</td>
                        <td>{result.interestRate}</td>
                        <td>{result.montlyPaymentAmount} TL</td>
                    </tr>
                </tbody>
            </table>
            <button onClick={PaymentDetails}>Payment Details</button>

            {
                completed === true ? <PaymentDetail row={row} /> : null
            }
        </div>
    );
};

export default ShortList;
