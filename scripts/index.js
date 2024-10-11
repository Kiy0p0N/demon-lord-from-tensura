$(document).ready(()=>{

    const title_h1 = {
        rimuru: 'Rimuru Tempest',
        milim: 'Milim Nava',
        guy: 'Guy Crimson',
        valentine: 'Luminous Valentine',
        ramiris: 'Ramiris',
        leon: 'Leon Cromwell',
        dagruel: 'Dagruel',
        dino: 'Dino'
    };

    const subtitle_h2 = {
        rimuru: 'O Criador do Caos',
        milim: 'A Destruidora',
        guy: 'Senhor das Trevas',
        valentine: 'Rainha dos Pesadelos',
        ramiris: 'Fada do Labirinto',
        leon: 'Sabre de Platina',
        dagruel: 'Rei dos Gigantes',
        dino: 'Governante Adormecido'
    };

    const description = {
        rimuru: 'Rimuru Tempest, outrora um humano comum chamado Satoru Mikami, renasceu como um slime após sua morte e tornou-se um dos seres mais poderosos de sua realidade. Fundador e Rei do país dos monstros Tempest na Grande Floresta de Jura, ele é conhecido como o Grande Lorde Demônio e é o mais forte entre os Lordes Demônios das Oito Estrelas. Embora tenha um coração gentil e uma natureza descontraída, Rimuru é ferozmente protetor e implacável contra qualquer ameaça aos seus subordinados e amigos, demonstrando um cuidado profundo por aqueles que lhe são próximos. Inicialmente relutante a assumir grandes responsabilidades, ele evoluiu de um líder cauteloso para um governante calculista e astuto, delegando mais tarefas aos seus subordinados à medida que compreende melhor seu próprio poder e o potencial de sua nação. Mesmo assim, mantém traços de sua antiga vida humana, como um peculiar senso de humor e a incapacidade de recusar pedidos de ajuda, o que o torna um líder respeitado, mas também alguém que valoriza muito as conexões pessoais.',

        milim: 'Milim Nava, conhecida como "Destruidora", é uma das mais antigas e poderosas Lordes Demônios, sendo a segunda Lorde Demônio Verdadeiro da história. Como a única Dragonoid existente, ela possui um poder descomunal, capaz de manipular uma quantidade infinita de Magículas. Apesar de seu imenso poder, Milim tem uma personalidade infantil e irritável, o que a torna imprevisível e perigosa. No entanto, sua simplicidade não deve ser confundida com estupidez; ela é honesta ao extremo e age com franqueza, sem interesse em negociações. Embora sua aparência pequena e juvenil, com longos cabelos prateados e trajes góticos, a faça parecer uma criança, Milim é uma força devastadora em batalha, adornada por um chifre carmesim e uma armadura negra que reflete sua natureza implacável.',

        guy: 'Guy Crimson, também conhecido como o Mediador do Mundo, é um dos mais antigos e poderosos Lordes Demônios, tendo assumido o cargo após exterminar uma nação inteira e se nomear com base nos gritos de suas vítimas. Originalmente um Demônio Progenitor de cor vermelha, Guy foi invocado ao mundo real para destruir uma nação, o que o levou a despertar como Lorde Demônio. Com longos cabelos carmesim e uma presença imponente, ele exibe uma personalidade calma, mas arrogante em relação aos fracos, enviando seus servos para lembrar os humanos do poder superior que ele representa. No entanto, Guy também tem um lado descontraído, especialmente com seus amigos, como Leon e Ramiris, com quem costuma brincar. Ele se tornou um dos maiores governantes do mundo demoníaco e, após um confronto épico com Milim Nava e uma derrota para Veldanava, foi escolhido para manter o equilíbrio de poder entre as nações, consolidando sua posição como uma das entidades mais temidas e respeitadas de sua era.',

        valentine: 'Luminous Valentine é uma das mais antigas e poderosas Lordes Demônios, governando os vampiros e ocupando o quinto assento do Octagrama. Com uma aparência juvenil, cabelos prateados e olhos heterocromáticos, ela costuma se vestir de forma gótica e pode até se disfarçar de empregada para esconder sua identidade. Arrogante em sua posição de poder, Luminous, que foi criada pela Ancestral Divina Twilight Valentine, acabou por destruí-la para tomar o controle dos vampiros. Ela também dividiu o vampiro Valentin em dois, Louis e Roy, para manter a ordem entre seus subordinados. Luminous estabeleceu seu domínio no Sacro Império de Lubelius, governando das sombras, enquanto mantinha suas aparências nos conselhos de Lordes Demônios com a ajuda de Roy. Ao longo dos anos, ela desenvolveu laços profundos de amizade com Chloe e Hinata, protegendo-as em momentos de crise e mantendo sua influência sobre o mundo dos demônios.',

        ramiris: 'Ramiris, uma dos três Lordes Demônios originais, é a Rainha das Fadas reencarnada e considerada a mais fraca entre os Lordes Demônios das Oito Estrelas devido à sua aparência pequena e sua falta de presença intimidadora. Com longos cabelos loiros em rabo de porco e olhos amarelos, ela é tão pequena que poderia descansar em uma flor. Apesar disso, Ramiris desempenha um papel vital ao criar e proteger uma dimensão alternativa, o Labirinto, que serve como um santuário espiritual. Embora sua personalidade seja voluntariosa e descomplicada, o que muitas vezes leva a situações turbulentas, como quando teve um desentendimento com Rimuru, ela acabou se aliando a ele. Juntos, eles transformaram o Labirinto em uma atração para Tempest. Ramiris é, curiosamente, alheia à sua falta de dignidade como Lorde Demônio, mas sua bondade e sinceridade fazem dela uma figura querida entre seus aliados. Mesmo tendo sido uma linda mulher em sua forma adulta, ela retorna à sua forma infantil por milhares de anos.',

        leon: 'Leon Cromwell, também conhecido como o "Demônio Loiro" ou "Lord Platinum Saber", é um dos Lordes Demônios das Oito Estrelas e um Herói Verdadeiro. Com uma aparência marcante de longos cabelos dourados, olhos azuis e uma pele quase translúcida, sua beleza muitas vezes o faz ser confundido com uma mulher. Leon é emocionalmente equilibrado, mantendo uma calma constante e rara demonstração de emoções, preferindo ambientes tranquilos para caminhar, estudar e ler. Embora tenha 300 anos, aparenta ter 24. Mestre em magia de espadas e criocinese, ele possui o título de Demi-Deus após a Grande Guerra Tenma, e é conhecido por evitar laços românticos com homens e escolher cuidadosamente suas parceiras femininas.',

        dagruel: 'Dagrule, conhecido como a "Ira do Continente", é um dos mais poderosos e temidos Lordes Demônios das Oito Estrelas, embora sua personalidade seja normalmente gentil. Com mais de 2 metros de altura e cabelos castanhos, ele se transforma em um gigante de até 10 metros quando enfurecido, liberando um poder devastador. Antigamente, ele era o guardião dos Portais do Paraíso e, apesar de inicialmente rejeitar a Semente do Lorde Demônio, despertou como um verdadeiro Lorde Demônio após presenciar as guerras que dizimaram os gigantes e as fadas. Dagrule esconde sua imensa aura, parecendo um humano comum, e possui habilidades como "Defesa Endurecida", "Destruição de Existência" e "Imunidade Mágica", tornando-o um adversário formidável, especialmente quando sua raiva é despertada.',

        dino: 'Dino, conhecido como o "Sleeping Ruler", é um Anjo Caído e o sexto membro do Octagrama, anteriormente um dos Sete Anjos da Origem. Com uma aparência jovem, que esconde olheiras e um ar sonolento, ele possui cabelos roxo-prateados bagunçados e olhos cinza-azulados. Dino é distintivo por suas seis pares de asas, metade brancas e metade pretas, que mantém ocultas, e costuma vestir uma camisa rosa-púrpura com ombreiras brancas e uma capa verde. Sua personalidade letárgica contrasta com uma preocupação sutil pela imagem pública, resultando em um comportamento desavergonhado e propensão a desviar responsabilidades. No entanto, sua estadia em Tempest despertou um novo comprometimento, especialmente por sua paixão por comida e entretenimento, transformando-o em um pesquisador dedicado. Com um passado que o liga a tragédias e vinganças, como a destruição da nação responsável pela morte de seu mestre Veldanava, Dino passou a viver em um estado de ociosidade até encontrar um novo propósito ao conhecer Rimuru, cuja essência o tocou e trouxe novos significados para sua existência.'
    }

    const image = {
        rimuru: 'images/rimuru/rimuro.jpg',

        milim: 'images/milim/milim.jpeg',

        guy: 'images/guy/guy.jpeg',

        valentine: 'images/valentine/valentine.jpeg',

        ramiris: 'images/ramiris/ramiris.jpeg',

        leon: 'images/leon/leon.jpeg',

        dagruel: 'images/dagruel/dagruel.jpeg',

        dino: 'images/dino/dino.jpeg'
    }

    

    const container = $('.container');
    const h1 = $('.title h1');
    const h2 = $('.title h2');
    const p = $('.description p');
    const img = $('.image img');



    $('.profile').hover(function(){
        const divId = this.id;

        $('#' + divId).mouseenter(()=>{
            container.addClass('lord-demon');
            container.addClass(divId);

            h1.text(title_h1[divId]);
            h2.text(subtitle_h2[divId]);
            p.text(description[divId]);
            img.attr('src', image[divId])

        }).mouseleave(()=>{
            container.removeClass(divId);
            container.removeClass('lord-demon');

            h1.text('Octagrama');
            h2.text('Lordes Demônios das Oito Estrelas');
            p.text('');
            img.attr('src', '');

        })
    });
})