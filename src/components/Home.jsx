import { Box, Container, Stack  } from '@chakra-ui/react'
import React from 'react'
import {Carousel} from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Image,Heading,Text } from '@chakra-ui/react';
import img1 from "./../assets/img1.jpg"
import img2 from "./../assets/img2.jpg"
import img3 from "./../assets/img3.jpg"
import img4 from "./../assets/img4.jpg"
import img5 from "./../assets/img5.png"

const hradingOptions = {
    pos:"absolute",
    left : "50%",
    top : "50%",
    transform : "translate(-50%, -50%)",
    textTransform : "uppercase",
    p : '4',
    size : '4xl'

}

export default function Home() {


  return (
<>

   <Box>
  <MyCarousel />
  <Container
  maxW={'container.xl'}
  minHeight={'100vh'}
  p="16"
  >
    <Heading
     textTransform={"uppercase"} 
     py="2"
     w={"fit-content"}
     borderBottom={"2px solid"}
     margin={"auto"}
    >Services</Heading>

    <Stack
    h="full"
    p={'4'}
    alignItems={'center'}
    direction={['column','row']}
    >
       <Image src={img5} h={["40","400"]} filter={"hue-rotate(-130deg)"}/>

       <Text
       letterSpacing={"widest"}
       lineHeight={"190%"}
       p={["4","16"]}
       textAlign={"center"}
       >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta voluptatem illum quam error, fugit magnam quae maiores nihil dignissimos, officiis excepturi aut optio unde laboriosam nobis sequi tenetur quibusdam dolore?
       </Text>
    </Stack>
  </Container>
 
   </Box> 
</>  )
}


const MyCarousel = () => {

   return (
    <>
         <Carousel
    autoPlay 
    infiniteLoop 
    interval={1000}
    showThumbs={false}

    showArrows={false}
    showStatus={false}
    >

<Box w="full" h={'100vh'}>
  <Image src={img1}/>
  <Heading 
  bgColor={"blackAlpha.600"}
  color={"white"}
  {...hradingOptions}
  >
    Watch the future
  </Heading>
</Box>


<Box w="full" h={'100vh'}>
  <Image src={img2}/>
  <Heading 
  bgColor={"whiteAlpha.900"}
  color={"black"}
  {...hradingOptions}

  >
    Future is Gaming.
  </Heading>
</Box>

<Box w="full" h={'100vh'}>
  <Image src={img3}/>
  <Heading 
  bgColor={"blackAlpha.600"}
  color={"white"}
  {...hradingOptions}

  >
    Gaming on console
  </Heading>
</Box>

<Box w="full" h={'100vh'}>
  <Image src={img4}/>
  <Heading 
  bgColor={"blackAlpha.600"}
  color={"white"}
  {...hradingOptions}

  >
   Night life is cool
  </Heading>
</Box>



    </Carousel>

    </>
   )
}
