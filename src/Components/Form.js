import { useContext } from "react";
import FormContext from "./Context/FormContext";

const Form = ({ onChangeInput,onClickButton }) => {
    const { state } = useContext(FormContext);
    return (
        <div>
            <input
                type="number"
                name="creditAmount"
                step="1000"
                min="1000"
                max="1000000"
                value={state.creditAmount}
                placeholder="Kredi Tutarı"
                onChange={onChangeInput}
            />
            <input
                type="number"
                name="interestRate"
                step="0.05"
                min="0.45"
                max="2.5"
                value={state.interestRate}
                placeholder="Faiz Oranı"
                onChange={onChangeInput}
            />
            <select
                name="loanTerm"
                value={state.loanTerm}
                onChange={onChangeInput}
            >
                <option value="12">12</option>
                <option value="24">24</option>
                <option value="36">36</option>
            </select>

            <button onClick={onClickButton}>Hesapla</button>
        </div>
    );
};

export default Form;
