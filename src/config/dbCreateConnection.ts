import dataSource from './ormConfig'

export const dbCreateConnection = async() => {
    try {
        const conn = await dataSource.initialize();
        console.log(`Database connection success. Database: '${conn.options.database}'`);
    } catch (err) {
        console.log(err);
        throw new Error(err);
    }
};
