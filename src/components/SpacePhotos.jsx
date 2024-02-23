 function SpacePhotos({ info }) {
  return (
    <>
        <h2>{info.title}</h2>
        <img src={info.url} alt={info.title}/>
    </>
  )
}

export default SpacePhotos