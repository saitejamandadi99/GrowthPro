import { ClipLoader } from "react-spinners";

const DisplayCard = ({businessData, regenHeadline}) =>{
    const [isLoading, setLoading] = useState(false);
    const onClickRegenButton = () =>{
        setLoading(true);
        regenHeadline();
        setLoading(false);
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