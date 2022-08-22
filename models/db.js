//conexão BD
const Sequelize = require('sequelize');
const sequelize = new Sequelize('postapp', 'appnode', '031182bs', {dialect: 'mysql',host:'localhost',query:{raw:true}});
module.exports = {Sequelize: Sequelize, sequelize: sequelize};
