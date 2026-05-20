const PRODUCTS = [
  {
    "item": "3082700",
    "plu": "8270",
    "name": "ER Choy 25# (NEW CROP)",
    "origin": "Mexico",
    "category": "Vegetable"
  },
  {
    "item": "3084000",
    "plu": "8400",
    "name": "Fresh Jicama 35#",
    "origin": "USA",
    "category": "Vegetable"
  },
  {
    "item": "3084100",
    "plu": "8410",
    "name": "Aloe Vera, 25#",
    "origin": "USA",
    "category": "Vegetable"
  },
  {
    "item": "3084600",
    "plu": "8460",
    "name": "Maitake Mushroom, 5# (NEW)",
    "origin": "USA",
    "category": "Vegetable"
  },
  {
    "item": "3090080",
    "plu": "UPC",
    "name": "OG Red Sweet Potato 10/3# bag",
    "origin": "USA",
    "category": "Vegetable"
  },
  {
    "item": "3090081",
    "plu": "UPC",
    "name": "OG White Sweet Potato 10/3# bag",
    "origin": "USA",
    "category": "Vegetable"
  },
  {
    "item": "3090082",
    "plu": "UPC",
    "name": "OG Orange Sweet Potato 10/3# bag",
    "origin": "USA",
    "category": "Vegetable"
  },
  {
    "item": "3090084",
    "plu": "UPC",
    "name": "OG Korean King Oyster Mushroom, 15/300g",
    "origin": "Korea",
    "category": "Vegetable"
  },
  {
    "item": "3090135",
    "plu": "UPC",
    "name": "ORGANIC SHITAKE MUSHROOM, 12/4oz (NEW)",
    "origin": "USA",
    "category": "Vegetable"
  },
  {
    "item": "3090136",
    "plu": "UPC",
    "name": "ORGANIC OYSTER MUSHROOM, 12/4oz (NEW)",
    "origin": "USA",
    "category": "Vegetable"
  },
  {
    "item": "3090826",
    "plu": "UPC",
    "name": "Organic Ginger - 8 oz (NEW)",
    "origin": "Peru",
    "category": "Vegetable"
  },
  {
    "item": "3091332",
    "plu": "UPC",
    "name": "OG Mini King Oyster Mushroom 15/300 g",
    "origin": "Korea",
    "category": "Vegetable"
  },
  {
    "item": "3094191",
    "plu": "UPC",
    "name": "OG Bean Sprout, 6/9oz",
    "origin": "USA",
    "category": "Vegetable"
  },
  {
    "item": "3094192",
    "plu": "UPC",
    "name": "Fuji OG Bean Sprout, 14/9oz",
    "origin": "USA",
    "category": "Vegetable"
  },
  {
    "item": "3095580",
    "plu": "UPC",
    "name": "OG Purple Sweet Potato 12/3LB",
    "origin": "USA",
    "category": "Vegetable"
  },
  {
    "item": "3005630",
    "plu": "563",
    "name": "Shanghai Bok Choy Sum 30#",
    "origin": "USA / Mexico",
    "category": "Vegetable"
  },
  {
    "item": "3005821",
    "plu": "582",
    "name": "Crystal Ice Plant 10#",
    "origin": "USA / Mexico",
    "category": "Vegetable"
  },
  {
    "item": "3005941",
    "plu": "594",
    "name": "Iron Nagarimo (China) 22#",
    "origin": "USA",
    "category": "Vegetable"
  },
  {
    "item": "3005970",
    "plu": "597",
    "name": "Taku Choy Mui 10#",
    "origin": "China",
    "category": "Vegetable"
  },
  {
    "item": "3006000",
    "plu": "600",
    "name": "Chinese Lo Bok 40#",
    "origin": "USA",
    "category": "Vegetable"
  },
  {
    "item": "3006040",
    "plu": "604",
    "name": "Fresh Peanut, 40#",
    "origin": "USA / Mexico",
    "category": "Vegetable"
  },
  {
    "item": "3006050",
    "plu": "605",
    "name": "Gobo, 22#",
    "origin": "USA",
    "category": "Vegetable"
  },
  {
    "item": "3006140",
    "plu": "614",
    "name": "Eggplant-24s",
    "origin": "Taiwan / China",
    "category": "Vegetable"
  },
  {
    "item": "3006290",
    "plu": "629",
    "name": "On Choy Mui 20#",
    "origin": "Mexico / USA",
    "category": "Vegetable"
  },
  {
    "item": "3006310",
    "plu": "631",
    "name": "Fresh Lily Bulb, 11# (YURINE)",
    "origin": "USA",
    "category": "Vegetable"
  },
  {
    "item": "3006323",
    "plu": "632",
    "name": "Fresh Water Bamboo 30#",
    "origin": "Japan",
    "category": "Vegetable"
  },
  {
    "item": "3006360",
    "plu": "UPC",
    "name": "Seafood Mushroom (Snow White), 40 PK",
    "origin": "USA",
    "category": "Vegetable"
  },
  {
    "item": "3006760",
    "plu": "676",
    "name": "Beefsteak Tomato, 15# (Limited)",
    "origin": "China",
    "category": "Vegetable"
  },
  {
    "item": "3006913",
    "plu": "691",
    "name": "Deepa, 25s",
    "origin": "USA",
    "category": "Vegetable"
  },
  {
    "item": "3006930",
    "plu": "693",
    "name": "PURPLE YAM (CALIFORNIA) 40#",
    "origin": "Mexico / Canada",
    "category": "Vegetable"
  },
  {
    "item": "3081140",
    "plu": "8114",
    "name": "Don Gua (Long Green Skin) (NEW ITEM)",
    "origin": "USA / Mexico",
    "category": "Vegetable"
  },
  {
    "item": "3081291",
    "plu": "8129",
    "name": "Shanghai Ji Mao 10#",
    "origin": "USA",
    "category": "Vegetable"
  },
  {
    "item": "3081360",
    "plu": "8136",
    "name": "White Yam 40# (Premium)",
    "origin": "USA",
    "category": "Vegetable"
  },
  {
    "item": "3081370",
    "plu": "8137",
    "name": "Red Yam, 40# (Premium)",
    "origin": "USA",
    "category": "Vegetable"
  },
  {
    "item": "3082400",
    "plu": "8240",
    "name": "Lotus Root (Vacuum Pack) 22#",
    "origin": "China",
    "category": "Vegetable"
  },
  {
    "item": "1370430",
    "plu": "43",
    "name": "Carrot, 25#",
    "origin": "USA / Canada",
    "category": "Vegetable"
  },
  {
    "item": "1370440",
    "plu": "44",
    "name": "Chestnut, 50# (Jumbo)",
    "origin": "China",
    "category": "Vegetable"
  },
  {
    "item": "3000451",
    "plu": "45",
    "name": "Cilantro, 5 Doz.",
    "origin": "USA / Mexico",
    "category": "Vegetable"
  },
  {
    "item": "3000461",
    "plu": "46",
    "name": "Celery, 24's",
    "origin": "USA / Mexico",
    "category": "Vegetable"
  },
  {
    "item": "3000036",
    "plu": "UPC",
    "name": "Shiitake Mushroom, 10/6 oz",
    "origin": "USA",
    "category": "Vegetable"
  },
  {
    "item": "3000466",
    "plu": "UPC",
    "name": "Cauliflower Mushroom, 20/150g - NEW",
    "origin": "China",
    "category": "Vegetable"
  },
  {
    "item": "3000474",
    "plu": "47",
    "name": "Chinese Celery, 20#",
    "origin": "USA / Mexico",
    "category": "Vegetable"
  },
  {
    "item": "3000475",
    "plu": "UPC",
    "name": "Assorted Mushroom, 12/14oz (NEW)",
    "origin": "China",
    "category": "Vegetable"
  },
  {
    "item": "3000480",
    "plu": "UPC",
    "name": "ANTLER MUSHROOM, 12/200G",
    "origin": "China",
    "category": "Vegetable"
  },
  {
    "item": "3000481",
    "plu": "48",
    "name": "Garlic Stem 20# (New Crop)",
    "origin": "Mexico",
    "category": "Vegetable"
  },
  {
    "item": "1370500",
    "plu": "50",
    "name": "Tian Jin Cucumber 30# - Limited",
    "origin": "USA",
    "category": "Vegetable"
  },
  {
    "item": "1370510",
    "plu": "51",
    "name": "Cucumber, 72's",
    "origin": "USA / Mexico",
    "category": "Vegetable"
  },
  {
    "item": "3000513",
    "plu": "UPC",
    "name": "King Oyster Mushroom 10/6 oz",
    "origin": "USA",
    "category": "Vegetable"
  },
  {
    "item": "3000514",
    "plu": "UPC",
    "name": "Green Pea Shoots, 8/2-ct (NEW)",
    "origin": "USA",
    "category": "Vegetable"
  },
  {
    "item": "3000515",
    "plu": "UPC",
    "name": "King Oyster Mushroom (Korea), 15/300g",
    "origin": "Korea",
    "category": "Vegetable"
  },
  {
    "item": "3000521",
    "plu": "52",
    "name": "English Cucumber, 12 EA",
    "origin": "USA / Mexico",
    "category": "Vegetable"
  },
  {
    "item": "3000527",
    "plu": "UPC",
    "name": "MINI KING OYSTER MUSHROOM, 18/300g",
    "origin": "China",
    "category": "Vegetable"
  },
  {
    "item": "1370533",
    "plu": "53",
    "name": "Japanese Cucumber Nagatoshi 10#",
    "origin": "USA",
    "category": "Vegetable"
  },
  {
    "item": "3000541",
    "plu": "UPC",
    "name": "Mini Cucumber, 12/1#",
    "origin": "USA",
    "category": "Vegetable"
  },
  {
    "item": "3000548",
    "plu": "54",
    "name": "Persian Cucumber, 18#",
    "origin": "Canada / Mexico",
    "category": "Vegetable"
  },
  {
    "item": "1370210",
    "plu": "21",
    "name": "BRUSSEL SPROUT, 25#",
    "origin": "Mexico",
    "category": "Vegetable"
  },
  {
    "item": "1370240",
    "plu": "24",
    "name": "Beet, 25#",
    "origin": "USA",
    "category": "Vegetable"
  },
  {
    "item": "1370280",
    "plu": "1028",
    "name": "Cauliflower, 12's",
    "origin": "USA",
    "category": "Vegetable"
  },
  {
    "item": "1370290",
    "plu": "29",
    "name": "Cabbage, 45#",
    "origin": "USA / Mexico",
    "category": "Vegetable"
  },
  {
    "item": "1370300",
    "plu": "30",
    "name": "Red Cabbage, 40#",
    "origin": "USA",
    "category": "Vegetable"
  },
  {
    "item": "1370322",
    "plu": "32",
    "name": "Chayote, 40#",
    "origin": "Costa Rica / Mexico / USA",
    "category": "Vegetable"
  },
  {
    "item": "3000252",
    "plu": "UPC",
    "name": "MUSHROOM MEDLEY, 24/4 oz",
    "origin": "USA / Mexico",
    "category": "Vegetable"
  },
  {
    "item": "3000331",
    "plu": "UPC",
    "name": "Sweet Corn, 12/4 pc",
    "origin": "USA / Mexico",
    "category": "Vegetable"
  },
  {
    "item": "3000341",
    "plu": "34",
    "name": "Green Chive, 25#",
    "origin": "USA / Mexico",
    "category": "Vegetable"
  },
  {
    "item": "1370352",
    "plu": "35",
    "name": "Yellow Chive, 10#",
    "origin": "Mexico / USA",
    "category": "Vegetable"
  },
  {
    "item": "3000364",
    "plu": "36",
    "name": "Chive Bud, 15#",
    "origin": "USA / Mexico",
    "category": "Vegetable"
  },
  {
    "item": "1370371",
    "plu": "37",
    "name": "Thai Chili, 30#",
    "origin": "USA / Mexico",
    "category": "Vegetable"
  },
  {
    "item": "3000392",
    "plu": "39",
    "name": "Jalapeno, 38#",
    "origin": "USA",
    "category": "Vegetable"
  },
  {
    "item": "3000400",
    "plu": "UPC",
    "name": "KING OYSTER MUSHROOM, 12/4 oz",
    "origin": "USA / Mexico",
    "category": "Vegetable"
  },
  {
    "item": "3000402",
    "plu": "40",
    "name": "Serrano Chili, 38#",
    "origin": "USA",
    "category": "Vegetable"
  },
  {
    "item": "3000404",
    "plu": "UPC",
    "name": "Yellow Oyster Mushroom, 12/4 oz",
    "origin": "USA",
    "category": "Vegetable"
  },
  {
    "item": "3000405",
    "plu": "UPC",
    "name": "OYSTER MUSHROOM, 12/4 oz",
    "origin": "USA",
    "category": "Vegetable"
  },
  {
    "item": "1370410",
    "plu": "41",
    "name": "Red Chili, 10#",
    "origin": "USA / Mexico",
    "category": "Vegetable"
  },
  {
    "item": "3000415",
    "plu": "UPC",
    "name": "Mini King Oyster Mushroom 8/300G",
    "origin": "USA",
    "category": "Vegetable"
  },
  {
    "item": "3000416",
    "plu": "UPC",
    "name": "SHIITAKE MUSHROOM, 12/4 oz",
    "origin": "USA",
    "category": "Vegetable"
  },
  {
    "item": "3909230",
    "plu": "923",
    "name": "Gan Lu Pear - 7.7# Gift Box",
    "origin": "China",
    "category": "Fruit"
  },
  {
    "item": "3909260",
    "plu": "926",
    "name": "Hunnyz Apple - 40 lb (New Item)",
    "origin": "USA",
    "category": "Fruit"
  },
  {
    "item": "3922720",
    "plu": "UPC",
    "name": "Sun Gold Kiwi - 8/2# Clamshell (New Item)",
    "origin": "New Zealand",
    "category": "Fruit"
  },
  {
    "item": "3992412",
    "plu": "UPC",
    "name": "Organic Fuji Apple - 12/2# Bag",
    "origin": "USA",
    "category": "Fruit"
  },
  {
    "item": "3992814",
    "plu": "UPC",
    "name": "Organic Yellow Mango - 6/6 pc Clamshell",
    "origin": "Mexico",
    "category": "Fruit"
  },
  {
    "item": "3993471",
    "plu": "UPC",
    "name": "Organic Gala Apple - 12/2# Bag",
    "origin": "USA",
    "category": "Fruit"
  },
  {
    "item": "3994790",
    "plu": "UPC",
    "name": "Organic Cuties Mandarin - 15/2# Bag",
    "origin": "USA",
    "category": "Fruit"
  },
  {
    "item": "3907217",
    "plu": "721",
    "name": "Sweet Emerald Apple - 6/3.5 lb Box",
    "origin": "USA",
    "category": "Fruit"
  },
  {
    "item": "3907233",
    "plu": "UPC",
    "name": "Stem & Leaf Tangerine - 6/3# Clamshells",
    "origin": "USA",
    "category": "Fruit"
  },
  {
    "item": "3907270",
    "plu": "727",
    "name": "Sand Pear - 22#",
    "origin": "China",
    "category": "Fruit"
  },
  {
    "item": "3907417",
    "plu": "741",
    "name": "Envy Apple - 27#",
    "origin": "USA",
    "category": "Fruit"
  },
  {
    "item": "3907860",
    "plu": "UPC",
    "name": "Sand Pear - 12/4 pc Clamshell",
    "origin": "China",
    "category": "Fruit"
  },
  {
    "item": "3907880",
    "plu": "5788",
    "name": "Champagne Yellow Mango - 16/18 ct",
    "origin": "Mexico",
    "category": "Fruit"
  },
  {
    "item": "3907901",
    "plu": "790",
    "name": "Orri Mandarin - 22#",
    "origin": "Israel",
    "category": "Fruit"
  },
  {
    "item": "3907961",
    "plu": "UPC",
    "name": "Cotton Candy Grapes - 10/1# Clamshell",
    "origin": "Chile",
    "category": "Fruit"
  },
  {
    "item": "3907990",
    "plu": "799",
    "name": "Yellow Dragon Fruit - 5.5# (Limited Supply)",
    "origin": "Ecuador",
    "category": "Fruit"
  },
  {
    "item": "3908033",
    "plu": "803",
    "name": "Snow Fuji Apple - 9.9#",
    "origin": "China",
    "category": "Fruit"
  },
  {
    "item": "3908082",
    "plu": "808",
    "name": "Lime, 200's",
    "origin": "Mexico",
    "category": "Fruit"
  },
  {
    "item": "3908161",
    "plu": "UPC",
    "name": "China Golden Pear - 8/3 pc Clamshell",
    "origin": "China",
    "category": "Fruit"
  },
  {
    "item": "3908230",
    "plu": "823",
    "name": "Yellow Opal Apple - 27#",
    "origin": "USA",
    "category": "Fruit"
  },
  {
    "item": "3908240",
    "plu": "824",
    "name": "Sugar Bee Apple - 40#",
    "origin": "USA",
    "category": "Fruit"
  },
  {
    "item": "3908502",
    "plu": "850",
    "name": "Cosmic Crisp Apple - 40#",
    "origin": "USA",
    "category": "Fruit"
  },
  {
    "item": "3908800",
    "plu": "880",
    "name": "Red Seedless Watermelon (Bin) - 60 ct (New Item)",
    "origin": "Mexico",
    "category": "Fruit"
  },
  {
    "item": "3908891",
    "plu": "889",
    "name": "Green Pomelo (Red Meat) - 22#",
    "origin": "Vietnam",
    "category": "Fruit"
  },
  {
    "item": "3909021",
    "plu": "902",
    "name": "Wogan Mandarin - 19.5# (Waiting for new container)",
    "origin": "China",
    "category": "Fruit"
  },
  {
    "item": "3909070",
    "plu": "907",
    "name": "Papa Ponkan - 6.5#",
    "origin": "China",
    "category": "Fruit"
  },
  {
    "item": "3903105",
    "plu": "310",
    "name": "Black Plum - 16#",
    "origin": "Chile",
    "category": "Fruit"
  },
  {
    "item": "1393122",
    "plu": "312",
    "name": "Red Plum - 16#",
    "origin": "Chile",
    "category": "Fruit"
  },
  {
    "item": "1393141",
    "plu": "314",
    "name": "Pomegranate - 8#",
    "origin": "Israel",
    "category": "Fruit"
  },
  {
    "item": "1393172",
    "plu": "317",
    "name": "Golden Pineapple - 6's",
    "origin": "Mexico / Costa Rica",
    "category": "Fruit"
  },
  {
    "item": "3903181",
    "plu": "UPC",
    "name": "Blueberries - 12/18 oz Clamshell (CA New Crop)",
    "origin": "USA",
    "category": "Fruit"
  },
  {
    "item": "3903182",
    "plu": "UPC",
    "name": "Blueberries - 12/11 oz Dry Pint",
    "origin": "Mexico",
    "category": "Fruit"
  },
  {
    "item": "1393190",
    "plu": "319",
    "name": "Mexican Papaya - 30#",
    "origin": "Mexico",
    "category": "Fruit"
  },
  {
    "item": "1393200",
    "plu": "320",
    "name": "Strawberry - 8/1# pk",
    "origin": "USA / Mexico",
    "category": "Fruit"
  },
  {
    "item": "3903289",
    "plu": "328",
    "name": "California Orange (Navel) - 36#",
    "origin": "USA",
    "category": "Fruit"
  },
  {
    "item": "1393400",
    "plu": "340",
    "name": "Murcott Tangerines - 25#",
    "origin": "USA",
    "category": "Fruit"
  },
  {
    "item": "1393421",
    "plu": "342",
    "name": "Gold Nugget Mandarin - 25#",
    "origin": "USA",
    "category": "Fruit"
  },
  {
    "item": "1393430",
    "plu": "343",
    "name": "Mineola Tangelo - 40#",
    "origin": "USA",
    "category": "Fruit"
  },
  {
    "item": "1393460",
    "plu": "346",
    "name": "Gala Apple - 40#",
    "origin": "USA",
    "category": "Fruit"
  },
  {
    "item": "1393470",
    "plu": "347",
    "name": "Gala Apple - 12/3# Bag",
    "origin": "USA",
    "category": "Fruit"
  },
  {
    "item": "3904533",
    "plu": "453",
    "name": "Bartlett Pear - 40#",
    "origin": "USA",
    "category": "Fruit"
  },
  {
    "item": "1394560",
    "plu": "456",
    "name": "Dragon Fruit (Red Meat) - 10#",
    "origin": "Vietnam / Ecuador",
    "category": "Fruit"
  },
  {
    "item": "3904591",
    "plu": "UPC",
    "name": "Frozen Dried Persimmon - 12/3# Box",
    "origin": "China",
    "category": "Fruit"
  },
  {
    "item": "3904672",
    "plu": "UPC",
    "name": "Cara Cara Orange - 12/3# Bag",
    "origin": "USA",
    "category": "Fruit"
  },
  {
    "item": "1394794",
    "plu": "UPC",
    "name": "Cuties Mandarin - 10/3# Bag",
    "origin": "Chile",
    "category": "Fruit"
  },
  {
    "item": "3907061",
    "plu": "706",
    "name": "Lemon - 115's",
    "origin": "USA / Mexico",
    "category": "Fruit"
  },
  {
    "item": "1392512",
    "plu": "251",
    "name": "Red Cherries - 16# (CA New Crop)",
    "origin": "USA",
    "category": "Fruit"
  },
  {
    "item": "3902537",
    "plu": "253",
    "name": "Sugar Plum - 11#",
    "origin": "Chile",
    "category": "Fruit"
  },
  {
    "item": "1392631",
    "plu": "263",
    "name": "Guava - 20# (Florida)",
    "origin": "USA",
    "category": "Fruit"
  },
  {
    "item": "1392640",
    "plu": "264",
    "name": "Black Seedless Grapes - 18#",
    "origin": "Chile",
    "category": "Fruit"
  },
  {
    "item": "1392650",
    "plu": "265",
    "name": "Green Seedless Grapes - 18#",
    "origin": "Chile",
    "category": "Fruit"
  },
  {
    "item": "1392660",
    "plu": "266",
    "name": "Red Seedless Grapes - 18#",
    "origin": "Chile",
    "category": "Fruit"
  },
  {
    "item": "1392690",
    "plu": "269",
    "name": "Red Globe Grapes - 19#",
    "origin": "Chile",
    "category": "Fruit"
  },
  {
    "item": "1392710",
    "plu": "271",
    "name": "Kumquat - 10#",
    "origin": "USA",
    "category": "Fruit"
  },
  {
    "item": "3902724",
    "plu": "272",
    "name": "Sun Gold Kiwi - 18/2 ct (New Item)",
    "origin": "New Zealand",
    "category": "Fruit"
  },
  {
    "item": "3902735",
    "plu": "UPC",
    "name": "Green Kiwi - 8/2# Clamshells",
    "origin": "USA / Greece",
    "category": "Fruit"
  },
  {
    "item": "3902781",
    "plu": "278",
    "name": "Fresh Longan - 11#",
    "origin": "Vietnam",
    "category": "Fruit"
  },
  {
    "item": "1392810",
    "plu": "281",
    "name": "Yellow Mango - 14/16 ct (Limited Supply)",
    "origin": "Mexico",
    "category": "Fruit"
  },
  {
    "item": "1392830",
    "plu": "283",
    "name": "Large Mango (Kent Tommy) - 9/10's",
    "origin": "Mexico / Guatemala",
    "category": "Fruit"
  },
  {
    "item": "1392870",
    "plu": "287",
    "name": "Honeydew Melon - 5/6's",
    "origin": "Mexico",
    "category": "Fruit"
  },
  {
    "item": "1392881",
    "plu": "288",
    "name": "Mini Seedless Watermelon - 6/8's",
    "origin": "Mexico",
    "category": "Fruit"
  },
  {
    "item": "1392910",
    "plu": "291",
    "name": "Korean Yellow Melon - 10#",
    "origin": "Mexico",
    "category": "Fruit"
  },
  {
    "item": "1392922",
    "plu": "292",
    "name": "Hami Melon - 25#",
    "origin": "Mexico",
    "category": "Fruit"
  },
  {
    "item": "1393010",
    "plu": "301",
    "name": "Hawaii Papaya - 10# (Limited Supply)",
    "origin": "USA",
    "category": "Fruit"
  },
  {
    "item": "1393026",
    "plu": "302",
    "name": "White Peach - 18# (CA New Crop)",
    "origin": "USA",
    "category": "Fruit"
  },
  {
    "item": "1393050",
    "plu": "305",
    "name": "Bose Pear - 40#",
    "origin": "USA",
    "category": "Fruit"
  },
  {
    "item": "1393060",
    "plu": "306",
    "name": "D’Anjou Pear - 40#",
    "origin": "USA",
    "category": "Fruit"
  },
  {
    "item": "1370570",
    "plu": "57",
    "name": "Young Coco - 9's",
    "origin": "Thailand",
    "category": "Fruit"
  },
  {
    "item": "1379234",
    "plu": "9234",
    "name": "Organic Fuji Apple - 40#",
    "origin": "USA",
    "category": "Fruit"
  },
  {
    "item": "3900064",
    "plu": "UPC",
    "name": "China Shingo Pear - 8/3 pc Clamshell",
    "origin": "China",
    "category": "Fruit"
  },
  {
    "item": "3900071",
    "plu": "UPC",
    "name": "Rockit Apple - 6/3# Clamshell",
    "origin": "USA",
    "category": "Fruit"
  },
  {
    "item": "3900083",
    "plu": "UPC",
    "name": "Jumbo Blueberries - 12/9.8 oz Clamshell (Limited Supply)",
    "origin": "USA",
    "category": "Fruit"
  },
  {
    "item": "3900125",
    "plu": "UPC",
    "name": "Baby Orri Mandarin - 10/3# Bag",
    "origin": "Israel",
    "category": "Fruit"
  },
  {
    "item": "3900183",
    "plu": "UPC",
    "name": "Ruby Red Kiwi - 8/1# Clamshell (New Item)",
    "origin": "New Zealand",
    "category": "Fruit"
  },
  {
    "item": "3900226",
    "plu": "UPC",
    "name": "Sumo Tangerine - 12/2# Bag",
    "origin": "USA",
    "category": "Fruit"
  },
  {
    "item": "3900735",
    "plu": "UPC",
    "name": "Nansui Pear - 8/3 pc Clamshells",
    "origin": "China",
    "category": "Fruit"
  },
  {
    "item": "3902075",
    "plu": "UPC",
    "name": "Kyo-Ho Grapes - 10/2# Clamshell",
    "origin": "Chile",
    "category": "Fruit"
  },
  {
    "item": "1392290",
    "plu": "229",
    "name": "Red Delicious Apple - 40#",
    "origin": "USA",
    "category": "Fruit"
  },
  {
    "item": "1392340",
    "plu": "234",
    "name": "Fuji Apple - 40#",
    "origin": "USA",
    "category": "Fruit"
  },
  {
    "item": "3902362",
    "plu": "236",
    "name": "Avocado - 70 ct",
    "origin": "USA / Mexico",
    "category": "Fruit"
  },
  {
    "item": "1392410",
    "plu": "241",
    "name": "Fuji Apple - 12/3# Bag",
    "origin": "USA",
    "category": "Fruit"
  },
  {
    "item": "1379242",
    "plu": "9242",
    "name": "Organic Banana - 38#",
    "origin": "Ecuador / Guatemala",
    "category": "Fruit"
  },
  {
    "item": "1392420",
    "plu": "242",
    "name": "Del Monte Banana - 40#",
    "origin": "Ecuador / Guatemala",
    "category": "Fruit"
  },
  {
    "item": "3902441",
    "plu": "244",
    "name": "Saba Banana - 35#",
    "origin": "Mexico",
    "category": "Fruit"
  },
  {
    "item": "1392450",
    "plu": "245",
    "name": "Manzano Banana - 20#",
    "origin": "Colombia",
    "category": "Fruit"
  },
  {
    "item": "3902461",
    "plu": "246",
    "name": "Plantain Banana (Green)",
    "origin": "Ecuador",
    "category": "Fruit"
  },
  {
    "item": "1392470",
    "plu": "247",
    "name": "Baby Banana - 15#",
    "origin": "Ecuador / Guatemala",
    "category": "Fruit"
  },
  {
    "item": "3902481",
    "plu": "UPC",
    "name": "Korean Shingo Pear - 8/3 pc Clamshell",
    "origin": "Korea",
    "category": "Fruit"
  },
  {
    "item": "1392500",
    "plu": "250",
    "name": "Cantaloupe - 35#",
    "origin": "Mexico / Offshore",
    "category": "Fruit"
  }
];
