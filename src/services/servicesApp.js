const db = require('../lib/db');

class ServicesApp {

    static async getAccounts() {
        const result = await db
            .select('titular', 'tipo_cuenta', 'moneda', 'nro_cuenta', 'cbu', 'banks.nombre')
            .table('accounts')
            .leftJoin('banks', 'accounts.bank_id', 'banks.id');

        return { items: result };
    }

    static async getLastBanks() {
        const result = await db
            .select('id as ID', 'nombre as NAME')
            .table('banks')
            .orderBy('id', 'desc');

        return { items: result };
    }

    static async getBanks() {
        const result = await db
            .select()
            .table('banks')
            .whereBetween('id', [5, 10]);

        return { items: result };
    }

    static async getBanksDate() {
        const result = await db
            .select()
            .table('banks')
            .where('created_at', 'like', '%2020-11-16%');

        return { items: result };
    }

    static async onChangeDesactived() {
        const result = await db
            .update({ active: 0 })
            .table('users')
            .whereNot({ email: 'admin@admin.com' });

        return { items: result };
    }

    static async onChangeActive() {
        const result = await db
            .update({ active: 1 })
            .table('users');
        // .whereNot({ "email": "admin@admin.com"})

        return { items: result };
    }

}

module.exports = ServicesApp;
