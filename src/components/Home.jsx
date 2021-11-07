import React from 'react'
import Slider from "./Slider"
import { Text, Container, Center, Box, Image, VStack, StackDivider, Grid, Heading } from "@chakra-ui/react"



const Home = () => {
    return (
        <div>
        <div>
            <Slider/>
        </div>
        <Grid templateColumns="repeat(2, 1fr)" gap={1} pl={40} pr={40}>
            <Box boxSize="lg" className="">
                <Image src="https://i.ytimg.com/vi/fwb9JysHYSI/maxresdefault.jpg" alt="adin and boat"></Image>
            </Box>
            <div>
                <Heading fontSize="4xl">Start a collection of your favorite highlights</Heading>
                <Text fontSize="2xl">Explore the marketplace to buy or bid for any clip. Each clip is minted as an NFT, which means you can publically own that clip! Each NFT lives on the Ethereum blockchain.</Text>
            </div>

            <div>
                <Heading fontSize="4xl">Become a creator and sell custom clips</Heading>
                <Text fontSize="2xl">When you sell a clip, it gets shown on your creator profile. This profile lets you create a community around your creator platform.</Text>
            </div>
            <Center>
            <Box boxSize="lg">
                <Image src="https://i.ytimg.com/vi/EVCB69WzoqU/maxresdefault.jpg" alt="rice and zias"></Image>
            </Box>
            </Center>
 
        <Box boxSize="lg">
                <Image src="https://clips-media-assets2.twitch.tv/AT-cm%7C247853416-social-preview.jpg" alt="nadeshot fortnite"></Image>
            </Box>
            <div>
            <Heading fontSize="4xl">Earn Pixels</Heading>
            <Text fontSize="2xl">Earn Pixels everytime you get upvoted by the community. Pixels give you access to exclusive content!</Text>
        </div>
        </Grid>
        </div>
    )
}

export default Home
