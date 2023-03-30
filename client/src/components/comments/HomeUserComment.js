import React from "react";
import { useEffect, useState } from "react";
// //////////////////////////////
// ///     HOME PAGE COMMENTS: 
///// getting comments by User ID ///////
// ////////////////////////////
export default function HomeUserComment (props) {
  const [comments, setComments] = useState();

  useEffect(() => {
    async function CommentsbyPostID() {
      const response = await fetch(`http://localhost:3004/comment-by-postID/${props.postID}`);
      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      let data = await response.json();
      setComments(data);
    }

    CommentsbyPostID();
  }, []);

  return (
    <>
      {comments
        ? comments.map((comment) => {
            return (
              
                <div key={props.postID}>
                    <h2 className = "commentContent"> {comment.content} </h2>
                </div>
              
            );
          })
        : null}
    </>
  );
}
