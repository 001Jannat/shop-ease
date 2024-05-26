import { Button } from "@chakra-ui/react";
import React from "react";

const ChatButton = ({title,price}) => {

  return (
    <Button
      as="a"
      href={`https://wa.me/918787878787?text=Hey, I am interested in buying ${title}-${price}`}
      colorScheme="teal"
      mt="10px"
    >
      Inquire on Whatsapp
    </Button>
  );
};

export default ChatButton;