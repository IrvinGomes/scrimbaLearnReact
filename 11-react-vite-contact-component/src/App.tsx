import './App.css'
import Contact from './components/Contact'
import { iContact } from './interfaces/iContact'

function App() {

  const contacts:iContact[] = [
    { name: 'Mr. Whiskerson', phone: 2125551234, email: 'mr.whiskaz@catnap.meow' },
    { name: 'Fluffykins', phone: 2125552345, email: 'fluff@me.com' },
    { name: 'Mr. Whiskerson', phone: 2125551234, email: 'mr.whiskaz@catnap.meow' },
    { name: 'Fluffykins', phone: 2125552345, email: 'fluff@me.com' },
  ]

  const addContacts = ()=>{
    return contacts.map((contact:iContact, index:number)=>{
      return (
        <Contact {...contact} key={index}/>
      )
    })
  }

  return (
    <div className="contacts">
      {addContacts()}
    </div>
  )
}

export default App
