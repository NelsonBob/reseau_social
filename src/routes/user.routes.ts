import { Router } from 'express';
import * as user from '../controllers/user_controller';
import { uploadsCover, uploadsProfile } from '../lib/multer';
import * as auth from '../controllers/auth_controller';
import { verifyToken } from '../middleware/verify_token';

const router = Router();

// Authentification
    router.post('/authLogin', auth.login);
    router.get('/auth/renewLogin', verifyToken ,auth.renweLogin);


    router.post('/user', user.createUser );
    router.get('/user/getUserById', verifyToken, user.getUserById );
    router.put('/user/updatePictureCover', [ verifyToken, uploadsCover.single('cover') ], user.updatePictureCover );
    router.put('/user/updatePictureProfile', [ verifyToken, uploadsProfile.single('profile') ], user.updatePictureProfile );
    router.put('/user/updateDataProfile', verifyToken, user.updateProfile );
    router.put('/user/changePassword', verifyToken, user.changePassword );
    router.put('/user/changeAccountPrivacy', verifyToken, user.changeAccountPrivacy );

    router.get('/user/getSearchUser/:username', verifyToken, user.getSearchUser );
    router.get('/user/getAnotherUserById/:idUser', verifyToken, user.getAnotherUserById );
    router.post('/user/addNewFriend', verifyToken, user.AddNewFollowing );
    router.post('/user/acceptFollowerRequest', verifyToken, user.AcceptFollowerRequest );
    router.delete('/user/deleteFollowing/:idUser', verifyToken, user.deleteFollowing);
    router.get('/user/getAllFollowings', verifyToken, user.getAllFollowings );
    router.get('/user/getAllFollowers', verifyToken, user.getAllFollowers );
    router.delete('/user/deleteFollowers/:idUser', verifyToken, user.deleteFollowers);
    


export default router;