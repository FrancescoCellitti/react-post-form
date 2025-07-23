import { useState } from 'react'
import './App.css'
import Form from './components/form'



function App() {
  const [formData, setFormData] = useState({
    author: '',
    title: '',
    body: '',
    public: true
  })

  function handleFormData(e){
    const key = e.target.name
    const val = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    setFormData({
      ...formData,
      [key]:val
    })
  }
  return (
    <>
      <Form  formData={formData} setFormData={setFormData} handleFormData={handleFormData}/>
    </>
  )
}


export default App
