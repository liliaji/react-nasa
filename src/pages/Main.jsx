import SpacePhotos from "../components/SpacePhotos";
import { useNavigate } from 'react-router-dom'

function Main({data, setSelectedData}) {

    const navigate = useNavigate()

    function handleClick(infoData) {
        setSelectedData(infoData)
        navigate("/details")
    }


  return (
    <div className="main">
        {data.length > 0 && data.map((info, index) => (
            <div className="details" onClick={() => handleClick(info)}>
                <SpacePhotos info={info} key={index}/>
            </div>
        ))}
    </div>
  )
}

export default Main