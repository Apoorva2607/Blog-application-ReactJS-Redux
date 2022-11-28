import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";

const PostAuthor = ({ userId }) => {

    //select all users
    const users = useSelector(selectAllUsers)
    
     //using find method we will find the author
    const author = users.find(user => user.id === userId);

    //if exist display the author name if not display unknown user
    return <span>by {author ? author.name : 'Unknown author'}</span>
}
export default PostAuthor


    
   
    