// Cardápio Studio Burger — extraído do cardápio digital oficial (VucaFood)
const IMG_BASE = 'https://cdn.vucasolution.com.br/upload/{w},c_fit/https://gryyplgyeyqb.compat.objectstorage.sa-saopaulo-1.oraclecloud.com/vuca-cdn/studioburger/arqs/produtos/';
const MENU = {
 "Destaques": [
  {
   "name": "Entrada Chicken Insano Galera",
   "desc": "Uma deliciosa porção (600g) de Coxa e Sobrecoxa desossada empanada e frita!! Crocante por fora e suculento por dentro!! Para servir todo mundo!!!",
   "price": "79,90",
   "img": "1662925d94851f5de5ccbb269beaa3bc209f70f6.jpg"
  },
  {
   "name": "Fritas Galera",
   "desc": "Generosa porção de batatas fritas à perfeição. Acompanha o queridinho molho stud!",
   "price": "49,00",
   "img": "43f647df15a5191406ca1ab565511ea4ad881ada.jpg"
  },
  {
   "name": "Pururuca de Queijo",
   "desc": "Cubos de queijo coalho fritos, cobertos por um delicioso melaço de cana.",
   "price": "35,00",
   "img": "876514eaa1f29501eac4856a98c29dd721b1860c.jpg"
  },
  {
   "name": "Brie Salad",
   "desc": "Mix de folhas, fitas de cenoura, lascas de coco queimado, tomate cereja confit, molho da casa e finalizada com queijo brié caramelizado. Obs.: Proteína não inclusa.",
   "price": "39,00",
   "img": "3b70bb5e2e0c3179c774f506fa2315a9f923fcb9.jpg"
  },
  {
   "name": "Cabral da Peste",
   "desc": "O Hambúrguer vencedor do prêmio da VEJA GOIÂNIA! Hambúrguer artesanal de 160g, coberto por maionese com um toque de limão china e pimenta seca bem suave, queijo coalho frito, cebolas caramelizadas na manteiga, tomate cereja e folhas de manjericão. Pra finalizar, um leve toque de melaço de cana com gengibre e cachaça por cima de tudo.",
   "price": "56,00",
   "img": "9056f2b2a569409641c6534e91d543af6710cbed.jpg"
  },
  {
   "name": "Benedicte Dujoão",
   "desc": "2 burgers artesanais de 80g cobertos com cheddar, grossa fatia de bacon caramelizado, ovo frito (gema mole) e azeite trufado sobre o nosso delicioso molho stud.",
   "price": "55,00",
   "img": "8b0044ec4865313af91d7eefa6b15cabea38dc72.jpg"
  },
  {
   "name": "Nutella Burger",
   "desc": "Um exagero de nutella com morangos frescos no pão Australiano tostado!",
   "price": "26,00",
   "img": "46e8e60e6ba62ce9835401b869450aa66c86052e.jpg"
  }
 ],
 "Copa do Mundo": [
  {
   "name": "Combo Copa Casal",
   "desc": "Uma deliciosa porção (300g) de Coxa e Sobrecoxa desossada empanada e frita!! Crocante por fora e suculento por dentro!! Acompanha 2 Chopps Pilsen!",
   "price": "59,90",
   "img": "f1b4f1fea01bafb797f21163cbb491e863c71c91.jpg"
  },
  {
   "name": "Combo Copa para Galera",
   "desc": "Uma deliciosa porção (600G) de Coxa e Sobrecoxa desossada empanada e frita!! Crocante por fora e suculento por dentro!! Acompanha 4 Chopps Pilsen! Vai Brasil!!!",
   "price": "99,90",
   "img": "bc4f3fa7e40b9b25d820aecda4869c8cfae4dfe4.jpg"
  }
 ],
 "Pratos Almoço": [
  {
   "name": "Fettuccine Pomodoro e Sobrecoxa Empanada",
   "desc": "Novidade no Cardapio!! Sobrecoxa de frango desossada e empanada, coberta com molho pomodoro e bechamel gratinado. Acompanha fettuccine ao molho pomodoro finalizado com parmesão",
   "price": "39,90",
   "img": "901213443cd53e792324a664ef6940bc4899524f.jpg"
  },
  {
   "name": "Picadinho Raiz",
   "desc": "Novidade no cardápio!! Picadinho que tem gosto de conforto! Carne macia, arroz, farofa e vinagrete. Simples, gostoso e impossível de resistir!",
   "price": "35,90",
   "img": "6ee0cbe2098e15ea35e227cf963e19c2e050bcfc.jpg"
  },
  {
   "name": "Bife a Cavalo",
   "desc": "Bife grelhado, servido com ovo frito no ponto certo. Acompanha arroz, e batata frita. Clássico que nunca decepciona.",
   "price": "35,90",
   "img": "b7ea0bd8bda84cb11bea9c8444eb2b84eec59636.jpg"
  },
  {
   "name": "Bife Acebolado",
   "desc": "Bife grelhado, finalizado com cebola. Acompanha arroz e fritas. Simples e bem feito.",
   "price": "32,90",
   "img": "a9dae0b3c437f441701343587534e82692d009b7.jpg"
  },
  {
   "name": "Strogonoff de Frango",
   "desc": "Frango bem servido, envolvido em molho cremoso no ponto certo. Acompanha arroz branco e fritas. Clássico bem feito não precisa inventar moda.",
   "price": "32,90",
   "img": "5b7a54b6721617ec1e179423653c3997f8535057.jpg"
  },
  {
   "name": "Strogonoff de Carne",
   "desc": "Carne macia em tiras, envolvida em molho cremoso e bem encorpado, no ponto certo. Acompanha arroz branco soltinho e fritas, porque strogonoff de respeito é assim.",
   "price": "35,90",
   "img": "b0fe84e86a32384cec4eea204bb20a49a11cf8e7.jpg"
  },
  {
   "name": "Costelinha de Porco Molho de Barbecue",
   "desc": "Costelinha suína macia e suculenta, preparada lentamente até atingir o ponto ideal e finalizada com molho barbecue encorpado, levemente adocicado e defumado. Acompanha fettuccine aos três queijos, arroz ou fritas, formando uma combinação equilibrada e cheia de sabor, perfeita para um almoço bem servido.",
   "price": "37,90",
   "img": "49c9755845c8d3a7f73dcc132465e200c9102f29.jpg"
  },
  {
   "name": "Costelinha de Porco Molho de Abacaxi",
   "desc": "Costelinha de porco bem macia, coberta com molho de abacaxi da casa, cremoso e marcante. Acompanha fettuccine aos três queijos ou arroz com fritas. Prato que foge do óbvio.",
   "price": "37,90",
   "img": "fba44abb0872ece3097b16758310690b4002abf7.jpg"
  },
  {
   "name": "Sobrecoxa Desossada Assada",
   "desc": "Sobrecoxa de frango desossada, assada no ponto certo e finalizada com chimichurri. Acompanha arroz com brócolis e legumes salteados no alho. Equilíbrio que funciona.",
   "price": "35,90",
   "img": "ea9674b541f0b3a0daf80c0c71d10e9dd4ac7fd4.jpg"
  },
  {
   "name": "Parmegiana de Carne",
   "desc": "Carne empanada, coberta com molho vermelho e queijo derretido no ponto certo. Acompanha arroz branco e fritas. Prato clássico, bem servido e sem erro.",
   "price": "39,90",
   "img": "0004672524619bfd5af6a5a01ce71afec25c939e.jpg"
  },
  {
   "name": "Parmegiana de Frango",
   "desc": "Frango empanado, coberto com molho vermelho e queijo derretido sem economia. Acompanha arroz branco e fritas. Difícil pedir outra coisa.",
   "price": "37,90",
   "img": "3f547a1bb343e4a937b246f6d463e7127b81c7b6.jpg"
  }
 ],
 "Happy Hour": [
  {
   "name": "Tropical Fire Happy",
   "desc": "Novidade no Cardápio!! Coquetel vibrante de tequila com maracujá, tangerina e suco de limão, finalizado com borda de sal. Refrescante, cítrico e cheio de personalidade.",
   "price": "17,90",
   "img": "851a1c2af577ae1f1eccb50872d97c5fc8d0ddea.jpg"
  },
  {
   "name": "Chopp Colombina Ipa Happy Hour",
   "desc": "300ml - A Colombina IPA leva em sua composição rapadura moça branca, uma rapadura batida à mão, típica do Cerrado. A moça branca e os maltes torrados trazem notas aromáticas adocicadas, que equilibram o tradicional amargor do estilo. O dry hopping com o lúpulo australiano Galaxy traz notas frutadas e cítricas, lembrando maracujá. CARACTERÍSTICAS: 40 IBU (nível de Amargor), 6% Teor Alcoólico",
   "price": "8,95",
   "img": "0e7588bfd8f71b65c7b7907e60918210f7787b97.jpg"
  },
  {
   "name": "Chopp Colombina Pilsen Happy Hour",
   "desc": "300ml - A Colombina Puro Malte é leve e refrescante, bem equilibrada e fácil de beber. O aroma é marcado por notas herbais e florais do lúpulo Saaz, oriundo da República Tcheca. CARACTERÍSTICAS: 11 IBU (nível de Amargor), 4, 5% Teor Alcoólico",
   "price": "7,95",
   "img": "4593418fc51b7db0f98fc14ae1cc89754666f1d5.jpg"
  },
  {
   "name": "Punk Lemonade Happy Hour",
   "desc": "Drink cítrico a base de limão, morango, hortelã, vodka e água com gás.",
   "price": "19,00",
   "img": "540daee43515603ea70c21d7c0c89615361ef84e.jpg"
  },
  {
   "name": "Cosmopolitan Happy Hour",
   "desc": "",
   "price": "19,00",
   "img": "26bc6ac5a1a78a07b0f73877c1c622aded782371.jpg"
  },
  {
   "name": "Preparo de Cozumel Happy Hour",
   "desc": "Dose de limão, gelo e a sua cerveja long neck favorita bem gelada",
   "price": "5,00",
   "img": "897b199fe5f3425fabdd2e5a2002188be34f5ad3.jpg"
  },
  {
   "name": "Caipirinhas Happy Hour",
   "desc": "",
   "price": "18,00",
   "img": "dbb69da7b4c11ce270452d5b2463ccdeff24c621.jpg"
  },
  {
   "name": "Mojito Happy Hour",
   "desc": "Bacardi, hortelã, limão Taiti e água com gás.",
   "price": "17,00",
   "img": "cb702c6894a45ff2b4afedaa3136574f77266c25.jpg"
  },
  {
   "name": "Caipirinha 2 Limões c/ Rapadura (Happy)",
   "desc": "Refresque seus sentidos com nossa Caipirinha Especial de Limões e Rapadura! Uma combinação única que harmoniza a acidez cítrica de dois limões frescos com a doçura autêntica da rapadura.",
   "price": "19,00",
   "img": "095236f2aa308f867a94012e7f7daabe7b99c88b.jpg"
  },
  {
   "name": "Romuleta Happy Hour",
   "desc": "Drink a base de morango, amora, framboesa, limão siciliano e vodka",
   "price": "17,00",
   "img": "ba058cd084d660cb36b19ebbc02231ab7fb4dc19.jpg"
  },
  {
   "name": "Gin e Tônica Studio",
   "desc": "Água tônica , dose de Tanqueray e finalizada com limão siciliano.",
   "price": "17,00",
   "img": "2f54321adbead36f9424f01b4b5ff109740fdfdf.jpg"
  },
  {
   "name": "Chicken Wings Happy Hour",
   "desc": "10 coxinhas de frango crocante finalizado com molho barbecue. (O molho é incorporado durante o processo de preparo)",
   "price": "32,90",
   "img": "d595e22f45911f47ab272577bf7cb91db9938307.jpg"
  },
  {
   "name": "Pururuca de Queijo Happy Hour",
   "desc": "Cubos de queijo coalho fritos, cobertos por um delicioso melaço de cana.",
   "price": "24,90",
   "img": "aac88e508cdd670e7e33ea3dbcff7ae721f72ad8.jpg"
  },
  {
   "name": "Sticks de Mussarela Happy Hour",
   "desc": "Palitos de muçarela empanada e frita. Acompanha Melaço de Cana.",
   "price": "29,90",
   "img": "9620ad597b920cfe92d2842bd4d738396b69b1c6.jpg"
  },
  {
   "name": "Smash Simples Studio Happy",
   "desc": "Pão artesanal, smash burger 80g, queijo mussarela e molho stud.",
   "price": "25,00",
   "img": "90ebcdb7f960dd3ce8333584458825bd1f14bbcb.jpg"
  }
 ],
 "Entradas": [
  {
   "name": "Croqueta Hollywood",
   "desc": "Crocantes por fora, suculentas por dentro. Nossa porção com 6 croquetas de carne de costela bovina é acompanhada do delicioso Molho Stud da casa e finalizada com cebolinha para um toque especial.",
   "price": "59,90",
   "img": "69187a357a69fb18c0756431514b631400a5001b.jpg"
  },
  {
   "name": "Entrada Chicken Insano Individual",
   "desc": "Uma deliciosa porção (300g) de Coxa e Sobrecoxa desossada empanada e frita!! Crocante por fora e suculento por dentro!!",
   "price": "49,90",
   "img": "af76e38bebff5438119975a77afe9020c6fce14d.jpg"
  },
  {
   "name": "Entrada Chicken Insano Galera",
   "desc": "Uma deliciosa porção (600g) de Coxa e Sobrecoxa desossada empanada e frita!! Crocante por fora e suculento por dentro!! Para servir todo mundo!!!",
   "price": "79,90",
   "img": "1662925d94851f5de5ccbb269beaa3bc209f70f6.jpg"
  },
  {
   "name": "Fritas Individual",
   "desc": "Generosa porção de batatas fritas à perfeição. Acompanha o queridinho molho stud!",
   "price": "26,00",
   "img": "3293d470f12f4eef1de7183e3d018314daaa9028.jpg"
  },
  {
   "name": "Fritas Galera",
   "desc": "Generosa porção de batatas fritas à perfeição. Acompanha o queridinho molho stud!",
   "price": "49,00",
   "img": "43f647df15a5191406ca1ab565511ea4ad881ada.jpg"
  },
  {
   "name": "Fritas com Cheddar e Bacon Individual",
   "desc": "Generosa porção de batatas fritas à perfeição cobertas por queijo cheddar e bacon crocante.",
   "price": "38,00",
   "img": "1258f98f80f29fdd5b7e7e3891a114ff6bc6c0d4.jpg"
  },
  {
   "name": "Fritas com Cheddar e Bacon Galera",
   "desc": "Generosa porção de batatas fritas à perfeição cobertas por queijo cheddar e bacon crocante.",
   "price": "68,00",
   "img": "3f00746659bf30a44362db8ad5190e714bd9d189.jpg"
  },
  {
   "name": "Fritas Pulled Pork Individual",
   "desc": "Batata frita da casa com bastante mussarela e costelinha desfiada ao molho barbecue",
   "price": "39,90",
   "img": "2f8dc358602a24702f4227f1a71b2559f6f8c9e6.jpg"
  },
  {
   "name": "Fritas Pulled Pork Galera",
   "desc": "Batata frita da casa com bastante mussarela e costelinha desfiada ao molho barbecue",
   "price": "68,00",
   "img": "90afec2ba3c00f5ed3c01fdbe7bbd10f045c775d.jpg"
  },
  {
   "name": "Fritas e Onion Strings Individual",
   "desc": "Pra quem é indeciso e quer os dois.",
   "price": "24,00",
   "img": "c48bcf1957ca8311b51077511152196043b5ffaf.jpg"
  },
  {
   "name": "Fritas e Onion Strings Galera",
   "desc": "Pra quem é indeciso e quer os dois.",
   "price": "56,00",
   "img": "49ce94788230500e3ed1dea03fa7cadca4c78968.jpg"
  },
  {
   "name": "Onion Strings Individual",
   "desc": "Fios de cebola empanados, crocantes e saborosos, com molho teriaky feito na casa!",
   "price": "21,00",
   "img": "b0e2fe1b7b66a238fc1686b3fae8fb7a5e72e88a.jpg"
  },
  {
   "name": "Onion Strings Galera",
   "desc": "Fios de cebola empanados, crocantes e saborosos, com molho teriaky feito na casa!",
   "price": "43,00",
   "img": "d274f35a731071a5e4fe3e48e0af742b59513356.jpg"
  },
  {
   "name": "Truffle Fries Individual - Fritas",
   "desc": "Deliciosas fritas com azeite de trufas brancas e parmesão ralado.",
   "price": "38,00",
   "img": "c9f4359f5f89cb753182b353294be127ca83c84f.jpg"
  },
  {
   "name": "Truffle Fries Galera - Fritas",
   "desc": "Deliciosas fritas com azeite de trufas brancas e parmesão ralado.",
   "price": "79,90",
   "img": "472dc2a0d80342b30f4b6ca0901aa5c48312aa29.jpg"
  },
  {
   "name": "Sticks de Mussarela",
   "desc": "Palitos de muçarela empanada e frita. Acompanha Melaço de Cana.",
   "price": "42,00",
   "img": "330484080790cf78606c33fd42053c1da8fb3175.jpg"
  },
  {
   "name": "Chicken Wings",
   "desc": "10 coxinhas de frango crocante finalizado com molho barbecue. (O molho é incorporado durante o processo de preparo)",
   "price": "56,00",
   "img": "da08df29a57bd754dea925415c198688aeb8ee90.jpg"
  },
  {
   "name": "Nuggets de Frango",
   "desc": "Deliciosos pedaços crocantes e sequinhos de frango empanado. Acompanha molho barbecue (12 unidades)",
   "price": "38,00",
   "img": "d4a1623f829c3e9ada99d048a306bf795c6f70f8.jpg"
  },
  {
   "name": "Pururuca de Queijo",
   "desc": "Cubos de queijo coalho fritos, cobertos por um delicioso melaço de cana.",
   "price": "35,00",
   "img": "876514eaa1f29501eac4856a98c29dd721b1860c.jpg"
  },
  {
   "name": "Crispy de Queijo Gouda",
   "desc": "Quadradinhos empanados feitos com o verdadeiro queijo gouda. Acompanha Molho Stud e Melaço de Cana. (10 unidades)",
   "price": "47,00",
   "img": "6ba294f48fffe3fe94320a96c0300ea1b05b22c7.jpg"
  },
  {
   "name": "Brie Salad",
   "desc": "Mix de folhas, fitas de cenoura, lascas de coco queimado, tomate cereja confit, molho da casa e finalizada com queijo brié caramelizado. Obs.: Proteína não inclusa.",
   "price": "39,00",
   "img": "3b70bb5e2e0c3179c774f506fa2315a9f923fcb9.jpg"
  },
  {
   "name": "Studio Salad",
   "desc": "Alface crocante, croutons, parmesão e o nosso clássico molho de alho. Obs.: Proteína não inclusa.",
   "price": "36,00",
   "img": "d926a01688cfbbdd1a8daefd0fb481bf9f055a4c.jpg"
  }
 ],
 "Burgers": [
  {
   "name": "Chicken Supreme",
   "desc": "Nosso frango empanado crocante no ponto perfeito, alface fresca e uma camada generosa do molho de alho , tudo no pão macio. Um clássico reinventado do jeito Studio Burger.",
   "price": "45,00",
   "img": "2e2bc698442c3d9673cdf52f0cc7736d31b1825d.jpg"
  },
  {
   "name": "Faria Limer",
   "desc": "Churrascão Paulista, com molho de alho, provolone tostado e vinagrete insano. (Pão Brioche, Blend 160g, Queijo Provolone, Vinagrete).",
   "price": "53,00",
   "img": "c9e7ab7ca5030174db8e895c6dee13fc28cc4d3b.jpg"
  },
  {
   "name": "Stud Burger",
   "desc": "Hambúrguer artesanal de 160g, alface americana crocante, tomates frescos, cebola roxa, american cheese, bacon crocante e o famoso molho stud feito todos os dias na casa.",
   "price": "48,00",
   "img": "81c7f5637630a3c19ff3a0f06135b5329a89e9a1.jpg"
  },
  {
   "name": "Cabral da Peste",
   "desc": "O Hambúrguer vencedor do prêmio da VEJA GOIÂNIA! Hambúrguer artesanal de 160g, coberto por maionese com um toque de limão china e pimenta seca bem suave, queijo coalho frito, cebolas caramelizadas na manteiga, tomate cereja e folhas de manjericão. Pra finalizar, um leve toque de melaço de cana com gengibre e cachaça por cima de tudo.",
   "price": "56,00",
   "img": "9056f2b2a569409641c6534e91d543af6710cbed.jpg"
  },
  {
   "name": "American Studio",
   "desc": "Pão Parmesan, burger Artesanal (160g), queijo, cebola caramelizada, bacon e o magnifico molho Garlic Pepper.",
   "price": "54,00",
   "img": "bcc67d0363372755d3f02778b08e87c22e96ad5f.jpg"
  },
  {
   "name": "Provobacon",
   "desc": "O Provobacon é uma criação exclusiva para o Festival Burger Fest, patrocinado pela Heinz. Este burger gourmet oferece uma experiência culinária única, combinando ingredientes cuidadosamente selecionados para criar uma explosão de sabores irresistíveis. Ele apresenta um blend suculento de 160g de carne grelhada, coberto por queijo provolone derretido e uma camada crocante de paçoca de bacon. O pão brioche tostado oferece a base, enquanto o molho Stud, melaço de cana e cebolinha fresca adicionam um toque agridoce e um equilíbrio perfeito de sabores.",
   "price": "54,00",
   "img": "5fc2167472a366c14405d41d56d3b20db1625ea1.jpg"
  },
  {
   "name": "Pão Carne e Queijo",
   "desc": "Hambúrguer artesanal de 160g, bastaaante queijo e molho stud, no Pão brioche. Simples e clássico!",
   "price": "39,00",
   "img": "786609a1512074380c7972298a2798a7b83fd8c7.jpg"
  },
  {
   "name": "Cheesebacon",
   "desc": "Hambúrguer artesanal de 160g, american cheese, muuuito bacon e molho stud, no Pão brioche. Esse é pra quem gosta do tradicional!",
   "price": "49,90",
   "img": "85b80e064435faba1155a768d5c6129e92569324.jpg"
  },
  {
   "name": "Bad Ass",
   "desc": "Uma ignorância de bacon! Hambúrguer artesanal de 160g, american cheese, nossa famosa onion strings, molho stud, barbecue e teriaky por cima de tudo.",
   "price": "52,00",
   "img": "e5c32f9707bd22d2c38600a126b9787bfb84cc3b.jpg"
  },
  {
   "name": "Black Studio",
   "desc": "Pão australiano, burger artesanal de costela bovina 150g, queijo, cheddar cremoso e cebolas caramelizadas.",
   "price": "51,00",
   "img": "94b58b76fbb9cdd01ea73c1c80eb5831e58c2d96.jpg"
  },
  {
   "name": "Duplo Black Studio",
   "desc": "Pão australiano, 2 burgers artesanais de costela bovina (150g cada), queijo, cheddar cremoso, cebolas caramelizadas e molho barbecue.",
   "price": "56,00",
   "img": "6042c0b454ed1cc1ce39915b342c00950f9ddc0f.jpg"
  },
  {
   "name": "Marguerito",
   "desc": "Pão com parmesão, burger Artesanal 160g, queijo parmesão, rúcula, molho pesto, tomatinhos cereja confit, molho de parmesão, finalizado com o diferenciado azeite trufado.",
   "price": "57,00",
   "img": "44959cf5137bbb81709bccae7f4caa2e3a763f30.jpg"
  },
  {
   "name": "Quinteirão",
   "desc": "Hambúrguer artesanal de 80g, envolvido em 2 fatias de queijo cheddar, picles, cebola, e catchup em um pão com gergelim. A evolução perfeita de um clássico.",
   "price": "36,00",
   "img": "6ceb9c0ce147c11d0988efd447f4ff4431e3e1fa.jpg"
  },
  {
   "name": "Smash Simples Studio",
   "desc": "Você já conhece o Smash Burger? São hambúrgueres pequenos, que quando prensados na chapa bem quente criam uma crostinha com sabor incrível! Escolha entre o simples, duplo ou triplo. Pão artesanal, smash burger 80g, 2 fatias de queijo mussarela, e molho Stud da casa.",
   "price": "29,00",
   "img": "3f77f54fb26aeb2fb13f58efacbbd3e2fcfb8423.jpg"
  },
  {
   "name": "Smash Duplo Studio",
   "desc": "Você já conhece o Smash Burger? São hambúrgueres pequenos, que quando prensados na chapa bem quente criam uma crostinha com sabor incrível! Escolha entre o simples, duplo ou triplo. Pão artesanal, smash burger angus 80g, 2 fatias de queijo mussarela, e maionese Stud da casa.",
   "price": "35,00",
   "img": "5ee351e1e27c1e5f9ab458587db572ba7fd5527f.jpg"
  },
  {
   "name": "Smash Triplo Studio",
   "desc": "Você já conhece o Smash Burger? São hambúrgueres pequenos, que quando prensados na chapa bem quente criam uma crostinha com sabor incrível! Escolha entre o simples, duplo ou triplo. Pão artesanal, smash burger 80g, 2 fatias de queijo mussarela, e molho Stud da casa.",
   "price": "42,00",
   "img": "fa136352a245d96989529c7a1d022c0848d91442.jpg"
  },
  {
   "name": "Benedicte Dujoão",
   "desc": "2 burgers artesanais de 80g cobertos com cheddar, grossa fatia de bacon caramelizado, ovo frito (gema mole) e azeite trufado sobre o nosso delicioso molho stud.",
   "price": "55,00",
   "img": "8b0044ec4865313af91d7eefa6b15cabea38dc72.jpg"
  },
  {
   "name": "Combo Kids",
   "desc": "Pão, 100g de carne, queijo cheddar, molho stud, alface, tomate e cebola roxa. Acompanhamento: batata frita + Refrigerante (copo). \\* ESSE COMBO NÃO É VÁLIDO PARA PROMOÇÃO DE REFIL",
   "price": "49,90",
   "img": "1e62e9537b2a951d67cdb3204c18f5c2f5e2abde.jpg"
  },
  {
   "name": "Studio Cheddar Melted Simples",
   "desc": "Burger Artesanal (160g), finalizado na mesa com um exagero de queijo cheddar derretido e crispy de bacon, (Atenção: Este prato recomendamos utilizar garfo e faca devido o exagero de queijo cheddar)",
   "price": "49,00",
   "img": "f03f702c143869abecf4dee6782cb680aefd87bd.jpg"
  },
  {
   "name": "Studio Cheddar Melted Duplo",
   "desc": "Burger Artesanal (160g), finalizado na mesa com um exagero de queijo cheddar derretido e crispy de bacon, (Atenção: Este prato recomendamos utilizar garfo e faca devido o exagero de queijo cheddar)",
   "price": "59,90",
   "img": "c1754e1ea19f670be2eca027849ea6a704774d65.jpg"
  },
  {
   "name": "Onion Burger Lovers",
   "desc": "Pão brioche, Burger Artesanal 160g, Queijo , Salada (alface, tomate, cebola), Anéis de cebola empanada, Bacon e o espetacular molho Garlic Pepper. Para quem ama uma deliciosa cebola crocante para deixar o seu burger ainda mais imponente!",
   "price": "54,00",
   "img": "c7cc57c15112ac8d28e7c1ecf6284c0683efe52e.jpg"
  },
  {
   "name": "Demogorgon",
   "desc": "Hambúrguer artesanal de 160g, recheado com gorgonzola e bacon, queijo muçarela, crispy de couve com um toque de azeite trufado e o queridinho molho stud. Nem precisa jogar os dados para devorar essa obra do mal, né?",
   "price": "57,00",
   "img": "ef38e3745f518801ebee429074449a4f008a2d4a.jpg"
  },
  {
   "name": "Smush Burger",
   "desc": "Hambúrguer artesanal de 160g, trio de cogumelos finos flambados no sake, abacaxi fininho grelhado, molho stud, queijo, cebolinha verde. Esse é pra quem adora um tempero oriental!",
   "price": "53,00",
   "img": "c7db95f17a79e84dd6f17437f9a99b571f95f4f7.jpg"
  },
  {
   "name": "Smushroom (Veggie)",
   "desc": "Mix de Cogumelos da casa (porto, shitake , shimeji e paris) camadas de mussarela e tomate finalizado com abacaxi grelhado.",
   "price": "49,00",
   "img": "4e6318053287c2519cfc9487da8bb3a5003142d8.jpg"
  },
  {
   "name": "Pulled Pork Burger",
   "desc": "Pão australiano, hambúrguer 160g, pulled pork suculenta, bacon fatiado crocante, queijo cheddar, molho barbecue e cebolinha. Uma combinação irresistível de sabor defumado, e suculência em cada mordida.",
   "price": "58,00",
   "img": "4f95bd89ba3bf8c4860a35d06ac1c8972e8ee8cd.jpg"
  }
 ],
 "Bebidas": [
  {
   "name": "Refil",
   "desc": "Coca, Coca Zero, Fanta Guaraná, Sprite e Fanta Laranja . Individual e intransferivél. (Sabores sujeitos a disponibilidade)",
   "price": "17,90",
   "img": "4f398f3b8483d0fdab521e2365b7586f71aee46e.jpg"
  },
  {
   "name": "Sucos Naturais",
   "desc": "Escolha o seu suco natural. 500 ml",
   "price": "14,00",
   "img": "a8370a5e2ba5c22e571ac7f98d1785a9b6c40231.jpg"
  },
  {
   "name": "Cremes",
   "desc": "Nossos deliciosos cremes, usando leite condensado e a polpa do seu suco favorito!!!",
   "price": "19,00",
   "img": "2d513fed9fea8062b5e7f02be8d21ae68d9f92f4.jpg"
  },
  {
   "name": "Água sem Gás",
   "desc": "350ml",
   "price": "6,00",
   "img": "a2682c51fc73ff80bff8f1c8467895faf9df9415.jpg"
  },
  {
   "name": "Água com Gás",
   "desc": "350ml",
   "price": "6,50",
   "img": "c39323f9322de61cf048f7f65a60540e1a7cfc21.jpg"
  },
  {
   "name": "Refrigerante Lata",
   "desc": "Coca Lata, Coca Lata Zero, Guarana Antártica, Guarana Antártica Zero, Fanta Laranja, Sprite, Sprite Zero, Schweppes Citrus.",
   "price": "8,00",
   "img": "7a80466e86c75b3dfd29dccb54afe9779768e3d5.jpg"
  },
  {
   "name": "Coca Cola Ks",
   "desc": "290 ml",
   "price": "8,00",
   "img": "099de3d3bb94c9cc1dc2da0e6190468ccfa12b95.jpg"
  },
  {
   "name": "Coca Cola Zero Ks",
   "desc": "290 ml",
   "price": "8,00",
   "img": "ac80c7b352cabe091f65f7bde776e3fc9f78ec4c.jpg"
  },
  {
   "name": "Pink Lemonade (sem Álcool)",
   "desc": "Drink cítrico a base de limão, morango, hortelã e água com gás",
   "price": "21,00",
   "img": "703364565497ab2e6f2fbe4843b40da9eca7028b.jpg"
  },
  {
   "name": "Soda Italiana",
   "desc": "Amora, Cranberry, Tangerina, Maça Verde, Maracujá ou Gengibre.",
   "price": "18,90",
   "img": "41a1c9c2d29a586cf88bc711e74aee802d3a09e8.jpg"
  },
  {
   "name": "Chá Mate Gelado",
   "desc": "Feito na casa, batido com limão, gelo e açúcar.",
   "price": "13,50",
   "img": "4985567936db36ffea774b24f10edf4f3a8f46e9.jpg"
  },
  {
   "name": "Del Valle Latas",
   "desc": "Sabores: Uva, Maracujá e Pessego. 290ml",
   "price": "9,00",
   "img": "5d142c8d97ff7bc5358a93627cc4dac8c657a0ce.jpg"
  },
  {
   "name": "H2Oh Limoneto",
   "desc": "510ml",
   "price": "9,00",
   "img": "835606d61a5a0fb0d17304f9c3d9bd0d1fe3ecd3.jpg"
  },
  {
   "name": "H2Oh Limão",
   "desc": "510ml",
   "price": "9,00",
   "img": "74fa50283e00e15679afae67fc5b467f17e29bec.jpg"
  },
  {
   "name": "Água Tônica Zero",
   "desc": "350ml",
   "price": "8,00",
   "img": "be9bf710bc8e11306e118ddbd24e8aa85a8e401b.jpg"
  },
  {
   "name": "Água Tônica",
   "desc": "350ml",
   "price": "8,00",
   "img": "78e0889a96b80f70c95b48b536556b8b9d2bcf55.jpg"
  },
  {
   "name": "Red Bull Tradicional",
   "desc": "Energy Drink, Sugar Free e Tropical.",
   "price": "14,90",
   "img": "4f5cc282f756a27e93f6e90c884bd6973cfffada.jpg"
  },
  {
   "name": "Red Bull Zero",
   "desc": "Red Bull Zero açucar",
   "price": "14,90",
   "img": "0d7552e0d0d45c274e6afb2074bbe3f75177ba32.jpg"
  },
  {
   "name": "Red Bull Tropical",
   "desc": "Red Bull Tropical",
   "price": "14,90",
   "img": "3c39ad976687263e850af4c2ddf85d34e56cf770.jpg"
  },
  {
   "name": "Red Bull Melancia",
   "desc": "Red Bull Melancia",
   "price": "14,90",
   "img": "bb63dbeb50b987c8bc61d8d6e8fb9811711ea255.jpg"
  }
 ],
 "Bebidas Alcoólicas": [
  {
   "name": "Chopp Colombina Pilsen",
   "desc": "300ml - A Colombina Puro Malte é leve e refrescante, bem equilibrada e fácil de beber. O aroma é marcado por notas herbais e florais do lúpulo Saaz, oriundo da República Tcheca. CARACTERÍSTICAS: 11 IBU (nível de Amargor), 4, 5% Teor Alcoólico",
   "price": "14,90",
   "img": "9a763ba8be3032e64891c7dd828846e04ff31365.jpg"
  },
  {
   "name": "Chopp Colombina Ipa",
   "desc": "300ml - A Colombina IPA leva em sua composição rapadura moça branca, uma rapadura batida à mão, típica do Cerrado. A moça branca e os maltes torrados trazem notas aromáticas adocicadas, que equilibram o tradicional amargor do estilo. O dry hopping com o lúpulo australiano Galaxy traz notas frutadas e cítricas, lembrando maracujá. CARACTERÍSTICAS: 40 IBU (nível de Amargor), 6% Teor Alcoólico",
   "price": "16,90",
   "img": "0bd37c4cdb8405f5236a6eb4d2161570db6e71ef.jpg"
  },
  {
   "name": "Heineken",
   "desc": "355ml",
   "price": "13,90",
   "img": "590b164ca8822d3603c3c13f8342256b4546ab65.jpg"
  },
  {
   "name": "Heineken Zero",
   "desc": "355ml",
   "price": "12,90",
   "img": "bcb54a5e41e84840de86efcd974e849dd4823993.jpg"
  },
  {
   "name": "Corona",
   "desc": "355ml",
   "price": "13,50",
   "img": "4f0461446a36d15e98dd0f8247128849897d5457.jpg"
  },
  {
   "name": "Stella Artois",
   "desc": "330ml",
   "price": "13,90",
   "img": "cda9c5e807f402eec4cb61a0a707719f77d20c26.jpg"
  },
  {
   "name": "Eisenbahn Pilsen",
   "desc": "355ml",
   "price": "12,50",
   "img": "9cec560d0f032b666ff29b0cd821960e01f1acb9.jpg"
  },
  {
   "name": "Sol",
   "desc": "355ml",
   "price": "12,50",
   "img": "aa727328423f6999a4a6318e669aa5ef0a4d9f75.jpg"
  },
  {
   "name": "Colombina Session Ipa",
   "desc": "355ml",
   "price": "13,50",
   "img": "e4e63bf10d44ea17b91e37fb705de563d2aef32b.jpg"
  },
  {
   "name": "Colombina Cold Brew Lager",
   "desc": "355ml",
   "price": "13,50",
   "img": "5bb02839f9b92aaa75c797474280799586ce25f6.jpg"
  },
  {
   "name": "Colombina Puro Malte",
   "desc": "355ml",
   "price": "12,50",
   "img": "9b34373bffedf3096379c74e1b5cb1846eec799a.jpg"
  },
  {
   "name": "Dose Vodka Smirnoff",
   "desc": "",
   "price": "13,90",
   "img": "8c127b5befd74fd934db6aecb399e9059740d660.jpg"
  },
  {
   "name": "Dose Tequila Jose Cuervo",
   "desc": "",
   "price": "18,00",
   "img": "20817ea37456bda4fae1843ceaedfaa906ac728d.jpg"
  },
  {
   "name": "Dose Vodka Absolut",
   "desc": "",
   "price": "17,90",
   "img": "c04dbf29e79150c2965d685b676df67bee46f4d8.jpg"
  },
  {
   "name": "Dose Whisky Old Par",
   "desc": "",
   "price": "20,00",
   "img": "e64955fb6433bdc237a013cfc71d2c79ccb9a6dd.jpg"
  },
  {
   "name": "Dose Cachaça",
   "desc": "",
   "price": "10,00",
   "img": "13b7c0f09cbecde2f58e1aabab6ceb6d030f5ec1.jpg"
  },
  {
   "name": "Dose Gin Rocks",
   "desc": "",
   "price": "18,00",
   "img": "8a972631b21db0d099e974d85f8914f43e0903ab.jpg"
  }
 ],
 "Drinks": [
  {
   "name": "Tropical Fire",
   "desc": "Novidade no Cardápio!! Coquetel vibrante de tequila com maracujá, tangerina e suco de limão, finalizado com borda de sal. Refrescante, cítrico e cheio de personalidade.",
   "price": "22,90",
   "img": "307c6713e1fce92f8fa807bffdaed9220cfe857a.jpg"
  },
  {
   "name": "Punk Lemonade",
   "desc": "Drink cítrico a base de limão, morango, hortelã, vodka e água com gás.",
   "price": "26,00",
   "img": "d01d54c3ba3835890f9da4fd464e62f92e15a08b.jpg"
  },
  {
   "name": "Romuleta",
   "desc": "Drink a base de morango, amora, framboesa, limão siciliano e vodka",
   "price": "27,00",
   "img": "c0ec79a3f196911a9d180ef6faef4b2cd6f3ffba.jpg"
  },
  {
   "name": "Caipirinha 2 Limões c/ Rapadura",
   "desc": "Refresque seus sentidos com nossa Caipirinha Especial de Limões e Rapadura! Uma combinação única que harmoniza a acidez cítrica de dois limões frescos com a doçura autêntica da rapadura.",
   "price": "28,25",
   "img": "e3508da6d9dd952f790f31cacc16d8d0e8496f33.jpg"
  },
  {
   "name": "Mojito",
   "desc": "Bacardi, hortelã, limão Taiti e água com gás.",
   "price": "24,00",
   "img": "56871930d50a61c7b172694a9d46777efd8f2cbc.jpg"
  },
  {
   "name": "Cosmopolitan",
   "desc": "",
   "price": "27,00",
   "img": "ae3c5bc6bc8552fea98bedcc68573afe16715820.jpg"
  },
  {
   "name": "Preparo de Cozumel",
   "desc": "Dose de limão, gelo e a sua cerveja long neck favorita bem gelada",
   "price": "6,00",
   "img": "1441cb192417bf683bbccc76bd098ccfb81ee79f.jpg"
  },
  {
   "name": "Caipirinhas",
   "desc": "",
   "price": "24,90",
   "img": "392ba4e1686fd65cb5fa62a683a301ef4c55de2a.jpg"
  },
  {
   "name": "Caipivodkas",
   "desc": "Vodka Nacional",
   "price": "26,00",
   "img": "39965f4c26caf13ab645f6138dc10c0ff3d843aa.jpg"
  },
  {
   "name": "Clássico",
   "desc": "Vodka + Red Bull.",
   "price": "27,90",
   "img": "e134d66a93e073827fbf694c837d3d9dc6d49dbb.jpg"
  },
  {
   "name": "Tropical Gin",
   "desc": "Red Bull Tropical, Dose de Gin e Rodela de Laranja.",
   "price": "28,90",
   "img": "fa8dd3949ab0d4de2cd7ae03d95fb4dcc8247ce7.jpg"
  },
  {
   "name": "Meia Sete (67 Kcal)",
   "desc": "Red Bull Sugar Free, Dose de Gin e Rodela de Limão.",
   "price": "28,90",
   "img": "90eaa99aa1ec693cf8998593fbc991abe5bebfd7.jpg"
  },
  {
   "name": "Gin Tônica Sabores",
   "desc": "",
   "price": "27,00",
   "img": "71ea21a32be88d57c8223628b564ecac95ea35e8.jpg"
  },
  {
   "name": "Gin-Tônica",
   "desc": "Rodela de limão, água tônica e gin.",
   "price": "25,90",
   "img": "52f1299518155cdc68bc09566b574cc400f66f69.jpg"
  }
 ],
 "Sobremesas": [
  {
   "name": "Nutella Burger",
   "desc": "Um exagero de nutella com morangos frescos no pão Australiano tostado!",
   "price": "26,00",
   "img": "46e8e60e6ba62ce9835401b869450aa66c86052e.jpg"
  },
  {
   "name": "Shake Studio Burger",
   "desc": "",
   "price": "25,00",
   "img": "6d94ec992dd8747110f19f0fd10ebd70be1a4db9.jpg"
  },
  {
   "name": "Brownie com Sorvete",
   "desc": "Brownie de chocolate com sorvete de baunilha.",
   "price": "19,90",
   "img": "a9a5c65d06eee226654fc16693d845a9999e4914.jpg"
  },
  {
   "name": "Brownie Studio",
   "desc": "Deliciosos brownies, diversos sabores. *Vem embaladinho, ideal para viagem",
   "price": "13,00",
   "img": "f69c103d7765cb3cfe1ff67a498db7095985c756.jpg"
  },
  {
   "name": "Pudim",
   "desc": "",
   "price": "12,90",
   "img": "0b2f43f312eb9d9e4175411b8a9487e0eae9dabc.jpg"
  }
 ]
};
