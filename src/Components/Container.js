import { useContext } from "react";
import Form from "./Form";
import FormContext from "./Context/FormContext";
import ShortList from "./ShortList";
const Container = () => {
    const { state, setState, result, setResult } = useContext(FormContext);
    const onChangeInput = (e) => {
        setState({ ...state, [e.target.name]: e.target.value });
    };
    const onClickButton = (e) => {
        e.preventDefault();

        let totalCredit =
            ((state.creditAmount * state.interestRate) / 100) * state.loanTerm +
            state.creditAmount;
        let paymentAmount = totalCredit / state.loanTerm;

    
        setResult({
            creditAmount: state.creditAmount,
            interestRate: state.interestRate,
            loanTerm: state.loanTerm,
            totalCredit: totalCredit,
            MontlyPaymentAmount: paymentAmount.toFixed(2),
        });
    };

    return (
        <div>
            <Form onChangeInput={onChangeInput} onClickButton={onClickButton} />

            {
                result !== null ? <ShortList result={result} /> : null
            }
        </div>
    );
};

export default Container;
