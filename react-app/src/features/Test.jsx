import { useParams } from "react-router-dom";

const Test = () => {
    const {param1} = useParams()
    
    return (<div> Hello World!
    </div>)
}

export default Test