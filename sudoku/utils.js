export const ocurrencias = (arreglo, valor) => {
  let cadena = arreglo.join(",").replace(/-|,/g, ""); //unir por',' y despues reemplazar '-' y ',' por ""
  let arr = cadena.split("").sort((x, y) => x - y);
  let ocu = 0;

  arr.forEach((el) => {
    if (el == valor) {
      ocu += 1;
    }
  });

  return 9 - ocu;
};

export const tablero=()=>{

  const t0 = [
    [
      [
        "--74916-5",
        "2---6-3-9",
        "-----7-1-",
        "-586----4",
        "--3----9-",
        "--62--187",
        "9-4-7---2",
        "67-83----",
        "81--45---",
      ],
      [
        "387491625",
        "241568379",
        "569327418",
        "758619234",
        "123784596",
        "496253187",
        "934176852",
        "675832941",
        "812945763",
      ],
    ],
    [
      [
        "-4-6-7-2-",
        "8-------9",
        "--25-41--",
        "-7-835-6-",
        "-5-----8-",
        "-9-746-5-",
        "--43-97--",
        "7-------5",
        "-8-4-1-3-",
      ],
      [
        "145697823",
        "867123549",
        "932584176",
        "271835964",
        "456912387",
        "398746251",
        "624359718",
        "713268495",
        "589471632",
      ],
    ],
    [
      [
        "---3-942-",
        "41---7-9-",
        "3-96--1--",
        "65-4-18-9",
        "---------",
        "9-27-8-61",
        "--7--25-6",
        "-8-1---32",
        "-945-3---",
      ],
      [
        "768319425",
        "415287693",
        "329645187",
        "653421879",
        "871936254",
        "942758361",
        "137892546",
        "586174932",
        "294563718",
      ],
    ],
    [
      [
        "--65-1-8-",
        "8-473-5--",
        "-3-----27",
        "9--4-8-62",
        "-1--6--5-",
        "46-1-2--3",
        "18-----4-",
        "--9-842-5",
        "-4-2-78--",
      ],
      [
        "796521384",
        "824736591",
        "531849627",
        "953478162",
        "217963458",
        "468152973",
        "182395746",
        "379684215",
        "645217839",
      ],
    ],
  ];

return t0[Math.floor((Math.random() * 4))]

};

