import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

function MyAccordionItem({items}) {
    return (
        <div>
            {
                items.map((faq, i) => (
                    <Accordion.Item eventKey={i} key={i} className={"mb-2"}>
                        <Accordion.Header>
                            <div className={"badge bg-secondary"}>{i+1}</div>
                            <div className={"mx-2"}>{faq.title}</div>
                        </Accordion.Header>
                        <Accordion.Body className={"bg-light"}>
                            {faq.text}
                        </Accordion.Body>
                    </Accordion.Item>
                ))
            }
        </div>
    );
}

export default MyAccordionItem;