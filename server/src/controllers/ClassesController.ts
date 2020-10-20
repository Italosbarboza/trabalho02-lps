import { Request, Response } from 'express';
import db from '../database/connection';

export default class ClassesController {
    async show(request: Request, response: Response) {
        
        const trx = await db.transaction();
    
        const lances = await trx('lances').select('lance');

        const lancefilter = [0];
        
        let temp = 0;
        lances.map(x => {
            temp = 0;
            lances.map(y => {
                if(x.lance == y.lance) {
                    temp = temp + 1;
                }
            })
            console.log(temp);
            if(temp == 1) {
                lancefilter.push(x.lance);
            }
        })

        lancefilter.splice(0, 1);

        var min = Math.min(...lancefilter);

        // tratar para lace.lenght == 1
        
        await trx.commit();

        return response.json(min);
    }

    async create(request: Request, response: Response) {
        const {
            nome,
            cpf, 
            whatsapp,
            lance
        } = request.body;
    
        const trx = await db.transaction();
    
        try {
            const insertedUsersIds = await trx('lances').insert({
                nome,
                cpf, 
                whatsapp,
                lance
            });
        
            await trx.commit();
        
            return response.status(201).send();
        } catch (err) {
            await trx.rollback();
    
            return response.status(400).json({
                error: 'Unexpected error while creating new class'
            })
        }
    }
}