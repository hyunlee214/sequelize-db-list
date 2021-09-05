'use strict';

module.exports = (sequelize, DataTypes) => {
  const testmem = sequelize.define('testmem', {
    memberId: {
      type: DataTypes.INTEGER(),
      allowNull: false
    },
    productId: {
      type: DataTypes.INTEGER(),
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      default: sequelize.literal('now()')
    }
  }, {
    timestamp: false
  });

  return testmem;
};