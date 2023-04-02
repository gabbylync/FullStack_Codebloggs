import React from "react";
import { useEffect, useState } from "react";
import "../../App.css"
// //////////////////////////////
// /// getting posts by user ID ///////
// ////////////////////////////
export default function NetworkUserpost(props) {
  const [posts, setPosts] = useState();

  useEffect(() => {
    async function getPostsbyUserID() {
      const response = await fetch(`http://localhost:3004/post-by-user/${props.userID}`);
      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      let data = await response.json();
      setPosts(data);
    }

    getPostsbyUserID();
  }, []);

  return (
    <>
      {posts
        ? posts.map((post) => {
            return (
              
                <div key={props.userID}>
                    <h2 className = "postContent"> {post.content} </h2>
                </div>
              
            );
          })
        : null}
    </>
  );
}
