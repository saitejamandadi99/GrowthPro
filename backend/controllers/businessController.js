const headlines = [
    "Why {name} is the top choice for locals in {location}",
    "Experience the best of {location} at {name}",
    "Discover what makes {name} special in {location}",
    "Top reviews and ratings — {name} in {location} stands out!",
    "{name} is redefining excellence in {location}",
    "Customers love {name} — the pride of {location}",
    "{name} brings unbeatable quality to {location}",
    "Don’t miss out: {name} is trending in {location}",
    "{name} sets the standard for service in {location}",
    "Why everyone’s talking about {name} in {location}"
    ];

const getBusinessDetails = (req, res) =>{
    const {name , location} = req.body;
    if(!name || !location)    
    {
        res.status(400).json({message:'Please provide all fields'})
        return;
    }
    const randomRating = Math.floor(Math.random() * 5) + 1;
    const randomReviews = Math.floor(Math.random() * 100) + 1;
    const template = headlines[Math.floor(Math.random() * headlines.length)];
    const randomHeadline = template.replace('{name}', name).replace('{location}', location);

    const business={
        rating:parseFloat(randomRating),
        reviews:randomReviews,
        headline:randomHeadline,
    }
    res.status(200).json({'business':business});

}

const regenerateHeadlines = (req, res) =>{
    const {name, location} = req.query;
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