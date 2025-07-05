    import React, {useState} from 'react';
    import '../index.css'
    import { ClipLoader } from "react-spinners";
    const BusinessForm = ({onSubmit}) =>{
        const [name, setName] = useState('');
        const [location, setLocation] = useState('');
        const [isLoading, setLoading] = useState(false);
        const handleSubmit = (e) =>{
            try {
                e.preventDefault();
                if(!name || !location){
                    alert('Please fill all fields');
                    return;
                }
                setLoading(true);
                const formData = {name, location};
                onSubmit(formData);
            } catch (error) {
                console.error('Error submitting form:', error);
                alert('An error occurred while submitting the form. Please try again.');
            }
            finally
            {
                setName('');
                setLocation('');
                setLoading(false);
            }
        }

        const handleNameChange = (e) =>{
            setName(e.target.value);
        }
        const handleLocationChange = (e) =>{
            setLocation(e.target.value);
        }


        return(
            <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow-md space-y-4">
        <h2 className="text-xl font-semibold text-center">Business Info</h2>

        <div>
            <label className="block text-gray-700 font-medium mb-1">Business Name</label>
            <input
            type="text"
            name="name"
            value={name}
            required
            onChange={handleNameChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., Cake & Co"
            />
        </div>

        <div>
            <label className="block text-gray-700 font-medium mb-1">Location</label>
            <input
            type="text"
            name="location"
            value={location}
            required
            onChange={handleLocationChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., Mumbai"
            />
        </div>

        <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
            disabled={isLoading}
        >
            {isLoading ? 
            <ClipLoader color="#3b82f6" loading={true} size={35} />
            : 'Get Reviews'} 
        </button>
        </form>
        )

    }

    export default BusinessForm;