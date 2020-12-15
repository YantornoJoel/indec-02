const {Router} = require('express');
const requireDir = require('require-dir');
const forEach = require('lodash/forEach');

const logger = include('helpers/logger');

/*Las rutas son la primera etapa en la que debemos trabajar para decidir qué hacer con cada petición
que reciba nuestra aplicación. Por lo general las rutas apuntan a un controlador
(segunda etapa) y luego el controlador interactúa con los modelos,
u otras clases y servicios para finalmente generar una respuesta que se enviará al usuario (HTML, JSON, etc.)*/

module.exports = router => {
    forEach(
        requireDir('.', {recurse: true}),
        (module, name) => {
            logger.info(`Loading ${name} api...`);
            router.use(`/${name}`, module(Router()));
        }
    );
    return router;
};
