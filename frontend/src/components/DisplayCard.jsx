const DisplayCard = ({businessData, regenHeadline}) =>{
    return(
        <div>
            <p>Rating: {businessData.rating} </p>
            <p>Reviews: {businessData.reviews} </p>
            <p>headline: {businessData.headline} </p>


            <button type='button' onClick={regenHeadline}>Regenerate Headline </button>

        </div>
    )

}

export default DisplayCard;