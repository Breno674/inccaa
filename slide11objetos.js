const objeto1 = {
    produto: 'Smart TV',
    voltagens: 220,
    potencia: '128w'
};

console.log(objeto1);
console.log(objeto1.produto);

const objeto2 = {
    produto: 'Smart TV',
    voltagens: 220,
    potencia: '128w',
    valor: 3000,
    desconto: 0.3
};

console.log(objeto2.valor - objeto2.valor * objeto2.desconto);
console.log('O valor do produto com desconto é de: '.concat(objeto2.valor - objeto2.valor * objeto2.desconto));

const kittech = {
    kit1:{ 
        kitnome: 'kit ultra',
        specs: {
            cpu: '17',
            ram: '64gb',
            ssd: '1tb'
        }
    },

    kit2:{ 
        kitnome: 'kit nega',
        specs: {
            cpu: '17',
            ram: '16gb',
            ssd: '128tb'
        }
    }
}

console.log(kittech);
console.log(kittech.kit1);
console.log(kittech.kit2);
console.log(kittech.kit2.specs.ssd);