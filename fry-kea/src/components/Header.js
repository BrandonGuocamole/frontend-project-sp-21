import React from 'react'
import {
    Box,
    Image,
    Grid, 
    GridItem,
} from "@chakra-ui/react"
import logo from './frykea-logo.png'

function Header () {
    return (
        <Box
            bg='#020202'
            top={0}
            h='13vh'
            color='white'
            position='fixed'
            w='100vw'
        >
            <Image
                src={logo}
                margin={0}
                p="absolute"
                top = '50%'
                transform = 'translateY(100%)'
                marginLeft='2%'
                onClick = {() => window.location.reload(false)}
            />
            <Box color='white' position='fixed' right='2%'>
                <Grid gridTemplateColumns='auto auto auto auto' width='15vw'>
                    <GridItem colSpan={4}>
                        <span>Mon-Mon: </span> 9:00:000 AM - 173:0
                    </GridItem>
                    <GridItem colSpan={2}>
                        Call Us: 000-Never
                    </GridItem>
                    <GridItem textAlign='right'>
                    	<Image src='./img/facebook-logo.png' display='inline'/>
                        <Box w='5%'display='inline'/>
                    	<Image src='./img/instagram-logo.png' display='inline'/>
                    </GridItem>
                </Grid>
            </Box>
        </Box>
    )
}

export default Header