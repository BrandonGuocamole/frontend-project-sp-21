import React from 'react'
import {
    Box,
} from "@chakra-ui/react"
function Review(props) {
    return (
        <Box bg='white' marginBottom='2vh' boxShadow="lg" fontSize='.9rem'>
            <Box padding='2%'>
                Posted by <span style={{fontWeight: 600}}>{props.info.author}</span> <br />
                {props.info.posted} <br />
                <Box fontSize='1rem'>
                    {props.info.content}
                </Box>
            </Box>
        </Box>
    )
}

export default Review