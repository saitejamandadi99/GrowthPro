const headlines = [];

const getBusinessDetails = (req, res) =>{


    const {name , location} = req.body;
    if(!name || !location)    
    {
        res.status(400).json({message:'Please provide all fields'})
        return;
    }
    const randomRating = Math.floor(Math.random() * 5) + 1;
    const randomReviews = Math.floor(Math.random() * 100) + 1;
    const randomHeadline = `Check out ${name} in ${location}! It has a rating of ${randomRating} stars with ${randomReviews} reviews.`;
    const business={
        rating:parseFloat(randomRating),
        reviews:randomReviews,
        headlines:randomHeadline,
    }
    res.status(200).json(business);

}

const regenerateHeadlines = (req, res) =>{
    const {name, location} = req.body;
    if (!name || !location){
        res.status(400).json({message:'Please provide all the details'});
        return;
    }
    const randomHeadline = headlines[Math.floor(Math.random() * headlines.length)];
    res.status(200).json({
        headline:randomHeadline.replace('{name}', name).replace('{location}', location)
    })
}

module.exports = {getBusinessDetails, regenerateHeadlines};