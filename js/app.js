/* ==============================================================
   GUARDIÃS DOS SABERES — JAVASCRIPT PURO
   Este arquivo guarda os dados editáveis e as interações do site.
   Não é necessário React, Node.js ou Python para utilizá-lo.
================================================================ */

/* ==============================================================
   1. PLANTAS DO CATÁLOGO — ADICIONE UMA NOVA PLANTA AQUI
   Copie um objeto inteiro, cole antes do ] final e altere os dados.

   Campos:
   - id: texto único, sem espaços nem acentos; ex.: "hortela".
   - image: imagem dentro da pasta assets/.
   - audioSrc: nome/caminho do arquivo MP3; deixe null se ainda não houver áudio.
   - guardianName: nome autorizado da guardiã; deixe null enquanto estiver pendente.
================================================================ */
const PLANTS = [
  


  {
    id: "babosa",
    name: "Babosa",
    scientific: "Ruta graveolens",
    family: "Lamiaceae",
    category: "Aromáticas",
    image: "assets/guardias-babosa.jpeg",
    description: "A babosa, mundialmente conhecida pelo seu nome científico Aloe vera, se tornou uma das espécies medicinais e cosméticas mais populares do mundo devido ao gel viscoso e transparente contido no interior de suas folhas. Para que Serve? 1. Hidratação Profunda do CabeloO gel da babosa é rico em água, vitaminas (A, C, E, B1, B2, B3, B6), minerais e aminoácidos, servindo como um dos melhores tratamentos capilares naturais:Super-hidratação: Penetra profundamente na fibra capilar, devolvendo a umidade, o brilho e a maciez aos fios ressecados.Crescimento Saudável: Limpa e desobstrui os folículos capilares do couro cabeludo, auxiliando no combate à queda e estimulando o crescimento do cabelo.Combate à Caspa: Possui propriedades antifúngicas que ajudam a tratar a descamação e acalmam a coceira no couro cabeludo. 2. Cicatrização e Regeneração da PeleO gel acelera o processo de cura da derme devido às suas propriedades anti-inflamatórias, anestésicas e estimulantes de colágeno:Cicatrizante Potente: Serve para fechar e regenerar cortes, arranhões, feridas leves e picadas de insetos de forma rápida.Alívio de Queimaduras: É o remédio natural mais famoso para tratar queimaduras de sol ou térmicas leves, pois resfria a pele instantaneamente, reduz a dor e evita a descamação.Pós-barba e Depilação: Acalma a pele irritada, reduz a vermelhidão e previne infecções nos poros.",
    statusTone: "warm",
    uses: "Proteção e cuidado — relato cultural",
    audioSrc: null,
    guardianName: "Dona Dalva",
  },


   {
    id: "cardo-mariano ",
    name: "Cardo Mariano",
    scientific: "Silybum marianum",
    family: "Lamiaceae",
    category: "Aromáticas",
    image: "assets/guardias-cardo- mariano.jpeg",
    description: "O cardo-mariano, também chamado de cardo-de-leite, é uma planta medicinal famosa mundialmente por seu potente efeito protetor do fígado. Para que Serve? (Foco no Fígado e Vesícula) Proteção e Regeneração do Fígado: É amplamente utilizado como tratamento complementar para gordura no fígado (esteatose hepática), cirrose, hepatite e icterícia, ajudando a renovar as células hepáticas.  Proteção e Regeneração do Fígado: É amplamente utilizado como tratamento complementar para gordura no fígado (esteatose hepática), cirrose, hepatite e icterícia, ajudando a renovar as células hepáticas  Melhora da Digestão de Gorduras: Estimula a produção de bile, facilitando a digestão e aliviando a sensação de estômago pesado após refeições muito gordurosas. Efeito Desintoxicante: Auxilia o corpo a eliminar toxinas e ajuda a aliviar os sintomas da ressaca alcoólica Cardo Mariano - Serve para tratar gastrite MODO DE PREPARO (chá feito das sementes): 1-Separe as sementes que serão utilizadas. 2-Quebre as sementes. 3-Coloque-as em um recipiente com um pouco de água. 4-Leve ao fogo e deixe ferver. 5-Após a fervura, desligue o fogo. 6-Tampe o recipiente e deixe a preparação abafada.",
    statusTone: "warm",
    uses: "Proteção e cuidado — relato cultural",
    audioSrc: null,
    guardianName: "Dona Dalva",
  },



  {
    id: "capim-santo",
    name: "Capim-santo",
    scientific: "Cymbopogon citratus",
    family: "Poaceae",
    category: "Aromáticas",
    image: "assets/guardia-campim-limao.jpeg",
    description: "O capim-santo ou capim-limão, também muito conhecido como capim-cidreira ou chá-de-estrada, é uma planta medicinal perene nativa da Ásia (Índia), mas totalmente integrada à cultura e aos quintais do Brasil. Ele se destaca tanto por suas propriedades terapêuticas quanto por sua importância histórica na culinária e subsistência. Para que Serve? 1. Poderoso Calmante NaturalO chá de capim-santo é rico em compostos que atuam diretamente no sistema nervoso central, servindo como um sedativo leve, relaxante muscular e ansiolítico natural. É um dos remédios caseiros mais utilizados para combater o estresse, a ansiedade, a agitação nervosa e a insônia, ajudando a induzir um sono tranquilo. 2. Outros Benefícios à SaúdeAção Digestiva: Alivia cólicas estomacais, gases e dores de estômago.Efeito Diurético: Ajuda a combater a retenção de líquidos e a desinchar o corpo.Alívio de Dores: Possui propriedades analgésicas que auxiliam na redução de dores de cabeça e dores musculares. MODO DE PREPARO 1. Coloque as folhas em 3 copos de água. 2. Leve ao fogo e ferva. 3. Acrescente um pouco de açúcar. 4. Retire do fogo. 5. Abafe imediatamente. 6. Tome ainda morno.",
    status: "Identificação conferida",
    statusTone: "green",
    uses: "Bem-estar — relato cultural",
    audioSrc: "assets/audio-capim-limao.mp3",
    guardianName: "Severina",
  },


  {
    id: "mastruz",
    name: "Mastruz",
    scientific: "Dysphania ambrosioides",
    family: "Amaranthaceae",
    category: "Nativas e cultivadas",
    image: "assets/guardias-matruz.jpeg",
    description: "O mastruz, amplamente conhecido também como erva-de-santa-maria ou mentruz, é uma planta medicinal altamente valorizada no Brasil. Ela integra a listagem de plantas de interesse do Sistema Único de Saúde (RENISUS) devido à sua comprovada eficiência terapêutica. Para que Serve?  1. Alívio de Problemas EstomacaisO chá das folhas estimula a liberação de sucos gástricos, servindo para melhorar a má digestão. Ajuda a aliviar sintomas incômodos como azia, dores de estômago, gases e o inchaço abdominal após refeições pesadas.Nota tradicional: Também é historicamente um dos mais potentes vermífugos naturais contra parasitas intestinais 2. Cicatrização de Feridas e MachucadosO mastruz possui compostos antimicrobianos e antioxidantes que agem de forma tópica. Na forma de cataplasma (folhas amassadas aplicadas na pele), ele acelera a cicatrização de cortes, feridas abertas superficiais, arranhões e pequenas queimaduras, além de evitar infecções por fungos ou bactérias no ferimento. MODO DE PREPARO Para uso externo 1-Lave bem as folhas. 2-Amasse ou triture até formar uma pasta. 3-Aplique a preparação sobre a região desejada. 4-Deixe agir por alguns minutos e em seguida lave a região. Como bebida 1-Lave bem as folhas de mastruz. 2-Coloque-as no liquidificador com um pouco de água ou leite. 3-Bata até triturar bem. 4-Coe, se preferir, e consuma a bebida.",
    status: "Relato autorizado",
    statusTone: "clay",
    uses: "Memória e território — relato cultural",
    audioSrc: null,
    guardianName:"Dona Dalva",
  },

  {
    id: "boldo",
    name: "Boldo",
    scientific: "Ruta graveolens",
    family: "Lamiaceae",
    category: "Aromáticas",
    image: "assets/guardias-boldo.jpeg",
    description: "O boldo (com destaque para o boldo-brasileiro ou boldo-da-terra, Plectranthus barbatus, e o boldo-do-chile, Peumus boldus) é uma das plantas medicinais mais populares do Brasil, amplamente utilizada para o alívio de distúrbios digestivos e hepáticos  Para que Serve? Melhora a Digestão: Estimula a produção e a liberação de bile pelo fígado, ajudando a digerir gorduras e combater a sensação de estômago pesados. Proteção do Fígado: Auxilia na recuperação e na proteção das células hepáticas, sendo muito indicado na medicina popular para o alívio de ressacas e excessos alimentares Alívio de Gases e Cólicas: Atua como um antiespasmódico leve que relaxa o trato gastrointestinal, diminuindo cólicas intestinais e flatulências. MODO DE PREPARO 1-Separe e lave as folhas de boldo. 2-Coloque as folhas em uma panela com água. 3-Leve ao fogo e deixe ferver por aproximadamente 5 minutos. 4-Desligue o fogo e espere amornar. 5-Coe e tome morno.",
    status: "Ficha em revisão",
    statusTone: "warm",
    uses: "Proteção e cuidado — relato cultural",
    audioSrc: null,
    guardianName: "Dona Dalva",
  },

  {
    id: "alho-roxo",
    name: "Alho roxo",
    scientific: "Allium sativum",
    family: "Allium sativum",
    category: "Aromáticas",
    image: "assets/guardias-alho-roxo.jpeg",
    description: "O alho-roxo é uma variedade de alho amplamente cultivada no Brasil, famosa por sua casca de tom arroxeado e por possuir uma alta concentração de alicina, o composto ativo responsável por suas potentes propriedades medicinais e pelo sabor marcante. Para que Serve? 1. Combate a Gripes e ResfriadosO alho-roxo é rico em alicina, que possui forte ação antiviral e antibacteriana. O seu consumo ajuda a combater diretamente os vírus causadores da gripe e do resfriado comum, reduzindo o tempo de duração da doença e fortalecendo o sistema imunológico para evitar novas infecções. 2. Alívio de Infecções RespiratóriasAtua como um excelente expectorante natural, ajudando a fluidificar e eliminar o muco ou catarro preso nos pulmões e brônquios. É altamente eficaz para aliviar os sintomas de bronquite, asma, sinusite e tosses persistentes, além de reduzir a inflamação nas vias aéreas.3. Saúde Cardiovascular (Ação Adicional)Além do sistema respiratório, o alho-roxo serve para ajudar a controlar a pressão alta e reduzir o colesterol ruim (LDL), pois relaxa os vasos sanguíneos e melhora a circulação do sangue. MODO DE PREPARO 1. Ferva as folhas junto com as raízes em pouca água. 2. Acrescente 1 colher de açúcar. 3. Tampe o recipiente. 4. Deixe o chá descansar por algumas horas. 5. Tome 3 vezes ao dia.",
    status: "Ficha em revisão",
    statusTone: "warm",
    uses: "Proteção e cuidado — relato cultural",
    audioSrc: null,
    guardianName: "Maria",
  },


  {
    id: "penicilina",
    name: "Penicilina",
    scientific: " Alternanthera brasiliana",
    family: "Amaranthaceae",
    category: "Aromáticas",
    image: "assets/guardias-penicilina.jpeg",
    description: "A penicilina-vegetal também chamada de terramicina, erva-doril ou perpétua-do-mato, é uma planta medicinal rústica e nativa do Brasil. Ela recebe esses nomes populares porque seus usos tradicionais lembram o famoso antibiótico farmacêutico, embora não contenha a substância penicilina de laboratório. Para que Serve? 1. Ação Anti-inflamatória e AntimicrobianaInfecções Respiratórias: O chá de suas folhas ajuda a desinflamar o sistema respiratório, aliviando tosses, sintomas de gripes, resfriados e bronquite.Garganta e Boca: Utilizado em forma de gargarejo, ajuda a tratar amigdalite, dores de garganta, aftas e inflamações na gengiva. 2. Ação Analgésica (Alívio de Dores) Atua no sistema nervoso atenuando dores musculares, dores de cabeça, dores articulares e cólicas menstruais.3. Ação Cicatrizante e Protetora da PeleUsada externamente em compressas ou banhos, ela acelera a regeneração dos tecidos, ajudando a fechar feridas leves, cortes, arranhões e pequenas queimaduras, além de prevenir infecções na pele.",
    status: "Ficha em revisão",
    statusTone: "warm",
    uses: "Proteção e cuidado — relato cultural",
    audioSrc: null,
    guardianName: "Nome",
  },


  {
    id: "malva-do-reino",
    name: "Malva do reino ",
    scientific: " Plectranthus amboinicus.",
    family: "Lamiaceae",
    category: "Aromáticas",
    image: "assets/guardias-malva-reino.jpeg",
    description: "A Plectranthus amboinicus (malva-do-reino) é uma planta herbácea perene famosa por seu aroma intenso (que lembra uma mistura de hortelã e orégano) e por suas folhas carnudas e aveludadas.  A malva-do-reino é uma das plantas medicinais mais utilizadas no Brasil, além de ter uso culinário. Suas principais aplicações são: 1. Saúde Respiratória (Uso Principal)Combate à tosse e rouquidão: É excelente para aliviar pigarros, tosse seca ou com catarro. É a base do famoso lambedor (xarope caseiro).Alívio de bronquite e asma: Suas propriedades broncodilatadoras ajudam a abrir as vias aéreas e facilitam a respiração.Dores de garganta: O gargarejo com o chá morno ajuda a desinflamar a garganta e a combater infecções na boca (como aftas). 2. Ação Digestiva e AntimicrobianaProblemas estomacais: Ajuda a aliviar gases, cólicas intestinais e má digestão.Efeito antibacteriano: Seus óleos essenciais (como o carvacrol) ajudam a combater fungos e bactérias.   MODO DE PREPARO - 1. Ferva algumas folhas em pouca água.2. Desligue o fogo. 3. Abafe o chá. 4. Com a folha ainda morna, esprema para retirar o sumo. 5. Tome durante o dia. Para lambedor: podem ser acrescentadas folhas de algodão, vick e hortelã.",
    status: "Ficha em revisão",
    statusTone: "warm",
    uses: "Proteção e cuidado — relato cultural",
    audioSrc: null,
    guardianName: "Nome",
  },


  

  {
    id: "feijão-guandu",
    name: "Feijão Guandu ",
    scientific: "Cajanus cajan.",
    family: " Fabaceae",
    category: "Aromáticas",
    image: "assets/guardias-feijao-guandu.jpeg",
    description: "O feijão-guandu também conhecido como andu, feijão-de-corda ou guando, é uma leguminosa muito resistente e nutritiva. Embora seus grãos sejam amplamente consumidos na alimentação, as suas folhas e brotos são utilizados na medicina tradicional para tratar distúrbios do trato digestivo. Para que Serve? 1. Combate à Diarreia e ao Vômito (Ação Adstringente)As folhas são ricas em taninos, substâncias que têm efeito adstringente no sistema digestivo. Elas servem para amarrar o intestino, diminuindo drasticamente as contrações intestinais e reduzindo a evacuação líquida (diarreia).Ajuda a acalmar os reflexos estomacais, auxiliando na interrupção dos episódios de vômito e náusea. 2. Alívio da Dor no Estômago e CólicasPossui propriedades anti-inflamatórias e antiespasmódicas. O chá relaxa os músculos do estômago e dos intestinos, servindo para aliviar as dores agudas, pontadas, queimações e cólicas causadas pela infecção. MODO DE PREPARO 1. Coloque as folhas em 1 litro de água. 2. Leve ao fogo.3. Deixe ferver bastante, até que metade da água evapore.4. Desligue o fogo. 5. Abafe",
    statusTone: "warm",
    uses: "Proteção e cuidado — relato cultural",
    audioSrc: null,
    guardianName: "Nome",
  },


  {
    id: "cana-do-brejo",
    name: "Cana do Brejo",
    scientific: "Costus spicatus",
    family: " Fabaceae",
    category: "Aromáticas",
    image: "assets/guardias-cana-brejo.jpeg",
    description: "A cana-do-brejo (cujo nome científico principal é Costus spicatus ou Costus scaber) é uma planta medicinal nativa do Brasil, muito comum em áreas úmidas, brejos e margens de rios. Ela é amplamente reconhecida na medicina tradicional devido às suas potentes propriedades terapêuticas para o sistema urinário e muscular.  Para que Serve? Como indicado popularmente, a cana-do-brejo destaca-se por sua forte ação diurética, anti-inflamatória e analgésica:1. Efeito Diurético e Saúde Urinária (Uso Principal)Combate Infecções: Ela estimula o funcionamento dos rins, aumentando a produção de urina. Isso ajuda a lavar o canal urinário, eliminando bactérias e auxiliando no tratamento de infecção urinária, cistite e uretrite.Prevenção de Pedras nos Rins: Por aumentar o fluxo urinário, ela ajuda a evitar a cristalização de minerais, auxiliando na eliminação de microcálculos (areia) nos rins.2. Alívio de Dores Reumáticas e Musculares (Ação Analgésica)O chá feito com suas folhas ou talos possui propriedades analgésicas que atuam diretamente no alívio de dores crônicas ou agudas. É muito utilizado para atenuar as dores do reumatismo, artrite, dores na coluna e fadiga muscular após esforços físicos intensos.",
    status: "Ficha em revisão",
    statusTone: "warm",
    uses: "Proteção e cuidado — relato cultural",
    audioSrc: null,
    guardianName: "Nome",
  },
  

   {
    id: "pariri",
    name: "Pariri",
    scientific: "Cajanus cajan.",
    family: " Fabaceae",
    category: "Aromáticas",
    image: "assets/guardias-pariri.jpeg",
    description: "O pariri (Arrabidaea chica ou Fridericia chica) é uma trepadeira arbustiva nativa da região amazônica e da Mata Atlântica. Ela é muito famosa na medicina popular porque suas folhas, após serem fervidas, soltam uma coloração vermelho-escura muito característica. Para que Serve? Combate à Anemia: O pariri serve para tratar e prevenir a anemia porque suas folhas são altamente ricas em ferro assimilável, estimulando a produção de glóbulos vermelhos e aumentando a hemoglobina no sangue MODO DE PREPARO  1. Coloque as folhas em 1 litro de água. 2. Ferva. 3. Retire do fogo. 4. Guarde em temperatura ambiente. 5. Tome o chá durante o dia",
    status: "Ficha em revisão",
    statusTone: "warm",
    uses: "Proteção e cuidado — relato cultural",
    audioSrc: null,
    guardianName: "Nome",
  },
  

  {
    id: "erva-cidreira",
    name: "Erva cidreira",
    scientific: "Cajanus cajan.",
    family: " Fabaceae",
    category: "Aromáticas",
    image: "assets/guardias-erva.jpeg",
    description: "A erva-cidreira (Melissa officinalis) é uma planta herbácea e medicinal de origem europeia, pertencente à mesma família da hortelã. Ela se destaca como um arbusto pequeno e ramificado, que cresce em formato de touceiras e atinge entre 30 e 80 centímetros de altura. Para que Serve? 1. Poderoso Calmante Natural Reduz a Ansiedade e o Estresse: Os compostos ativos da erva-cidreira (como o ácido rosmarínico) atuam no sistema nervoso central aumentando a sensação de relaxamento. Ela serve para acalmar a mente, diminuir a agitação e aliviar a tensão nervosa.Combate a Insônia: Tomado antes de dormir, o chá funciona como um sedativo suave, induzindo o sono de forma natural e melhorando a qualidade do descanso noturno.2. Controla a Pressão Arterial e o CoraçãoAção Hipotensora: A planta ajuda a promover o relaxamento dos vasos sanguíneos (vasodilatação). Esse efeito reduz a resistência das artérias, servindo para controlar e baixar a pressão alta de forma suave.Alivia Palpitações: Por sua ação calmante, ela é ideal para estabilizar os batimentos cardíacos e controlar a taquicardia ou palpitações causadas por crises de ansiedade, sustos ou estresse.",
    status: "Ficha em revisão",
    statusTone: "warm",
    uses: "Proteção e cuidado — relato cultural",
    audioSrc: null,
    guardianName: "Nome",
  },
  
  
  {
    id: "coentro-de-caboclo",
    name: "Coentro-de-caboclo",
    scientific: "Eryngium foetidum.",
    family: "Apiaceae",
    category: "Aromáticas",
    image: "assets/guardias-coentro.jpeg",
    description: "O coentro-de-caboclo, também conhecido como chicória-do-pará, coentro-bravo, coentrão ou coentro-largo, é uma planta medicinal e condimentar nativa das Américas Tropicais. Ela é muito famosa na culinária da Região Norte e Nordeste do Brasil (essencial em pratos como o tacacá) e muito valorizada por suas propriedades terapêuticas cardiovasculares Para que Serve? 1. Auxílio no Controle da Pressão AltaAs folhas do coentro-de-caboclo possuem propriedades terapêuticas fundamentais para a hipertensão:Efeito Diurético: Estimula o funcionamento dos rins a eliminarem o excesso de líquidos e toxinas acumulados no corpo. Ao urinar mais, o volume de sangue circulante diminui, o que gera uma redução natural na pressão sobre as artérias Rico em Potássio: Ajuda o organismo a expelir o excesso de sódio pela urina. O potássio também atua promovendo o relaxamento e o tônus dos vasos sanguíneos (vasodilatação), facilitando a circulação do sangue. 2. Ação Anti-inflamatória e Analgésica (Outros Usos) Na medicina popular, o chá de suas folhas ou raízes é muito utilizado para acalmar dores musculares, dores de estômago, febres, tosses e cólicas. ",
    status: "Ficha em revisão",
    statusTone: "warm",
    uses: "Proteção e cuidado — relato cultural",
    audioSrc: null,
    guardianName: "Nome",
  },


  {
    id: "folha-grossa",
    name: "Folha grossa/ Quitéria/ Folha da fortuna",
    scientific: "Kalanchoe pinnata",
    family: "Lamiaceae",
    category: "Aromáticas",
    image: "assets/guardias-folha-grossa.jpeg",
    description: "A folha-da-fortuna, também conhecida popularmente como folha-grossa, quitéria, saião ou coirama, é uma planta suculenta e medicinal nativa de Madagascar, mas que se espalhou pelo mundo e hoje é extremamente comum nos quintais e na medicina popular do Brasil. Para que Serve? (Ação Estomacal e Digestiva) Combate a Azia, Gastrite e Úlceras: O sumo ou o chá dessa planta ajuda a reduzir a acidez excessiva do estômago. Ela atua como um escudo, acalmando a queimação e auxiliando na regeneração e cicatrização da mucosa gástrica lesionada.Alívio de Dores e Espasmos: Serve para aliviar dores de estômago, pontadas e cólicas intestinais causadas por má digestão ou excesso de gases.Ação Antibacteriana: Ajuda a combater o crescimento de microrganismos nocivos no sistema digestivo, protegendo a flora intestinal.   Modo de preparo: 1-Separe as folhas que serão utilizadas.2-Coloque as folhas no liquidificador. 3-Acrescente um pouco de água. 4-Bata até triturar bem as folhas 5-Coe a preparação. 6-Beba ao longo do dia",
    statusTone: "warm",
    uses: "Proteção e cuidado — relato cultural",
    audioSrc: "assets/audio-folha-grossa.mp3",
    guardianName: "Dona Dalva",
  },

  {
    id: "manjericão",
    name: "Manjericão",
    scientific: "Ocimum basilicum",
    family: "Lamiaceae",
    category: "Aromáticas",
    image: "assets/guardias-manjericao.jpg",
    description: "O manjericão é uma planta aromática originária da Ásia, famosa por seu perfume marcante e sabor fresco. Ele serve tanto como um tempero essencial na culinária quanto como um remédio natural na medicina caseira. Na Saúde (Propriedades Medicinais) Digestão: O chá das folhas alivia gases, cólicas, azia e má digestão. Imunidade e Inflamação: Rico em antioxidantes, ajuda a proteger o corpo contra doenças e reduz inflamações. Calmante Natural: Ajuda a reduzir o estresse, a ansiedade e melhora a qualidade do sono.  MODO DE PREPARO 1. Coloque 2 copos de água em uma panela. 2. Leve ao fogo e deixe ferver. 3. Em uma jarra, de preferência de vidro, coloque os galhos com as folhas. 4. Despeje a água quente sobre as folhas. 5. Abafe a preparação.",
    statusTone: "warm",
    uses: "Proteção e cuidado — relato cultural",
    audioSrc: "assets/audio-manjericao.mp3",
    guardianName: "Maria de Jesus",
  },

  

  {
    id: "jardineira",
    name: "Jardineira",
    scientific: "Ruta graveolens",
    family: "Lamiaceae",
    category: "Aromáticas",
    image: "assets/guardias-jardineira.jpeg",
    description: "O banho com as folhas da jardineira (Alpinia zerumbet) é um remédio caseiro muito tradicional na cultura popular para tratar crianças com gripe, sarampo ou catapora. Veja como ele atua em cada caso:Para Criança Gripada (Expectorante e Relaxante): O banho morno com as folhas serve como um excelente descongestionante natural. O vapor liberado pelas folhas aromáticas ajuda a fluidificar o catarro, desentupir o nariz, aliviar a tosse e relaxar o corpo da criança para que ela durma melhor.Para Sarampo e Catapora (Alívio Cutâneo): O banho serve para acalmar a coceira intensa, diminuir a irritação da pele e baixar o desconforto térmico causado pelas brotoejas e feridas. Suas propriedades analgésicas e anti-inflamatórias trazem um alívio imediato para o bem-estar do pequeno.",
    statusTone: "warm",
    uses: "Proteção e cuidado — relato cultural",
    audioSrc: null,
    guardianName: "Dona Dalva",
  },


  {
    id: "goiabeira",
    name: "Goiabeira",
    scientific: "Ruta graveolens",
    family: "Lamiaceae",
    category: "Aromáticas",
    image: "assets/guardias-goiabeira.jpeg",
    description: "O chá da folha da goiabeira (Psidium guajava) é um dos remédios caseiros mais eficientes e cientificamente comprovados para o tratamento da diarreia. Para que Serve o Chá da Folha?O uso principal e mais famoso deste chá é o combate à diarreia aguda, mas ele possui outras propriedades medicinais importantes: 1. Combate Eficaz à DiarreiaAs folhas da goiabeira contêm uma alta concentração de taninos (substâncias adstringentes) e compostos que atuam diretamente no intestino:Diminui os movimentos intestinais: Ele reduz as contrações do intestino (peristaltismo), diminuindo a frequência das idas ao banheiro.Ação antimicrobiana: Ajuda a combater as bactérias e microrganismos que frequentemente causam a infecção intestinal e a diarreia.Retenção de líquidos: Ajuda o intestino a absorver melhor a água, tornando as fezes menos líquidas. 2. Ação Antisséptica e CicatrizanteSaúde Bucal: O chá serve como enxaguante bucal para tratar aftas, gengivite, inflamações na garganta e combater o mau hálito.Uso na Pele: Pode ser usado topicamente para ajudar a cicatrizar feridas leves e acalmar coceiras. MODO DE PREPARO 1. Coloque as folhas em pouca água. 2. Leve ao fogo. 3. Cozinhe as folhas. 4. Tome o chá.",
    statusTone: "warm",
    uses: "Proteção e cuidado — relato cultural",
    audioSrc: null,
    guardianName: "Dona Dalva",
  },


  {
    id: "embauba",
    name: "Embaúba",
    scientific: "Ruta graveolens",
    family: "Lamiaceae",
    category: "Aromáticas",
    image: "assets/guardias-embauba.jpeg",
    description: "A embaúba (Cecropia hololeuca ou Cecropia peltata), também conhecida como árvore-da-preguiça, é uma planta medicinal nativa do Brasil muito utilizada na medicina tradicional pelas suas propriedades cardiovasculares, diuréticas e protetoras dos órgãos vitais. MODO DE PREPARO Opção 1 – folhas: 1. Coloque as folhas em pouca água. 2. Ferva. 3. Tome o chá. Opção 2 – raiz: 1. Corte a raiz da planta. 2. Coloque a raiz submersa em água em temperatura ambiente. 3. Deixe na água de um dia para o outro. 4. Tome durante o dia.",
    statusTone: "warm",
    uses: "Proteção e cuidado — relato cultural",
    audioSrc: null,
    guardianName: "Dona Dalva",
  },



   {
    id: "camomila",
    name: "Camomila",
    scientific: "Ocimum basilicum",
    family: "Lamiaceae",
    category: "Aromáticas",
    image: "assets/guardias-camomila.jpg",
    description: "A camomila (Matricaria chamomilla) é uma das plantas medicinais mais antigas e utilizadas do mundo. Reconhecida por suas pequenas flores brancas e amarelas com aroma doce e suave, ela é amplamente consumida na forma de chá, óleos essenciais e cosméticos. Para que serve (Principais indicações) Melhorar o sono e ansiedade: Atua no sistema nervoso central reduzindo a agitação, o estresse do dia a dia e combatendo a insônia.Aliviar problemas digestivos: Diminui espasmos no estômago e intestino, ajudando contra gases, má digestão, azia e cólicas em geral.Reduzir dores menstruais: Ajuda a relaxar os músculos do útero, amenizando o desconforto das cólicas.Cuidado com a pele e olhos: Na forma de compressas frias, serve para clarear olheiras, acalmar irritações na pele, queimaduras leves de sol e conjuntivite.",
    statusTone: "warm",
    uses: "Proteção e cuidado — relato cultural",
    audioSrc: "assets/audio-manjericao.mp3",
    guardianName: "Dona Augusta",
  },







];

/* ==============================================================
   2. PERFIS MODELO DAS GUARDIÃS
   Todos estes dados são FICTÍCIOS e existem apenas como modelo visual.
   Para publicar uma guardiã real, substitua nome, foto, história,
   práticas, plantas, áudio e a frase de modelo por dados autorizados.
================================================================ */
const MODEL_PROFILES = [
  {
    id: "perfil-pescadora",
    badge: "PERFIL ",
    name: "Severina da Silva",
    role: "Pescadora",
    image: "assets/guardia1.jpeg",
    imageAlt: "Ilustração de uma mulher cuidando de plantas medicinais em vasos de barro",
    age: "66 anos",
    territory: "Periz de cima - Bacabeira",
    bio: "Aprendeu os nomes das plantas com sua mãe, com os avós e com os mais velhos da comunidade, preservando o conhecimento tradicional e fortalecendo os laços culturais entre gerações.",
    practices: ["Reconhecimento e cultivo de plantas medicinais do quintal", "Transmissão dos saberes para filhos e netos", "Preparos caseiros tradicionais e memória do território"],
    plants: ["Capim-Santo", "Capim-limão",],
    quote: "Perfil  — história autorizada de uma guardiã real da comunidade.",
    audioSrc: "assets/audio-severina.mp3",
    audioNote: "O relato oral foi publicado após entrevista e autorização",
  },
  {
    id: "perfil-lavradora",
    badge: "PERFIL",
    name: "Maria de Jesus",
    role: "Agricultora",
    image: "assets/guardia2.jpeg",
    imageAlt: "Ilustração de uma mulher com as mãos unidas em gesto de benção",
    age: "84 anos",
    territory: "Comunidade — Bacabeira",
    bio: "A guardiã compartilhou que, desde menina, cresceu cercada pelo saber das plantas medicinais. Foi sua mãe quem primeiro lhe mostrou os segredos da natureza, e os mais velhos da comunidade reforçaram esse aprendizado ao preparar chás e remédios caseiros. Entre histórias, cuidados e rituais, ela se criou nesse ambiente de sabedoria ancestral, onde cada folha e cada raiz carregam memórias e ensinamentos transmitidos de geração em geração.",
    practices: ["Acolhimento pela escuta e pela palavra", "Conhecimentos tradicionais e momentos de cuidado", "Memória das orações aprendidas na família"],
    plants: ["manjericao",],
    quote: "Perfil  — História autorizada de uma benzedeira real da comunidade.",
    audioSrc: "assets/audio-maria-jesus.mp3",
    audioNote: "O relato oral  publicado após entrevista e autorização",
  },
  
  
  {
    id: "perfil-quebradeira",
    badge: "PERFIL",
    name: "Dalva Gomes",
    role: "Agricultora",
    image: "assets/guardia3.jpeg",
    imageAlt: "imagem da guardião",
    age: "55 anos",
    territory: "Jatobá — Bacabeira",
    bio: "Desde a infância, aprendeu os nomes das plantas com sua mãe, com os avós e com os mais velhos da comunidade. Cada ensinamento recebido preservava o conhecimento tradicional e fortalecia os laços culturais entre gerações, mantendo viva a memória coletiva e a sabedoria ancestral que moldaram sua formação. Sempre gostou de aprender sobre as plantas e, com dedicação e amor, cultivava várias espécies em seu quintal, cuidando delas como parte essencial de sua vida.",
    practices: ["Cultiva as plantas em seu quintal", "Sustentação das famílias e memória", "Acolhimento pela escuta e pela palavra"],
    plants: ["Boldo", "Mastruz", "Babosa", "Cardo-Mariano", "Folha-Grossa"],
    quote: "Perfil  —  História autorizada de uma quebradeira real da comunidade.",
    audioSrc: null,
    audioNote: "O relato oral publicado após entrevista e autorização",
  },


  {
    id: "perfil-quebradeira",
    badge: "PERFIL ",
    name: "Maria da Soledade do Carmo Reis",
    role: "Agricultora",
    image: "assets/guardia4.jpeg",
    imageAlt: "Ilustração de uma mulher segurando um coco babaçu entre coqueiros",
    age: "63 anos",
    territory: "Comunidade — Bacabeira",
    bio: "A guardiã compartilhou que, desde menina, cresceu cercada pelo saber das plantas medicinais. Foi sua mãe quem primeiro lhe mostrou os segredos da natureza, e os mais velhos da comunidade reforçaram esse aprendizado ao preparar chás e remédios caseiros. Entre histórias, cuidados e rituais, ela se criou nesse ambiente de sabedoria ancestral, onde cada folha e cada raiz carregam memórias e ensinamentos transmitidos de geração em geração.",
    practices: ["Leitura do tempo e dos ciclos da mata", "Cultiva as plantas em seu quintal", "Sustentação das famílias e memória"],
    plants: ["Pariri", "Mastruz", "Amora",  "Chanana"],
    quote: "Perfil  —  História autorizada de uma guardiã real da comunidade.",
    audioSrc: "assets/audio-soledade.mp3",
    audioNote: "O relato oral publicado após entrevista e autorização",
  },


   {
    id: "perfil-",
    badge: "PERFIL ",
    name: "Dona Augusta",
    role: "Agricultora",
    image: "assets/guardia5.jpeg",
    imageAlt: "Ilustração de uma mulher segurando um coco babaçu entre coqueiros",
    age: "86 anos",
    territory: "Comunidade — Bacabeira",
    bio: "A guardiã revelou conhecer inúmeras plantas medicinais, capazes de se transformar em chás que curam e aliviam doenças. Ela observa que muitos jovens já não carregam esse saber, mas sente alegria quando alguns se aproximam, curiosos, perguntando o nome de cada folha e raiz. Em cada encontro, ela floresce em felicidade, por ser guardiã do conhecimento ancestral e poder compartilhar, como quem semeia luz, a sabedoria que a natureza lhe confiou.",
    practices: ["Leitura do tempo e dos ciclos da mata", "Cultiva as plantas em seu quintal", "Sustentação das famílias e memória"],
    plants: ["Hortelã"],
    quote: "Perfil  —  História autorizada de uma guardiã real da comunidade.",
    audioSrc: "assets/audio-augusta.mp3",
    audioNote: "O relato oral publicado após entrevista e autorização",
  },


  {
    id: "perfil-",
    badge: "PERFIL ",
    name: "Maria do Rosário",
    role: "Agricultora",
    image: "assets/guardia6.jpeg",
    imageAlt: "img-guardia",
    age: "86 anos",
    territory: "Comunidade — Bacabeira",
    bio: "Na entrevista, a guardiã contou que conhece inúmeras plantas medicinais, revelando para que servem e como preparar cada uma delas. Aprendeu esse saber com sua mãe, que lhe transmitiu os segredos da natureza, e hoje carrega consigo a memória viva desse aprendizado. Ao final, destacou a importância de guardar e repassar esse conhecimento às futuras gerações, para que a sabedoria ancestral continue florescendo como raiz que nunca se perde.",
    practices: ["Leitura do tempo e dos ciclos da mata", "Cultiva as plantas em seu quintal", "Sustentação das famílias e memória"],
    plants: ["Hortelã"],
    quote: "Perfil  —  História autorizada de uma guardiã real da comunidade.",
    audioSrc: "assets/audio-maria-rosario.mp3",
    audioNote: "O relato oral publicado após entrevista e autorização",
  },





];

/* ==============================================================
   3. LINHA DO TEMPO DE GRAZIELA BARROSO
   Para acrescentar um marco histórico, copie um objeto e use fatos
   conferidos em fontes institucionais.
================================================================ */
const GRAZIELA_TIMELINE = [
  { year: "1912", title: "Onde tudo começa", text: "Graziela Maciel Barroso nasce em 11 de abril, em Corumbá, no então Mato Grosso." },
  { year: "1944", title: "Primeiros gestos de campo", text: "Começa a trabalhar como herborizadora e separadora de sementes no Horto Florestal." },
  { year: "1946", title: "Uma porta aberta", text: "É aprovada em concurso público para naturalista e torna-se a primeira mulher contratada por concurso no Jardim Botânico do Rio de Janeiro." },
  { year: "1962", title: "Aprender em movimento", text: "Conclui o curso de História Natural aos 50 anos, depois de ingressar na graduação aos 47." },
  { year: "1973", title: "Doutorado aos 61", text: "Defende sua tese na Unicamp e amplia a atuação como professora e orientadora de novas gerações." },
  { year: "1978—1999", title: "Obras que permanecem", text: "Publica referências como os três volumes de Sistemática de angiospermas do Brasil e Frutos e sementes." },
  { year: "2003", title: "Um legado vivo", text: "Morre aos 92 anos, ainda vinculada ao Jardim Botânico e reconhecida por sua produção e formação de pesquisadores." },
];

const state = { category: "Todas", search: "", activePlant: null };
const byId = (id) => document.getElementById(id);

function escapeHTML(value) {
  return String(value).replace(/[&<>'"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#039;", '"': "&quot;" })[character]);
}

function showToast(message) {
  const toast = byId("toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 3200);
}

function updatePlantCounters() {
  ["plant-count-nav", "plant-count-hero", "plant-count-title"].forEach((id) => { const element = byId(id); if (element) element.textContent = String(PLANTS.length).padStart(2, "0"); });
}

function renderCategories() {
  const root = byId("category-tabs");
  if (!root) return;
  const categories = ["Todas", ...new Set(PLANTS.map((plant) => plant.category))];
  root.innerHTML = categories.map((category) => `<button type="button" class="${state.category === category ? "active" : ""}" data-category="${escapeHTML(category)}">${escapeHTML(category)}</button>`).join("");
}

function filteredPlants() {
  const query = state.search.trim().toLowerCase();
  return PLANTS.filter((plant) => {
    const categoryMatches = state.category === "Todas" || plant.category === state.category;
    const text = `${plant.name} ${plant.scientific} ${plant.family}`.toLowerCase();
    return categoryMatches && (!query || text.includes(query));
  });
}

function renderPlants() {
  const grid = byId("plant-grid");
  const empty = byId("empty-state");
  if (!grid || !empty) return;
  const list = filteredPlants();
  grid.innerHTML = list.map((plant, index) => `
    <article class="plant-card">
      <div class="plant-image"><img src="${escapeHTML(plant.image)}" alt="Detalhe botânico da planta ${escapeHTML(plant.name)}" /><small>FICHA ${String(index + 1).padStart(2, "0")}</small><button class="plant-open" type="button" data-open-plant="${escapeHTML(plant.id)}" aria-label="Abrir ficha de ${escapeHTML(plant.name)}">↗</button></div>
      <div class="plant-body"><div class="plant-meta"><span class="status ${escapeHTML(plant.statusTone)}">${escapeHTML(plant.status)}</span><em>${escapeHTML(plant.family)}</em></div><h3>${escapeHTML(plant.name)}</h3><p class="scientific">${escapeHTML(plant.scientific)}</p><p>${escapeHTML(plant.description)}</p><button class="open-link" type="button" data-open-plant="${escapeHTML(plant.id)}">Ler a ficha ›</button></div>
    </article>`).join("");
  empty.hidden = list.length !== 0;
}

function openPlant(plantId) {
  const plant = PLANTS.find((item) => item.id === plantId);
  if (!plant) return;
  state.activePlant = plant;
  byId("modal-image").src = plant.image;
  byId("modal-image").alt = `Detalhe botânico de ${plant.name}`;
  const audio = plant.audioSrc
    ? `<audio class="audio-native" controls src="${escapeHTML(plant.audioSrc)}">Seu navegador não suporta áudio.</audio>`
    : `<div class="audio-pending"><span>◖</span><div><b>Relato oral em preparação</b><span>Aguardando autorização e publicação da voz da guardiã.</span></div><em>EM BREVE</em></div>`;
  byId("modal-content").innerHTML = `
    <span class="status ${escapeHTML(plant.statusTone)}">${escapeHTML(plant.status)}</span>
    <h2 id="modal-title">${escapeHTML(plant.name)}</h2><em>${escapeHTML(plant.scientific)}</em>
    <p class="modal-lead">${escapeHTML(plant.description)}</p>
    <div class="modal-data"><div><span>Família botânica</span><b>${escapeHTML(plant.family)}</b></div><div><span>Registro</span><b>${escapeHTML(plant.uses)}</b></div><div><span>Guardiã do relato</span><b>${escapeHTML(plant.guardianName || "Aguardando entrevista autorizada")}</b></div></div>
    <div class="modal-alert">✦ Esta entrada registra um conhecimento cultural. A identificação e as informações científicas devem ser conferidas por profissionais antes de qualquer uso.</div>
    ${audio}
    <button class="qr-button" type="button" id="open-qr">▦ Gerar QR Code</button>`;
  byId("plant-modal").hidden = false;
  document.body.style.overflow = "hidden";
}

function closeModal(modalId) {
  const modal = byId(modalId);
  if (modal) modal.hidden = true;
  document.body.style.overflow = "";
}

function openQr() {
  if (!state.activePlant) return;
  const url = `${window.location.origin}${window.location.pathname.replace(/[^/]*$/, "")}index.html#planta-${state.activePlant.id}`;
  byId("qr-description").textContent = `Imprima este código e cole-o junto à planta para abrir a ficha de ${state.activePlant.name}.`;
  byId("qr-image").src = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(url)}`;
  byId("qr-image").alt = `QR Code da ficha ${state.activePlant.name}`;
  byId("qr-url").textContent = url;
  closeModal("plant-modal");
  byId("qr-modal").hidden = false;
  document.body.style.overflow = "hidden";
}

/* ==============================================================
   4. ABERTURA A PARTIR DE QR CODE
   Cada QR aponta para: index.html#planta-id-da-planta
   Exemplo: index.html#planta-arruda

   Esta função lê esse endereço quando a página abre e mostra a ficha
   correta automaticamente. Não altere o texto "planta-"; altere apenas
   o campo id de cada planta na lista PLANTS, no início deste arquivo.
================================================================ */
function openPlantFromUrl() {
  const match = decodeURIComponent(window.location.hash).match(/^#planta-([a-z0-9-]+)$/i);
  if (!match) return;

  const plantId = match[1];
  const plantExists = PLANTS.some((plant) => plant.id === plantId);
  if (!plantExists) return;

  // Garante que a ficha apareça mesmo se a pessoa tiver usado filtros antes.
  state.category = "Todas";
  state.search = "";
  const search = byId("plant-search");
  if (search) search.value = "";
  renderCategories();
  renderPlants();

  // Rolagem e modal são separados para a página terminar de renderizar primeiro.
  byId("catalogo")?.scrollIntoView({ behavior: "auto", block: "start" });
  window.setTimeout(() => openPlant(plantId), 120);
}

function renderProfiles() {
  const root = byId("profile-grid");
  if (!root) return;

  root.innerHTML = MODEL_PROFILES.map((profile, index) => `
    <article class="profile-card" id="${escapeHTML(profile.id)}">
      <div class="profile-photo">
        <img src="${escapeHTML(profile.image)}" alt="${escapeHTML(profile.imageAlt)}" loading="lazy" />
        <span class="profile-badge">${escapeHTML(profile.badge)}</span>
        <span class="profile-index">${String(index + 1).padStart(2, "0")}</span>
      </div>

      <div class="profile-body">
        <div class="profile-meta">
          <span>${escapeHTML(profile.role)}</span>
          <span>${escapeHTML(profile.age)} · ${escapeHTML(profile.territory)}</span>
        </div>

        <h3>${escapeHTML(profile.name)}</h3>
        <p class="profile-bio">${escapeHTML(profile.bio)}</p>

        <div class="profile-block">
          <span>Práticas e saberes</span>
          ${profile.practices
            .map((practice) => `<div class="practice">${escapeHTML(practice)}</div>`)
            .join("")}
        </div>

        <div class="profile-block">
          <span>Plantas relacionadas</span>
          <div class="plants">
            ${profile.plants
              .map((plant) => `<span>${escapeHTML(plant)}</span>`)
              .join("")}
          </div>
        </div>

        ${profile.audioSrc
          ? `<div class="profile-audio profile-audio--player">
              <span aria-hidden="true">◖</span>
              <div>
                <b>Relato oral</b>
                <span>Voz publicada com autorização.</span>
                <audio class="profile-audio-player" controls preload="metadata" src="${escapeHTML(profile.audioSrc)}">
                  Seu navegador não suporta a reprodução de áudio.
                </audio>
              </div>
            </div>`
          : `<div class="profile-audio">
              <span aria-hidden="true">◖</span>
              <div>
                <b>Relato oral em preparação</b>
                <span>${escapeHTML(profile.audioNote)}</span>
              </div>
            </div>`}

        <p class="profile-quote"><em>${escapeHTML(profile.quote)}</em></p>
      </div>
    </article>
  `).join("");
}


function renderTimeline() {
  const root = byId("timeline");
  if (!root) return;
  root.innerHTML = GRAZIELA_TIMELINE.map((event, index) => `<article class="timeline-event"><span class="timeline-year">${escapeHTML(event.year)}</span><span class="timeline-dot"></span><div class="timeline-card"><small>MARCO ${String(index + 1).padStart(2, "0")}</small><h3>${escapeHTML(event.title)}</h3><p>${escapeHTML(event.text)}</p></div></article>`).join("");
}

function enableNavigation() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".main-nav");
  if (toggle && nav) toggle.addEventListener("click", () => { const open = nav.classList.toggle("open"); toggle.setAttribute("aria-expanded", String(open)); });
  document.querySelectorAll(".main-nav a").forEach((link) => link.addEventListener("click", () => nav?.classList.remove("open")));
}

function enableHomeInteractions() {
  const search = byId("plant-search");
  search?.addEventListener("input", (event) => { state.search = event.target.value; renderPlants(); });
  byId("clear-search")?.addEventListener("click", () => { state.search = ""; search.value = ""; renderPlants(); });
  byId("category-tabs")?.addEventListener("click", (event) => { const button = event.target.closest("[data-category]"); if (!button) return; state.category = button.dataset.category; renderCategories(); renderPlants(); });
  document.addEventListener("click", (event) => { const trigger = event.target.closest("[data-open-plant]"); if (trigger) openPlant(trigger.dataset.openPlant); });
  [byId("show-all-plants"), document.querySelector("[data-action='show-all']")].forEach((button) => button?.addEventListener("click", () => { state.category = "Todas"; state.search = ""; if (search) search.value = ""; renderCategories(); renderPlants(); byId("catalogo")?.scrollIntoView({ behavior: "smooth", block: "start" }); showToast("Todas as entradas do catálogo estão visíveis."); }));
  byId("plant-modal")?.addEventListener("click", (event) => { if (event.target === byId("plant-modal")) closeModal("plant-modal"); });
  byId("qr-modal")?.addEventListener("click", (event) => { if (event.target === byId("qr-modal")) closeModal("qr-modal"); });
  document.addEventListener("click", (event) => { const close = event.target.closest("[data-close]"); if (close) closeModal(close.dataset.close); if (event.target.id === "open-qr") openQr(); });
  document.addEventListener("keydown", (event) => { if (event.key === "Escape") { closeModal("plant-modal"); closeModal("qr-modal"); } });
}

document.addEventListener("DOMContentLoaded", () => {
  enableNavigation();
  updatePlantCounters();
  renderCategories();
  renderPlants();
  renderProfiles();
  renderTimeline();
  enableHomeInteractions();
  openPlantFromUrl();

  // Permite testar outro QR Code sem recarregar a página inteira.
  window.addEventListener("hashchange", openPlantFromUrl);
});
