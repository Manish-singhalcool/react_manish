import { createContext, useReducer } from "react";
export const PostList= createContext({
    postList : [],
    addPost: () => {},
    addInitialPosts: () => {},
    deletePost: () => {},

});

const postListReducer = (currPostList , action) => {
    let newPostList = currPostList;
    
    if (action.type === "ADD_INITIAL_POSTS") {
        newPostList = action.payload.posts;
    }

   return newPostList;

};


const PostListProvider = ({ children }) => {
      
    const [postList, dispatchPostList] = useReducer(postListReducer, []);
     
    const addPost = () =>{}


    const addInitialPosts = (posts) => {
        dispatchPostList({
            type: "ADD_INITIAL_POSTS",
            payload: {
                posts,
            },
        });
    };
    const deletePost = ()=>{}

    

    return (
        <PostList.Provider value={{ postList, addPost, addInitialPosts, deletePost }}>
            {children}
        </PostList.Provider>
    );


};


export default PostListProvider;