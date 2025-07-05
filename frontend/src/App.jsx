import { useState } from 'react'
import './App.css'
import './index.css'
import axios from 'axios'
import BusinessForm from './components/BusinessForm'
import DisplayCard from './components/DisplayCard'
import { ClipLoader } from "react-spinners";

function App() {
  const [businessData, setBusinessData] = useState({})
  const [isLoading, setLoading] = useState(false)
  const [formData, setFormData] = useState()

  const handleSubmit = async (formData) => {
    try {
      setLoading(true)
      setFormData(formData)
      const url = 'http://localhost:5000/api/business-data'
      const response = await axios.post(url, formData)
      const data = response.data.business
      setBusinessData(data)
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred while submitting the form. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const onClickRegenHeadline = async () => {
    try {
      const url = 'http://localhost:5000/api/regenerate-headline'
      const response = await axios.get(url, { params: formData })
      const data = response.data.headline
      setBusinessData(prevData => ({ ...prevData, headline: data }))
    } catch (error) {
      console.error('Error regenerating headline:', error)
      alert('An error occurred while regenerating the headline. Please try again.')
    }
  }

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="w-100" style={{ maxWidth: '600px' }}>
        <BusinessForm onSubmit={handleSubmit} />
        <div className="text-center mt-4">
          {isLoading
            ? <ClipLoader color="#3b82f6" loading={true} size={35} />
            : <DisplayCard businessData={businessData} regenHeadline={onClickRegenHeadline} />}
        </div>
      </div>
    </div>
  )
}

export default App
