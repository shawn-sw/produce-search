const PRODUCTS = [
  {
    "article_no": "3082700",
    "plu": "8270",
    "description": "ER Choy 25# (NEW CROP)",
    "chinese_description": "油麦菜苗 25磅（新季）",
    "origin": "Mexico"
  },
  {
    "article_no": "3084000",
    "plu": "8400",
    "description": "Fresh Jicama 35#",
    "chinese_description": "新鲜豆薯 35磅",
    "origin": "USA"
  },
  {
    "article_no": "3084100",
    "plu": "8410",
    "description": "Aloe Vera, 25#",
    "chinese_description": "芦荟 25磅",
    "origin": "USA"
  },
  {
    "article_no": "3084600",
    "plu": "8460",
    "description": "Maitake Mushroom, 5# (NEW)",
    "chinese_description": "舞茸菇 5磅（新品）",
    "origin": "USA"
  },
  {
    "article_no": "3090080",
    "plu": "UPC",
    "description": "OG Red Sweet Potato 10/3# bag",
    "chinese_description": "有机红薯 10袋×3磅",
    "origin": "USA"
  },
  {
    "article_no": "3090081",
    "plu": "UPC",
    "description": "OG White Sweet Potato 10/3# bag",
    "chinese_description": "有机白薯 10袋×3磅",
    "origin": "USA"
  },
  {
    "article_no": "3090082",
    "plu": "UPC",
    "description": "OG Orange Sweet Potato 10/3# bag",
    "chinese_description": "有机橙心红薯 10袋×3磅",
    "origin": "USA"
  },
  {
    "article_no": "3090084",
    "plu": "UPC",
    "description": "OG Korean King Oyster Mushroom, 15/300g",
    "chinese_description": "有机韩国杏鲍菇 15盒/300克",
    "origin": "Korea"
  },
  {
    "article_no": "3090135",
    "plu": "UPC",
    "description": "ORGANIC SHITAKE MUSHROOM, 12/4oz (NEW)",
    "chinese_description": "有机香菇 12盒/4盎司（新品）",
    "origin": "USA"
  },
  {
    "article_no": "3090136",
    "plu": "UPC",
    "description": "ORGANIC OYSTER MUSHROOM, 12/4oz (NEW)",
    "chinese_description": "有机平菇 12盒/4盎司（新品）",
    "origin": "USA"
  },
  {
    "article_no": "3090826",
    "plu": "UPC",
    "description": "Organic Ginger - 8 oz (NEW)",
    "chinese_description": "有机姜 8盎司（新品）",
    "origin": "Peru"
  },
  {
    "article_no": "3091332",
    "plu": "UPC",
    "description": "OG Mini King Oyster Mushroom 15/300 g",
    "chinese_description": "有机迷你杏鲍菇 15盒/300克",
    "origin": "Korea"
  },
  {
    "article_no": "3094191",
    "plu": "UPC",
    "description": "OG Bean Sprout, 6/9oz",
    "chinese_description": "有机豆芽 6盒/9盎司",
    "origin": "USA"
  },
  {
    "article_no": "3094192",
    "plu": "UPC",
    "description": "Fuji OG Bean Sprout, 14/9oz",
    "chinese_description": "富士有机豆芽 14盒/9盎司",
    "origin": "USA"
  },
  {
    "article_no": "3095580",
    "plu": "UPC",
    "description": "OG Purple Sweet Potato 12/3LB",
    "chinese_description": "有机紫薯 12袋/3磅",
    "origin": "USA"
  },
  {
    "article_no": "3005630",
    "plu": "563",
    "description": "Shanghai Bok Choy Sum 30#",
    "chinese_description": "上海菜心 30磅",
    "origin": "USA / Mexico"
  },
  {
    "article_no": "3005821",
    "plu": "582",
    "description": "Crystal Ice Plant 10#",
    "chinese_description": "冰菜 10磅",
    "origin": "USA / Mexico"
  },
  {
    "article_no": "3005941",
    "plu": "594",
    "description": "Iron Nagarimo (China) 22#",
    "chinese_description": "铁棍山药（中国）22磅",
    "origin": "USA"
  },
  {
    "article_no": "3005970",
    "plu": "597",
    "description": "Taku Choy Mui 10#",
    "chinese_description": "塔菜苗 10磅",
    "origin": "China"
  },
  {
    "article_no": "3006000",
    "plu": "600",
    "description": "Chinese Lo Bok 40#",
    "chinese_description": "白萝卜 40磅",
    "origin": "USA"
  },
  {
    "article_no": "3006040",
    "plu": "604",
    "description": "Fresh Peanut, 40#",
    "chinese_description": "新鲜花生 40磅",
    "origin": "USA / Mexico"
  },
  {
    "article_no": "3006050",
    "plu": "605",
    "description": "Gobo, 22#",
    "chinese_description": "牛蒡 22磅",
    "origin": "USA"
  },
  {
    "article_no": "3006140",
    "plu": "614",
    "description": "Eggplant-24s",
    "chinese_description": "茄子 24条装",
    "origin": "Taiwan / China"
  },
  {
    "article_no": "3006290",
    "plu": "629",
    "description": "On Choy Mui 20#",
    "chinese_description": "空心菜苗 20磅",
    "origin": "Mexico / USA"
  },
  {
    "article_no": "3006310",
    "plu": "631",
    "description": "Fresh Lily Bulb, 11# (YURINE)",
    "chinese_description": "新鲜百合 11磅",
    "origin": "USA"
  },
  {
    "article_no": "3006323",
    "plu": "632",
    "description": "Fresh Water Bamboo 30#",
    "chinese_description": "新鲜竹笋 30磅",
    "origin": "Japan"
  },
  {
    "article_no": "3006360",
    "plu": "UPC",
    "description": "Seafood Mushroom (Snow White), 40 PK",
    "chinese_description": "海鲜菇（雪白菇）40包",
    "origin": "USA"
  },
  {
    "article_no": "3006760",
    "plu": "676",
    "description": "Beefsteak Tomato, 15# (Limited)",
    "chinese_description": "牛排番茄 15磅（限量）",
    "origin": "China"
  },
  {
    "article_no": "3006913",
    "plu": "691",
    "description": "Deepa, 25s",
    "chinese_description": "冬瓜 25条装",
    "origin": "USA"
  },
  {
    "article_no": "3006930",
    "plu": "693",
    "description": "PURPLE YAM (CALIFORNIA) 40#",
    "chinese_description": "加州紫薯 40磅",
    "origin": "Mexico / Canada"
  },
  {
    "article_no": "3081140",
    "plu": "8114",
    "description": "Don Gua (Long Green Skin) (NEW ITEM)",
    "chinese_description": "冬瓜（长青皮）（新品）",
    "origin": "USA / Mexico"
  },
  {
    "article_no": "3081291",
    "plu": "8129",
    "description": "Shanghai Ji Mao 10#",
    "chinese_description": "上海鸡毛菜 10磅",
    "origin": "USA"
  },
  {
    "article_no": "3081360",
    "plu": "8136",
    "description": "White Yam 40# (Premium)",
    "chinese_description": "白山药 40磅（精品）",
    "origin": "USA"
  },
  {
    "article_no": "3081370",
    "plu": "8137",
    "description": "Red Yam, 40# (Premium)",
    "chinese_description": "红山药 40磅（精品）",
    "origin": "USA"
  },
  {
    "article_no": "3082400",
    "plu": "8240",
    "description": "Lotus Root (Vacuum Pack) 22#",
    "chinese_description": "莲藕（真空包装）22磅",
    "origin": "China"
  },
  {
    "article_no": "3004172",
    "plu": "417",
    "description": "Green Bean 27#",
    "chinese_description": "四季豆 27磅",
    "origin": "USA / Mexico"
  },
  {
    "article_no": "1374180",
    "plu": "418",
    "description": "Long Bean, 30#",
    "chinese_description": "长豆角 30磅",
    "origin": "USA / Mexico"
  },
  {
    "article_no": "1374320",
    "plu": "432",
    "description": "Orange Bell Pepper 11#",
    "chinese_description": "橙甜椒 11磅",
    "origin": "Canada"
  },
  {
    "article_no": "1374490",
    "plu": "449",
    "description": "MEXICAN SQUASH, 22#",
    "chinese_description": "墨西哥西葫芦 22磅",
    "origin": "Mexico"
  },
  {
    "article_no": "1374622",
    "plu": "UPC",
    "description": "HSUS Fresh GINSENG 8 oz (40 PK / BOX)",
    "chinese_description": "HSUS鲜人参 8盎司（40盒/箱）",
    "origin": "USA"
  },
  {
    "article_no": "1374710",
    "plu": "471",
    "description": "Taiwan Spinach, 20#",
    "chinese_description": "台湾菠菜 20磅",
    "origin": "USA / Mexico"
  },
  {
    "article_no": "1379127",
    "plu": "UPC",
    "description": "Hokto ORGANIC MUSHROOM BUNAPI, 24/100g",
    "chinese_description": "Hokto有机白玉菇 24盒/100克",
    "origin": "USA"
  },
  {
    "article_no": "1379128",
    "plu": "UPC",
    "description": "Hokto ORGANIC MUSHROOM BUNASHIMEJI, 24/100g",
    "chinese_description": "Hokto有机蟹味菇 24盒/100克",
    "origin": "USA"
  },
  {
    "article_no": "3000062",
    "plu": "UPC",
    "description": "Sliced Lily Bulb, 36/125 g",
    "chinese_description": "百合片 36盒/125克",
    "origin": "China"
  },
  {
    "article_no": "3000067",
    "plu": "UPC",
    "description": "GREEN BEAN (BAG), 10/12 oz",
    "chinese_description": "袋装四季豆 10袋/12盎司",
    "origin": "Mexico"
  },
  {
    "article_no": "3000095",
    "plu": "UPC",
    "description": "Poached Bamboo Shoot, 20/16oz",
    "chinese_description": "水煮竹笋 20盒/16盎司",
    "origin": "China"
  },
  {
    "article_no": "3004193",
    "plu": "UPC",
    "description": "Bean Sprout, 25/16 oz",
    "chinese_description": "豆芽 25盒/16盎司",
    "origin": "USA"
  },
  {
    "article_no": "3004201",
    "plu": "UPC",
    "description": "Soy Bean Sprout, 20/1#",
    "chinese_description": "黄豆芽 20袋/1磅",
    "origin": "USA"
  },
  {
    "article_no": "3004203",
    "plu": "UPC",
    "description": "Fuji Soybean Sprouts, 12/12oz",
    "chinese_description": "富士黄豆芽 12盒/12盎司",
    "origin": "USA"
  },
  {
    "article_no": "3004842",
    "plu": "484",
    "description": "Romano Bean 13#",
    "chinese_description": "罗马豆 13磅",
    "origin": "Mexico"
  },
  {
    "article_no": "3005331",
    "plu": "533",
    "description": "Chinese Cauliflower 25#",
    "chinese_description": "中国菜花 25磅",
    "origin": "Mexico / USA"
  },
  {
    "article_no": "3005530",
    "plu": "553",
    "description": "TURMERIC, 30#",
    "chinese_description": "姜黄 30磅",
    "origin": "Fiji / USA"
  },
  {
    "article_no": "3005590",
    "plu": "559",
    "description": "Red Spinche Mui 20# (New Crop)",
    "chinese_description": "红菠菜苗 20磅（新季）",
    "origin": "USA"
  },
  {
    "article_no": "3000172",
    "plu": "UPC",
    "description": "Purple Sweet Potato 18/1# (MICROWAVEABLE)",
    "chinese_description": "紫薯 18袋/1磅（微波即食）",
    "origin": "USA"
  },
  {
    "article_no": "3001561",
    "plu": "UPC",
    "description": "Mini Sweet Potato 18/1# (MICROWAVEABLE)",
    "chinese_description": "迷你红薯 18袋/1磅（微波即食）",
    "origin": "USA"
  },
  {
    "article_no": "1373610",
    "plu": "361",
    "description": "Crown Broccoli, 19#",
    "chinese_description": "西兰花冠 19磅",
    "origin": "USA / Mexico"
  },
  {
    "article_no": "3003670",
    "plu": "367",
    "description": "INDIAN BITTER MELON, 30#",
    "chinese_description": "印度苦瓜 30磅",
    "origin": "USA / Mexico"
  },
  {
    "article_no": "1373710",
    "plu": "371",
    "description": "Baby Bok Choy Mui, 20#",
    "chinese_description": "小白菜苗 20磅",
    "origin": "USA / Mexico"
  },
  {
    "article_no": "1373720",
    "plu": "372",
    "description": "Yu Choy Mui, 20#",
    "chinese_description": "油菜苗 20磅",
    "origin": "USA / Mexico"
  },
  {
    "article_no": "1373730",
    "plu": "373",
    "description": "Small Bok Choy Mui, 20#",
    "chinese_description": "小白菜苗 20磅",
    "origin": "USA / Mexico"
  },
  {
    "article_no": "1373780",
    "plu": "378",
    "description": "Gai Lan Mui, 20#",
    "chinese_description": "芥蓝苗 20磅",
    "origin": "USA / Mexico"
  },
  {
    "article_no": "3003791",
    "plu": "379",
    "description": "Large Bok Choy Mui, 25# (NEW)",
    "chinese_description": "大白菜苗 25磅（新品）",
    "origin": "Mexico"
  },
  {
    "article_no": "1373860",
    "plu": "386",
    "description": "Korean Chili (Sweet Chili) 20# - Limited",
    "chinese_description": "韩国甜辣椒 20磅（限量）",
    "origin": "USA / Mexico"
  },
  {
    "article_no": "3003871",
    "plu": "387",
    "description": "TWISTER CHILI (SHISHITO) 20#",
    "chinese_description": "皱皮辣椒（Shishito）20磅",
    "origin": "USA / Mexico"
  },
  {
    "article_no": "3003891",
    "plu": "389",
    "description": "Baby Cabbage (Wawa Choy), 25#",
    "chinese_description": "娃娃菜 25磅",
    "origin": "Mexico"
  },
  {
    "article_no": "1374030",
    "plu": "403",
    "description": "Asparagus, 11# - Limited",
    "chinese_description": "芦笋 11磅（限量）",
    "origin": "USA / Mexico"
  },
  {
    "article_no": "1374040",
    "plu": "404",
    "description": "A Choy Sun (Lettuce Stem), 40#",
    "chinese_description": "油麦菜茎 40磅",
    "origin": "USA / Mexico"
  },
  {
    "article_no": "3004052",
    "plu": "UPC",
    "description": "Radish Sprout, 4 PK",
    "chinese_description": "萝卜苗 4包",
    "origin": "USA"
  },
  {
    "article_no": "1374070",
    "plu": "407",
    "description": "Small Bok Choy Sum, 30#",
    "chinese_description": "小白菜心 30磅",
    "origin": "USA / Mexico"
  },
  {
    "article_no": "3004091",
    "plu": "409",
    "description": "Taiwan Bok Choy, 25#",
    "chinese_description": "台湾白菜 25磅",
    "origin": "USA / Mexico"
  },
  {
    "article_no": "1374100",
    "plu": "410",
    "description": "Baby Bok Choy, 30#",
    "chinese_description": "小白菜 30磅",
    "origin": "USA / Mexico"
  },
  {
    "article_no": "1374110",
    "plu": "411",
    "description": "Long Bok Choy, 30#",
    "chinese_description": "长白菜 30磅",
    "origin": "USA / Mexico"
  },
  {
    "article_no": "1374120",
    "plu": "412",
    "description": "BABY DILL, 1/12 EA",
    "chinese_description": "嫩莳萝 1箱12把",
    "origin": "Mexico"
  },
  {
    "article_no": "1374145",
    "plu": "UPC",
    "description": "Bamboo Shoot, 20/300 g",
    "chinese_description": "竹笋 20盒/300克",
    "origin": "China"
  },
  {
    "article_no": "1374160",
    "plu": "416",
    "description": "Bitter Melon, 30#",
    "chinese_description": "苦瓜 30磅",
    "origin": "USA / Mexico"
  },
  {
    "article_no": "1371932",
    "plu": "193",
    "description": "Small Taro, 30#",
    "chinese_description": "小芋头 30磅",
    "origin": "Mexico / Honduras / Nicaragua"
  },
  {
    "article_no": "1371940",
    "plu": "194",
    "description": "Sweet Tamarind, 16/1#",
    "chinese_description": "甜罗望子 16盒/1磅",
    "origin": "Thailand"
  },
  {
    "article_no": "3001963",
    "plu": "196",
    "description": "White Long Bean, 25# (Limited)",
    "chinese_description": "白长豆角 25磅（限量）",
    "origin": "USA / Mexico"
  },
  {
    "article_no": "1371972",
    "plu": "197",
    "description": "Tomato, 20#",
    "chinese_description": "番茄 20磅",
    "origin": "USA / Mexico"
  },
  {
    "article_no": "1371980",
    "plu": "UPC",
    "description": "Cherry Tomato 12 pk",
    "chinese_description": "樱桃番茄 12盒装",
    "origin": "USA"
  },
  {
    "article_no": "1371990",
    "plu": "199",
    "description": "Roma Tomato, 25#",
    "chinese_description": "罗马番茄 25磅",
    "origin": "USA / Mexico"
  },
  {
    "article_no": "1372030",
    "plu": "UPC",
    "description": "Grape Tomato, 12 PK",
    "chinese_description": "葡萄番茄 12盒装",
    "origin": "Mexico"
  },
  {
    "article_no": "1372041",
    "plu": "204",
    "description": "Watercress, 2 Doz.",
    "chinese_description": "西洋菜 2打",
    "origin": "USA"
  },
  {
    "article_no": "3002053",
    "plu": "205",
    "description": "On Choy 30#",
    "chinese_description": "空心菜 30磅",
    "origin": "USA"
  },
  {
    "article_no": "1372060",
    "plu": "206",
    "description": "Tomato on the vine, 11# Limited",
    "chinese_description": "藤蔓番茄 11磅（限量）",
    "origin": "USA / Mexico"
  },
  {
    "article_no": "3002073",
    "plu": "207",
    "description": "Water chestnut 20# (Vacuum Packed)",
    "chinese_description": "马蹄 20磅（真空包装）",
    "origin": "China"
  },
  {
    "article_no": "3002082",
    "plu": "208",
    "description": "FRESH GINKGO NUT, 20#",
    "chinese_description": "新鲜银杏果 20磅",
    "origin": "China"
  },
  {
    "article_no": "1372090",
    "plu": "209",
    "description": "Don Qua (800# BIN)",
    "chinese_description": "冬瓜（800磅箱装）",
    "origin": "USA / Mexico"
  },
  {
    "article_no": "3002101",
    "plu": "210",
    "description": "Water On Choy 20# (NEW CROP)",
    "chinese_description": "水空心菜 20磅（新季）",
    "origin": "USA"
  },
  {
    "article_no": "1372120",
    "plu": "212",
    "description": "Yu Choy Sum, 30#",
    "chinese_description": "油菜心 30磅",
    "origin": "USA / Mexico"
  },
  {
    "article_no": "1372140",
    "plu": "214",
    "description": "Yucca Root, 35#",
    "chinese_description": "木薯根 35磅",
    "origin": "Costa Rica"
  },
  {
    "article_no": "3002291",
    "plu": "UPC",
    "description": "OYSTER MUSHROOM 3#",
    "chinese_description": "平菇 3磅",
    "origin": "USA"
  },
  {
    "article_no": "1373340",
    "plu": "334",
    "description": "Peanut, 50#",
    "chinese_description": "花生 50磅",
    "origin": "USA"
  },
  {
    "article_no": "1373350",
    "plu": "335",
    "description": "Fresh Walnut with shell, 50#",
    "chinese_description": "带壳鲜核桃 50磅",
    "origin": "USA"
  },
  {
    "article_no": "3001582",
    "plu": "158",
    "description": "Green Papaya, 30#",
    "chinese_description": "青木瓜 30磅",
    "origin": "USA / Mexico"
  },
  {
    "article_no": "3001622",
    "plu": "162",
    "description": "Anaheim Pepper, 25#",
    "chinese_description": "阿纳海姆辣椒 25磅",
    "origin": "USA / Mexico"
  },
  {
    "article_no": "1371630",
    "plu": "163",
    "description": "Green Bell Pepper, 25#",
    "chinese_description": "青甜椒 25磅",
    "origin": "USA / Mexico"
  },
  {
    "article_no": "3001635",
    "plu": "UPC",
    "description": "Mini Bell Pepper 12/1# bag",
    "chinese_description": "迷你甜椒 12袋/1磅",
    "origin": "USA / Mexico"
  },
  {
    "article_no": "3001642",
    "plu": "164",
    "description": "Red Bell Pepper, 15#",
    "chinese_description": "红甜椒 15磅",
    "origin": "USA / Mexico"
  },
  {
    "article_no": "1371660",
    "plu": "166",
    "description": "Snow Pea, 10#",
    "chinese_description": "荷兰豆 10磅",
    "origin": "USA / Guatemala / Peru / Mexico"
  },
  {
    "article_no": "2371730",
    "plu": "UPC",
    "description": "Pea Sprouts, 24/8oz (bag)",
    "chinese_description": "豌豆苗 24袋/8盎司（袋装）",
    "origin": "USA"
  },
  {
    "article_no": "3001671",
    "plu": "167",
    "description": "Snow Pea Leaf, 10# (Special Cut)",
    "chinese_description": "荷兰豆叶 10磅（精选切割）",
    "origin": "Mexico / USA"
  },
  {
    "article_no": "1371680",
    "plu": "168",
    "description": "Sugar Snap Pea, 10#",
    "chinese_description": "甜脆豌豆 10磅",
    "origin": "USA / Guatemala / Peru / Mexico"
  },
  {
    "article_no": "1371700",
    "plu": "170",
    "description": "Yellow Bell Pepper, 11#",
    "chinese_description": "黄甜椒 11磅",
    "origin": "Mexico / Canada"
  },
  {
    "article_no": "1371710",
    "plu": "171",
    "description": "Chili Leaf 10# (NEW CROP)",
    "chinese_description": "辣椒叶 10磅（新季）",
    "origin": "USA"
  },
  {
    "article_no": "3001732",
    "plu": "173",
    "description": "Pea Sprout, 4# (NEW)",
    "chinese_description": "豌豆苗 4磅（新品）",
    "origin": "USA"
  },
  {
    "article_no": "3001791",
    "plu": "179",
    "description": "Taiwan Squash 30# (NEW CROP)",
    "chinese_description": "台湾西葫芦 30磅（新季）",
    "origin": "USA / Mexico"
  },
  {
    "article_no": "1371800",
    "plu": "180",
    "description": "Spinach, 24s",
    "chinese_description": "菠菜 24把",
    "origin": "USA / Mexico"
  },
  {
    "article_no": "1371810",
    "plu": "181",
    "description": "Mong Toi (Vietnamese Spinach) 25# (Limited)",
    "chinese_description": "越南菠菜 25磅（限量）",
    "origin": "USA"
  },
  {
    "article_no": "1371820",
    "plu": "182",
    "description": "Shallots, 40#",
    "chinese_description": "红葱头 40磅",
    "origin": "China / USA"
  },
  {
    "article_no": "1371850",
    "plu": "185",
    "description": "Italian Squash, 22#",
    "chinese_description": "意大利西葫芦 22磅",
    "origin": "USA / Mexico"
  },
  {
    "article_no": "3001901",
    "plu": "190",
    "description": "Taro (Vacuum Pack), 40#",
    "chinese_description": "芋头（真空包装）40磅",
    "origin": "USA"
  },
  {
    "article_no": "1371921",
    "plu": "192",
    "description": "Large Taro, 40#",
    "chinese_description": "大芋头 40磅",
    "origin": "Mexico"
  },
  {
    "article_no": "3001361",
    "plu": "UPC",
    "description": "Baby Bella Mushroom (Crimini) 12/8 oz",
    "chinese_description": "迷你褐菇（Crimini）12盒/8盎司",
    "origin": "USA / Canada"
  },
  {
    "article_no": "1371371",
    "plu": "137",
    "description": "Napa, 50#",
    "chinese_description": "大白菜/绍菜 50磅",
    "origin": "USA / Mexico / Canada"
  },
  {
    "article_no": "3001380",
    "plu": "138",
    "description": "Long Napa, 35#",
    "chinese_description": "长白菜 35磅",
    "origin": "USA / Mexico"
  },
  {
    "article_no": "1371400",
    "plu": "140",
    "description": "Bamboo Shoot, 22#",
    "chinese_description": "竹笋 22磅",
    "origin": "China"
  },
  {
    "article_no": "1371410",
    "plu": "141",
    "description": "Opo, 40#",
    "chinese_description": "蒲瓜 40磅",
    "origin": "USA / Mexico"
  },
  {
    "article_no": "3001421",
    "plu": "142",
    "description": "Okra, 14#",
    "chinese_description": "秋葵 14磅",
    "origin": "USA / Honduras / Nicaragu"
  },
  {
    "article_no": "1371440",
    "plu": "144",
    "description": "Sinqua, 30#",
    "chinese_description": "丝瓜 30磅",
    "origin": "USA / Mexico"
  },
  {
    "article_no": "1371450",
    "plu": "145",
    "description": "Green Onion, 48's",
    "chinese_description": "青葱 48把",
    "origin": "USA / Mexico"
  },
  {
    "article_no": "1371460",
    "plu": "146",
    "description": "Brown Onion, 50#",
    "chinese_description": "黄洋葱 50磅",
    "origin": "USA"
  },
  {
    "article_no": "1371470",
    "plu": "147",
    "description": "Red Onion 25#",
    "chinese_description": "红洋葱 25磅",
    "origin": "USA"
  },
  {
    "article_no": "1371480",
    "plu": "148",
    "description": "White Onion, 50#",
    "chinese_description": "白洋葱 50磅",
    "origin": "USA"
  },
  {
    "article_no": "1371510",
    "plu": "151",
    "description": "Brown Onion Bag, 16/3# Bag",
    "chinese_description": "袋装黄洋葱 16袋/3磅",
    "origin": "USA"
  },
  {
    "article_no": "1371520",
    "plu": "152",
    "description": "White Potato, 50#",
    "chinese_description": "白土豆 50磅",
    "origin": "USA"
  },
  {
    "article_no": "1371540",
    "plu": "154",
    "description": "Potato, 50#",
    "chinese_description": "土豆 50磅",
    "origin": "USA"
  },
  {
    "article_no": "1371550",
    "plu": "155",
    "description": "Potato, 10/5# Bag",
    "chinese_description": "土豆 10袋/5磅",
    "origin": "USA"
  },
  {
    "article_no": "1371551",
    "plu": "1551",
    "description": "Potato, 5/10# Bag",
    "chinese_description": "土豆 5袋/10磅",
    "origin": "USA"
  },
  {
    "article_no": "1371560",
    "plu": "156",
    "description": "Sweet Potato (PREMIUM #1) 40#",
    "chinese_description": "精品红薯 40磅",
    "origin": "USA"
  },
  {
    "article_no": "1371570",
    "plu": "157",
    "description": "Red Potato, 50#",
    "chinese_description": "红皮土豆 50磅",
    "origin": "USA"
  },
  {
    "article_no": "3001562",
    "plu": "UPC",
    "description": "SWEET POTATO (5LB BOX), 1/5 LB - Giftbox",
    "chinese_description": "红薯礼盒 5磅装",
    "origin": "USA"
  },
  {
    "article_no": "1371090",
    "plu": "1109",
    "description": "Lemon Grass, 40#",
    "chinese_description": "香茅 40磅",
    "origin": "USA"
  },
  {
    "article_no": "1371110",
    "plu": "111",
    "description": "Leek, 15# (1 Doz.)",
    "chinese_description": "韭葱 15磅（12把）",
    "origin": "USA / Mexico"
  },
  {
    "article_no": "1371120",
    "plu": "112",
    "description": "Fresh Leek 30# (NEW CROP)",
    "chinese_description": "新鲜韭葱 30磅（新季）",
    "origin": "USA"
  },
  {
    "article_no": "1371150",
    "plu": "115",
    "description": "Lotus Root 44#",
    "chinese_description": "莲藕 44磅",
    "origin": "China"
  },
  {
    "article_no": "1371260",
    "plu": "126",
    "description": "Moqua, 40#",
    "chinese_description": "毛瓜 40磅",
    "origin": "USA / Mexico"
  },
  {
    "article_no": "1371270",
    "plu": "UPC",
    "description": "China Honshimeji, 40 PK",
    "chinese_description": "中国鸿喜菇 40包",
    "origin": "China"
  },
  {
    "article_no": "1371271",
    "plu": "UPC",
    "description": "China Beech Mushroom, 40 PK",
    "chinese_description": "中国蟹味菇 40包",
    "origin": "China"
  },
  {
    "article_no": "1371280",
    "plu": "128",
    "description": "Celio Mushroom 12/8 oz",
    "chinese_description": "白玉菇 12盒/8盎司",
    "origin": "USA / Canada"
  },
  {
    "article_no": "3001292",
    "plu": "UPC",
    "description": "Oyster Mushroom, 10/6 oz",
    "chinese_description": "平菇 10盒/6盎司",
    "origin": "USA"
  },
  {
    "article_no": "3001293",
    "plu": "UPC",
    "description": "Oyster Mushroom, 20/6 oz",
    "chinese_description": "平菇 20盒/6盎司",
    "origin": "USA"
  },
  {
    "article_no": "1371301",
    "plu": "130",
    "description": "Shiitake Mushroom, 11#",
    "chinese_description": "香菇 11磅",
    "origin": "China"
  },
  {
    "article_no": "1371310",
    "plu": "UPC",
    "description": "Enoki Mushroom, 25/200g",
    "chinese_description": "金针菇 25盒/200克",
    "origin": "Korea"
  },
  {
    "article_no": "1371316",
    "plu": "UPC",
    "description": "Enoki Mushroom, 34/150g",
    "chinese_description": "金针菇 34盒/150克",
    "origin": "Korea"
  },
  {
    "article_no": "1371320",
    "plu": "132",
    "description": "Large Gai Choy, 30#",
    "chinese_description": "大芥菜 30磅",
    "origin": "USA / Mexico"
  },
  {
    "article_no": "1371330",
    "plu": "133",
    "description": "King Oyster Mushroom, 11#",
    "chinese_description": "杏鲍菇 11磅",
    "origin": "China"
  },
  {
    "article_no": "1371345",
    "plu": "UPC",
    "description": "Black Woodear, 8 pk / 6oz",
    "chinese_description": "黑木耳 8包/6盎司",
    "origin": "USA"
  },
  {
    "article_no": "1371360",
    "plu": "136",
    "description": "Portabella Mushroom, 5#",
    "chinese_description": "波特贝勒菇 5磅",
    "origin": "Canada / USA"
  },
  {
    "article_no": "3000127",
    "plu": "UPC",
    "description": "Mini King Oyster Mushroom 10/300g",
    "chinese_description": "迷你杏鲍菇 10盒/300克",
    "origin": "China"
  },
  {
    "article_no": "3001338",
    "plu": "UPC",
    "description": "Baby King Oyster Mushroom 30/200 g",
    "chinese_description": "迷你杏鲍菇 30盒/200克",
    "origin": "China / USA"
  },
  {
    "article_no": "3001356",
    "plu": "UPC",
    "description": "Mini King Oyster Mushroom, 15/300g (NEW)",
    "chinese_description": "迷你杏鲍菇 15盒/300克（新品）",
    "origin": "Korea"
  },
  {
    "article_no": "3000861",
    "plu": "86",
    "description": "Tong Ho, 25#",
    "chinese_description": "茼蒿 25磅",
    "origin": "USA"
  },
  {
    "article_no": "3000169",
    "plu": "UPC",
    "description": "Garlic (USA) 15/2 lbs.",
    "chinese_description": "美国大蒜 15袋/2磅",
    "origin": "USA"
  },
  {
    "article_no": "3000196",
    "plu": "UPC",
    "description": "Maitake Mushroom, 24/5.3 oz (150g) NEW",
    "chinese_description": "舞茸菇 24盒/5.3盎司（150克）（新品）",
    "origin": "China"
  },
  {
    "article_no": "3000882",
    "plu": "88",
    "description": "Cello Garlic, 60 ct",
    "chinese_description": "网袋蒜头 60袋装",
    "origin": "China"
  },
  {
    "article_no": "1370891",
    "plu": "89",
    "description": "Peeled Garlic 6 x 5 lbs.",
    "chinese_description": "去皮大蒜 6袋×5磅",
    "origin": "China"
  },
  {
    "article_no": "3000891",
    "plu": "UPC",
    "description": "Peeled Garlic, 20/1#",
    "chinese_description": "去皮大蒜 20袋/1磅",
    "origin": "China"
  },
  {
    "article_no": "3000894",
    "plu": "UPC",
    "description": "Fresh Peeled Garlic 20/8 oz",
    "chinese_description": "新鲜去皮大蒜 20盒/8盎司",
    "origin": "China"
  },
  {
    "article_no": "3090891",
    "plu": "UPC",
    "description": "Organic Peeled Garlic 20/8 oz",
    "chinese_description": "有机去皮大蒜 20盒/8盎司",
    "origin": "China"
  },
  {
    "article_no": "3000910",
    "plu": "91",
    "description": "Jicama, 35#",
    "chinese_description": "豆薯 35磅",
    "origin": "Mexico"
  },
  {
    "article_no": "3000941",
    "plu": "94",
    "description": "Taku Choy, 25#",
    "chinese_description": "塔菜 25磅",
    "origin": "USA / Mexico"
  },
  {
    "article_no": "1370950",
    "plu": "95",
    "description": "Kohlrabi, 40#",
    "chinese_description": "球茎甘蓝 40磅",
    "origin": "USA / Mexico"
  },
  {
    "article_no": "3000961",
    "plu": "96",
    "description": "Gai Lan, 25#",
    "chinese_description": "芥蓝 25磅",
    "origin": "USA / Mexico"
  },
  {
    "article_no": "3000971",
    "plu": "97",
    "description": "Kapocha, 30#",
    "chinese_description": "日本南瓜 30磅",
    "origin": "USA / Mexico / Canada"
  },
  {
    "article_no": "1370981",
    "plu": "98",
    "description": "Purple Yam (Hawaii) - Limited",
    "chinese_description": "夏威夷紫薯（限量）",
    "origin": "USA"
  },
  {
    "article_no": "1371000",
    "plu": "100",
    "description": "A Choy (Taiwan Lettuce), 20#",
    "chinese_description": "台湾油麦菜 20磅",
    "origin": "USA / Mexico"
  },
  {
    "article_no": "1371020",
    "plu": "102",
    "description": "Lettuce (Wrap), 24 EA",
    "chinese_description": "生菜（包菜型）24颗",
    "origin": "Mexico / USA"
  },
  {
    "article_no": "1371030",
    "plu": "103",
    "description": "Red Leaf, 24 EA",
    "chinese_description": "红叶生菜 24颗",
    "origin": "Mexico / USA"
  },
  {
    "article_no": "1371040",
    "plu": "104",
    "description": "Green Leaf, 24 EA",
    "chinese_description": "绿叶生菜 24颗",
    "origin": "Mexico / USA"
  },
  {
    "article_no": "3001062",
    "plu": "UPC",
    "description": "Romaine Heart Lettuce 12/3 pcs",
    "chinese_description": "罗马生菜心 12袋/3颗",
    "origin": "Mexico"
  },
  {
    "article_no": "3001080",
    "plu": "108",
    "description": "Lime Leaf, 1#",
    "chinese_description": "青柠叶 1磅",
    "origin": "USA"
  },
  {
    "article_no": "3000559",
    "plu": "UPC",
    "description": "SAVORY PROTEIN MUSHROOM MIX, 6/6oz (NEW)",
    "chinese_description": "高蛋白蘑菇混合包 6盒/6盎司（新品）",
    "origin": "USA"
  },
  {
    "article_no": "3000560",
    "plu": "UPC",
    "description": "ASIAN STIR-FRY MUSHROOM BLEND, 6/6oz (NEW)",
    "chinese_description": "亚洲炒菜蘑菇混合包 6盒/6盎司（新品）",
    "origin": "USA"
  },
  {
    "article_no": "3000561",
    "plu": "UPC",
    "description": "PASTA PERFECT MUSHROOM BLEND, 6/6oz (NEW)",
    "chinese_description": "意面蘑菇混合包 6盒/6盎司（新品）",
    "origin": "USA"
  },
  {
    "article_no": "3000562",
    "plu": "UPC",
    "description": "GRILL MASTER MUSHROOM BLEND, 6/6oz (NEW)",
    "chinese_description": "烧烤蘑菇混合包 6盒/6盎司（新品）",
    "origin": "USA"
  },
  {
    "article_no": "3000564",
    "plu": "UPC",
    "description": "SHABU SHABU MUSHROOM BLEND, 6/6oz (NEW)",
    "chinese_description": "寿喜锅蘑菇混合包 6盒/6盎司（新品）",
    "origin": "USA / China"
  },
  {
    "article_no": "3000591",
    "plu": "59",
    "description": "Korean Daikon, 40#",
    "chinese_description": "韩国白萝卜 40磅",
    "origin": "USA / Mexico"
  },
  {
    "article_no": "3000612",
    "plu": "UPC",
    "description": "King Oyster Mushroom (400g) 12/400g",
    "chinese_description": "杏鲍菇（400克）12盒/400克",
    "origin": "China"
  },
  {
    "article_no": "3000712",
    "plu": "71",
    "description": "INDIAN EGGPLANT, 30# (NEW)",
    "chinese_description": "印度茄子 30磅（新品）",
    "origin": "USA / Mexico"
  },
  {
    "article_no": "1370620",
    "plu": "62",
    "description": "Yam Leaves 20#",
    "chinese_description": "山药叶 20磅",
    "origin": "USA"
  },
  {
    "article_no": "1370640",
    "plu": "64",
    "description": "Nagarimo, 22# (NEW CROP)",
    "chinese_description": "长山药 22磅（新季）",
    "origin": "Japan"
  },
  {
    "article_no": "1370650",
    "plu": "65",
    "description": "Daikon, 40#",
    "chinese_description": "白萝卜 40磅",
    "origin": "USA"
  },
  {
    "article_no": "1370660",
    "plu": "66",
    "description": "Small Gai-Choy, 30#",
    "chinese_description": "小芥菜 30磅",
    "origin": "USA / Mexico"
  },
  {
    "article_no": "1370670",
    "plu": "67",
    "description": "Sher Li Hon, 30#",
    "chinese_description": "雪里红 30磅",
    "origin": "USA / Mexico"
  },
  {
    "article_no": "1370691",
    "plu": "69",
    "description": "Green Daikon, 40#",
    "chinese_description": "青萝卜 40磅",
    "origin": "USA / Mexico"
  },
  {
    "article_no": "1370700",
    "plu": "70",
    "description": "Taiwan Cabbage, 30#",
    "chinese_description": "台湾高丽菜 30磅",
    "origin": "USA / Mexico / Canada"
  },
  {
    "article_no": "1370720",
    "plu": "72",
    "description": "FILIPINO EGGPLANT, 30#",
    "chinese_description": "菲律宾茄子 30磅",
    "origin": "USA / Mexico"
  },
  {
    "article_no": "1370740",
    "plu": "74",
    "description": "Chinese Eggplant, 30#",
    "chinese_description": "中国茄子 30磅",
    "origin": "Mexico / USA"
  },
  {
    "article_no": "1370760",
    "plu": "76",
    "description": "THAI EGGPLANT, 38#",
    "chinese_description": "泰国茄子 38磅",
    "origin": "USA / Mexico"
  },
  {
    "article_no": "1370770",
    "plu": "77",
    "description": "Red Spinach 25# (NEW CROP)",
    "chinese_description": "红菠菜 25磅（新季）",
    "origin": "USA"
  },
  {
    "article_no": "1370820",
    "plu": "82",
    "description": "Ginger, 30#",
    "chinese_description": "姜 30磅",
    "origin": "China"
  },
  {
    "article_no": "1370430",
    "plu": "43",
    "description": "Carrot, 25#",
    "chinese_description": "胡萝卜 25磅",
    "origin": "USA / Mexico / Canada"
  },
  {
    "article_no": "1370440",
    "plu": "44",
    "description": "Chestnut, 50# (Jumbo)",
    "chinese_description": "栗子 50磅（特大）",
    "origin": "China"
  },
  {
    "article_no": "3000451",
    "plu": "45",
    "description": "Cilantro, 5 Doz.",
    "chinese_description": "香菜 5打",
    "origin": "USA / Mexico"
  },
  {
    "article_no": "3000461",
    "plu": "46",
    "description": "Celery, 24's",
    "chinese_description": "西芹 24把",
    "origin": "USA / Mexico"
  },
  {
    "article_no": "3000036",
    "plu": "UPC",
    "description": "Shiitake Mushroom, 10/6 oz",
    "chinese_description": "香菇 10盒/6盎司",
    "origin": "USA"
  },
  {
    "article_no": "3000466",
    "plu": "UPC",
    "description": "Cauliflower Mushroom, 20/150g - NEW",
    "chinese_description": "花菜菇 20盒/150克（新品）",
    "origin": "China"
  },
  {
    "article_no": "3000474",
    "plu": "47",
    "description": "Chinese Celery, 20#",
    "chinese_description": "中国芹菜 20磅",
    "origin": "USA / Mexico"
  },
  {
    "article_no": "3000475",
    "plu": "UPC",
    "description": "Assorted Mushroom, 12/14oz (NEW)",
    "chinese_description": "混合蘑菇 12盒/14盎司（新品）",
    "origin": "China"
  },
  {
    "article_no": "3000480",
    "plu": "UPC",
    "description": "ANTLER MUSHROOM, 12/200G",
    "chinese_description": "鹿茸菇 12盒/200克",
    "origin": "China"
  },
  {
    "article_no": "3000481",
    "plu": "48",
    "description": "Garlic Stem 20# (New Crop)",
    "chinese_description": "蒜苔 20磅（新季）",
    "origin": "Mexico"
  },
  {
    "article_no": "1370500",
    "plu": "50",
    "description": "Tian Jin Cucumber 30# - Limited",
    "chinese_description": "天津黄瓜 30磅（限量）",
    "origin": "USA"
  },
  {
    "article_no": "1370510",
    "plu": "51",
    "description": "Cucumber, 72's",
    "chinese_description": "黄瓜 72条装",
    "origin": "USA / Mexico"
  },
  {
    "article_no": "3000513",
    "plu": "UPC",
    "description": "King Oyster Mushroom 10/6 oz",
    "chinese_description": "杏鲍菇 10盒/6盎司",
    "origin": "USA"
  },
  {
    "article_no": "3000514",
    "plu": "UPC",
    "description": "Green Pea Shoots, 8/2-ct (NEW)",
    "chinese_description": "青豆苗 8盒/2把（新品）",
    "origin": "USA"
  },
  {
    "article_no": "3000515",
    "plu": "UPC",
    "description": "King Oyster Mushroom (Korea), 15/300g",
    "chinese_description": "韩国杏鲍菇 15盒/300克",
    "origin": "Korea"
  },
  {
    "article_no": "3000521",
    "plu": "52",
    "description": "English Cucumber, 12 EA",
    "chinese_description": "英国黄瓜 12条装",
    "origin": "USA / Mexico"
  },
  {
    "article_no": "3000527",
    "plu": "UPC",
    "description": "MINI KING OYSTER MUSHROOM, 18/300g",
    "chinese_description": "迷你杏鲍菇 18盒/300克",
    "origin": "China"
  },
  {
    "article_no": "1370533",
    "plu": "53",
    "description": "Japanese Cucumber Nagatoshi 10#",
    "chinese_description": "日本黄瓜 10磅",
    "origin": "USA"
  },
  {
    "article_no": "3000541",
    "plu": "UPC",
    "description": "Mini Cucumber, 12/1#",
    "chinese_description": "迷你黄瓜 12袋/1磅",
    "origin": "USA / Mexico / Canada"
  },
  {
    "article_no": "3000548",
    "plu": "54",
    "description": "Persian Cucumber, 18#",
    "chinese_description": "波斯黄瓜 18磅",
    "origin": "USA / Mexico"
  },
  {
    "article_no": "1370210",
    "plu": "21",
    "description": "BRUSSEL SPROUT, 25#",
    "chinese_description": "抱子甘蓝 25磅",
    "origin": "Mexico"
  },
  {
    "article_no": "1370240",
    "plu": "24",
    "description": "Beet, 25#",
    "chinese_description": "甜菜根 25磅",
    "origin": "USA"
  },
  {
    "article_no": "1370280",
    "plu": "1028",
    "description": "Cauliflower, 12's",
    "chinese_description": "花椰菜 12颗装",
    "origin": "USA"
  },
  {
    "article_no": "1370290",
    "plu": "29",
    "description": "Cabbage, 45#",
    "chinese_description": "包菜 45磅",
    "origin": "USA / Mexico"
  },
  {
    "article_no": "1370300",
    "plu": "30",
    "description": "Red Cabbage, 40#",
    "chinese_description": "紫甘蓝 40磅",
    "origin": "USA"
  },
  {
    "article_no": "1370322",
    "plu": "32",
    "description": "Chayote, 40#",
    "chinese_description": "佛手瓜 40磅",
    "origin": "Costa Rica / Mexico / USA"
  },
  {
    "article_no": "3000252",
    "plu": "UPC",
    "description": "MUSHROOM MEDLEY, 24/4 oz",
    "chinese_description": "混合蘑菇拼盘 24盒/4盎司",
    "origin": "USA"
  },
  {
    "article_no": "3000331",
    "plu": "UPC",
    "description": "Sweet Corn, 12/4 pc",
    "chinese_description": "甜玉米 12袋/4根",
    "origin": "USA / Mexico"
  },
  {
    "article_no": "3000341",
    "plu": "34",
    "description": "Green Chive, 25#",
    "chinese_description": "青韭菜 25磅",
    "origin": "USA / Mexico"
  },
  {
    "article_no": "1370352",
    "plu": "35",
    "description": "Yellow Chive, 10#",
    "chinese_description": "黄韭菜 10磅",
    "origin": "Mexico / USA"
  },
  {
    "article_no": "3000364",
    "plu": "36",
    "description": "Chive Bud, 15#",
    "chinese_description": "韭菜花 15磅",
    "origin": "USA / Mexico"
  },
  {
    "article_no": "1370371",
    "plu": "37",
    "description": "Thai Chili, 30#",
    "chinese_description": "泰国辣椒 30磅",
    "origin": "USA / Mexico"
  },
  {
    "article_no": "3000392",
    "plu": "39",
    "description": "Jalapeno, 38#",
    "chinese_description": "墨西哥辣椒（Jalapeno）38磅",
    "origin": "USA / Mexico"
  },
  {
    "article_no": "3000400",
    "plu": "UPC",
    "description": "KING OYSTER MUSHROOM, 12/4 oz",
    "chinese_description": "杏鲍菇 12盒/4盎司",
    "origin": "USA"
  },
  {
    "article_no": "3000402",
    "plu": "40",
    "description": "Serrano Chili, 38#",
    "chinese_description": "塞拉诺辣椒 38磅",
    "origin": "USA / Mexico"
  },
  {
    "article_no": "3000404",
    "plu": "UPC",
    "description": "Yellow Oyster Mushroom, 12/4 oz",
    "chinese_description": "黄平菇 12盒/4盎司",
    "origin": "USA"
  },
  {
    "article_no": "3000405",
    "plu": "UPC",
    "description": "OYSTER MUSHROOM, 12/4 oz",
    "chinese_description": "平菇 12盒/4盎司",
    "origin": "USA"
  },
  {
    "article_no": "1370410",
    "plu": "41",
    "description": "Red Chili, 10#",
    "chinese_description": "红辣椒 10磅",
    "origin": "USA / Mexico"
  },
  {
    "article_no": "3000415",
    "plu": "UPC",
    "description": "Mini King Oyster Mushroom 8/300G",
    "chinese_description": "迷你杏鲍菇 8盒/300克",
    "origin": "USA"
  },
  {
    "article_no": "3000416",
    "plu": "UPC",
    "description": "SHIITAKE MUSHROOM, 12/4 oz",
    "chinese_description": "香菇 12盒/4盎司",
    "origin": "USA"
  },
  {
    "article_no": "3909230",
    "plu": "923",
    "description": "Gan Lu Pear - 7.7# Gift Box",
    "chinese_description": "甘露梨 7.7磅礼盒",
    "origin": "China"
  },
  {
    "article_no": "3909260",
    "plu": "926",
    "description": "Hunnyz Apple - 40 lb (New Item)",
    "chinese_description": "Hunnyz苹果 40磅（新品）",
    "origin": "USA"
  },
  {
    "article_no": "3922720",
    "plu": "UPC",
    "description": "Sun Gold Kiwi - 8/2# Clamshell (New Item)",
    "chinese_description": "阳光金奇异果 8盒/2磅（新品）",
    "origin": "New Zealand"
  },
  {
    "article_no": "3992412",
    "plu": "UPC",
    "description": "Organic Fuji Apple - 12/2# Bag",
    "chinese_description": "有机富士苹果 12袋/2磅",
    "origin": "USA"
  },
  {
    "article_no": "3992814",
    "plu": "UPC",
    "description": "Organic Yellow Mango - 6/6 pc Clamshell",
    "chinese_description": "有机黄芒果 6盒/6个装",
    "origin": "Mexico"
  },
  {
    "article_no": "3993471",
    "plu": "UPC",
    "description": "Organic Gala Apple - 12/2# Bag",
    "chinese_description": "有机嘎啦苹果 12袋/2磅",
    "origin": "USA"
  },
  {
    "article_no": "3994790",
    "plu": "UPC",
    "description": "Organic \"Cuties\" Mandarin - 15/2# Bag",
    "chinese_description": "有机Cuties蜜橘 15袋/2磅",
    "origin": "USA"
  },
  {
    "article_no": "3907217",
    "plu": "721",
    "description": "Sweet Emerald Apple - 6/3.5 lb Box",
    "chinese_description": "甜翡翠苹果 6盒/3.5磅",
    "origin": "USA"
  },
  {
    "article_no": "3907233",
    "plu": "UPC",
    "description": "Stem & Leaf Tangerine - 6/3# Clamshells",
    "chinese_description": "带枝叶橘子 6盒/3磅",
    "origin": "USA"
  },
  {
    "article_no": "3907270",
    "plu": "727",
    "description": "Sand Pear - 22#",
    "chinese_description": "砂梨 22磅",
    "origin": "China"
  },
  {
    "article_no": "3907417",
    "plu": "741",
    "description": "Envy Apple - 27#",
    "chinese_description": "Envy苹果 27磅",
    "origin": "USA"
  },
  {
    "article_no": "3907860",
    "plu": "UPC",
    "description": "Sand Pear - 12/4 pc Clamshell",
    "chinese_description": "砂梨 12盒/4个装",
    "origin": "China"
  },
  {
    "article_no": "3907880",
    "plu": "5788",
    "description": "Champagne Yellow Mango - 16/18 ct",
    "chinese_description": "香槟黄芒果 16/18个装",
    "origin": "Mexico"
  },
  {
    "article_no": "3907901",
    "plu": "790",
    "description": "Orri Mandarin - 22#",
    "chinese_description": "Orri蜜橘 22磅",
    "origin": "Israel"
  },
  {
    "article_no": "3907961",
    "plu": "UPC",
    "description": "Cotton Candy Grapes - 10/1# Clamshell",
    "chinese_description": "棉花糖葡萄 10盒/1磅",
    "origin": "Chile"
  },
  {
    "article_no": "3907990",
    "plu": "799",
    "description": "Yellow Dragon Fruit - 5.5# (Limited Supply)",
    "chinese_description": "黄火龙果 5.5磅（限量供应）",
    "origin": "Ecuador"
  },
  {
    "article_no": "3908033",
    "plu": "803",
    "description": "Snow Fuji Apple - 9.9#",
    "chinese_description": "雪富士苹果 9.9磅",
    "origin": "China"
  },
  {
    "article_no": "3908082",
    "plu": "808",
    "description": "Lime, 200's",
    "chinese_description": "青柠 200颗装",
    "origin": "Mexico"
  },
  {
    "article_no": "3908121",
    "plu": "UPC",
    "description": "China Golden Pear - 8/3 pc Clamshell",
    "chinese_description": "中国黄金梨 8盒/3个装",
    "origin": "China"
  },
  {
    "article_no": "3908161",
    "plu": "UPC",
    "description": "Autumn Moon Pear - 8/3 pc Clamshell",
    "chinese_description": "秋月梨 8盒/3个装",
    "origin": "China"
  },
  {
    "article_no": "3908230",
    "plu": "823",
    "description": "Yellow Opal Apple - 27#",
    "chinese_description": "黄欧泊苹果 27磅",
    "origin": "USA"
  },
  {
    "article_no": "3908240",
    "plu": "824",
    "description": "Sugar Bee Apple - 40#",
    "chinese_description": "Sugar Bee苹果 40磅",
    "origin": "USA"
  },
  {
    "article_no": "3908340",
    "plu": "834",
    "description": "Yellow Mini Seedless Watermelon - 30#",
    "chinese_description": "黄迷你无籽西瓜 30磅",
    "origin": "Mexico"
  },
  {
    "article_no": "3908502",
    "plu": "850",
    "description": "Cosmic Crisp Apple - 40#",
    "chinese_description": "Cosmic Crisp苹果 40磅",
    "origin": "USA"
  },
  {
    "article_no": "3908800",
    "plu": "880",
    "description": "Red Seedless Watermelon (Bin) - 60 ct (New Item)",
    "chinese_description": "红无籽西瓜（箱装）60个（新品）",
    "origin": "Mexico"
  },
  {
    "article_no": "3908891",
    "plu": "889",
    "description": "Green Pomelo (Red Meat) - 22#",
    "chinese_description": "红心青柚 22磅",
    "origin": "Vietnam"
  },
  {
    "article_no": "3909021",
    "plu": "902",
    "description": "Wogan Mandarin - 19.5# (Waiting for new container)",
    "chinese_description": "沃柑 19.5磅（等待新货柜）",
    "origin": "China"
  },
  {
    "article_no": "3909070",
    "plu": "907",
    "description": "Papa Ponkan - 6.5#",
    "chinese_description": "椪柑 6.5磅",
    "origin": "China"
  },
  {
    "article_no": "3903105",
    "plu": "310",
    "description": "Black Plum - 16#",
    "chinese_description": "黑李子 16磅",
    "origin": "Chile"
  },
  {
    "article_no": "1393122",
    "plu": "312",
    "description": "Red Plum - 16#",
    "chinese_description": "红李子 16磅",
    "origin": "Chile"
  },
  {
    "article_no": "1393141",
    "plu": "314",
    "description": "Pomegranate - 8#",
    "chinese_description": "石榴 8磅",
    "origin": "Israel"
  },
  {
    "article_no": "1393172",
    "plu": "317",
    "description": "Golden Pineapple - 6's",
    "chinese_description": "黄金菠萝 6个装",
    "origin": "Mexico / Costa Rica"
  },
  {
    "article_no": "3903181",
    "plu": "UPC",
    "description": "Blueberries - 12/18 oz Clamshell (CA New Crop)",
    "chinese_description": "蓝莓 12盒/18盎司（加州新季）",
    "origin": "USA"
  },
  {
    "article_no": "3903182",
    "plu": "UPC",
    "description": "Blueberries - 12/11 oz Dry Pint",
    "chinese_description": "蓝莓 12盒/11盎司",
    "origin": "Mexico"
  },
  {
    "article_no": "1393190",
    "plu": "319",
    "description": "Mexican Papaya - 30#",
    "chinese_description": "墨西哥木瓜 30磅",
    "origin": "Mexico"
  },
  {
    "article_no": "1393200",
    "plu": "320",
    "description": "Strawberry - 8/1# pk",
    "chinese_description": "草莓 8盒/1磅",
    "origin": "USA / Mexico"
  },
  {
    "article_no": "3903289",
    "plu": "328",
    "description": "California Orange (Navel) - 36#",
    "chinese_description": "加州脐橙 36磅",
    "origin": "USA"
  },
  {
    "article_no": "1393400",
    "plu": "340",
    "description": "Murcott Tangerines - 25#",
    "chinese_description": "Murcott蜜橘 25磅",
    "origin": "USA"
  },
  {
    "article_no": "1393421",
    "plu": "342",
    "description": "Gold Nugget Mandarin - 25#",
    "chinese_description": "金元宝蜜橘 25磅",
    "origin": "USA"
  },
  {
    "article_no": "1393430",
    "plu": "343",
    "description": "Mineola Tangelo - 40#",
    "chinese_description": "蜜柑橘柚 40磅",
    "origin": "USA"
  },
  {
    "article_no": "1393460",
    "plu": "346",
    "description": "Gala Apple - 40#",
    "chinese_description": "嘎啦苹果 40磅",
    "origin": "USA"
  },
  {
    "article_no": "1393470",
    "plu": "347",
    "description": "Gala Apple - 12/3# Bag",
    "chinese_description": "嘎啦苹果 12袋/3磅",
    "origin": "USA"
  },
  {
    "article_no": "3904533",
    "plu": "453",
    "description": "Bartlett Pear - 40#",
    "chinese_description": "巴特利梨 40磅",
    "origin": "USA"
  },
  {
    "article_no": "1394560",
    "plu": "456",
    "description": "Dragon Fruit (Red Meat) - 10#",
    "chinese_description": "红心火龙果 10磅",
    "origin": "Vietnam / Ecuador"
  },
  {
    "article_no": "3904591",
    "plu": "UPC",
    "description": "Frozen Dried Persimmon - 12/3# Box",
    "chinese_description": "冻干柿饼 12盒/3磅",
    "origin": "China"
  },
  {
    "article_no": "3904672",
    "plu": "UPC",
    "description": "Cara Cara Orange - 12/3# Bag",
    "chinese_description": "Cara Cara橙 12袋/3磅",
    "origin": "USA"
  },
  {
    "article_no": "1394794",
    "plu": "UPC",
    "description": "“Cuties” Mandarin - 10/3# Bag",
    "chinese_description": "Cuties蜜橘 10袋/3磅",
    "origin": "Chile"
  },
  {
    "article_no": "1394880",
    "plu": "488",
    "description": "Dragon Fruit (White Meat) - 10#",
    "chinese_description": "白心火龙果 10磅",
    "origin": "Ecuador"
  },
  {
    "article_no": "3907061",
    "plu": "706",
    "description": "Lemon - 115's",
    "chinese_description": "柠檬 115颗装",
    "origin": "USA / Mexico"
  },
  {
    "article_no": "1392512",
    "plu": "251",
    "description": "Red Cherries - 16# (CA New Crop)",
    "chinese_description": "红樱桃 16磅（加州新季）",
    "origin": "USA"
  },
  {
    "article_no": "3902537",
    "plu": "253",
    "description": "Sugar Plum - 11#",
    "chinese_description": "糖李子 11磅",
    "origin": "Chile"
  },
  {
    "article_no": "1392631",
    "plu": "263",
    "description": "Guava - 20# (Florida)",
    "chinese_description": "番石榴 20磅（佛罗里达）",
    "origin": "USA"
  },
  {
    "article_no": "1392640",
    "plu": "264",
    "description": "Black Seedless Grapes - 18#",
    "chinese_description": "黑无籽葡萄 18磅",
    "origin": "Chile"
  },
  {
    "article_no": "1392650",
    "plu": "265",
    "description": "Green Seedless Grapes - 18#",
    "chinese_description": "青无籽葡萄 18磅",
    "origin": "Chile"
  },
  {
    "article_no": "1392660",
    "plu": "266",
    "description": "Red Seedless Grapes - 18#",
    "chinese_description": "红无籽葡萄 18磅",
    "origin": "Chile"
  },
  {
    "article_no": "1392690",
    "plu": "269",
    "description": "Red Globe Grapes - 19#",
    "chinese_description": "红提葡萄 19磅",
    "origin": "Chile"
  },
  {
    "article_no": "1392710",
    "plu": "271",
    "description": "Kumquat - 10#",
    "chinese_description": "金桔 10磅",
    "origin": "USA"
  },
  {
    "article_no": "3902724",
    "plu": "272",
    "description": "Sun Gold Kiwi - 18/2 ct (New Item)",
    "chinese_description": "阳光金奇异果 18盒/2个装（新品）",
    "origin": "New Zealand"
  },
  {
    "article_no": "3902735",
    "plu": "UPC",
    "description": "Green Kiwi - 8/2# Clamshells",
    "chinese_description": "绿奇异果 8盒/2磅",
    "origin": "USA / Greece"
  },
  {
    "article_no": "3902781",
    "plu": "278",
    "description": "Fresh Longan - 11#",
    "chinese_description": "新鲜龙眼 11磅",
    "origin": "Vietnam"
  },
  {
    "article_no": "1392810",
    "plu": "281",
    "description": "Yellow Mango - 14/16 ct (Limited Supply)",
    "chinese_description": "黄芒果 14/16个装（限量供应）",
    "origin": "Mexico"
  },
  {
    "article_no": "1392830",
    "plu": "283",
    "description": "Large Mango (Kent Tommy) - 9/10's",
    "chinese_description": "大芒果（Kent/Tommy）9/10个装",
    "origin": "Mexico / Guatemala"
  },
  {
    "article_no": "1392870",
    "plu": "287",
    "description": "Honeydew Melon - 5/6's",
    "chinese_description": "蜜露瓜 5/6个装",
    "origin": "Mexico"
  },
  {
    "article_no": "1392881",
    "plu": "288",
    "description": "Mini Seedless Watermelon - 6/8's",
    "chinese_description": "迷你无籽西瓜 6/8个装",
    "origin": "Mexico"
  },
  {
    "article_no": "1392910",
    "plu": "291",
    "description": "Korean Yellow Melon - 10#",
    "chinese_description": "韩国黄香瓜 10磅",
    "origin": "Mexico"
  },
  {
    "article_no": "1392922",
    "plu": "292",
    "description": "Hami Melon - 25#",
    "chinese_description": "哈密瓜 25磅",
    "origin": "Mexico"
  },
  {
    "article_no": "1393010",
    "plu": "301",
    "description": "Hawaii Papaya - 10# (Limited Supply)",
    "chinese_description": "夏威夷木瓜 10磅（限量供应）",
    "origin": "USA"
  },
  {
    "article_no": "1393026",
    "plu": "302",
    "description": "White Peach - 18# (CA New Crop)",
    "chinese_description": "白桃 18磅（加州新季）",
    "origin": "USA"
  },
  {
    "article_no": "1393050",
    "plu": "305",
    "description": "Bose Pear - 40#",
    "chinese_description": "博斯克梨 40磅",
    "origin": "USA"
  },
  {
    "article_no": "1393060",
    "plu": "306",
    "description": "D’Anjou Pear - 40#",
    "chinese_description": "安茹梨 40磅",
    "origin": "USA"
  },
  {
    "article_no": "1370570",
    "plu": "57",
    "description": "Young Coco - 9's",
    "chinese_description": "椰青 9个装",
    "origin": "Thailand"
  },
  {
    "article_no": "1379234",
    "plu": "9234",
    "description": "Organic Fuji Apple - 40#",
    "chinese_description": "有机富士苹果 40磅",
    "origin": "USA"
  },
  {
    "article_no": "3900064",
    "plu": "UPC",
    "description": "China Shingo Pear - 8/3 pc Clamshell",
    "chinese_description": "中国新高梨 8盒/3个装",
    "origin": "China"
  },
  {
    "article_no": "3900071",
    "plu": "UPC",
    "description": "Rockit Apple - 6/3# Clamshell",
    "chinese_description": "Rockit迷你苹果 6盒/3磅",
    "origin": "USA"
  },
  {
    "article_no": "3900083",
    "plu": "UPC",
    "description": "Jumbo Blueberries - 12/9.8 oz Clamshell (Limited Supply)",
    "chinese_description": "特大蓝莓 12盒/9.8盎司（限量供应）",
    "origin": "USA"
  },
  {
    "article_no": "3900125",
    "plu": "UPC",
    "description": "Baby Orri Mandarin - 10/3# Bag",
    "chinese_description": "Baby Orri蜜橘 10袋/3磅",
    "origin": "Israel"
  },
  {
    "article_no": "3900183",
    "plu": "UPC",
    "description": "Ruby Red Kiwi - 8/1# Clamshell (New Item)",
    "chinese_description": "红心奇异果 8盒/1磅（新品）",
    "origin": "New Zealand"
  },
  {
    "article_no": "3900226",
    "plu": "UPC",
    "description": "Sumo Tangerine - 12/2# Bag",
    "chinese_description": "Sumo橘子 12袋/2磅",
    "origin": "USA"
  },
  {
    "article_no": "3900735",
    "plu": "UPC",
    "description": "Nansui Pear - 8/3 pc Clamshells",
    "chinese_description": "南水梨 8盒/3个装",
    "origin": "China"
  },
  {
    "article_no": "3902075",
    "plu": "UPC",
    "description": "Kyo-Ho Grapes - 10/2# Clamshell",
    "chinese_description": "巨峰葡萄 10盒/2磅",
    "origin": "Chile"
  },
  {
    "article_no": "1392290",
    "plu": "229",
    "description": "Red Delicious Apple - 40#",
    "chinese_description": "红蛇果 40磅",
    "origin": "USA"
  },
  {
    "article_no": "1392340",
    "plu": "234",
    "description": "Fuji Apple - 40#",
    "chinese_description": "富士苹果 40磅",
    "origin": "USA"
  },
  {
    "article_no": "3902362",
    "plu": "236",
    "description": "Avocado - 70 ct",
    "chinese_description": "牛油果 70个装",
    "origin": "USA / Mexico"
  },
  {
    "article_no": "1392410",
    "plu": "241",
    "description": "Fuji Apple - 12/3# Bag",
    "chinese_description": "富士苹果 12袋/3磅",
    "origin": "USA"
  },
  {
    "article_no": "1379242",
    "plu": "9242",
    "description": "Organic Banana - 38#",
    "chinese_description": "有机香蕉 38磅",
    "origin": "Ecuador / Guatemala"
  },
  {
    "article_no": "1392420",
    "plu": "242",
    "description": "Del Monte Banana - 40#",
    "chinese_description": "Del Monte香蕉 40磅",
    "origin": "Ecuador / Guatemala"
  },
  {
    "article_no": "3902441",
    "plu": "244",
    "description": "Saba Banana - 35#",
    "chinese_description": "萨巴香蕉 35磅",
    "origin": "Mexico"
  },
  {
    "article_no": "1392450",
    "plu": "245",
    "description": "Manzano Banana - 20#",
    "chinese_description": "苹果蕉 20磅",
    "origin": "Colombia"
  },
  {
    "article_no": "3902461",
    "plu": "246",
    "description": "Plantain Banana (Green)",
    "chinese_description": "大蕉（青）",
    "origin": "Ecuador"
  },
  {
    "article_no": "1392470",
    "plu": "247",
    "description": "Baby Banana - 15#",
    "chinese_description": "小香蕉 15磅",
    "origin": "Ecuador / Guatemala"
  },
  {
    "article_no": "3902481",
    "plu": "UPC",
    "description": "Korean Shingo Pear - 8/3 pc Clamshell",
    "chinese_description": "韩国新高梨 8盒/3个装",
    "origin": "Korea"
  },
  {
    "article_no": "1392500",
    "plu": "250",
    "description": "Cantaloupe - 35#",
    "chinese_description": "哈密瓜 35磅",
    "origin": "Mexico / Offshore"
  }
]