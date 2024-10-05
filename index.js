const name = 'Super Cavaleiro';
const xp = '3750';

const xpBar = [
    { classificacao: 'Ferro', xpMin: 0 },
    { classificacao: 'Bronze', xpMin: 1001 },
    { classificacao: 'Prata', xpMin: 2001 },
    { classificacao: 'Ouro', xpMin: 5001 },
    { classificacao: 'Platina', xpMin: 7001 },
    { classificacao: 'Ascendente', xpMin: 8001 },
    { classificacao: 'Imortal', xpMin: 9001 },
    { classificacao: 'Radiante', xpMin: 10001 },
]

console.log(`O Herói de nome ${name} está no nível ${xpBar.reverse().find(item => item.xpMin <= xp).classificacao}`);