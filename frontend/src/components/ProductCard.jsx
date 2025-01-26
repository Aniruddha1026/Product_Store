import { DeleteIcon, EditIcon } from "@chakra-ui/icons"
import { Box, Heading, HStack, IconButton, Image, Modal, ModalHeader, ModalContent, ModalOverlay, Text, useToast, useColorModeValue, useDisclosure, ModalBody, VStack, Input, ModalCloseButton, ModalFooter, Button } from "@chakra-ui/react"
import { MdCurrencyRupee } from "react-icons/md"
import { useProductStore } from "../store/product"
import { useState } from "react"

const ProductCard=({product}) => {
    const [ updatedProduct, setUpdatedProduct ] = useState(product)
    const textColor=useColorModeValue("gray.600","gray.200")
    const bg=useColorModeValue("white","gray.800")
    const { deleteProduct, updateProduct } = useProductStore()
    const toast=useToast()
    const handleDelete=async(pid)=>{
        const {success,message}=await deleteProduct(pid)
        if(!success){
            toast({
                title:"Error",
                description: message,
                status: "error",
                isClosable: true
            })
        }
        else{
            toast({
                title:"Success",
                description: message,
                status: "success",
                isClosable: true
            })
        }
    }
    const handleUpdate=async (pid,updatedProduct) => {
        const { success, message }=await updateProduct(pid,updatedProduct)
        toast({
            title: success ? "Updated Successfully" : "Error",
            description: message,
            status: success ? "success" : "error",
            isClosable: true,
          });
          if (success) onClose();
        
    }
    const { isOpen, onOpen, onClose } = useDisclosure()
    return(
        <><Box
            shadow='lg'
            rounded='lg'
            overflow='hidden'
            transition='all 0.3s'
            _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
            bg={bg}
        >
            <Image src={product.image} alt={product.name} h={48} w="full" objectFit='cover' />
            <Box p={4}>
                <Heading as={'h3'} size='md' mb={2}>
                    {product.name}
                </Heading>

                <Text as="span" fontWeight='bold' fontSize='xl' color={textColor} mb={4}>
                    <HStack>
                        <MdCurrencyRupee />
                        <Text as="span">{product.price}</Text>
                    </HStack>
                </Text>
                <HStack spacing={2}>
                    <IconButton icon={<EditIcon />} onClick={onOpen} colorScheme="blue" />
                    <IconButton icon={<DeleteIcon />} onClick={() => handleDelete(product._id)} colorScheme="red" />
                </HStack>
            </Box>
        </Box>
        <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        Update Product
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <VStack spacing={4}>
                            <Input
                                placeholder="Product Name"
                                name="name"
                                type="text"
                                value={updatedProduct.name}
                                onChange={(e) => setUpdatedProduct({ ...updatedProduct, name: e.target.value })} />
                            <Input
                                placeholder="Price"
                                name="price"
                                value={updatedProduct.price}
                                type="number"
                                onChange={(e) => setUpdatedProduct({ ...updatedProduct, price: e.target.value })} />
                            <Input
                                placeholder="Image URL"
                                name="image"
                                value={updatedProduct.image}
                                onChange={(e) => setUpdatedProduct({ ...updatedProduct, image: e.target.value })} />
                        </VStack>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={() => handleUpdate(product._id, updatedProduct)}>
                            Update
                        </Button>
                        <Button variant='ghost' onClick={onClose}>
                            Cancel
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal></>
            
    )

}
export default ProductCard