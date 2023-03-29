import React, { useState } from 'react';
import '/Users/shootermcgabbin/Codeboxx/FullStack_Codebloggs/client/src/App.css'

// When the button is clicked, the initial state is set to 0, and the setLikes
//  function is used to update the state and re-render the component with the revised amount of likes.

function LikeButtonHome(props) {
   const [likes, setLikes] = useState(0);
   const [liked, setLiked] = useState(false);

async function likePost () {
   await fetch(`http://localhost:3004/post-like/${props.postID}`, {
      method: "PATCH",
     //  should it say post or patch //
      headers: {
        'Content-Type': 'application/json'
      },
    });
    props.refresh()
   }

   //////////////////////////////////////////////////////////
   return (
    <div className="like-button-container">
      <button className={`like-button ${liked ? 'liked' : ''}`}
      onClick={likePost
   //       () => {
   //      setLikes(likes + 1);
   //      setLiked(true);
   //   }
   }
  >
     {props.postLike}  Likes
  </button>
  </div>
   );
}
export default LikeButtonHome;