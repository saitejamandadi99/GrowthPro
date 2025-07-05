import { ClipLoader } from "react-spinners";
import { useState } from 'react';
const DisplayCard = ({businessData, regenHeadline}) =>{
    const [isLoading, setLoading] = useState(false);
    const onClickRegenButton = async () =>{
        try {
            setLoading(true);
            await regenHeadline();
        
            
        } catch (error) {
            console.error('Error regenerating headline:', error);
            alert('An error occurred while regenerating the headline. Please try again.');    
        }
        finally {
            setLoading(false);
        }
}
    return(
        <div>
            <p>Rating: {businessData.rating} </p>
            <p>Reviews: {businessData.reviews} </p>
            <p>headline: {businessData.headline} </p>


            <button type='button' onClick={onClickRegenButton} disabled={isLoading}>
                {isLoading ? <ClipLoader color="#3b82f6" loading={true} size={35} /> : 
                'Regenerate Headline' 
                }
                </button>

        </div>
    )

}

export default DisplayCard;