import './style.css'
import Info from './components/Info'
import Main from './components/Main'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='app'>
      <Info
        name='Laura Smith'
        profession='Frontend Developer'
        website='laurasmith.website'
      />
      <Main />
      <Footer />
    </div>
  )
}

export default App
