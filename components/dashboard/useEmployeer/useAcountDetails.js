import { useState } from "react"

const useAcountDetails = () => {
    const [ accountLabel ] = useState('Monthly Spendings');
    const [ accountImageUrl ] = useState('/illustrations/employeer-bank-card.svg');
    const [ percent ] = useState(12);
    const [ acountAmount ] = useState('2,452.00')
    const [ isFreelancer ] = useState(false)

    return { accountLabel, accountImageUrl, percent, acountAmount, isFreelancer }
}

export default useAcountDetails
