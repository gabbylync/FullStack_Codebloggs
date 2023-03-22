import React, { useState } from 'react';
import '/Users/shootermcgabbin/Codeboxx/FullStack_Codebloggs/client/src/App.css'

// When the button is clicked, the initial state is set to 0, and the setLikes
//  function is used to update the state and re-render the component with the revised amount of likes.

function LikeButton() {
   const [likes, setLikes] = useState(0);
   const [liked, setLiked] = useState(false);
   return (
    <div className="like-button-container">
      <button className={`like-button ${liked ? 'liked' : ''}`}
      onClick={() => {
        setLikes(likes + 1);
        setLiked(true);
     }}
  >
     {likes} Likes
  </button>
  </div>
   );
}
export default LikeButton;