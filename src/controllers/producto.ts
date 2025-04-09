import {Request, Response} from 'express';
export const getProducts = (req: Request, res: Response) => {
    res.json({
        msg: 'Get products'
    });
}

export const getProduct = (req: Request, res:Response) =>{
    const {id} = req.params;
    res.json({
        id,
        msg: 'Get product'
    });
}

export const deletProduct = (req: Request, res:Response) =>{
    const {id} = req.params;
    res.json({
        id,
        msg: 'Delete product'
    });
}

export const postProduct = (req: Request, res:Response) =>{
    const {body} = req;
    console.log(body);
    res.json({
        msg: 'Post product',
        body
    });
}