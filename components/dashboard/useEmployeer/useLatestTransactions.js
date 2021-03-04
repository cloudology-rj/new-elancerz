import { useState } from "react"

    const latestTransactionList = [{
        imageUrl: '/images/sample.jpg',
        name: 'Ann Press',
        serviceType: 'Web Development',
        amount:'300.00'
    },
    {
        imageUrl: '/images/sample.jpg',
        name: 'Nolan Gouse',
        serviceType: 'Project management',
        amount:'400.00'
    },
    {
        imageUrl: '/images/sample.jpg',
        name: 'Giana Culhanes',
        serviceType: 'Mobile app',
        amount:'800.00'
    }
]

const useLatestTranstactions = () => {
    const [ latestTransactionLabel ] = useState('Latest Transactions');
    const [ isEmployeer ] = useState(true);

    return { latestTransactionLabel, latestTransactionList, isEmployeer }
}

export default useLatestTranstactions
