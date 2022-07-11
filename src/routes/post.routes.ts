import { Router } from 'express';
import { verifyToken } from '../middleware/verify_token';
import * as post from '../controllers/post_controller';
import { uploadsPost } from '../lib/multer';


const router = Router();

    router.post('/post/createNewPost', [ verifyToken, uploadsPost.array('imagePosts') ], post.createNewPost);
    router.get('/post/getAllPosts', verifyToken, post.getAllPostHome); 
    router.get('/post/getPostByIdPerson', verifyToken, post.getPostByIdPerson); 
    router.post('/post/savePostByUser', verifyToken, post.savePostByUser); 
    router.get('/post/getListSavedPostsByUser', verifyToken, post.getListSavedPostsByUser); 
    router.get('/post/getAllPostsForSearch', verifyToken, post.getAllPostsForSearch);
    router.get('/post/getLikes', verifyToken, post.getLikes);
    router.post('/post/likeOrUnLikePost', verifyToken, post.likeOrUnLikePost);
    router.get('/post/getCommentByIdPost/:uidPost', verifyToken, post.getListCommentsByIdPost );
    router.post('/post/addNewComment', verifyToken, post.addNewComment);
    router.put('/post/likeOrUnLikeComment', verifyToken, post.likeOrUnLikeComment);
    router.get('/post/getAllPostByUserID', verifyToken, post.getAllPostByUserID );


export default router;
