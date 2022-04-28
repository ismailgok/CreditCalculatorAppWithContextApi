import { createContext, useState } from "react";

const FormContext = createContext();

export const FormContextProvider = ({ children }) => {
    const [state, setState] = useState({
        creditAmount: 1000,
        interestRate: 0.45,
        loanTerm: 12,
    });
    const [result, setResult] = useState(null);
    const [completed, setCompleted] = useState(false);
    const [row, setRow] = useState([]);
    return (
        <FormContext.Provider
            value={{
                state,
                setState,
                result,
                setResult,
                completed,
                setCompleted,
                row,
                setRow,
            }}
        >
            {children}
        </FormContext.Provider>
    );
};

export default FormContext;
