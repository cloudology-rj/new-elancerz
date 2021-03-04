import { useState } from "react"

    const latestTransactionList = [{
        imageUrl: '/images/sample.jpg',
        name: 'Kaiya Rosser',
        serviceType: 'Logo Design',
        amount:'50.00'
    },
    {
        imageUrl: '/images/sample.jpg',
        name: 'Aspen Mango',
        serviceType: 'Logo Design',
        amount:'50.00'
    },
    {
        imageUrl: '/images/sample.jpg',
        name: 'Jocelyn Bergson',
        serviceType: 'Photo Editing',
        amount:'25.00'
    },
    {
        imageUrl: '/images/sample.jpg',
        name: 'Wilson Bator',
        serviceType: 'Sketches and Wireframe',
        amount:'200.00'
    },
]

const useLatestTranstactions = () => {
    const [ latestTransactionLabel ] = useState('Latest Transactions');
    const [ isEmployeer ] = useState(false);

    return { latestTransactionLabel, latestTransactionList, isEmployeer }
}

export default useLatestTranstactions
