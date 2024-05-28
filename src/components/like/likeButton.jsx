import React from "react";
import { IconButton } from "@chakra-ui/react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const LikeButton = ({ onLike, isLiked }) => {
  return (
    <IconButton
      onClick={onLike}
      icon={isLiked ? <FaHeart color="red" /> : <FaRegHeart />}
      variant="ghost"
      aria-label="Like"
    />
  );
};

export default LikeButton;
