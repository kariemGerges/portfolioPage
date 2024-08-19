import React, { useState } from "react";
import { Heart } from "lucide-react";

const Likes = () => {
    const [likes, setLikes] = useState(0);
    const [isLiked, setIsLiked] = useState(false);

    const handleLike = () => {
        if (isLiked) {
            setLikes(likes - 1);
            setIsLiked(false);
        } else {
            setLikes(likes + 1);
            setIsLiked(true);
        }
    };

    return (
        <button
            onClick={handleLike}
            className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-colors
            ${isLiked ? 'bg-red-100 text-red-500' : 'bg-gray-100 text-gray-500'}
            hover:bg-red-200`}
      >
        <Heart
          className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`}
        />
        <span>{likes} Likes</span>
      </button>
    );
};

export default Likes;
