import express, {Application, Request, Response} from 'express';
import routeProducto from '../routers/producto';
class Server{
    private app: Application;
    private port: string;

    constructor(){
        console.log(process.env.PORT);
        this.app = express();
        this.port = process.env.PORT || '3001';
        this.listen();
        this.midlewares();
        this.routes();
    }

    listen(){
        this.app.listen(this.port, () => {
             console.log('Aplicacion corriendo en el puerto ${this.port}');
        })
    }

    routes(){
        this.app.get('/',(req: Request,res: Response) => {
            res.json({
                msg: 'Respondiendo'
            });
        });

        this.app.use('/api/productos',routeProducto);
    }


    midlewares(){
        this.app.use(express.json());
    }
}

export default Server;