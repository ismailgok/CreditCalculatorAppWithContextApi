import "./App.css";
import Container from "./Components/Container";
import { FormContextProvider } from "./Components/Context/FormContext";

function App() {
    return (
        <FormContextProvider>
            <Container />
        </FormContextProvider>
    );
}

export default App;
