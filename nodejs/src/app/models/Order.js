import Sequelize, { Model } from 'sequelize';

class Order extends Model {
    static init(sequelize) {
        super.init(
            {
                fuel_cutoff: Sequelize.BOOLEAN,
                trackers: Sequelize.BOOLEAN,
                fleet_driver: Sequelize.BOOLEAN,
                trackers_purchase: Sequelize.INTEGER,
            },
            {
                sequelize,
            }
        );

        return this;
    }

    static associate(models) {
        this.belongsTo(models.Contact, {
            foreignKey: 'contact_id',
            as: 'contact',
        });
        this.belongsTo(models.Address, {
            foreignKey: 'shipping_id',
            as: 'shipping',
        });
        this.belongsTo(models.Address, {
            foreignKey: 'billing_id',
            as: 'billing',
        });
    }
}

export default Order;
