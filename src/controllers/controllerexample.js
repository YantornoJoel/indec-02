const ExampleService = require('../services/servicesexample');

/**
 *  Los controladores manejan toda la lógica detrás de los parámetros de solicitud de validación,
 * consulta, envío de respuestas con los códigos correctos.
*/

class ExampleController{
    static async listAll(req, res, next){
        try{
            const result = await ExampleService.listAll();
            res.send(result);
        }catch(err){
            next(err);
        }
    }

    static async getOne(req, res, next){
        try{
            const result = await ExampleService.getOne(req.params.id);
            res.send(result);
        }catch(err){
            next(err);
        }
    }

    static async create(req, res, next){

        try{
            const result = await ExampleService.save(req.body);
            res.send(result);
        }catch(error){
            next(error);
        }
    }

    static async update(req, res, next){
        try{
            const result = await ExampleService.update(req.params.id, req.body);
            res.send(result);
        }catch(err){
            next(err);
        }
    }

    static async delete(req, res, next){
        try{
            const result = await ExampleService.delete(req.params.id);
            res.send(result);
        }catch(err){
            next(err);
        }
    }
}

module.exports = ExampleController;
