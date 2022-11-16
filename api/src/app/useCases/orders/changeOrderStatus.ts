import { Request, Response } from 'express';

import { Order } from '../../models/Order';

export async function cahngeOrderStatus(req: Request, res: Response) {
    try {
        const { orderId } = req.params;
        const { status } = req.body;

        if(!['WAITING', 'IN_PRODUCTION', 'DONE'].includes(status)) {
            return res.status(400).json({
                error: 'Invalid status.'
            });
        }

        await Order.findByIdAndUpdate(orderId, { status });
        res.sendStatus(204);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}
