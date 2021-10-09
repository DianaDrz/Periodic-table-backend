'use strict';

const { setTimestampsSeeder } = require('../utils/util');

// Datos de producción
let items = [
  {
    typeElement:'Perteneciente a no metal',
    name: 'Hidrogeno',
    symbolQ:'H',
    atomicNumber:1,
    atomicMass:'1,0',
    image:'/image/1633736282749.jpeg',
    id_category:3,
    id_group:1,
    id_period:1
  },  
  {
    typeElement:'Perteneciente a metales alcalinos',
    name: 'Litio',
    symbolQ:'Li',
    atomicNumber:3,
    atomicMass:'6,9',
    image:'/image/1633736350279.jpeg',
    id_category:7,
    id_group:1,
    id_period:2
  },
  {
    typeElement:'Perteneciente a los metal alcalinos',
    name: 'Sodio',
    symbolQ:'Na',
    atomicNumber:11,
    atomicMass:'23,0',
    image:'',
    id_category:7,
    id_group:1,
    id_period:3
  },
  {
    typeElement:'Perteneciente a los metales alcalinos',
    name: 'Potasio',
    symbolQ:'k',
    atomicNumber:19,
    atomicMass:'39,1',
    image:'',
    id_category:7,
    id_group: 1,
    id_period:4
  },
  {
    typeElement:'Perteneciente a los metales alcalinos',
    name: 'Rubidio',
    symbolQ:'Rb',
    atomicNumber:37,
    atomicMass:'85,5',
    image:'',
    id_category:7,
    id_group: 1,
    id_period:5
  },
  {
    typeElement:'Perteneciente a los metales alcalinos',
    name: 'Cesio',
    symbolQ:'Cs',
    atomicNumber:55,
    atomicMass:'132,9',
    image:'',
    id_category:7,
    id_group: 1,
    id_period:6
  },
  {
    typeElement:'Perteneciente a los metales alcalinos',
    name: 'Francio',
    symbolQ:'Fr',
    atomicNumber:87,
    atomicMass:'233',
    image:'',
    id_category:7,
    id_group: 1,
    id_period:7
  },
  {
    typeElement:'Perteneciente a los alcalinoterreos',
    name: 'Berilio',
    symbolQ:'Be',
    atomicNumber:4,
    atomicMass:'9,0',
    image:'',
    id_category:6,
    id_group: 2,
    id_period:2
  },
  {
    typeElement:'Perteneciente a los alcalinoterreos',
    name: 'Magnesio',
    symbolQ:'Mg',
    atomicNumber:12,
    atomicMass:'24,3',
    image:'',
    id_category:6,
    id_group: 2,
    id_period:3
  },
  {
    typeElement:'Perteneciente a los alcalinoterreos',
    name: 'Calsio',
    symbolQ:'Ca',
    atomicNumber:20,
    atomicMass:'40,1',
    image:'',
    id_category:6,
    id_group: 2,
    id_period:4
  },
  {
    typeElement:'Perteneciente a los alcalinoterreos',
    name: 'Estroncio',
    symbolQ:'Sr',
    atomicNumber:38,
    atomicMass:'87,6',
    image:'',
    id_category:6,
    id_group: 2,
    id_period:5
  },
  {
    typeElement:'Perteneciente a los alcalinoterreos',
    name: 'Bario',
    symbolQ:'Ba',
    atomicNumber:56,
    atomicMass:'137,3',
    image:'',
    id_category:6,
    id_group: 2,
    id_period:6
  },  
  {
    typeElement:'Perteneciente a los alcalinoterreos',
    name: 'Radio',
    symbolQ:'Ra',
    atomicNumber:88,
    atomicMass:'266',
    image:'',
    id_category:6,
    id_group: 2,
    id_period:7
  },
  {
    typeElement:'Perteneciente metales de transicion',
    name: 'Escandio',
    symbolQ:'SC',
    atomicNumber:21,
    atomicMass:'45,0',
    image:'',
    id_category:5,
    id_group: 3,
    id_period:4
  },
  {
    typeElement:'Perteneciente metales de transicion',
    name: 'Itrio',
    symbolQ:'Y',
    atomicNumber:39,
    atomicMass:'88,9',
    image:'',
    id_category:5,
    id_group: 3,
    id_period:5
  },
  {
    typeElement:'Perteneciente metales de transicion',
    name: 'Lutencio',
    symbolQ:'Lu',
    atomicNumber:71,
    atomicMass:'175,0',
    image:'',
    id_category:5,
    id_group: 3,
    id_period:6
  },
  {
    typeElement:'Perteneciente metales de transicion',
    name: 'Lurencio',
    symbolQ:'Lr',
    atomicNumber:103,
    atomicMass:'262',
    image:'',
    id_category:5,
    id_group: 3,
    id_period:7
  },
  {
    typeElement:'Perteneciente metales de transicion',
    name: 'Titanio',
    symbolQ:'Ti',
    atomicNumber:22,
    atomicMass:'47,9',
    image:'',
    id_category:5,
    id_group: 4,
    id_period:4
  },
  {
    typeElement:'Perteneciente metales de transicion',
    name: 'Circonio',
    symbolQ:'Zr',
    atomicNumber:40,
    atomicMass:'91,2',
    image:'',
    id_category:5,
    id_group: 4,
    id_period:5
  },
  {
    typeElement:'Perteneciente metales de transicion',
    name: 'Vanadio',
    symbolQ:'V',
    atomicNumber:23,
    atomicMass:'50,9',
    image:'',
    id_category:5,
    id_group: 5,
    id_period:4
  },
  {
    typeElement:'Perteneciente metales de transicion',
    name: 'Niobio',
    symbolQ:'Nb',
    atomicNumber:41,
    atomicMass:'92,9',
    image:'',
    id_category:5,
    id_group: 5,
    id_period:5
  },
  {
    typeElement:'Perteneciente metales de transicion',
    name: 'Cromo',
    symbolQ:'Cr',
    atomicNumber:24,
    atomicMass:'52,0',
    image:'',
    id_category:5,
    id_group: 6,
    id_period:4
  },
  {
    typeElement:'Perteneciente metales de transicion',
    name: 'Molibdeno',
    symbolQ:'Mo',
    atomicNumber:42,
    atomicMass:'95,9',
    image:'',
    id_category:5,
    id_group: 6,
    id_period:5
  },
  {
    typeElement:'Perteneciente metales de transicion',
    name: 'Manganeso',
    symbolQ:'Mn',
    atomicNumber:25,
    atomicMass:'54,9',
    image:'',
    id_category:5,
    id_group: 7,
    id_period:4
  },
  {
    typeElement:'Perteneciente metales de transicion',
    name: 'Tecnecio',
    symbolQ:'Tc',
    atomicNumber:42,
    atomicMass:'99',
    image:'',
    id_category:5,
    id_group: 7,
    id_period:5
  },
  {
    typeElement:'Perteneciente metales de transicion',
    name: 'Hierro',
    symbolQ:'Fe',
    atomicNumber:26,
    atomicMass:'55,8',
    image:'',
    id_category:5,
    id_group: 8,
    id_period:4
  },
  {
    typeElement:'Perteneciente metales de transicion',
    name: 'Rutenio',
    symbolQ:'Ru',
    atomicNumber:44,
    atomicMass:'101,1',
    image:'',
    id_category:5,
    id_group: 8,
    id_period:5
  },
  {
    typeElement:'Perteneciente metales de transicion',
    name: 'Cobalto',
    symbolQ:'Co',
    atomicNumber:27,
    atomicMass:'58,9',
    image:'',
    id_category:5,
    id_group: 9,
    id_period:4
  },
  {
    typeElement:'Perteneciente metales de transicion',
    name: 'Rodio',
    symbolQ:'Rh',
    atomicNumber:45,
    atomicMass:'102,9',
    image:'',
    id_category:5,
    id_group: 9,
    id_period:5
  },
  {
    typeElement:'Perteneciente metales de transicion',
    name: 'Niquel',
    symbolQ:'Ni',
    atomicNumber:28,
    atomicMass:'58,7',
    image:'',
    id_category:5,
    id_group: 10,
    id_period:4
  },
  {
    typeElement:'Perteneciente metales de transicion',
    name: 'Paladio',
    symbolQ:'Pd',
    atomicNumber:46,
    atomicMass:'106,4',
    image:'',
    id_category:5,
    id_group: 10,
    id_period:5
  },
  {
    typeElement:'Perteneciente metales de transicion',
    name: 'Cobre',
    symbolQ:'Cu',
    atomicNumber:29,
    atomicMass:'63,5',
    image:'',
    id_category:5,
    id_group: 11,
    id_period:4
  },
  {
    typeElement:'Perteneciente metales de transicion',
    name: 'Plata',
    symbolQ:'Ag',
    atomicNumber:47,
    atomicMass:'107,9',
    image:'',
    id_category:5,
    id_group: 11,
    id_period:5
  },
  {
    typeElement:'Perteneciente metales de transicion',
    name: 'Cinc',
    symbolQ:'Zn',
    atomicNumber:30,
    atomicMass:'65,4',
    image:'',
    id_category:5,
    id_group: 12,
    id_period:4
  },
  {
    typeElement:'Perteneciente metales de transicion',
    name: 'Cadmio',
    symbolQ:'Cd',
    atomicNumber:48,
    atomicMass:'112,4',
    image:'',
    id_category:5,
    id_group: 12,
    id_period:5
  },
];


// Asignando datos de log y timestamps a los datos
items = setTimestampsSeeder(items);

module.exports = {
  up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('elements', items, {});
  },

  down (queryInterface, Sequelize) { }
};
