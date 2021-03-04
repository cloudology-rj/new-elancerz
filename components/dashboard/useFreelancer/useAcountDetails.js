import { useState } from "react"

const useAcountDetails = () => {
    const [ accountLabel ] = useState('Monthly Earnings');
    const [ accountImageUrl ] = useState('/illustrations/bank-card.svg');
    const [ percent ] = useState(12);
    const [ acountAmount ] = useState('12,745.00')
    const [ isFreelancer ] = useState(true)

    return { accountLabel, accountImageUrl, percent, acountAmount, isFreelancer }
}

export default useAcountDetails
