import { useState } from "react"

const people = [
    {
        imageUrl: '/images/sample.jpg',
    },
    {
        imageUrl: '/images/sample.jpg',
    },
]

const useServiceInquiry = () => {
    const [ inquiryTitle ] = useState('Service inquiry available');
    const [ shortText ] = useState('Odio elit in libero nulla mattis praesent nec. Et mi elit sed arcu velit.');
    const [inquiryLink] = useState('link');
    const [inquiryButtonText] = useState('Check Messages');

    return { inquiryTitle, people, shortText, inquiryButtonText, inquiryLink }
}

export default useServiceInquiry
