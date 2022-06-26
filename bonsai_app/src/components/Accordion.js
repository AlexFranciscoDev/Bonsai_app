import React, { useState } from 'react'
import { faqs } from '../accordionData';
import { AccordionItem } from './AccordionItem'

export const Accordion = () => {
    // const [clicked, setClicked] = useState('0'); // Index of the item clicked

    /*const handleToggle = (index) => {
        // If its already clicked we set it to 0, otherwise set the index
        if (clicked === index) {
            return setClicked('0');
        }
        setClicked(index);
    }*/

    return (
        <ul className="accordion">
            {faqs.map((faq, index) => (
                <AccordionItem 
                    key={index} 
                    faq={faq} 
                />
            ))}
        </ul>
    )
}
