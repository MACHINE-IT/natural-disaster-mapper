import loaderIcon from './loader.gif'
import '../index.css'

export default function Loader() {
    return (
        <div className="loader">
            <img src={loaderIcon} alt="Loading" className="loader-icon"/>  
            <h1>Loading</h1>          
        </div>
    )
}
