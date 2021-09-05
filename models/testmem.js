'use strict';

const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('testmem', {
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
};