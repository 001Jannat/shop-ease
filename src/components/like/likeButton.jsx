import React, { useState } from "react";
import { IconButton, Tooltip } from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";

const LikeButton = ({ onLike }) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = (e) => {
    e.preventDefault();
    setIsLiked(!isLiked);
    if (onLike) {
      onLike();
    }
  };

  return (
    <Tooltip label={isLiked ? "Unlike" : "Like"} aria-label="like">
      <IconButton
        icon={<FaHeart color={isLiked ? "red" : "white"} size={25} />}
        aria-label={isLiked ? "Unlike" : "Like"}
        onClick={handleLike}
        variant="ghost"
        color="blue.800"
        borderRadius="full"
        _hover={{ bg: "blue.100" }}
      />
    </Tooltip>
  );
};

export default LikeButton;
