import { useEffect, useState } from "react"

const useParts = () => {
    const [parts, setParts] = useState([])

    useEffect(() => {
        fetch('https://safe-escarpment-45724.herokuapp.com/parts')
            .then(res => res.json())
            .then(data => setParts(data.reverse()))
    }, [])
    return [parts, setParts]
}
export default useParts;