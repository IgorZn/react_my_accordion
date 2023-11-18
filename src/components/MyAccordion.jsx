import React from 'react';
import {faqs} from "../fakeData";
import Accordion from 'react-bootstrap/Accordion';
import MyAccordionItem from "./MyAccordionItem";

function MyAccordion({open}) {

    return (
        <div>
            <Accordion defaultActiveKey="0" className={"mb-2 pb-2"} alwaysOpen={open}>
                <MyAccordionItem items={faqs} />
            </Accordion>
        </div>
    );
}

export default MyAccordion;