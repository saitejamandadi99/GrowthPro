import { useState } from 'react'
import './App.css'
import './index.css'
import axios from 'axios'
import BusinessForm from './components/BusinessForm'
import DisplayCard from './components/DisplayCard'

function App() {
  const [businessData, setBusinessData] = useState({})
  const [isLoading, setLoading] = useState(false)
  const [formData, setFormData] = useState()

  const handleSubmit = async (formData) =>{
    setLoading(true)
    console.log('FormData: ', formData)
    setFormData(formData)

    const url = 'http://localhost:5000/api/business-data'
    const response = await axios.post(url, formData)
    const data = response.data.business
    setLoading(false)
    setBusinessData(data)
    
  }
  const onClickRegenHeadline = async () =>{
        
        console.log('Business Data: ', businessData);
        console.log('Form Data: ', formData);

        const url = 'http://localhost:5000/api/regenerate-headline'
        const response = await axios.get(url,{params: formData})
        const data = response.data.headline
        setBusinessData(
          (prevData) => ({...prevData, headline:data})
        )

    }
  return (
    <div>
      <h1>This is Growth API</h1>
      <BusinessForm onSubmit={handleSubmit} />
      {isLoading?<p>Loading ...</p>:<DisplayCard businessData = {businessData} regenHeadline = {onClickRegenHeadline} />}
    </div>
  )
}

export default App
