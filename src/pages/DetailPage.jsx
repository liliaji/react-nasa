import { Link } from "react-router-dom"

function DetailPage({ info }) {
  return (
    <div className="detail-container">
        <h2>{info.title}</h2>
        <img src={info.url} alt={info.title}/>
        <p>{info.date}</p>
        <p>{info.explanation}</p>


        <Link to="/">
          <button>Back Home</button>
        </Link>
        
    </div>
  )
}

export default DetailPage