import Sequelize from 'sequelize';

import Contact from '../app/models/Contact';
import Address from '../app/models/Address';
import Order from '../app/models/Order';

import databaseConfig from '../config/database';

const models = [Contact, Address, Order];

class Database {
    constructor() {
        this.init();
    }

    init() {
        this.connection = new Sequelize(databaseConfig);

        models
            .map(model => model.init(this.connection))
            .map(
                model =>
                    model.associate && model.associate(this.connection.models)
            );
    }
}

export default new Database();
