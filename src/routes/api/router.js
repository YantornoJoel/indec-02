const Controller = require('../../controllers/controllers');

module.exports = router => {

    router.route('/accounts')
        .get(Controller.getAccounts);

    router.route('/lastbanks')
        .get(Controller.getLastBanks);

    router.route('/banks')
        .get(Controller.getBanks);

    router.route('/banks-date')
        .get(Controller.getBanksDate);

    router.route('/desactived')
        .put(Controller.onChangeDesactived);

    router.route('/active')
        .put(Controller.onChangeActive);

    return router;
};
