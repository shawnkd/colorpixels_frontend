import React from 'react'
import {Heading, Image, Text, Button, Box} from '@chakra-ui/react'


const ClipDescription = () => {
    return (
        <div>
        <Heading pb={50} pt={50}>Back</Heading>
        <Box boxSize="4xl" >
            <Heading>Clip Description</Heading>
            <Image src="https://i.ytimg.com/vi/fwb9JysHYSI/maxresdefault.jpg" alt="adin and boat"></Image>
            
            <Text fontSize="2xl">more desc more desc more desc </Text>
            <Text fontSize="2xl">Price</Text>
            <Text fontSize="2xl">Username</Text>
            <Text fontSize="2xl">Rarity</Text>
            <Button>Buy</Button>
            </Box>
        </div>
    )
}

export default ClipDescription

