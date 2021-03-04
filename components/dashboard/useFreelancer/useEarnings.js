import { useState } from "react"

    const list = [{
        imageUrl: '/images/sample.jpg',
        serviceName: 'Logo Design',
        serviceType: 'Graphic Design',
        amount:'640.00'
    },
    {
        imageUrl: '/images/sample.jpg',
        serviceName: 'Sketches and Wireframe',
        serviceType: 'UI/UX Design ',
        amount:'435.00'
    },
    {
        imageUrl: '/images/sample.jpg',
        serviceName: 'Photo Op',
        serviceType: 'Photography',
        amount:'342.00'
    },
    {
        imageUrl: '/images/sample.jpg',
        serviceName: 'Photo Op',
        serviceType: 'Photography',
        amount:'342.00'
    },
]

const useEarnings = () => {
    const [ label ] = useState('Earnings by Services');

    return { label, list}
}

export default useEarnings
