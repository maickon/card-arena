let monsters = [
  {
    "name": "Gorgon o Olho-Morto",
    "image": "https://image.cdn2.seaart.ai/2023-09-15/17226346683963397/05e0dab1733140db90d31696c87c38b7b7cd2e8a_high.webp",
    "race": "Monstro",
    "description": "Um ser com um olhar petrificante, capaz de transformar qualquer um em pedra."
  },
  {
    "name": "Kragg o Imortal",
    "image": "https://image.cdn2.seaart.ai/2024-01-05/cmc14fte878c73cvlb7g/bfaea0109609c0dc009e06782fb46d1bcfd0256d_high.webp",
    "race": "Monstro",
    "description": "Criatura gigante e indestrutível, seu corpo é feito de pura rocha."
  },
  {
    "name": "Hydra a Devoradora",
    "image": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ae628216-2e4a-45d6-8941-4b6d34f526d3/dfq8wi2-404e2349-810c-4433-8c63-9b9c0f345ccc.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2FlNjI4MjE2LTJlNGEtNDVkNi04OTQxLTRiNmQzNGY1MjZkM1wvZGZxOHdpMi00MDRlMjM0OS04MTBjLTQ0MzMtOGM2My05YjljMGYzNDVjY2MuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.6gN6AT5HsZgKCSBJMPprABeLE9b7YrBM5ulWQ9JPWbQ",
    "race": "Monstro",
    "description": "Monstro com múltiplas cabeças, cada uma delas sedenta por carne."
  },
  {
    "name": "Morgoth o Sanguinário",
    "image": "https://image.cdn2.seaart.ai/static/ee4f553c32227adf7971e33939ae5b1b/1694893621862/c64e69550bdd34134d219e5618901b66.jpeg",
    "race": "Monstro",
    "description": "Criatura das trevas, banqueteia-se com o sangue de suas vítimas."
  },
  {
    "name": "Nyx a Sombra",
    "image": "https://image.cdn2.seaart.ai/2024-07-03/cq2ndnde878c73873lpg-1/36b00f1b9f24bd851b352440c2c19db2_high.webp",
    "race": "Monstro",
    "description": "Ser etéreo que se move nas sombras, atacando sem ser visto."
  },
  {
    "name": "Vlad o Profanador",
    "image": "https://image.cdn2.seaart.ai/2024-03-27/co2983le878c73a1m8b0/46761e8db9bdc24a6e735979852584fdb37eab60_high.webp",
    "race": "Monstro",
    "description": "Vampiro antigo, alimenta-se de almas e sangue fresco."
  },
  {
    "name": "Fangor o Destruidor",
    "image": "https://image.cdn2.seaart.ai/static/f1ef4e4a2579b846c9b9924161d6bff7/1705647998995/97feceff09ab4ba9fb5ba1a93879db6b.jpeg",
    "race": "Monstro",
    "description": "Besta colossal, conhecida por sua fúria incontrolável e destruição em massa."
  },
  {
    "name": "Zelroth o Esmagador",
    "image": "https://image.cdn2.seaart.ai/2023-09-22/17893788328423429/043233077b179da747b32e96b0015b7ce6a65492_high.webp",
    "race": "Monstro",
    "description": "Monstro massivo, suas mãos são capazes de esmagar qualquer coisa."
  },
  {
    "name": "Luriel a Sirene",
    "image": "https://image.cdn2.seaart.ai/2024-01-09/cmemo0le878c73cs4dd0/4509354941d529ee5818ccc5de6e61f81595ebcd_high.webp",
    "race": "Monstro",
    "description": "Criatura marinha que encanta e afoga marinheiros com sua voz hipnotizante."
  },
  {
    "name": "Morbius o Impiedoso",
    "image": "https://image.cdn2.seaart.ai/static/88bad789f5e946cdc5ee8abb246f8e89/1704920188214/30e49f7ce1a6d5ef972174b6c092fbc2.jpeg",
    "race": "Monstro",
    "description": "Ser cruel e implacável, destrói tudo em seu caminho sem remorso."
  },
  {
    "name": "Balrog o Infernal",
    "image": "https://image.cdn2.seaart.ai/static/a2d84f507de58b8f1f9c05f4cbdf37e4/1711815937690/2dc4481f1f2917676332bf8df8401861.jpeg",
    "race": "Monstro",
    "description": "Demônio de fogo e sombras, emergido das profundezas do submundo."
  },
  {
    "name": "Scylla a Devastadora",
    "image": "https://image.cdn2.seaart.ai/2023-10-07/19239917568695301/2980ddec384dfbcdd13ee534f39ad525f9c71370_high.webp",
    "race": "Monstro",
    "description": "Monstro marítimo com múltiplos tentáculos, destruidora de navios."
  },
  {
    "name": "Gorath o Devorador",
    "image": "https://image.cdn2.seaart.ai/static/654c0970a1b1ca0546f1b42c2e6cded3/1703653572912/448717126897be17c92899c97aac6256.png",
    "race": "Monstro",
    "description": "Entidade das trevas, consome as almas de seus inimigos."
  },
  {
    "name": "Tiamat a Dracônica",
    "image": "https://image.cdn2.seaart.ai/2023-09-24/18031008376974341/02eacce672911f6ca5e47793ccc38539cc787d3a_high.webp",
    "race": "Monstro",
    "description": "Dragão colossal de múltiplas cabeças, governante dos céus."
  },
  {
    "name": "Vorak o Abissal",
    "image": "https://image.cdn2.seaart.ai/2024-06-22/cpr6g75e878c73b04clg/9c8ba4e3545547deaf3cda24ef79fd8ddbbf75fb_high.webp",
    "race": "Monstro",
    "description": "Criatura do abismo, emerge das profundezas para espalhar terror."
  },
  {
    "name": "Cerberus o Guardião",
    "image": "https://image.cdn2.seaart.ai/2024-04-21/coig7ote878c73c6quig/9847682cad27efd96f68b73889509a3ceb09eaf3_high.webp",
    "race": "Monstro",
    "description": "Cão de três cabeças que guarda os portões do submundo."
  },
  {
    "name": "Ghash o Corruptor",
    "image": "https://image.cdn2.seaart.ai/static/d0f9afe9074ba61c5793c975976446b2/1699388164439/d7d8c633805d51d59616d7a0527078b4.jpeg",
    "race": "Monstro",
    "description": "Demônio que espalha decadência e corrupção por onde passa."
  },
  {
    "name": "Lamia a Sedutora",
    "image": "https://image.cdn2.seaart.ai/2023-12-05/clnj9k14msbc73dl5250/d035bb34f5bba18edec53088700df13319c1a5ef_high.webp",
    "race": "Monstro",
    "description": "Monstro que encanta e manipula suas vítimas antes de devorá-las."
  },
  {
    "name": "Behemoth o Colossal",
    "image": "https://image.cdn2.seaart.ai/static/f8ebecba92808d0462759bc80cbf9adf/1705158398341/d5c724bec1c7c8096a9ea2d6b2ad7b21_low.webp",
    "race": "Monstro",
    "description": "Ser gigantesco, cuja força descomunal é temida por todos."
  },
  {
    "name": "Jormungand o Serpente",
    "image": "https://image.cdn2.seaart.ai/2023-10-17/20093875432519685/b58a3521df3cb4b932546d8c1c6cc77be2c9eaa4_high.webp",
    "race": "Monstro",
    "description": "Serpente colossal que circunda o mundo, destruidora de tudo o que toca."
  }
];
