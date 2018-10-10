
import userRoutes from './user/user.route';

 export default app => {
     app.use('/api/v1/', userRoutes);
 };