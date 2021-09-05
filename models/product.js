'use strict';

module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define('product', {
    productName: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    category: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    price: {
      type: DataTypes.INTEGER(),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('now()')
    }
  }, {
    timestamp: false
  });
  
  return product;
};