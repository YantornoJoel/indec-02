const ServicesApp = require('../services/servicesApp');

class Controllers {

    static async getAccounts(req, res, next) {
        try {
            const result = await ServicesApp.getAccounts();
            const {items} = result;

            for (let i = 0; i < 3; i++) {
                const item = items[i];
                item.titular = item.titular.toUpperCase();
                item.moneda === 'Pesos' ? item.moneda = '$' : item.moneda = 'us$';
            }

            const counter = result.items.length;
            result.items.push({ counter });

            res.send(result);
        } catch (err) {
            next(err);
        }
    }

    static async getLastBanks(req, res, next) {

        try {
            const result = await ServicesApp.getLastBanks();

            res.send(result);
        } catch (err) {
            next(err);
        }

    }

    static async getBanks(req, res, next) {

        try {
            const result = await ServicesApp.getBanks();

            res.send(result);
        } catch (err) {
            next(err);
        }

    }

    static async getBanksDate(req, res, next) {

        try {
            const result = await ServicesApp.getBanksDate();

            res.send(result);
        } catch (err) {
            next(err);
        }

    }

    static async onChangeDesactived(req, res, next) {

        try {
            const result = await ServicesApp.onChangeDesactived();

            res.send(result);
        } catch (err) {
            next(err);
        }

    }

    static async onChangeActive(req, res, next) {

        try {
            const result = await ServicesApp.onChangeActive();

            res.send(result);
        } catch (err) {
            next(err);
        }

    }

}

module.exports = Controllers;
