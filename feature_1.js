const now = new Date(); // Data de hoje
const past = new Date('2003-06-16'); // Outra data no passado
const diff = Math.abs(now.getTime() - past.getTime()); // Subtrai uma data pela outra
const days = Math.ceil(diff / (1000 * 60 * 60 * 24 * 365.3)); // Divide o total pelo total de milisegundos correspondentes a 1 dia. (1000 milisegundos = 1 segundo).

// Mostra a diferença em dias
console.log(`Entre ${past} até agora já se passaram ` + days + ' dias');