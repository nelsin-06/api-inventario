/* eslint-disable no-async-promise-executor */
const { MongoClient } = require('mongodb');
const debug = require('debug')('app:database');
const {
    DATABASE: { URI_MONGO, NAME_DB },
} = require('../config/index');

let connection = null;

module.exports = {
    database: (collection) => new Promise(async (res, rej) => {
        try {
            if (!connection) {
                const cliente = new MongoClient(URI_MONGO);
                connection = await cliente.connect();
                debug('Nueva coneccion realizada con mongoAtlas');
            }
            debug('Reutilizando coneccion');
            const db = connection.db(NAME_DB);
            res(db.collection(collection));
        } catch (err) {
            rej(err);
        }
    }),
};
