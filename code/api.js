import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 4000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const IMG_PATH = '/image';  // Path for storing image references

// List of Demon Lords with their details
const DEMON_LORDS = [
    {
        id: 0, 
        name: 'Guy Crimson',
        title: 'Lorde da Escuridão',
        image: `${IMG_PATH}/guy.jpeg`,
        specie: 'Demônio',
        appearance: 'Uma beleza com olhos carmesins profundos que ofuscam a beleza das estrelas, os cabelos fluindo como fogo, com um vermelho mais profundo do que a cor do sangue.'
    },

    {
        id: 1,
        name: 'Milim Nava',
        title: 'Destruidora',
        image: `${IMG_PATH}/milim.jpeg`,
        specie: 'Dragonoid',
        appearance: 'Milim tem o cabelo rosa brilhante amarrado em duas caudas, e baixa estatura, qualquer um a confundiria com uma criança. Ela às vezes usa um vestido preto gótico cobrindo seu corpo. Embora seja uma Dragonoid ela se parece com uma garota humana.'
    },

    {
        id: 2,
        name: 'Ramiris',
        title: 'Fada do Labirinto',
        image: `${IMG_PATH}/ramiris.jpeg`,
        specie: 'Fada',
        appearance: 'Ela é plana e pequena o suficiente para descansar em uma flor. Ela tem cabelo loiro que é feito em rabo de porco e tem olhos amarelos.'
    },

    {
        id: 3,
        name: 'Dagruel',
        title: 'Ira da Terra',
        image: `${IMG_PATH}/dagruel.jpeg`,
        specie: 'Gigantes (Titã)',
        appearance: 'Um homem enorme e robusto, com cabelos azuis escuros. Sua altura ultrapassa os 2 metros de altura, mas quando ele sai com tudo, seu corpo cresce cinco vezes mais, até um gigante de 10 metros de altura.'
    },

    {
        id: 4,
        name: 'Ruminas Valentine',
        title: 'Rainha dos Pesadelos',
        image: `${IMG_PATH}/valentine.jpeg`,
        specie: 'Vampiro',
        appearance: 'Ela é uma linda garota de cabelos prateados. Seus olhos heterocromáticos que brilham em um profundo azul-celeste e vermelho-claro. Este, entre seus muitos recursos notavelmente bonitos, é o mais proeminente. O que mais chama a atenção são dois dentes brancos e puros que atingem o máximo de seus pequenos lábios. Quando seus pequenos lábios se separam, eles revelam um conjunto de presas brancas e puras. Ela é comumente vista usando vestidos góticos, mas parece ter uma propensão para uniformes de empregada também.'
    },

    {
        id: 5,
        name: 'Dino',
        title: 'Governante Adormecido',
        image: `${IMG_PATH}/dino.jpeg`,
        specie: 'Anjo Caído',
        appearance: 'Ele é um homem delicado de cabelos esverdeados. Sua aparência não é diferente de um humano. Embora ele seja um homem bonito, seu olhar sonolento estraga seu apelo.'
    },

    {
        id: 6,
        name: 'Leon Cromwell',
        title: 'Sabre de Platina',
        image: `${IMG_PATH}/leon.jpeg`,
        specie: 'Humano',
        appearance: 'Ele tem longos cabelos dourados platinados, olhos azuis estreitos, rosto bem definido e pele tão branca que é quase transparente. Ele é tão bonito que muitas vezes é confundido com uma mulher.'
    },

    {
        id: 7,
        name: 'Rimuru Tempest',
        title: 'Criador do Caos',
        image: `${IMG_PATH}/rimuru.jpeg`,
        specie: 'Slime',
        appearance: 'Rimuru possui cabelo prateado azulado. Não há características sexuais visíveis; no entanto, ele é frequentemente confundido com uma menina devido ao fato de que a forma original pertencia a Shizue Izawa . Mas quando ele usa a máscara anti-mágica que guardava como lembrança de Shizu, seu padrão de fala também pode fazer com que ele pareça um menino pré-adolescente para os outros.'
    }
];

// Function to get a random Demon Lord
function randomLord(){
    return Math.floor(Math.random() * DEMON_LORDS.length)
}

let demonLord = DEMON_LORDS[0];
let demonId;

// Route to return a random Demon Lord
app.get('/random', (req, res)=>{
    demonLord = DEMON_LORDS[randomLord()];
    demonId = demonLord.id;
    res.json(demonLord);
});

// Route to get the next Demon Lord by ID
app.get('/next/:id', (req, res)=>{
    demonId = parseInt(req.params.id) + 1;

    // If the ID exceeds the list, return the first Demon Lord
    if(demonId === 8){
        res.json(DEMON_LORDS[0]);
    } else{
        res.json(DEMON_LORDS[demonId]);
    }
});

// Route to get the previous Demon Lord by ID
app.get('/previous/:id', (req,res)=>{
    demonId = parseInt(req.params.id) - 1;

    // If the ID goes below zero, return the last Demon Lord
    if(demonId < 0){
        res.json(DEMON_LORDS[7]);
    } else{
        res.json(DEMON_LORDS[demonId]);
    }
});

app.listen(port, ()=>{
    console.log(`Api running on port ${port}`);
});