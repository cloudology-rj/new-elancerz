import { useState } from "react"

    const list = [{
        imageUrl: '/images/sample.jpg',
        serviceName: 'Mobile App Development',
        serviceType: 'Mobile Development',
        amount:'950.00'
    },
    {
        imageUrl: '/images/sample.jpg',
        serviceName: 'Web App Development',
        serviceType: 'Web Development',
        amount:'650.00'
    },
    {
        imageUrl: '/images/sample.jpg',
        serviceName: 'Video Editing',
        serviceType: 'VideoGraphy',
        amount:'420.00'
    },
    {
        imageUrl: '/images/sample.jpg',
        serviceName: 'Music Recording',
        serviceType: 'Music & Arts',
        amount:'180.00'
    },
]

const useSpending = () => {
    const [ label ] = useState('Spendings by Services');

    return { label, list}
}

export default useSpending
