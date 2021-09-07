'use strict';

const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const member = sequelize.define('member', {
    userName: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('now()')
    }
  }, {
    timestamp: false
  });

  return member;
};

