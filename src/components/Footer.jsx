import React from 'react'
import { Box,Text, Button, Heading, HStack, Input, Stack, VStack } from '@chakra-ui/react'

import { AiOutlineSend } from "react-icons/ai"
export default function Footer() {
  return (
<>

<Box
bgColor={'blackAlpha.900'}
minH={'40'}
p="16"
color={'white'}
>

<Stack
direction={['column', 'row']}
>

<VStack
alignItems={"stretch"}
w={"full"}    

>
<Heading size="md" textTransform={"uppercase"}>
Subscribe to get updates
</Heading>

<HStack
borderBottom={"2px solid white"}
py={2}
>
  <Input 
  placeholder='Enter Email'
  border={'none'}
  borderRadius="none"
  focusBorderColor='none'
   />
    <Button
    p={"0"}
    color={'purple'}
    variant={"ghost"}
    borderRadius={'0 20px 20px 0'}
    outline={'none'}

    >
           <AiOutlineSend size={20}/>
    </Button>
</HStack>
</VStack>

<VStack
w={"full"}    
borderLeft={['none','1px solid white']}
borderRight={['none','1px solid white']}
>
    <Heading
    // size={"md"}
    textTransform ={"uppercase"}
    textAlign={"center"}
    > VIDEO HUB</Heading>
    <Text>All rights recived.</Text>
</VStack>
<VStack
w={"full"}    
borderLeft={["none", "1px solid white" ]}
>

<Heading 
size={"md"}
textTransform={'uppercase'}
>
    Social Media
</Heading>
<Button variant={"link"} colorScheme={"yellow"}>
    <a href='https://github.com/ANIRBARASKAR'>GitHub
        
    </a>
</Button>

<Button variant={"link"} colorScheme={"yellow"}>
    <a href='https://linkedin.com/in/aniruddha-baraskar-60955a22b'>Linked In
        
    </a>
</Button>

<Button variant={"link"} colorScheme={"yellow"}>
    <a href='https://youtube.com'>YouTube
        
    </a>
</Button>



</VStack>

</Stack>

</Box>

</>  )
}
