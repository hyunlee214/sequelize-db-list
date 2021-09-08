'use strict';

const fs          = require('fs');
const path        = require('path');
const Sequelize   = require('sequelize');
const Member      = require('./member');
const basename    = path.basename(__filename);
const env         = process.env.NODE_ENV || 'development';
const config      = require(__dirname + '/../config/config.json')[env];
const db          = {};

const sequelize = new Sequelize(config.database, config.userName, config.password, config);


db.sequelize = sequelize;
db.Sequelize = Sequelize;

// models 매핑
Member.init(sequelize);
db.Member     = Member;
db.Product    = require('./product')(sequelize, Sequelize);
db.Testmem    = require('./testmem')(sequelize, Sequelize);

// 관계 설정
db.Member.hasMany(db.Testmem, {
  foreignKey: 'fk_memberid',
  sourceKey: 'id'
});
db.Testmem.belongsTo(db.Member, {
  foreignKey: 'fk_memberid',
  targetKey: 'id'
});
db.Product.hasMany(db.Testmem, {
  foreignKey: 'fk_productid',
  sourceKey: 'id'
});
db.Testmem.belongsTo(db.Product, {
  foreignKey: 'fk_productid',
  targetKey: 'id'
});

module.exports = db;
