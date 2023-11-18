import './App.css';
import MyAccordion from "./components/MyAccordion"
import {useState} from "react";

function App() {
    const [keepOpen, setKeepOpen] = useState(false);

    const handleOpen = () => {
        setKeepOpen(c => !c)
    }

    return (
        <div className="container bg-light">
            <h1>My Accordion</h1>
            <div className={"d-flex justify-content-end"}>
                <div className={"btn btn-outline-warning mb-2"}>
                    <div className="form-check d-flex justify-content-end">
                        <input className="form-check-input"
                               type="checkbox"
                               value=""
                               onChange={handleOpen}
                               id="flexCheckDefault"/>
                        <label className="form-check-label px-2"
                               style={{color: "black"}}
                               htmlFor="flexCheckDefault">
                            Keep open
                        </label>
                    </div>
                </div>
            </div>
            <MyAccordion open={keepOpen} setOpen={setKeepOpen}/>
        </div>
    );
}

export default App;
