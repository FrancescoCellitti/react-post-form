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

  function handleFormData(e) {
    const key = e.target.name
    const val = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    setFormData({
      ...formData,
      [key]: val
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    fetch('https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
    })
  }

  return (
    <>
      <Form formData={formData} setFormData={setFormData} handleFormData={handleFormData} handleSubmit={handleSubmit} />
    </>
  )
}


export default App
