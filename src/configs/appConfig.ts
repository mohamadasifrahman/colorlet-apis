const appConfig = {

    name: process.env.APP_NAME,
    environment: process.env.NODE_ENV,
    logLevel: process.env.LOG_LEVEL,
    port: process.env.PORT,
    database: {
        URI: process.env.DATABASE_URL
    }

};

export default Object.freeze(appConfig);