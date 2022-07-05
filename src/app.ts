import express, { Application } from 'express';
import cors from 'cors';
import path from 'path';
import { createServer, Server } from 'http';
import routesUser from './routes/user.routes';
import routesAuth from './routes/auth.routes';
import routesPost from './routes/post.routes';
import routesNotifications from './routes/notifications.routes';
import routesChat from './routes/chat.routes';




export class App {

    private app: Application;
    private httpServer: Server;

    private apiRoutes = {
        user: '/api',
        auth: '/api',
        post: '/api',
        notification: '/api',
        story: '/api',
        chat: '/api',
    }

    constructor(){
        this.app = express();

        this.httpServer = createServer(this.app);

        this.middlewares();
        this.routes();

    }

    private middlewares(){
        this.app.use( cors() );
        this.app.use( express.json() );
        this.app.use( express.urlencoded({ extended: false }) );
        this.app.use( express.static( path.resolve('uploads/profile')));
        this.app.use( express.static( path.resolve('uploads/profile/cover')));
        this.app.use( express.static( path.resolve('uploads/posts')));
    }

    private routes(){
        this.app.use( this.apiRoutes.user, routesUser );
        this.app.use( this.apiRoutes.auth, routesAuth );
        this.app.use( this.apiRoutes.post, routesPost );
        this.app.use( this.apiRoutes.notification, routesNotifications );
        this.app.use( this.apiRoutes.chat, routesChat );
        
    }

  

    async listen(port: string): Promise<void> {

        await this.httpServer.listen( port );
        console.log(`SERVER RUN ON PORT ${ port }`)
    }

}