import headshot from '../images/profile.png'

const Info = ({ name, profession, website }) => {
  return (
    <div className='info'>
      <img className='info--image' src={headshot} alt='' />
      <h1 className='info--title'>{name}</h1>
      <h4 className='info--subtitle'>{profession}</h4>
      <h5 className='info--website'>{website}</h5>
      <button>Email</button>
      <button>LinkedIn</button>
    </div>
  )
}

export default Info
