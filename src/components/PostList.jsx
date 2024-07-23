import { useContext, useEffect, useState } from "react";
import Post from "./Post"
import { PostList as PostListData } from "../store/post-list-store";
import Welcome from "./Welcome";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
 const {postList , addInitialPosts } = useContext(PostListData);
 const [loadImage,setLoadImage]=useState(false);
 
  useEffect(() => {
    setLoadImage(true);
      fetch("https://dummyjson.com/posts")
      .then(res => res.json())
      .then((data) => {
        //console.log(data.posts);
        setLoadImage(false);
        addInitialPosts(data.posts);
      });
  }, []);
 
  return  ( 
      <>
        {loadImage && <LoadingSpinner />}
        {!loadImage && postList.length === 0 && <Welcome />}
        {!loadImage && postList.map((post)=> (
            <Post key={post.id} post={post}/>
        ))}
      </>
    );
}

export default PostList;