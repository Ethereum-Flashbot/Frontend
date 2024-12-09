import './App.css';
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {Form} from "./components/Form";

function App() {
    return (
        <div className=" mx-8">
            <Header/>
            <Form />
            {/*<Footer/>*/}
        </div>
    );
}

export default App;
