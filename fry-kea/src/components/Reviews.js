import React from 'react'
import Review from './Review'
import {
    Box,
} from "@chakra-ui/react"

function Reviews(props) {
    const userReviews = props.item.reviews.map((review) => <Review info={review} />)
    return (
        <Box>
            {userReviews}
        </Box>
    )
}

export default Reviews