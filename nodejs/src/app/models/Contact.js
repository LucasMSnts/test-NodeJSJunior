import Sequelize, { Model } from 'sequelize';

class Contact extends Model {
    static init(sequelize) {
        super.init(
            {
                first_name: Sequelize.STRING,
                last_name: Sequelize.STRING,
                email: Sequelize.STRING,
                phone: Sequelize.STRING,
                language: Sequelize.STRING,
                country: Sequelize.STRING,
            },
            {
                sequelize,
            }
        );

        return this;
    }
}

export default Contact;
