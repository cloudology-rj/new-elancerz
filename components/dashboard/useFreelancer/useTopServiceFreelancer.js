import { useState } from "react"

const useTopServiceFreelancer = () => {

    
    const [title] = useState('Discover Top Services');
    const [link] = useState('');
    const [buttonText] = useState('Discover');
    
    return { title, link, buttonText}
}

export default useTopServiceFreelancer
