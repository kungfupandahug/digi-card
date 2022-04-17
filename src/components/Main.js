import MainItem from './MainItem'

const Main = () => {
  return (
    <div className='main'>
      <MainItem
        title='About'
        text='I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.'
      />
      <MainItem
        title='Interest'
        text='Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.'
      />
    </div>
  )
}

export default Main
