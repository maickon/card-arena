let dwarves = [
  {
    "name": "Borin o Martelo",
    "image": "https://image.cdn2.seaart.ai/2023-08-23/15178595159817221/042e67ec9df384c5be35d5b58339231cf41547e6_high.webp",
    "race": "Anão",
    "description": "Ferreiro lendário, seu martelo forja as armas mais poderosas."
  },
  {
    "name": "Thrain o Implacável",
    "image": "https://image.cdn2.seaart.ai/static/153fc7ef397bae514203118c7c282940/1707614305767/b39499c62d0b9385182abd80f0a7f0a4_high.webp",
    "race": "Anão",
    "description": "Guerreiro destemido, conhecido por sua resistência e força em batalha."
  },
  {
    "name": "Gimli o Bravo",
    "image": "https://image.cdn2.seaart.ai/2024-02-01/cmtsqkle878c739398u0/25e355f9a56250c79f8830074ed63ab71190eecb_high.webp",
    "race": "Anão",
    "description": "Guerreiro destemido, seu machado corta até a pedra mais dura."
  },
  {
    "name": "Dwalin o Guardião",
    "image": "https://image.cdn2.seaart.ai/static/41d12b5bedfddca7be2e08433d585376/1708307662513/7bc143a674d57f874932c961da2f45fb.jpeg",
    "race": "Anão",
    "description": "Defensor incansável das montanhas, nunca abandona seu posto."
  },
  {
    "name": "Farin o Sábio",
    "image": "https://image.cdn2.seaart.ai/2023-09-25/18133697904518149/a030cdb82d600fa8379ec99ff8a52c46ce42cf97_high.webp",
    "race": "Anão",
    "description": "Ancião da tribo, mestre nas artes da runa e da história."
  },
  {
    "name": "Durin o Antigo",
    "image": "https://image.cdn2.seaart.ai/static/84144a33f0ddefcbc46886707965ecc0/1705880086095/6086922ebd54a9200630dfa182810c16_high.webp",
    "race": "Anão",
    "description": "Rei ancestral, venerado por todos os anões."
  },
  {
    "name": "Grimm o Bárbaro",
    "image": "https://image.cdn2.seaart.ai/static/f98e86f99f957715c9b01e4951bed557/1711501787975/b402cb1154962a89d52ca38dae2bb9b1_high.webp",
    "race": "Anão",
    "description": "Anão selvagem, luta com fúria e vigor indomáveis."
  },
  {
    "name": "Kili o Ágil",
    "image": "https://image.cdn2.seaart.ai/static/65b6cd810f6a2f88340cc771ae1bcb64/1691889661289/08f72ab485457cc6f4b2dfb09bc1f9e7_high.webp",
    "race": "Anão",
    "description": "Arqueiro veloz e preciso, atinge seus alvos com precisão mortal."
  },
  {
    "name": "Bofur o Brincalhão",
    "image": "https://image.cdn2.seaart.ai/2024-07-29/cqjkts5e878c73dmr970/b818ef92ee3dc015d1c172dbb0db1aace7580442_high.webp",
    "race": "Anão",
    "description": "Sempre com um sorriso no rosto, mas letal quando em batalha."
  },
  {
    "name": "Gloin o Rico",
    "image": "https://image.cdn2.seaart.ai/2024-07-06/cq4or2de878c73aof9hg/62334ee28a6f77c1c43fd5a715f4b69c41f5a0ea_high.webp",
    "race": "Anão",
    "description": "Comerciante astuto, sempre em busca de tesouros escondidos."
  },
  {
    "name": "Dorin o Fiel",
    "image": "https://image.cdn2.seaart.ai/2024-07-06/cq4or2de878c73aof9hg/caf3bc6ee754d35a73e69c6fa9732879ecb77c44_high.webp",
    "race": "Anão",
    "description": "Lutador leal, nunca abandona seus companheiros."
  },
  {
    "name": "Thorin Montanha",
    "image": "https://image.cdn2.seaart.ai/2024-06-29/cq0957te878c73ccgu30/a9ef2ed7562562f2594c4349a7a389337aabea08_high.webp",
    "race": "Anão",
    "description": "Líder forte e destemido, guia seu povo com sabedoria e coragem."
  },
  {
    "name": "Bombur o Farturento",
    "image": "https://image.cdn2.seaart.ai/2023-08-23/15175304392759301/823a6091db459abf4bd7f52a5b15b68b4bffe47e_high.webp",
    "race": "Anão",
    "description": "Gourmet do grupo, mas poderoso em combate quando necessário."
  },
  {
    "name": "Brokk o Inventor",
    "image": "https://image.cdn2.seaart.ai/2023-08-23/15178595159817221/042e67ec9df384c5be35d5b58339231cf41547e6_high.webp",
    "race": "Anão",
    "description": "Engenheiro brilhante, cria máquinas e armas inovadoras."
  },
  {
    "name": "Orin o Assolador",
    "image": "https://image.cdn2.seaart.ai/2023-08-23/15175548519077893/d6a80012d9d6c4ac817416bd9a9a28df66e69062_high.webp",
    "race": "Anão",
    "description": "Destruidor de fortalezas inimigas, seu martelo é temido por todos."
  },
  {
    "name": "Nori o Silencioso",
    "image": "https://image.cdn2.seaart.ai/2023-08-23/15177825025808389/d746946c33f5f82c71166ed63e1033545db0bb57_high.webp",
    "race": "Anão",
    "description": "Mestre em furtividade, move-se sem ser notado pelos inimigos."
  },
  {
    "name": "Frerin o Justo",
    "image": "https://image.cdn2.seaart.ai/2023-08-23/15181615079659525/724e680722b0c4d54275c2d42a0cf5c17cba2b0a_high.webp",
    "race": "Anão",
    "description": "Conhecido por sua integridade, resolve disputas com sabedoria."
  },
  {
    "name": "Karg o Mão-de-Ferro",
    "image": "https://image.cdn2.seaart.ai/2023-08-25/15365102367692805/538e29201dda1c37e6771384f9efdee7736d3716_high.webp",
    "race": "Anão",
    "description": "Possui uma força incomparável, suas mãos são como ferro."
  },
  {
    "name": "Balder o Vingador",
    "image": "https://image.cdn2.seaart.ai/2023-09-30/18556931363855365/c1f0bae3638994da910fb1387c04c462a249d7a5_high.webp",
    "race": "Anão",
    "description": "Sempre em busca de justiça, não descansa até punir os culpados."
  },
  {
    "name": "Zarak o Runífero",
    "image": "https://image.cdn2.seaart.ai/2023-09-13/17051463667706885/759c94a62aae0919e04636b67568a7853adbc61e_high.webp",
    "race": "Anão",
    "description": "Mestre das runas, conjura poderosas magias antigas."
  }
];
