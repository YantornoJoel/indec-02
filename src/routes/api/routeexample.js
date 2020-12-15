const ExampleController = require('../../controllers/controllerexample');
//npm i -g eslint

//eslint src --fix
module.exports = router => {

    //Example: GET localhost:3001/api/routeexample
    router.route('/')
        .get(ExampleController.listAll)
        .post(ExampleController.create);

    //Example: GET localhost:3001/api/routeexample/1
    //Example: PATCH localhost:3001/api/routeexample/1
    //Example: DELETE localhost:3001/api/routeexample/1
    router.route('/:id')
        .get(ExampleController.getOne)
        .patch(ExampleController.update)
        .delete(ExampleController.delete);

    return router;
};
