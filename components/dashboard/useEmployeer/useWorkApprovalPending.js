import { useState } from "react"

const people = [
    {
        imageUrl: '/images/sample.jpg',
    },
    {
        imageUrl: '/images/sample.jpg',
    },
    {
        imageUrl: '/images/sample.jpg',
    },
    {
        imageUrl: '/images/sample.jpg',
    },
]

const useWorkApprovalPending = () => {

    const [ approvalTitle ] = useState('Work approval pending');
    const [ shortText ] = useState('Odio elit in libero nulla mattis praesent nec. Et mi elit sed arcu velit.');
    const [approvalLink] = useState('');
    const [approvalButtonText] = useState('Check Milestone');

    return { approvalTitle, people, shortText, approvalButtonText, approvalLink }
}

export default useWorkApprovalPending
