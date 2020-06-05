import knex from '../database/connect';
import { Request, Response} from 'express';

class ItemsController {
    async index(request: Request, response: Response) {

        const items = await knex('items').select('*');
    
        const serializedItems = items.map(item => {
            return {
                id: item.id,
                title: item.title,
                image_url: `http://10.0.0.8:3333/uploads/${item.image}`,
            };
        });
    
        return response.json(serializedItems);
        // const search = String(request.query.search);
    
        // const filteredUsers = search ? users.filter(user => user.includes(search)) : users;
    
        // //console.log(search);
        // //console.log('Listagem de usuários');
    
        // return response.json(filteredUsers);
    }
}

export default ItemsController;