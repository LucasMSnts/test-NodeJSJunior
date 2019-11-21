module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('orders', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            contact_id: {
                type: Sequelize.INTEGER,
                references: { model: 'contacts', key: 'id' },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL',
                allowNull: false,
            },
            shipping_id: {
                type: Sequelize.INTEGER,
                references: { model: 'addresses', key: 'id' },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL',
                allowNull: false,
            },
            billing_id: {
                type: Sequelize.INTEGER,
                references: { model: 'addresses', key: 'id' },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL',
                allowNull: false,
            },
            fuel_cutoff: {
                type: Sequelize.BOOLEAN,
                defaultValue: false,
                allowNull: false,
            },
            trackers: {
                type: Sequelize.BOOLEAN,
                defaultValue: false,
                allowNull: false,
            },
            fleet_driver: {
                type: Sequelize.BOOLEAN,
                defaultValue: false,
                allowNull: false,
            },
            trackers_purchase: {
                type: Sequelize.INTEGER,
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            updated_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },
        });
    },

    down: queryInterface => {
        return queryInterface.dropTable('orders');
    },
};
