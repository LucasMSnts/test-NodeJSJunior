import Sequelize, { Model } from 'sequelize';

class Address extends Model {
    static init(sequelize) {
        super.init(
            {
                address_line1: Sequelize.STRING,
                address_line2: Sequelize.STRING,
                city: Sequelize.STRING,
                state: Sequelize.STRING,
                zip: Sequelize.STRING,
                billing: Sequelize.BOOLEAN,
            },
            {
                sequelize,
            }
        );

        return this;
    }
}

export default Address;
