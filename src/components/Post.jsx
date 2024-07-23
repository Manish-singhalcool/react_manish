import { MdDelete } from "react-icons/md";

const Post=({ post })=>{
  return <div className="card post-card" style={{width: "30rem" }}>
    <div className="card-body">
      <h5 className="card-title">{post.title}
       
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        <MdDelete /> 
        </span>
      </h5>
      <p className="card-text">{post.body}</p>
       {post.tags.map((tags)=> <span key={tags}  className="badge text-bg-primary hasTags">{tags}</span>)}
      <div className="alert alert-success reactions" role="alert">
        This Post has been Likes by {post.reactions.likes} and dislikes {post.reactions.dislikes} people
      </div>

    </div>
</div>
}

export default Post;