import React from 'react'
import {Drawer,
        DrawerBody,
        DrawerContent,
        DrawerHeader,
        DrawerFooter,
        DrawerCloseButton,
        DrawerOverlay,
        Button,
        useDisclosure,
        VStack,
        HStack,
        useBoolean} from "@chakra-ui/react"
import { Link } from 'react-router-dom'
import {BiMenuAltLeft} from "react-icons/bi"




const Header = () => {
    const{isOpen, onOpen ,onClose}=useDisclosure();
  return (
    <>
   <Button pos={"fixed"} colorScheme='purple' p={"0"} top={"4"} left={"4"} h={"10"} w={"10"} borderRadius={"5"} onClick={onOpen}> 
    <BiMenuAltLeft size={"20"} />

    <Drawer  placement='left' isOpen={isOpen} onClose={onClose}  >
        

<DrawerOverlay />

<DrawerContent>
<DrawerCloseButton />

<DrawerHeader>
 VIDEO HUB
</DrawerHeader>
<DrawerBody>

<VStack alignItems={"flex-start"}>
    <Button  onClick={onClose} variant={"ghost"} colorScheme='purple'>
        <Link to={"/"}> Home</Link>
    </Button>

    <Button  onClick={onClose} variant={"ghost"} colorScheme='purple'>
        <Link to={"/videos"}> Videos</Link>
    </Button>

    <Button onClick={onClose}  variant={"ghost"} colorScheme='purple'>
        <Link to={"/videos?catagory=free"}> Free Videos</Link>
    </Button>

    <Button  onClick={onClose} variant={"ghost"} colorScheme='purple'>
        <Link to={"/upload"}> Upload Video</Link>
    </Button>

   
   </VStack>

   <HStack pos={"absolute"} bottom={"50"} left={"0"} width={"full"} justifyContent={"space-evenly"}>

        <Button  onClick={onClose}  colorScheme='purple'>
            
            <Link to={"/login"}>Log In</Link>

            
            </Button>
        <Button  onClick={onClose}  variant={"outline"} colorScheme='purple'>
            
        <Link to={"/signin"}>Sign In</Link>
            
            </Button>



   </HStack>





</DrawerBody>



</DrawerContent>

    </Drawer>
   </Button>

   
    </>
  )
}

export default Header;