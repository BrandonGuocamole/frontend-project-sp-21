import React from 'react'
import {SimpleGrid, Box, Image, Center} from "@chakra-ui/react"
import Reviews from "./Reviews"

function ItemInfo(props) {
    const tags = props.item.tags
    let tagLine = ''
    for (const tag of tags) {
        tagLine += tag + ', '
    }
    tagLine = tagLine.substring(0, tagLine.length-2)
    return (
        <SimpleGrid
            w='100vw'
            h='88vh'
            position='fixed'
            top='12vh'
            bg='white'
            columns={2}
        >
            <Box bg='#D6DEFF'>
                <Box marginLeft='12vw' marginTop='5vh' w='30vw'>
                    <Box fontSize='2rem' fontWeight='600'>
                        {props.item.name}
                    </Box>
                    Tags: {tagLine}
                    <br /><br />
                    {props.item.description}
                    <br /><br />
                    <Box fontSize='1.5rem'>
                        Reviews
                    </Box>
                    <Reviews item={props.item} />

                </Box>
            </Box>
            <Box>
                <Center>
                    <Image h='56vh' marginTop='16vh' src={props.item.image}/>
                </Center>
            </Box>
        </SimpleGrid>
    )
}

export default ItemInfo