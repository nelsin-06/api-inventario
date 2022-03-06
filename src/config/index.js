require('dotenv').config();

module.exports = {
    CONFIG_API: {
        PORT: process.env.PORT,
    },
    DATABASE: {
        URI_MONGO: process.env.URI_MONGO,
        NAME_DB: process.env.NAME_DB,
    },
};
