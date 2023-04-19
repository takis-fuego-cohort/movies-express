const addReviewForm = document.getElementById('add-review-form')
addReviewForm.addEventListener('submit', async (e)=>{
    e.preventDefault()
    const reviewContent = document.getElementById('review-content-input')
    const reviewRating = document.getElementById('review-rating-input').value
    if(!reviewContent.value){
        alert("You need to fill in the content!")
    }else if(reviewContent.value.length < 10){
        alert("That's a lazy review. keep going")
    }else{
        const response = await fetch(`${addReviewForm.action}/api`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({
                content: reviewContent.value,
                rating: reviewRating
            })
        })
        console.log(response)
        if(response.status === 200){
            console.log(response.data.review)
            const newListItem = document.createElement('li')
            const reviewParagraph = document.createElement('p')
            const reviewRatingParagraph = document.createElement('p')
            reviewParagraph.innerText = reviewContent.value;
            reviewRatingParagraph.innerText = reviewRating;
            newListItem.append(reviewRatingParagraph)
            newListItem.append(reviewParagraph)
            document.querySelector('.reviews').append(newListItem)
            reviewContent.value = "";
            // append the new review to the DOM
        }
    }
})