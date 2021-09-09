'use strict';

module.exports = (sequelize, DataTypes) => {
  const testmem = sequelize.define('testmem', {
    memberid: {
      type: DataTypes.INTEGER(),
      allowNull: false
    },
    productid: {
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