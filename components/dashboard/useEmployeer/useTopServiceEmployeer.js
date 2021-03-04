import { useState } from "react"

const useTopServiceEmployeer = () => {
    const [title] = useState('Discover Top Services');
    const [link] = useState('link');
    const [buttonText] = useState('Discover');
    
    return { title, link, buttonText}
}

export default useTopServiceEmployeer
