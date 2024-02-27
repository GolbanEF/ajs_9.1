import Magician from './Magician.js';
import Daemon from './Daemon.js';

const pers1 = new Magician('Merlin', 'Magician');
const pers2 = new Daemon('Abaddon', 'Magician');

pers1.distSet(2);
pers2.distSet(4);

console.log(pers1.attacked());
console.log(pers1.stoned());

console.log(pers2.attacked());
console.log(pers2.stoned());