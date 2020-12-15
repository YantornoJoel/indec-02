const db = require('../lib/db');

/**
 * Servicios : los servicios contienen las consultas de la base de datos y la devolución de objetos o errores de lanzamiento.
 */

class ExampleService {

    static async listAll() {
        const result = await db
            .select()
            .table('users')
            .whereNull('deleted_at');

        return {items: result};
    }

    static async getOne(id) {
        const result = await db
            .select()
            .table('users')
            .where('id', id);

        if(result.length === 0){
            return {message: 'User not found.'};
        }

        return result;
    }

    static async save(data) {
        await db('users')
            .insert(data);

        return {success: true};
    }

    static async update(id, data) {
        await db('users')
            .where('id', id)
            .update(data);

        return {success: true};
    }

    static async delete(id) {
        await db('users')
            .where({id: id})
            .update({deleted_at: new Date()});

        return {success: true};
    }
}

module.exports = ExampleService;
