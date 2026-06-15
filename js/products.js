// ================================================
// SAYWEE - Products Module
// products.js - Data embedded inline (no server needed)
// ================================================

let ALL_PRODUCTS = [];

// Load products - data is inline, works with double-click open
function loadProducts() {
  ALL_PRODUCTS = [
  {"id":"kr001","name":"Shin Ramyun","brand":"Nongshim","country":"Korea","category":"Instant Noodles","price":3.99,"originalPrice":4.99,"weight":"120g","rating":4.8,"reviews":1243,"sold":8920,"image":"https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=600&q=80&fit=crop","description":"The world's most famous spicy noodle. Rich beef broth with chewy noodles and a fiery kick that has made Shin Ramyun a global icon since 1986.","ingredients":"Noodles (wheat flour, modified starch, palm oil, salt), Soup base (salt, chili powder, garlic, onion), Vegetable flakes","nutrition":{"calories":500,"carbs":"81g","protein":"10g","fat":"16g","sodium":"1790mg"},"allergens":"Wheat, Milk","storage":"Store in cool dry place","expiry":"12 months","tags":["spicy","popular","bestseller"],"isNew":false,"isBestseller":true,"isOnSale":true},
  {"id":"kr002","name":"Samyang Buldak 2x Spicy","brand":"Samyang","country":"Korea","category":"Instant Noodles","price":4.49,"originalPrice":null,"weight":"140g","rating":4.7,"reviews":987,"sold":6540,"image":"https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=600&q=80&fit=crop","description":"The legendary fire noodle challenge. Samyang Buldak 2x Spicy is twice as hot as the original – a must-try for spice lovers worldwide.","ingredients":"Noodles (wheat flour, starch, palm oil), Sauce (hot chicken sauce, soy sauce, garlic), Seaweed flakes","nutrition":{"calories":530,"carbs":"83g","protein":"11g","fat":"17g","sodium":"1960mg"},"allergens":"Wheat, Soy","storage":"Store in cool dry place","expiry":"12 months","tags":["spicy","viral","challenge"],"isNew":false,"isBestseller":true,"isOnSale":false},
  {"id":"kr003","name":"Bibigo Kimchi","brand":"Bibigo","country":"Korea","category":"Korean Food","price":8.99,"originalPrice":10.99,"weight":"500g","rating":4.9,"reviews":756,"sold":4320,"image":"https://images.unsplash.com/photo-1583224964978-2257b8a897e6?w=600&q=80&fit=crop","description":"Authentic Korean kimchi made with Napa cabbage, gochugaru, and fermented fish sauce. Crispy, tangy, and bursting with probiotic goodness.","ingredients":"Napa cabbage, gochugaru (chili powder), garlic, ginger, fish sauce, salt, green onion","nutrition":{"calories":30,"carbs":"5g","protein":"1g","fat":"0g","sodium":"740mg"},"allergens":"Fish","storage":"Refrigerate after opening","expiry":"6 months refrigerated","tags":["fermented","probiotic","traditional"],"isNew":false,"isBestseller":true,"isOnSale":true},
  {"id":"kr004","name":"Tteokbokki Sauce Kit","brand":"Haechandle","country":"Korea","category":"Sauces","price":6.49,"originalPrice":null,"weight":"200g","rating":4.6,"reviews":543,"sold":2100,"image":"https://images.unsplash.com/photo-1635363638580-c2809d049eee?w=600&q=80&fit=crop","description":"Make authentic Korean spicy rice cakes at home. This sauce kit includes gochujang-based sauce and dried tteok for the perfect street food experience.","ingredients":"Gochujang, corn syrup, soy sauce, garlic, sesame oil, sugar","nutrition":{"calories":120,"carbs":"28g","protein":"2g","fat":"1g","sodium":"890mg"},"allergens":"Wheat, Soy","storage":"Store in cool dry place","expiry":"24 months","tags":["street food","spicy","rice cake"],"isNew":false,"isBestseller":false,"isOnSale":false},
  {"id":"kr005","name":"Binggrae Banana Milk","brand":"Binggrae","country":"Korea","category":"Asian Drinks","price":2.49,"originalPrice":null,"weight":"240ml","rating":4.9,"reviews":2104,"sold":15000,"image":"https://images.unsplash.com/photo-1563636619-e9143da7973b?w=600&q=80&fit=crop","description":"Korea's most iconic beverage. The beloved Banana Milk in its signature barrel-shaped bottle has been delighting taste buds since 1974.","ingredients":"Milk, sugar, banana extract, water","nutrition":{"calories":150,"carbs":"29g","protein":"4g","fat":"3g","sodium":"95mg"},"allergens":"Milk","storage":"Keep refrigerated","expiry":"2 weeks refrigerated","tags":["iconic","sweet","childhood"],"isNew":false,"isBestseller":true,"isOnSale":false},
  {"id":"kr006","name":"Ottogi Jin Ramen","brand":"Ottogi","country":"Korea","category":"Instant Noodles","price":3.49,"originalPrice":null,"weight":"120g","rating":4.5,"reviews":678,"sold":3200,"image":"https://images.unsplash.com/photo-1604054923015-22f4b1bb7afc?w=600&q=80&fit=crop","description":"Ottogi's signature Jin Ramen with rich, savory broth and thick, chewy noodles. A household staple in Korean homes.","ingredients":"Wheat noodles, soy sauce powder, dried vegetables, sesame oil","nutrition":{"calories":480,"carbs":"77g","protein":"9g","fat":"15g","sodium":"1680mg"},"allergens":"Wheat, Soy","storage":"Cool dry place","expiry":"12 months","tags":["savory","popular"],"isNew":false,"isBestseller":false,"isOnSale":false},
  {"id":"kr007","name":"Pepero Original","brand":"Lotte","country":"Korea","category":"Asian Snacks","price":2.99,"originalPrice":null,"weight":"54g","rating":4.7,"reviews":1560,"sold":9800,"image":"https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=600&q=80&fit=crop","description":"Crispy biscuit sticks dipped in smooth chocolate. Pepero is Korea's most beloved snack, celebrated with a national holiday on 11/11.","ingredients":"Wheat flour, chocolate coating, sugar, vegetable oil, cocoa powder","nutrition":{"calories":272,"carbs":"37g","protein":"4g","fat":"13g","sodium":"140mg"},"allergens":"Wheat, Milk, Soy","storage":"Cool dry place","expiry":"12 months","tags":["chocolate","snack","gift"],"isNew":false,"isBestseller":true,"isOnSale":false},
  {"id":"kr008","name":"Maxim Coffee Mix","brand":"Dongsuh","country":"Korea","category":"Coffee","price":9.99,"originalPrice":12.99,"weight":"300g (20 sticks)","rating":4.6,"reviews":890,"sold":5600,"image":"https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80&fit=crop","description":"Korea's #1 instant coffee mix. Rich, creamy Maxim coffee sticks are the perfect blend of coffee, cream, and sugar for a quick daily fix.","ingredients":"Sugar, non-dairy creamer, instant coffee, glucose","nutrition":{"calories":56,"carbs":"8g","protein":"0g","fat":"2g","sodium":"25mg"},"allergens":"Milk","storage":"Cool dry place","expiry":"24 months","tags":["instant","sweet","popular"],"isNew":false,"isBestseller":false,"isOnSale":true},
  {"id":"jp001","name":"Maruchan Udon Noodles","brand":"Maruchan","country":"Japan","category":"Instant Noodles","price":4.99,"originalPrice":null,"weight":"200g","rating":4.7,"reviews":654,"sold":4100,"image":"https://images.unsplash.com/photo-1618841557871-b4664fbf0cb3?w=600&q=80&fit=crop","description":"Authentic Japanese udon noodles in a delicate dashi broth with bonito and kelp. Thick, chewy noodles that are a Japanese comfort food staple.","ingredients":"Udon noodles (wheat flour, salt, water), dashi powder, soy sauce, mirin","nutrition":{"calories":420,"carbs":"79g","protein":"12g","fat":"5g","sodium":"1540mg"},"allergens":"Wheat, Fish, Soy","storage":"Cool dry place","expiry":"24 months","tags":["udon","comfort","dashi"],"isNew":false,"isBestseller":false,"isOnSale":false},
  {"id":"jp002","name":"Glico Pocky Chocolate","brand":"Glico","country":"Japan","category":"Asian Snacks","price":3.49,"originalPrice":null,"weight":"72g","rating":4.8,"reviews":2340,"sold":18000,"image":"https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&q=80&fit=crop","description":"The original Japanese biscuit stick snack. Thin, crispy pretzel sticks coated in smooth milk chocolate. Beloved worldwide since 1966.","ingredients":"Wheat flour, chocolate (sugar, cocoa butter, cocoa mass, milk powder), vegetable oil","nutrition":{"calories":280,"carbs":"38g","protein":"4g","fat":"13g","sodium":"130mg"},"allergens":"Wheat, Milk, Soy","storage":"Cool dry place","expiry":"10 months","tags":["chocolate","iconic","snack"],"isNew":false,"isBestseller":true,"isOnSale":false},
  {"id":"jp003","name":"ITO EN Matcha Green Tea","brand":"ITO EN","country":"Japan","category":"Tea","price":14.99,"originalPrice":17.99,"weight":"30g","rating":4.9,"reviews":1120,"sold":7300,"image":"https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=600&q=80&fit=crop","description":"Premium ceremonial grade matcha from Uji, Kyoto. Vibrant green, smooth and umami-rich. Stone-ground for the finest texture and flavor.","ingredients":"100% Japanese green tea leaves (matcha)","nutrition":{"calories":4,"carbs":"1g","protein":"0g","fat":"0g","sodium":"0mg"},"allergens":"None","storage":"Airtight container, refrigerate","expiry":"12 months","tags":["matcha","premium","ceremonial"],"isNew":false,"isBestseller":true,"isOnSale":true},
  {"id":"jp004","name":"Mochi Ice Cream Assorted","brand":"Mikawaya","country":"Japan","category":"Japanese Food","price":11.99,"originalPrice":null,"weight":"300g (6pcs)","rating":4.8,"reviews":876,"sold":5400,"image":"https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&q=80&fit=crop","description":"Soft, pillowy mochi rice cakes filled with creamy ice cream. Assorted flavors: strawberry, green tea, mango, and vanilla.","ingredients":"Mochi (sweet rice flour, sugar, water, cornstarch), ice cream filling","nutrition":{"calories":120,"carbs":"22g","protein":"2g","fat":"3g","sodium":"55mg"},"allergens":"Wheat, Milk, Egg","storage":"Keep frozen","expiry":"6 months frozen","tags":["mochi","ice cream","dessert"],"isNew":true,"isBestseller":false,"isOnSale":false},
  {"id":"jp005","name":"Nissin Cup Noodles Original","brand":"Nissin","country":"Japan","category":"Instant Noodles","price":2.99,"originalPrice":null,"weight":"74g","rating":4.6,"reviews":3400,"sold":25000,"image":"https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600&q=80&fit=crop","description":"The world's first cup noodle, invented by Nissin in 1971. Classic chicken and soy flavor with iconic round cup design. A global phenomenon.","ingredients":"Noodles (wheat flour, palm oil, salt), chicken bouillon, dehydrated vegetables, soy sauce","nutrition":{"calories":380,"carbs":"52g","protein":"8g","fat":"15g","sodium":"1700mg"},"allergens":"Wheat, Soy, Milk","storage":"Cool dry place","expiry":"8 months","tags":["original","classic","global"],"isNew":false,"isBestseller":true,"isOnSale":false},
  {"id":"jp006","name":"Calbee Shrimp Chips","brand":"Calbee","country":"Japan","category":"Asian Snacks","price":4.49,"originalPrice":null,"weight":"85g","rating":4.7,"reviews":1230,"sold":8700,"image":"https://images.unsplash.com/photo-1560717845-968823efbee1?w=600&q=80&fit=crop","description":"Light, airy shrimp crackers with an irresistible umami punch. Calbee's iconic Kappa Ebisen has been loved in Japan for over 50 years.","ingredients":"Wheat flour, shrimp, sugar, salt, vegetable oil, soy sauce","nutrition":{"calories":200,"carbs":"28g","protein":"5g","fat":"8g","sodium":"560mg"},"allergens":"Wheat, Shrimp, Soy","storage":"Cool dry place","expiry":"8 months","tags":["shrimp","crispy","umami"],"isNew":false,"isBestseller":false,"isOnSale":false},
  {"id":"jp007","name":"Suntory Canned Green Tea","brand":"Suntory","country":"Japan","category":"Asian Drinks","price":2.29,"originalPrice":null,"weight":"350ml","rating":4.5,"reviews":780,"sold":6200,"image":"https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&q=80&fit=crop","description":"Refreshing Japanese green tea in a convenient can. Lightly sweetened with the authentic taste of Japanese sencha. Zero calories option available.","ingredients":"Water, green tea extract, vitamin C","nutrition":{"calories":0,"carbs":"0g","protein":"0g","fat":"0g","sodium":"15mg"},"allergens":"None","storage":"Store in cool place","expiry":"12 months","tags":["green tea","refreshing","zero calorie"],"isNew":false,"isBestseller":false,"isOnSale":false},
  {"id":"jp008","name":"Meiji Yan Yan","brand":"Meiji","country":"Japan","category":"Asian Snacks","price":2.79,"originalPrice":null,"weight":"44g","rating":4.6,"reviews":980,"sold":7100,"image":"https://images.unsplash.com/photo-1536478880920-8a2f8936ff87?w=600&q=80&fit=crop","description":"Fun biscuit sticks with a dipping cream compartment. Dip your way to happiness with Yan Yan – a favorite for all ages since 1979.","ingredients":"Wheat flour, sugar, palm oil, cocoa powder, skim milk","nutrition":{"calories":210,"carbs":"30g","protein":"3g","fat":"9g","sodium":"90mg"},"allergens":"Wheat, Milk","storage":"Cool dry place","expiry":"10 months","tags":["dipping","fun","biscuit"],"isNew":false,"isBestseller":false,"isOnSale":false},
  {"id":"cn001","name":"Ottogi Dumpling (Mandu)","brand":"Bibigo","country":"China","category":"Frozen Food","price":12.99,"originalPrice":14.99,"weight":"600g","rating":4.8,"reviews":765,"sold":4300,"image":"https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=600&q=80&fit=crop","description":"Pan-fry or steam these authentic Asian dumplings filled with pork and vegetables. Crispy on the outside, juicy on the inside – irresistible dim sum at home.","ingredients":"Wheat dough, pork, cabbage, garlic, ginger, sesame oil, soy sauce","nutrition":{"calories":280,"carbs":"38g","protein":"12g","fat":"9g","sodium":"680mg"},"allergens":"Wheat, Soy, Pork","storage":"Keep frozen","expiry":"12 months frozen","tags":["dumpling","dim sum","frozen"],"isNew":false,"isBestseller":true,"isOnSale":true},
  {"id":"cn002","name":"Xiao Long Bao Kit","brand":"Din Tai Fung","country":"China","category":"Frozen Food","price":18.99,"originalPrice":null,"weight":"400g (12pcs)","rating":4.9,"reviews":543,"sold":2800,"image":"https://images.unsplash.com/photo-1563245372-f21724e3856d?w=600&q=80&fit=crop","description":"Bring the Din Tai Fung experience home. These frozen Xiao Long Bao are delicate soup dumplings filled with seasoned pork and rich gelatin broth.","ingredients":"Wheat flour, pork, ginger, soy sauce, sesame oil, gelatin broth","nutrition":{"calories":190,"carbs":"26g","protein":"10g","fat":"5g","sodium":"520mg"},"allergens":"Wheat, Soy","storage":"Keep frozen","expiry":"6 months frozen","tags":["soup dumpling","premium","dim sum"],"isNew":true,"isBestseller":false,"isOnSale":false},
  {"id":"cn003","name":"Mooncake Red Bean","brand":"Wing Wah","country":"China","category":"Chinese Food","price":16.99,"originalPrice":null,"weight":"180g (2pcs)","rating":4.7,"reviews":432,"sold":3100,"image":"https://images.unsplash.com/photo-1591271264896-a90de5a4f4e3?w=600&q=80&fit=crop","description":"Traditional Chinese Mid-Autumn Festival mooncakes filled with smooth red bean paste. Beautifully embossed with traditional patterns.","ingredients":"Wheat flour, red bean paste, sugar, lard, egg yolk, melon seeds","nutrition":{"calories":340,"carbs":"51g","protein":"5g","fat":"13g","sodium":"200mg"},"allergens":"Wheat, Egg","storage":"Cool dry place","expiry":"45 days","tags":["festival","traditional","gift"],"isNew":false,"isBestseller":false,"isOnSale":false},
  {"id":"cn004","name":"Haidilao Hot Pot Base","brand":"Haidilao","country":"China","category":"Sauces","price":7.99,"originalPrice":9.99,"weight":"200g","rating":4.8,"reviews":1340,"sold":8900,"image":"https://images.unsplash.com/photo-1607523601629-50cda4b0df41?w=600&q=80&fit=crop","description":"The authentic hot pot experience at home. Haidilao's signature mala spicy hot pot base with Sichuan peppercorns and dried chilies.","ingredients":"Vegetable oil, chili, Sichuan pepper, doubanjiang, garlic, ginger, spices","nutrition":{"calories":180,"carbs":"8g","protein":"2g","fat":"16g","sodium":"1240mg"},"allergens":"Soy, Wheat","storage":"Cool dry place","expiry":"18 months","tags":["hot pot","spicy","mala"],"isNew":false,"isBestseller":true,"isOnSale":true},
  {"id":"cn005","name":"Bigelow Oolong Tea","brand":"Bigelow","country":"China","category":"Tea","price":9.49,"originalPrice":null,"weight":"60g (20 bags)","rating":4.6,"reviews":654,"sold":4200,"image":"https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&q=80&fit=crop","description":"Premium Chinese oolong tea with a rich, complex flavor between green and black tea. Medium oxidization for a smooth, floral brew.","ingredients":"Oolong tea leaves","nutrition":{"calories":0,"carbs":"0g","protein":"0g","fat":"0g","sodium":"0mg"},"allergens":"None","storage":"Airtight container","expiry":"24 months","tags":["oolong","premium","traditional"],"isNew":false,"isBestseller":false,"isOnSale":false},
  {"id":"cn006","name":"Lao Gan Ma Chili Crisp","brand":"Lao Gan Ma","country":"China","category":"Sauces","price":5.99,"originalPrice":null,"weight":"210g","rating":4.9,"reviews":3200,"sold":22000,"image":"https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?w=600&q=80&fit=crop","description":"The most famous Chinese condiment in the world. Crispy chili flakes in fragrant oil with black beans. Goes on literally everything.","ingredients":"Vegetable oil, chili, black soybeans, onion, salt, sugar, spices","nutrition":{"calories":110,"carbs":"5g","protein":"2g","fat":"10g","sodium":"430mg"},"allergens":"Soy","storage":"Cool dry place","expiry":"24 months","tags":["condiment","spicy","viral"],"isNew":false,"isBestseller":true,"isOnSale":false},
  {"id":"vn001","name":"Phở Bò Instant Noodle","brand":"Vifon","country":"Vietnam","category":"Instant Noodles","price":3.99,"originalPrice":null,"weight":"80g","rating":4.7,"reviews":876,"sold":5400,"image":"https://images.unsplash.com/photo-1555126634-323283e090fa?w=600&q=80&fit=crop","description":"Vietnam's most iconic dish in instant form. Flat rice noodles in a rich beef bone broth with star anise, cinnamon, and cloves. Authentic southern-style pho.","ingredients":"Rice noodles, beef extract, star anise, cinnamon, cloves, onion, salt","nutrition":{"calories":360,"carbs":"70g","protein":"9g","fat":"4g","sodium":"1580mg"},"allergens":"Wheat","storage":"Cool dry place","expiry":"24 months","tags":["pho","beef","rice noodle"],"isNew":false,"isBestseller":true,"isOnSale":false},
  {"id":"vn002","name":"G7 3in1 Instant Coffee","brand":"Trung Nguyen","country":"Vietnam","category":"Coffee","price":11.99,"originalPrice":14.99,"weight":"336g (24 sticks)","rating":4.8,"reviews":1560,"sold":9800,"image":"https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&q=80&fit=crop","description":"Vietnam's premium instant coffee brand. G7 3in1 combines robusta and arabica beans for a rich, bold flavor with cream and sugar. The most popular Vietnamese coffee export.","ingredients":"Instant coffee (robusta/arabica blend), non-dairy creamer, sugar","nutrition":{"calories":62,"carbs":"11g","protein":"0g","fat":"2g","sodium":"30mg"},"allergens":"Milk","storage":"Cool dry place","expiry":"24 months","tags":["vietnamese coffee","bold","popular"],"isNew":false,"isBestseller":true,"isOnSale":true},
  {"id":"vn003","name":"Masan Nước Mắm Fish Sauce","brand":"Masan","country":"Vietnam","category":"Sauces","price":6.99,"originalPrice":null,"weight":"500ml","rating":4.7,"reviews":765,"sold":4100,"image":"https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&q=80&fit=crop","description":"Premium Vietnamese fish sauce, the cornerstone of Vietnamese cooking. Aged anchovies fermented in sea salt for a deep, complex umami flavor.","ingredients":"Anchovy extract, water, salt, sugar","nutrition":{"calories":25,"carbs":"6g","protein":"1g","fat":"0g","sodium":"1430mg"},"allergens":"Fish","storage":"Cool dry place after opening","expiry":"24 months","tags":["fish sauce","essential","umami"],"isNew":false,"isBestseller":false,"isOnSale":false},
  {"id":"vn004","name":"Cà Phê Sữa Đá Mix","brand":"Highlands","country":"Vietnam","category":"Coffee","price":13.99,"originalPrice":null,"weight":"400g (20 sticks)","rating":4.8,"reviews":987,"sold":6300,"image":"https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=600&q=80&fit=crop","description":"Make authentic Vietnamese iced coffee at home. Strong dark roast coffee with sweetened condensed milk. Perfect over ice for a refreshing treat.","ingredients":"Instant coffee (robusta), condensed milk, sugar","nutrition":{"calories":80,"carbs":"14g","protein":"1g","fat":"2g","sodium":"35mg"},"allergens":"Milk","storage":"Cool dry place","expiry":"24 months","tags":["vietnamese coffee","iced","condensed milk"],"isNew":true,"isBestseller":false,"isOnSale":false},
  {"id":"vn005","name":"Bánh Phồng Tôm Shrimp Chips","brand":"Sa Giang","country":"Vietnam","category":"Asian Snacks","price":4.99,"originalPrice":null,"weight":"200g","rating":4.6,"reviews":543,"sold":3200,"image":"https://images.unsplash.com/photo-1560717845-968823efbee1?w=600&q=80&fit=crop","description":"Authentic Vietnamese prawn crackers. Light, airy, and delicately flavored – these shrimp chips puff up perfectly when fried for a crispy snack.","ingredients":"Tapioca starch, shrimp, sugar, salt, garlic powder","nutrition":{"calories":90,"carbs":"16g","protein":"3g","fat":"2g","sodium":"320mg"},"allergens":"Shrimp, Fish","storage":"Dry airtight container","expiry":"12 months","tags":["prawn cracker","snack","crispy"],"isNew":false,"isBestseller":false,"isOnSale":false},
  {"id":"vn006","name":"Mì Hảo Hảo Shrimp Noodle","brand":"Acecook","country":"Vietnam","category":"Instant Noodles","price":2.99,"originalPrice":null,"weight":"75g","rating":4.5,"reviews":1230,"sold":8900,"image":"https://images.unsplash.com/photo-1604054923015-22f4b1bb7afc?w=600&q=80&fit=crop","description":"Vietnam's best-selling instant noodle. Hảo Hảo features thin, wavy noodles in a savory shrimp and onion broth. An everyday Vietnamese staple.","ingredients":"Wheat noodles, shrimp powder, onion, salt, MSG, vegetable oil","nutrition":{"calories":320,"carbs":"58g","protein":"7g","fat":"7g","sodium":"1200mg"},"allergens":"Wheat, Shrimp","storage":"Cool dry place","expiry":"12 months","tags":["shrimp","popular","everyday"],"isNew":false,"isBestseller":false,"isOnSale":false},
  {"id":"th001","name":"Mama Tom Yum Noodles","brand":"Mama","country":"Thailand","category":"Instant Noodles","price":2.79,"originalPrice":null,"weight":"90g","rating":4.7,"reviews":1450,"sold":10200,"image":"https://images.unsplash.com/photo-1562565652-a0d8f0c59eb4?w=600&q=80&fit=crop","description":"Thailand's most beloved instant noodle. Mama's Tom Yum features the iconic sour and spicy lemongrass soup base with rice vermicelli noodles.","ingredients":"Rice vermicelli, lemongrass powder, chili, galangal, kaffir lime, shrimp paste, sugar, salt","nutrition":{"calories":360,"carbs":"67g","protein":"8g","fat":"7g","sodium":"1650mg"},"allergens":"Wheat, Shrimp","storage":"Cool dry place","expiry":"18 months","tags":["tom yum","spicy","lemongrass"],"isNew":false,"isBestseller":true,"isOnSale":false},
  {"id":"th002","name":"Chatramue Thai Milk Tea","brand":"Chatramue","country":"Thailand","category":"Asian Drinks","price":8.99,"originalPrice":10.99,"weight":"200g (10 bags)","rating":4.8,"reviews":890,"sold":5700,"image":"https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&q=80&fit=crop","description":"The original Thai tea blend from the legendary Chatramue brand. Fragrant Ceylon tea blended with exotic spices – serve with condensed milk over ice.","ingredients":"Ceylon tea, star anise, tamarind seed, badian, food coloring (yellow)","nutrition":{"calories":0,"carbs":"0g","protein":"0g","fat":"0g","sodium":"0mg"},"allergens":"None","storage":"Airtight container","expiry":"24 months","tags":["thai tea","original","fragrant"],"isNew":false,"isBestseller":true,"isOnSale":true},
  {"id":"th003","name":"Pad Thai Sauce","brand":"Maekrua","country":"Thailand","category":"Sauces","price":5.49,"originalPrice":null,"weight":"300ml","rating":4.7,"reviews":765,"sold":4800,"image":"https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=600&q=80&fit=crop","description":"Authentic Pad Thai sauce for the perfect stir-fried noodle dish at home. Made with tamarind, fish sauce, and palm sugar for the classic sweet-sour balance.","ingredients":"Tamarind paste, fish sauce, palm sugar, salt","nutrition":{"calories":45,"carbs":"10g","protein":"1g","fat":"0g","sodium":"1100mg"},"allergens":"Fish","storage":"Refrigerate after opening","expiry":"12 months","tags":["pad thai","sauce","authentic"],"isNew":false,"isBestseller":false,"isOnSale":false},
  {"id":"th004","name":"Mango Sticky Rice Kit","brand":"Thai Kitchen","country":"Thailand","category":"Thai Food","price":9.99,"originalPrice":null,"weight":"350g","rating":4.6,"reviews":543,"sold":2900,"image":"https://images.unsplash.com/photo-1621236378699-8597faf6a176?w=600&q=80&fit=crop","description":"Make Thailand's most beloved dessert at home. Complete kit includes glutinous rice and coconut cream sauce. Just add fresh mango.","ingredients":"Glutinous rice, coconut cream powder, sugar, salt, pandan extract","nutrition":{"calories":280,"carbs":"58g","protein":"4g","fat":"4g","sodium":"180mg"},"allergens":"None","storage":"Cool dry place","expiry":"12 months","tags":["dessert","mango","coconut"],"isNew":true,"isBestseller":false,"isOnSale":false},
  {"id":"th005","name":"Sriracha Hot Chili Sauce","brand":"Huy Fong","country":"Thailand","category":"Sauces","price":4.99,"originalPrice":null,"weight":"482ml","rating":4.9,"reviews":4500,"sold":35000,"image":"https://images.unsplash.com/photo-1630390547736-eb47ac70e2de?w=600&q=80&fit=crop","description":"The world-famous Sriracha sauce. Made from sun-riped chilis, garlic, and vinegar. The iconic green-capped bottle is a condiment staple worldwide.","ingredients":"Chili, sugar, salt, garlic, distilled vinegar, potassium sorbate, sodium bisulfite, xanthan gum","nutrition":{"calories":5,"carbs":"1g","protein":"0g","fat":"0g","sodium":"100mg"},"allergens":"None","storage":"Refrigerate after opening","expiry":"24 months","tags":["sriracha","condiment","famous"],"isNew":false,"isBestseller":true,"isOnSale":false},
  {"id":"th006","name":"Khanom Tokyo Crepe Mix","brand":"Lobo","country":"Thailand","category":"Thai Food","price":6.99,"originalPrice":null,"weight":"200g","rating":4.4,"reviews":320,"sold":1800,"image":"https://images.unsplash.com/photo-1534482421-64566f976cfa?w=600&q=80&fit=crop","description":"Make the popular Thai street food 'Khanom Tokyo' at home. Mini sweet crepes filled with custard, corn, and other toppings.","ingredients":"Wheat flour, sugar, coconut milk powder, tapioca starch, pandan extract","nutrition":{"calories":320,"carbs":"68g","protein":"6g","fat":"3g","sodium":"200mg"},"allergens":"Wheat, Egg","storage":"Cool dry place","expiry":"12 months","tags":["street food","crepe","sweet"],"isNew":false,"isBestseller":false,"isOnSale":false},
  {"id":"in001","name":"Taj Mahal Masala Chai","brand":"Brooke Bond","country":"India","category":"Tea","price":7.99,"originalPrice":9.99,"weight":"100g (20 bags)","rating":4.8,"reviews":1230,"sold":8700,"image":"https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&q=80&fit=crop","description":"Premium Indian masala chai with a rich blend of cardamom, cinnamon, ginger, cloves, and black pepper. Brew strong with milk for an authentic chai experience.","ingredients":"Black tea, cardamom, cinnamon, ginger, cloves, black pepper","nutrition":{"calories":2,"carbs":"0g","protein":"0g","fat":"0g","sodium":"0mg"},"allergens":"None","storage":"Airtight container","expiry":"24 months","tags":["masala chai","spiced","aromatic"],"isNew":false,"isBestseller":true,"isOnSale":true},
  {"id":"in002","name":"Deep Foods Naan Bread","brand":"Deep Foods","country":"India","category":"Indian Food","price":5.99,"originalPrice":null,"weight":"400g (4pcs)","rating":4.6,"reviews":876,"sold":5300,"image":"https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&q=80&fit=crop","description":"Soft, chewy traditional Indian naan bread. Baked in a tandoor-style oven for that authentic charred flavor and pillowy texture. Perfect with curry.","ingredients":"Wheat flour, yogurt, yeast, salt, sugar, butter, garlic","nutrition":{"calories":260,"carbs":"44g","protein":"8g","fat":"5g","sodium":"480mg"},"allergens":"Wheat, Milk, Egg","storage":"Refrigerate or freeze","expiry":"7 days refrigerated","tags":["naan","bread","tandoor"],"isNew":false,"isBestseller":false,"isOnSale":false},
  {"id":"in003","name":"Laxmi Basmati Rice","brand":"Laxmi","country":"India","category":"Rice","price":18.99,"originalPrice":22.99,"weight":"5kg","rating":4.7,"reviews":987,"sold":6100,"image":"https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=600&q=80&fit=crop","description":"Aged extra-long grain basmati rice from the foothills of the Himalayas. Aged for 2 years for maximum fragrance, elongation, and non-sticky texture.","ingredients":"100% long-grain basmati rice (aged 2 years)","nutrition":{"calories":345,"carbs":"77g","protein":"8g","fat":"0g","sodium":"0mg"},"allergens":"None","storage":"Airtight container, cool dry place","expiry":"3 years","tags":["basmati","long grain","aged"],"isNew":false,"isBestseller":false,"isOnSale":true},
  {"id":"in004","name":"Haldiram's Samosa","brand":"Haldiram's","country":"India","category":"Frozen Food","price":8.99,"originalPrice":null,"weight":"300g (6pcs)","rating":4.7,"reviews":765,"sold":4500,"image":"https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&q=80&fit=crop","description":"Crispy golden samosas filled with spiced potatoes and peas. Haldiram's is India's most trusted snack brand – bake or fry for a classic Indian appetizer.","ingredients":"Wheat flour, potato, peas, cumin, coriander, garam masala, ginger, chili, oil","nutrition":{"calories":210,"carbs":"31g","protein":"4g","fat":"9g","sodium":"380mg"},"allergens":"Wheat","storage":"Keep frozen","expiry":"12 months frozen","tags":["samosa","appetizer","Indian snack"],"isNew":false,"isBestseller":true,"isOnSale":false},
  {"id":"in005","name":"MDH Curry Powder","brand":"MDH","country":"India","category":"Sauces","price":4.99,"originalPrice":null,"weight":"100g","rating":4.8,"reviews":1560,"sold":11000,"image":"https://images.unsplash.com/photo-1596797038530-2c107229654b?w=600&q=80&fit=crop","description":"The legendary MDH spice mix trusted by generations of Indian families. A balanced blend of turmeric, coriander, cumin, and chili for authentic curry flavor.","ingredients":"Coriander, cumin, turmeric, chili, fenugreek, black pepper, dry ginger, cardamom, cinnamon, cloves","nutrition":{"calories":20,"carbs":"3g","protein":"1g","fat":"1g","sodium":"20mg"},"allergens":"None","storage":"Cool dry place","expiry":"36 months","tags":["curry","spice","essential"],"isNew":false,"isBestseller":true,"isOnSale":false},
  {"id":"in006","name":"Parle-G Biscuits","brand":"Parle","country":"India","category":"Asian Snacks","price":2.49,"originalPrice":null,"weight":"200g","rating":4.6,"reviews":2100,"sold":15000,"image":"https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&q=80&fit=crop","description":"The world's largest selling biscuit brand. Parle-G is a classic Indian glucose biscuit – slightly sweet, perfect with chai. A nostalgic taste of India.","ingredients":"Wheat flour, sugar, palm oil, milk solids, salt, glucose, baking powder","nutrition":{"calories":450,"carbs":"78g","protein":"7g","fat":"11g","sodium":"410mg"},"allergens":"Wheat, Milk","storage":"Cool dry place","expiry":"6 months","tags":["biscuit","classic","tea time"],"isNew":false,"isBestseller":false,"isOnSale":false},
  {"id":"tw001","name":"Chun Shui Tang Bubble Tea Kit","brand":"Chun Shui Tang","country":"Taiwan","category":"Asian Drinks","price":14.99,"originalPrice":17.99,"weight":"500g","rating":4.9,"reviews":1340,"sold":8900,"image":"https://images.unsplash.com/photo-1558857563-b371033873b8?w=600&q=80&fit=crop","description":"Make authentic bubble tea at home with this kit from the original inventor. Includes black tapioca pearls, tea bags, and brown sugar syrup. Born in Taichung, 1986.","ingredients":"Tapioca starch, black sugar syrup, black tea, water, sugar","nutrition":{"calories":290,"carbs":"68g","protein":"2g","fat":"0g","sodium":"40mg"},"allergens":"None","storage":"Cool dry place","expiry":"12 months","tags":["bubble tea","boba","original"],"isNew":false,"isBestseller":true,"isOnSale":true},
  {"id":"tw002","name":"Pineapple Cake (鳳梨酥)","brand":"Sheng Yih","country":"Taiwan","category":"Taiwanese Food","price":22.99,"originalPrice":null,"weight":"200g (8pcs)","rating":4.9,"reviews":876,"sold":5700,"image":"https://images.unsplash.com/photo-1534482421-64566f976cfa?w=600&q=80&fit=crop","description":"Taiwan's most beloved souvenir and gift. Buttery shortbread pastry filled with sweet pineapple jam. A box of these pineapple cakes is the quintessential Taiwan gift.","ingredients":"Wheat flour, butter, sugar, egg, pineapple jam (pineapple, sugar), corn syrup","nutrition":{"calories":165,"carbs":"27g","protein":"2g","fat":"6g","sodium":"95mg"},"allergens":"Wheat, Egg, Milk","storage":"Cool dry place","expiry":"45 days","tags":["pineapple cake","souvenir","gift"],"isNew":false,"isBestseller":true,"isOnSale":false},
  {"id":"tw003","name":"Ali Shan High Mountain Oolong","brand":"Ten Ren","country":"Taiwan","category":"Tea","price":28.99,"originalPrice":34.99,"weight":"75g","rating":4.9,"reviews":654,"sold":3200,"image":"https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600&q=80&fit=crop","description":"Premium Alishan high mountain oolong tea from 1,200m elevation. Smooth, sweet, and buttery with hints of orchid and cream. A connoisseur's choice.","ingredients":"100% Taiwanese oolong tea leaves (Ali Shan cultivar)","nutrition":{"calories":0,"carbs":"0g","protein":"0g","fat":"0g","sodium":"0mg"},"allergens":"None","storage":"Airtight, refrigerate","expiry":"24 months","tags":["high mountain","oolong","premium"],"isNew":false,"isBestseller":false,"isOnSale":true},
  {"id":"tw004","name":"Imei Nougat Crackers","brand":"Imei","country":"Taiwan","category":"Asian Snacks","price":12.99,"originalPrice":null,"weight":"300g","rating":4.8,"reviews":1120,"sold":7800,"image":"https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&q=80&fit=crop","description":"Taiwan's iconic nougat crackers – crispy soda crackers sandwiched with chewy nougat filling. A heavenly combination of textures and sweetness.","ingredients":"Wheat crackers, nougat (sugar, glucose syrup, milk powder, butter, almonds)","nutrition":{"calories":480,"carbs":"72g","protein":"7g","fat":"19g","sodium":"380mg"},"allergens":"Wheat, Milk, Tree nuts","storage":"Cool dry place","expiry":"6 months","tags":["nougat","snack","Taiwan souvenir"],"isNew":false,"isBestseller":true,"isOnSale":false},
  {"id":"tw005","name":"Wei Wei Noodles Sesame","brand":"Wei Lih","country":"Taiwan","category":"Instant Noodles","price":4.99,"originalPrice":null,"weight":"100g x 5","rating":4.7,"reviews":765,"sold":4800,"image":"https://images.unsplash.com/photo-1617196034183-421b4040ed20?w=600&q=80&fit=crop","description":"Taiwan's classic dried sesame noodles. Simply add boiling water and the rich sesame paste sauce for a comforting, nutty noodle experience.","ingredients":"Wheat noodles, sesame paste, soy sauce, sesame oil, chili, vinegar","nutrition":{"calories":440,"carbs":"71g","protein":"10g","fat":"14g","sodium":"1380mg"},"allergens":"Wheat, Sesame, Soy","storage":"Cool dry place","expiry":"12 months","tags":["sesame","taiwanese noodle","dry mix"],"isNew":false,"isBestseller":false,"isOnSale":false},
  {"id":"kr009","name":"Choco Pie","brand":"Orion","country":"Korea","category":"Asian Snacks","price":5.99,"originalPrice":null,"weight":"468g (12pcs)","rating":4.8,"reviews":1870,"sold":13000,"image":"https://images.unsplash.com/photo-1548907040-4baa42d10919?w=600&q=80&fit=crop","description":"The soft, chocolate-coated marshmallow cake that conquered Asia. Orion Choco Pie is a childhood favorite across Korea and beyond, known for its love campaign in North Korea.","ingredients":"Wheat flour, sugar, eggs, vegetable oil, cocoa powder, marshmallow, chocolate coating","nutrition":{"calories":180,"carbs":"25g","protein":"2g","fat":"8g","sodium":"100mg"},"allergens":"Wheat, Egg, Milk","storage":"Cool dry place","expiry":"12 months","tags":["choco pie","soft cake","iconic"],"isNew":false,"isBestseller":true,"isOnSale":false},
  {"id":"kr010","name":"Homeplus Japchae Kit","brand":"CJ CheilJedang","country":"Korea","category":"Korean Food","price":8.49,"originalPrice":null,"weight":"350g","rating":4.5,"reviews":432,"sold":2100,"image":"https://images.unsplash.com/photo-1617196034183-421b4040ed20?w=600&q=80&fit=crop","description":"Make authentic Korean glass noodles stir-fry at home. This kit includes sweet potato glass noodles and a ready-made japchae sauce with sesame oil and soy.","ingredients":"Sweet potato starch noodles, soy sauce, sesame oil, sugar, garlic, dried shiitake mushroom","nutrition":{"calories":320,"carbs":"70g","protein":"4g","fat":"2g","sodium":"980mg"},"allergens":"Soy, Sesame","storage":"Cool dry place","expiry":"18 months","tags":["japchae","glass noodle","stir fry"],"isNew":false,"isBestseller":false,"isOnSale":false},
  {"id":"kr011","name":"Hite Beer","brand":"Hite Jinro","country":"Korea","category":"Asian Drinks","price":2.99,"originalPrice":null,"weight":"355ml","rating":4.4,"reviews":890,"sold":6700,"image":"https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=600&q=80&fit=crop","description":"Korea's classic lager beer, crisp and refreshing with a clean, light flavor. Perfect companion for Korean BBQ and fried chicken.","ingredients":"Water, barley malt, hops, rice","nutrition":{"calories":115,"carbs":"8g","protein":"1g","fat":"0g","sodium":"10mg"},"allergens":"Wheat","storage":"Keep cool","expiry":"12 months","tags":["beer","lager","korean bbq"],"isNew":false,"isBestseller":false,"isOnSale":false},
  {"id":"jp009","name":"Kewpie Mayonnaise","brand":"Kewpie","country":"Japan","category":"Sauces","price":7.49,"originalPrice":null,"weight":"355ml","rating":4.9,"reviews":3400,"sold":26000,"image":"https://images.unsplash.com/photo-1627662235219-1c9f98c96af3?w=600&q=80&fit=crop","description":"Japan's beloved umami-rich mayonnaise. Made with egg yolks only (not whole eggs) and rice vinegar for a richer, creamier, tangier flavor than Western mayo.","ingredients":"Soybean oil, egg yolks, rice vinegar, salt, MSG, spices","nutrition":{"calories":100,"carbs":"0g","protein":"0g","fat":"11g","sodium":"95mg"},"allergens":"Egg, Soy","storage":"Refrigerate after opening","expiry":"12 months","tags":["mayo","umami","Japanese condiment"],"isNew":false,"isBestseller":true,"isOnSale":false},
  {"id":"jp010","name":"Hershey's Pocky Matcha","brand":"Glico","country":"Japan","category":"Asian Snacks","price":3.79,"originalPrice":null,"weight":"72g","rating":4.7,"reviews":1560,"sold":10200,"image":"https://images.unsplash.com/photo-1578020190125-f4f7c18bc9cb?w=600&q=80&fit=crop","description":"Pocky biscuit sticks coated in premium matcha white chocolate. The distinctive green color and bittersweet matcha flavor make this a Japan-exclusive fan favorite.","ingredients":"Wheat flour, white chocolate, matcha powder, sugar, palm oil","nutrition":{"calories":275,"carbs":"38g","protein":"4g","fat":"12g","sodium":"130mg"},"allergens":"Wheat, Milk","storage":"Cool dry place","expiry":"10 months","tags":["matcha","pocky","white chocolate"],"isNew":false,"isBestseller":false,"isOnSale":false},
  {"id":"jp011","name":"Meiji Milk Chocolate","brand":"Meiji","country":"Japan","category":"Asian Snacks","price":4.99,"originalPrice":null,"weight":"120g","rating":4.8,"reviews":1890,"sold":14000,"image":"https://images.unsplash.com/photo-1511381939415-e44015466834?w=600&q=80&fit=crop","description":"Meiji's iconic milk chocolate bar. Silky smooth Japanese milk chocolate with a higher milk solid content than Western counterparts for a distinctly creamy flavor.","ingredients":"Sugar, cocoa butter, whole milk powder, cocoa mass, lecithin, vanilla","nutrition":{"calories":570,"carbs":"53g","protein":"8g","fat":"36g","sodium":"80mg"},"allergens":"Milk, Soy","storage":"Cool dry place below 28°C","expiry":"12 months","tags":["chocolate","creamy","iconic"],"isNew":false,"isBestseller":false,"isOnSale":false},
  {"id":"cn007","name":"Nongfu Spring Water 550ml","brand":"Nongfu Spring","country":"China","category":"Asian Drinks","price":1.49,"originalPrice":null,"weight":"550ml","rating":4.5,"reviews":2300,"sold":45000,"image":"https://images.unsplash.com/photo-1612528443702-f6741f70a049?w=600&q=80&fit=crop","description":"China's #1 natural mineral water from mountain springs. Crisp, slightly sweet taste from its mineral composition. The red bottle is iconic in China.","ingredients":"Natural spring water","nutrition":{"calories":0,"carbs":"0g","protein":"0g","fat":"0g","sodium":"12mg"},"allergens":"None","storage":"Cool place, avoid sunlight","expiry":"24 months","tags":["water","mineral","chinese brand"],"isNew":false,"isBestseller":false,"isOnSale":false},
  {"id":"cn008","name":"Master Kong Braised Beef Noodle","brand":"Master Kong","country":"China","category":"Instant Noodles","price":3.49,"originalPrice":null,"weight":"99g","rating":4.6,"reviews":1340,"sold":9800,"image":"https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=600&q=80&fit=crop","description":"China's top-selling instant noodle. Master Kong's Braised Beef flavor features thick wheat noodles in a rich, deeply-savory beef bone broth.","ingredients":"Wheat noodles, beef extract, soy sauce, spices, dried vegetables, sesame oil","nutrition":{"calories":460,"carbs":"75g","protein":"10g","fat":"14g","sodium":"1780mg"},"allergens":"Wheat, Soy","storage":"Cool dry place","expiry":"12 months","tags":["beef","braised","popular"],"isNew":false,"isBestseller":false,"isOnSale":false},
  {"id":"cn009","name":"White Rabbit Candy","brand":"White Rabbit","country":"China","category":"Asian Snacks","price":5.99,"originalPrice":null,"weight":"180g","rating":4.8,"reviews":2100,"sold":16000,"image":"https://images.unsplash.com/photo-1548907040-4baa42d10919?w=600&q=80&fit=crop","description":"The iconic Chinese milk candy wrapped in edible rice paper. White Rabbit has been China's most beloved confectionery since 1959 – sweet, milky, and nostalgic.","ingredients":"Sugar, glucose syrup, sweetened condensed milk, butter, vanilla","nutrition":{"calories":390,"carbs":"80g","protein":"5g","fat":"6g","sodium":"65mg"},"allergens":"Milk","storage":"Cool dry place","expiry":"12 months","tags":["candy","milk","nostalgic"],"isNew":false,"isBestseller":true,"isOnSale":false},
  {"id":"vn007","name":"Kinh Do Mooncake Assorted","brand":"Kinh Do","country":"Vietnam","category":"Vietnamese Food","price":29.99,"originalPrice":null,"weight":"400g (4pcs)","rating":4.7,"reviews":432,"sold":2800,"image":"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80&fit=crop","description":"Premium Vietnamese Mid-Autumn mooncakes from the most famous Vietnamese pastry brand. Assorted flavors including mixed nuts, green bean paste, and salted egg yolk.","ingredients":"Wheat flour, mixed nuts, lotus paste, green bean, egg yolk, sugar, lard","nutrition":{"calories":380,"carbs":"54g","protein":"7g","fat":"16g","sodium":"310mg"},"allergens":"Wheat, Egg, Tree nuts","storage":"Cool dry place","expiry":"45 days","tags":["mooncake","Mid-Autumn","gift"],"isNew":true,"isBestseller":false,"isOnSale":false},
  {"id":"th007","name":"Namjai Coconut Milk","brand":"Aroy-D","country":"Thailand","category":"Thai Food","price":3.49,"originalPrice":null,"weight":"400ml","rating":4.7,"reviews":1230,"sold":8900,"image":"https://images.unsplash.com/photo-1559181567-c3190ca9d87a?w=600&q=80&fit=crop","description":"Premium Thai coconut milk. Rich, creamy, and fragrant – ideal for Thai curries, desserts, and soups. Aroy-D coconut milk is 100% natural with no preservatives.","ingredients":"Coconut extract, water","nutrition":{"calories":230,"carbs":"5g","protein":"2g","fat":"24g","sodium":"15mg"},"allergens":"Tree nuts (coconut)","storage":"Refrigerate after opening","expiry":"24 months sealed","tags":["coconut milk","curry","Thai cooking"],"isNew":false,"isBestseller":false,"isOnSale":false},
  {"id":"th008","name":"Roi Thai Tom Yum Paste","brand":"Roi Thai","country":"Thailand","category":"Sauces","price":4.99,"originalPrice":null,"weight":"110g","rating":4.6,"reviews":876,"sold":5400,"image":"https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?w=600&q=80&fit=crop","description":"Authentic Tom Yum paste with lemongrass, galangal, kaffir lime, and shrimp paste. Just one spoon transforms any soup into an aromatic Thai classic.","ingredients":"Lemongrass, galangal, kaffir lime peel, shrimp paste, chili, garlic, vegetable oil","nutrition":{"calories":60,"carbs":"5g","protein":"2g","fat":"4g","sodium":"860mg"},"allergens":"Shrimp","storage":"Refrigerate after opening","expiry":"12 months","tags":["tom yum","paste","fragrant"],"isNew":false,"isBestseller":false,"isOnSale":false},
  {"id":"in007","name":"Maggi Masala Noodles","brand":"Nestlé Maggi","country":"India","category":"Instant Noodles","price":2.49,"originalPrice":null,"weight":"70g x 4","rating":4.7,"reviews":3200,"sold":24000,"image":"https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600&q=80&fit=crop","description":"India's most beloved instant noodle. Maggi Masala is a cultural institution – quick to cook, full of spices, and eaten by generations across India.","ingredients":"Wheat flour, palm oil, masala (coriander, cumin, chili, turmeric, garlic), salt","nutrition":{"calories":350,"carbs":"53g","protein":"7g","fat":"12g","sodium":"1200mg"},"allergens":"Wheat","storage":"Cool dry place","expiry":"12 months","tags":["maggi","masala","Indian staple"],"isNew":false,"isBestseller":true,"isOnSale":false},
  {"id":"in008","name":"Haldiram's Bhujia Sev","brand":"Haldiram's","country":"India","category":"Asian Snacks","price":4.99,"originalPrice":null,"weight":"200g","rating":4.7,"reviews":1560,"sold":11000,"image":"https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=600&q=80&fit=crop","description":"India's premium snack mix – crunchy chickpea flour noodles seasoned with spices. Haldiram's Bhujia is the most famous namkeen (savory snack) from Bikaner.","ingredients":"Chickpea flour, vegetable oil, coriander, cumin, chili, salt, asafoetida","nutrition":{"calories":520,"carbs":"58g","protein":"18g","fat":"23g","sodium":"1050mg"},"allergens":"Wheat","storage":"Cool dry place","expiry":"6 months","tags":["bhujia","namkeen","Indian snack"],"isNew":false,"isBestseller":false,"isOnSale":false},
  {"id":"tw006","name":"Dr. Milker Brown Sugar Boba Kit","brand":"Wushiland","country":"Taiwan","category":"Asian Drinks","price":16.99,"originalPrice":19.99,"weight":"600g","rating":4.8,"reviews":876,"sold":5600,"image":"https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=600&q=80&fit=crop","description":"Make the trending Tiger boba at home with this premium kit. Includes extra large tapioca pearls, brown sugar syrup, and Taiwanese milk tea blend.","ingredients":"Tapioca starch, brown sugar, black tea, whole milk powder","nutrition":{"calories":310,"carbs":"72g","protein":"4g","fat":"1g","sodium":"55mg"},"allergens":"Milk","storage":"Cool dry place","expiry":"12 months","tags":["tiger boba","brown sugar","trending"],"isNew":true,"isBestseller":true,"isOnSale":true},
  {"id":"kr012","name":"Ottogi Sesame Oil","brand":"Ottogi","country":"Korea","category":"Sauces","price":8.99,"originalPrice":null,"weight":"220ml","rating":4.9,"reviews":1230,"sold":8900,"image":"https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=600&q=80&fit=crop","description":"Premium Korean sesame oil cold-pressed from roasted sesame seeds. The foundation of Korean cuisine – nutty, fragrant, and essential in marinades, dressings, and finishing dishes.","ingredients":"100% pure sesame oil (cold-pressed roasted sesame seeds)","nutrition":{"calories":120,"carbs":"0g","protein":"0g","fat":"14g","sodium":"0mg"},"allergens":"Sesame","storage":"Cool dark place","expiry":"24 months","tags":["sesame oil","Korean cooking","essential"],"isNew":false,"isBestseller":false,"isOnSale":false},
  {"id":"jp012","name":"Ichiran Ramen Set","brand":"Ichiran","country":"Japan","category":"Instant Noodles","price":19.99,"originalPrice":24.99,"weight":"5 servings","rating":4.9,"reviews":1340,"sold":7200,"image":"https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=600&q=80&fit=crop","description":"Recreate the legendary Ichiran tonkotsu ramen experience at home. Straight, thin noodles with signature rich pork bone broth and the secret 'hiden' red sauce.","ingredients":"Wheat noodles, pork bone broth, tonkotsu base, hiden sauce (chili, garlic, soy sauce), green onion, sesame","nutrition":{"calories":550,"carbs":"78g","protein":"19g","fat":"18g","sodium":"2100mg"},"allergens":"Wheat, Soy, Pork","storage":"Cool dry place","expiry":"12 months","tags":["ichiran","tonkotsu","premium ramen"],"isNew":false,"isBestseller":true,"isOnSale":true},
  {"id":"cn010","name":"Bestore Spicy Gluten","brand":"Bestore","country":"China","category":"Asian Snacks","price":5.49,"originalPrice":null,"weight":"108g","rating":4.6,"reviews":987,"sold":7800,"image":"https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=600&q=80&fit=crop","description":"A wildly popular Chinese snack. Chewy wheat gluten strips in a fiery, numbing Sichuan mala sauce. Addictive, bold, and impossible to stop eating.","ingredients":"Wheat gluten, soy sauce, chili oil, Sichuan pepper, sugar, garlic, sesame oil","nutrition":{"calories":280,"carbs":"45g","protein":"12g","fat":"6g","sodium":"890mg"},"allergens":"Wheat, Soy, Sesame","storage":"Cool dry place","expiry":"6 months","tags":["spicy gluten","Sichuan","chewy"],"isNew":false,"isBestseller":false,"isOnSale":false},
  {"id":"vn008","name":"Vinamilk Condensed Milk","brand":"Vinamilk","country":"Vietnam","category":"Asian Drinks","price":3.49,"originalPrice":null,"weight":"380g","rating":4.7,"reviews":765,"sold":5400,"image":"https://images.unsplash.com/photo-1550583724-b2692b85b150?w=600&q=80&fit=crop","description":"Vietnam's most trusted condensed milk brand. Rich, sweet, and creamy Vinamilk condensed milk is the secret ingredient in authentic Vietnamese iced coffee and sweet soups.","ingredients":"Whole milk, sugar","nutrition":{"calories":321,"carbs":"55g","protein":"8g","fat":"8g","sodium":"130mg"},"allergens":"Milk","storage":"Cool dry place, refrigerate after opening","expiry":"12 months","tags":["condensed milk","Vietnamese coffee","sweet"],"isNew":false,"isBestseller":false,"isOnSale":false},
  {"id":"th009","name":"Taro Milk Tea Latte Mix","brand":"NuTea","country":"Thailand","category":"Asian Drinks","price":12.99,"originalPrice":null,"weight":"350g (10 servings)","rating":4.7,"reviews":654,"sold":4100,"image":"https://images.unsplash.com/photo-1558857563-b371033873b8?w=600&q=80&fit=crop","description":"Make creamy, dreamy taro milk tea at home. This mix captures the sweet, nutty, and slightly vanilla-like flavor of taro with a beautiful purple hue.","ingredients":"Non-dairy creamer, sugar, taro powder, tea powder, natural flavor","nutrition":{"calories":120,"carbs":"24g","protein":"1g","fat":"3g","sodium":"70mg"},"allergens":"Milk","storage":"Cool dry place","expiry":"12 months","tags":["taro","milk tea","purple"],"isNew":true,"isBestseller":false,"isOnSale":false},
  {"id":"in009","name":"Amul Ghee","brand":"Amul","country":"India","category":"Indian Food","price":15.99,"originalPrice":null,"weight":"500ml","rating":4.8,"reviews":1120,"sold":7800,"image":"https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=600&q=80&fit=crop","description":"Pure Indian clarified butter, slow-cooked to a golden, nutty perfection. Amul Ghee is a staple in Indian cooking, used in everything from dal to sweets and as a finishing drizzle.","ingredients":"Pasteurized cream (100% cow's milk)","nutrition":{"calories":900,"carbs":"0g","protein":"0g","fat":"100g","sodium":"0mg"},"allergens":"Milk","storage":"Cool dry place","expiry":"12 months","tags":["ghee","clarified butter","Indian cooking"],"isNew":false,"isBestseller":false,"isOnSale":false},
  {"id":"tw007","name":"Old Street Brown Sugar Tea","brand":"Old Street","country":"Taiwan","category":"Asian Drinks","price":9.99,"originalPrice":12.99,"weight":"8 packets","rating":4.6,"reviews":543,"sold":3400,"image":"https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&q=80&fit=crop","description":"Authentic Taiwanese brown sugar ginger tea from Jiufen's famous old streets. Warming, aromatic, and perfect served hot in winter or iced in summer.","ingredients":"Brown sugar, ginger extract, black tea, cinnamon","nutrition":{"calories":80,"carbs":"20g","protein":"0g","fat":"0g","sodium":"10mg"},"allergens":"None","storage":"Cool dry place","expiry":"18 months","tags":["brown sugar", "ginger", "Taiwanese tea"],"isNew":false,"isBestseller":false,"isOnSale":true},
  {"id":"kr013","name":"Nongshim Neoguri Udon","brand":"Nongshim","country":"Korea","category":"Instant Noodles","price":3.79,"originalPrice":null,"weight":"120g","rating":4.7,"reviews":987,"sold":6700,"image":"https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600&q=80&fit=crop","description":"Korea's famous spicy seafood ramyun with thick, chewy udon-style noodles. Neoguri features a rich seafood broth with dried kelp and a good kick of heat.","ingredients":"Wheat noodles, seafood broth, dried kelp, chili, clam extract, vegetable flakes","nutrition":{"calories":490,"carbs":"80g","protein":"11g","fat":"14g","sodium":"1860mg"},"allergens":"Wheat, Shellfish, Soy","storage":"Cool dry place","expiry":"12 months","tags":["udon","seafood","spicy"],"isNew":false,"isBestseller":false,"isOnSale":false},
  {"id":"jp013","name":"Ajinomoto Gyoza Frozen","brand":"Ajinomoto","country":"Japan","category":"Frozen Food","price":9.99,"originalPrice":null,"weight":"600g (30pcs)","rating":4.8,"reviews":1560,"sold":10200,"image":"https://images.unsplash.com/photo-1607301405752-f30e6a686c92?w=600&q=80&fit=crop","description":"Japan's #1 frozen gyoza. Pan-fry these juicy pork and cabbage dumplings for a crispy-bottomed, steam-finished perfection. A Japanese family dinner staple.","ingredients":"Pork, cabbage, garlic, ginger, sesame oil, soy sauce, wheat flour wrapper","nutrition":{"calories":245,"carbs":"32g","protein":"11g","fat":"8g","sodium":"510mg"},"allergens":"Wheat, Soy, Pork","storage":"Keep frozen","expiry":"6 months frozen","tags":["gyoza","frozen","Japanese dumpling"],"isNew":false,"isBestseller":true,"isOnSale":false},
  {"id":"cn011","name":"Uni-President Assorted Candy","brand":"Uni-President","country":"China","category":"Asian Snacks","price":7.99,"originalPrice":null,"weight":"300g","rating":4.5,"reviews":678,"sold":4500,"image":"https://images.unsplash.com/photo-1576186726115-4d51596775d1?w=600&q=80&fit=crop","description":"Assorted traditional Chinese hard candies. A colorful mix of lychee, mango, hawthorn, and cream flavors – perfect for sharing and gift boxes.","ingredients":"Sugar, glucose syrup, fruit juice, natural flavors, food coloring","nutrition":{"calories":380,"carbs":"95g","protein":"0g","fat":"0g","sodium":"30mg"},"allergens":"None","storage":"Cool dry place","expiry":"24 months","tags":["candy","assorted","traditional"],"isNew":false,"isBestseller":false,"isOnSale":false},
  {"id":"vn009","name":"Phú Quốc Fish Sauce Premium","brand":"Phu Quoc","country":"Vietnam","category":"Sauces","price":9.99,"originalPrice":null,"weight":"750ml","rating":4.9,"reviews":876,"sold":5600,"image":"https://images.unsplash.com/photo-1614977645540-7abd88ba8e78?w=600&q=80&fit=crop","description":"The world's most prized fish sauce from Phu Quoc Island. Made from black anchovy (cá cơm) using traditional barrel fermentation. Deep amber color, complex umami and zero fishy odor.","ingredients":"Black anchovy, sea salt","nutrition":{"calories":10,"carbs":"1g","protein":"2g","fat":"0g","sodium":"1550mg"},"allergens":"Fish","storage":"Cool dark place","expiry":"36 months","tags":["premium fish sauce","Phu Quoc","authentic"],"isNew":false,"isBestseller":false,"isOnSale":false},
  {"id":"th010","name":"Kaset Jasmine Rice","brand":"Kaset","country":"Thailand","category":"Rice","price":24.99,"originalPrice":null,"weight":"5kg","rating":4.8,"reviews":987,"sold":6800,"image":"https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=600&q=80&fit=crop","description":"Premium Thai jasmine rice – fragrant, long-grain, and fluffy. The distinct floral aroma of Thai hom mali rice elevates any dish it accompanies.","ingredients":"100% Thai jasmine rice (hom mali variety)","nutrition":{"calories":360,"carbs":"79g","protein":"7g","fat":"1g","sodium":"0mg"},"allergens":"None","storage":"Airtight container, cool dry place","expiry":"2 years","tags":["jasmine rice","fragrant","Thailand"],"isNew":false,"isBestseller":false,"isOnSale":false},
  {"id":"in010","name":"Swad Chaat Masala","brand":"Swad","country":"India","category":"Sauces","price":3.49,"originalPrice":null,"weight":"100g","rating":4.7,"reviews":765,"sold":5400,"image":"https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?w=600&q=80&fit=crop","description":"The tangy, cooling spice blend that transforms any snack into street food. Chaat masala with dried mango, black salt, cumin, and asafoetida is the soul of Indian street food.","ingredients":"Dry mango powder (amchur), black salt, cumin, coriander, asafoetida, mint, chili","nutrition":{"calories":15,"carbs":"3g","protein":"0g","fat":"0g","sodium":"580mg"},"allergens":"None","storage":"Cool dry place","expiry":"24 months","tags":["chaat masala","street food","tangy"],"isNew":false,"isBestseller":false,"isOnSale":false},
  {"id":"tw008","name":"Yujian Milktea Latte Powder","brand":"Chabaa","country":"Taiwan","category":"Asian Drinks","price":11.99,"originalPrice":null,"weight":"300g","rating":4.7,"reviews":543,"sold":3400,"image":"https://images.unsplash.com/photo-1561043433-aaf687c4cf04?w=600&q=80&fit=crop","description":"Premium Taiwanese-style milk tea latte powder. Creamy, fragrant, and tea-forward – just mix with hot or cold water for a café-quality milk tea at home.","ingredients":"Black tea powder, creamer, sugar, whole milk powder","nutrition":{"calories":100,"carbs":"18g","protein":"2g","fat":"3g","sodium":"55mg"},"allergens":"Milk","storage":"Cool dry place","expiry":"18 months","tags":["milk tea", "latte","Taiwanese"],"isNew":false,"isBestseller":false,"isOnSale":false},
  {"id":"kr014","name":"Samyang Carbonara Buldak","brand":"Samyang","country":"Korea","category":"Instant Noodles","price":4.69,"originalPrice":null,"weight":"130g","rating":4.8,"reviews":1650,"sold":11000,"image":"https://images.unsplash.com/photo-1598866594230-a7c12756260f?w=600&q=80&fit=crop","description":"A creamy twist on the viral fire noodle. Samyang Carbonara Buldak combines the spicy fire chicken sauce with a rich cream sauce for a milder, more indulgent experience.","ingredients":"Noodles (wheat flour, starch), cream sauce (cream powder, cheese), fire chicken sauce, seaweed flakes","nutrition":{"calories":580,"carbs":"82g","protein":"12g","fat":"21g","sodium":"1650mg"},"allergens":"Wheat, Milk, Soy","storage":"Cool dry place","expiry":"12 months","tags":["carbonara","cream","buldak"],"isNew":false,"isBestseller":false,"isOnSale":false},
  {"id":"jp014","name":"Sapporo Ichiban Salt Ramen","brand":"Sapporo Ichiban","country":"Japan","category":"Instant Noodles","price":3.29,"originalPrice":null,"weight":"100g","rating":4.6,"reviews":876,"sold":6300,"image":"https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=600&q=80&fit=crop","description":"Japan's classic salt (shio) ramen. Light, clear broth with delicate chicken and seafood flavor, and thin, springy noodles. The elegant alternative to heavier ramen styles.","ingredients":"Wheat noodles, salt broth base, chicken extract, sesame, dried vegetables","nutrition":{"calories":440,"carbs":"72g","protein":"10g","fat":"13g","sodium":"1890mg"},"allergens":"Wheat, Soy","storage":"Cool dry place","expiry":"12 months","tags":["shio ramen","salt","light broth"],"isNew":false,"isBestseller":false,"isOnSale":false},
  {"id":"cn012","name":"Want Want Rice Crackers","brand":"Want Want","country":"China","category":"Asian Snacks","price":4.49,"originalPrice":null,"weight":"150g","rating":4.5,"reviews":1230,"sold":9800,"image":"https://images.unsplash.com/photo-1609501676725-7186f017a4b7?w=600&q=80&fit=crop","description":"Light, crunchy rice crackers with a savory-sweet flavor. Want Want is China and Taiwan's beloved childhood snack, eaten for decades by generations across Asia.","ingredients":"Rice flour, vegetable oil, sugar, soy sauce, salt, MSG","nutrition":{"calories":450,"carbs":"82g","protein":"7g","fat":"10g","sodium":"680mg"},"allergens":"Wheat, Soy","storage":"Cool dry place","expiry":"12 months","tags":["rice cracker","childhood","crunchy"],"isNew":false,"isBestseller":false,"isOnSale":false},
  {"id":"vn010","name":"Phở Hòa Instant Pho Kit","brand":"Phở Hòa","country":"Vietnam","category":"Vietnamese Food","price":8.99,"originalPrice":null,"weight":"320g (4 servings)","rating":4.8,"reviews":543,"sold":3200,"image":"https://images.unsplash.com/photo-1514190051997-0f6f39ca5cde?w=600&q=80&fit=crop","description":"The premium pho experience at home, from the legendary Phở Hòa restaurant chain. Includes flat rice noodles, concentrated broth, and aromatic spice sachet.","ingredients":"Rice noodles, beef bone broth concentrate, star anise, cinnamon, cloves, onion, ginger","nutrition":{"calories":380,"carbs":"72g","protein":"12g","fat":"5g","sodium":"1680mg"},"allergens":"None","storage":"Cool dry place","expiry":"24 months","tags":["pho kit","premium","restaurant quality"],"isNew":false,"isBestseller":false,"isOnSale":false},
  {"id":"th011","name":"Mama Creamy Tom Yum Noodle","brand":"Mama","country":"Thailand","category":"Instant Noodles","price":2.99,"originalPrice":null,"weight":"90g","rating":4.5,"reviews":765,"sold":5600,"image":"https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=600&q=80&fit=crop","description":"A creamy variation on the classic Tom Yum. Mama's Creamy Tom Yum features the sour-spicy lemongrass broth enriched with coconut cream for a milder, more luxurious flavor.","ingredients":"Egg noodles, lemongrass, coconut cream powder, chili, galangal, kaffir lime, shrimp paste","nutrition":{"calories":395,"carbs":"62g","protein":"9g","fat":"12g","sodium":"1590mg"},"allergens":"Wheat, Egg, Shrimp","storage":"Cool dry place","expiry":"18 months","tags":["tom yum","creamy","coconut"],"isNew":false,"isBestseller":false,"isOnSale":false},
  {"id":"in011","name":"Everest Garam Masala","brand":"Everest","country":"India","category":"Sauces","price":4.49,"originalPrice":null,"weight":"100g","rating":4.7,"reviews":1120,"sold":8700,"image":"https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&q=80&fit=crop","description":"Premium whole spice blend slow-roasted and ground. Everest Garam Masala with cardamom, black pepper, cloves, cinnamon, and nutmeg adds warming complexity to any dish.","ingredients":"Coriander, cumin, black pepper, cardamom, cinnamon, cloves, bay leaves, nutmeg","nutrition":{"calories":25,"carbs":"4g","protein":"1g","fat":"1g","sodium":"10mg"},"allergens":"None","storage":"Cool dry place","expiry":"36 months","tags":["garam masala","spice blend","aromatic"],"isNew":false,"isBestseller":false,"isOnSale":false},
  {"id":"tw009","name":"Sunny Hills Pineapple Cake","brand":"Sunny Hills","country":"Taiwan","category":"Taiwanese Food","price":34.99,"originalPrice":null,"weight":"350g (10pcs)","rating":5.0,"reviews":432,"sold":2800,"image":"https://images.unsplash.com/photo-1536478880920-8a2f8936ff87?w=600&q=80&fit=crop","description":"The most premium pineapple cake in Taiwan. Sunny Hills uses 100% fresh pineapple filling (no winter melon filler) in a melt-in-your-mouth butter pastry. A luxury gift from Taipei.","ingredients":"Wheat flour, butter, egg, fresh pineapple jam (100% pineapple, sugar, salt)","nutrition":{"calories":175,"carbs":"26g","protein":"2g","fat":"7g","sodium":"80mg"},"allergens":"Wheat, Egg, Milk","storage":"Cool dry place, consume within 7 days opening","expiry":"30 days","tags":["luxury","fresh pineapple","premium gift"],"isNew":false,"isBestseller":false,"isOnSale":false},
  {"id":"kr015","name":"Bibimbap Sauce","brand":"CJ Haechandle","country":"Korea","category":"Sauces","price":5.99,"originalPrice":null,"weight":"300g","rating":4.6,"reviews":654,"sold":4300,"image":"https://images.unsplash.com/photo-1590301157890-4810ed352733?w=600&q=80&fit=crop","description":"The essential gochujang-based sauce for authentic Korean bibimbap. Sweet, savory, and mildly spicy – just mix with rice, vegetables, and egg for the perfect Korean rice bowl.","ingredients":"Gochujang, soy sauce, sesame oil, sugar, garlic, vinegar, sesame seeds","nutrition":{"calories":90,"carbs":"18g","protein":"2g","fat":"2g","sodium":"760mg"},"allergens":"Soy, Wheat, Sesame","storage":"Refrigerate after opening","expiry":"18 months","tags":["bibimbap","gochujang","Korean sauce"],"isNew":false,"isBestseller":false,"isOnSale":false},
  {"id":"jp015","name":"Kirin Afternoon Tea","brand":"Kirin","country":"Japan","category":"Asian Drinks","price":2.49,"originalPrice":null,"weight":"500ml","rating":4.6,"reviews":987,"sold":7800,"image":"https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600&q=80&fit=crop","description":"Japan's most popular bottled milk tea, with a smooth, mellow black tea flavor and creamy milk. Kirin Afternoon Tea has been a vending machine staple in Japan since 1986.","ingredients":"Water, black tea extract, milk, sugar, vitamin C","nutrition":{"calories":60,"carbs":"12g","protein":"1g","fat":"0g","sodium":"20mg"},"allergens":"Milk","storage":"Keep cool","expiry":"12 months","tags":["milk tea","classic","bottled"],"isNew":false,"isBestseller":false,"isOnSale":false},
  {"id":"cn013","name":"Kong Fu Tea Jasmine Tea","brand":"Nayuki","country":"China","category":"Tea","price":6.99,"originalPrice":null,"weight":"50g (25 bags)","rating":4.7,"reviews":765,"sold":5400,"image":"https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600&q=80&fit=crop","description":"Premium Chinese jasmine tea – delicate green tea leaves scented multiple times with fresh jasmine blossoms. Light, floral, and supremely relaxing.","ingredients":"Green tea, jasmine blossoms","nutrition":{"calories":0,"carbs":"0g","protein":"0g","fat":"0g","sodium":"0mg"},"allergens":"None","storage":"Airtight container, cool dry place","expiry":"24 months","tags":["jasmine tea","floral","relaxing"],"isNew":false,"isBestseller":false,"isOnSale":false},
  {"id":"vn011","name":"Trà Ô Long Sữa Hoa Đào","brand":"C2","country":"Vietnam","category":"Asian Drinks","price":2.79,"originalPrice":null,"weight":"455ml","rating":4.5,"reviews":654,"sold":4800,"image":"https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=600&q=80&fit=crop","description":"Popular Vietnamese ready-to-drink peach oolong milk tea. Light, slightly sweet, with a delicate peachy fragrance. C2 is a Vietnam street food and convenience store icon.","ingredients":"Water, oolong tea extract, milk, sugar, peach extract, vitamin C","nutrition":{"calories":70,"carbs":"17g","protein":"0g","fat":"0g","sodium":"15mg"},"allergens":"Milk","storage":"Keep cool","expiry":"12 months","tags":["milk tea","peach","Vietnamese drink"],"isNew":false,"isBestseller":false,"isOnSale":false},
  {"id":"th012","name":"Lay's Thai Flavor Potato Chips","brand":"Lay's","country":"Thailand","category":"Asian Snacks","price":3.49,"originalPrice":null,"weight":"75g","rating":4.7,"reviews":1340,"sold":9800,"image":"https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=600&q=80&fit=crop","description":"Thai-exclusive Lay's flavors including Grilled Prawn and Nori Seaweed. The crispy, uniquely flavored chips you can only get from Thailand's snack lineup.","ingredients":"Potato, vegetable oil, seasoning (shrimp powder/seaweed extract, salt, sugar, MSG)","nutrition":{"calories":540,"carbs":"56g","protein":"6g","fat":"33g","sodium":"650mg"},"allergens":"Wheat, Shrimp","storage":"Cool dry place","expiry":"6 months","tags":["Thai chips","prawn flavor","unique"],"isNew":false,"isBestseller":false,"isOnSale":false},
  {"id":"in012","name":"Britannia Good Day Biscuits","brand":"Britannia","country":"India","category":"Asian Snacks","price":2.99,"originalPrice":null,"weight":"200g","rating":4.5,"reviews":1560,"sold":11000,"image":"https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600&q=80&fit=crop","description":"India's popular butter biscuit with visible cashew pieces. Britannia Good Day biscuits are a household staple – buttery, crumbly, and perfect with chai.","ingredients":"Wheat flour, sugar, butter, cashews, salt, baking soda, vanilla","nutrition":{"calories":480,"carbs":"68g","protein":"8g","fat":"20g","sodium":"380mg"},"allergens":"Wheat, Milk, Tree nuts","storage":"Cool dry place","expiry":"6 months","tags":["butter biscuit","cashew","Indian snack"],"isNew":false,"isBestseller":false,"isOnSale":false},
  {"id":"tw010","name":"Kavalan Whisky Chocolate","brand":"Kavalan","country":"Taiwan","category":"Taiwanese Food","price":18.99,"originalPrice":null,"weight":"150g","rating":4.8,"reviews":432,"sold":2100,"image":"https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=600&q=80&fit=crop","description":"Premium Taiwanese chocolate infused with Kavalan single malt whisky. Dark chocolate with a warm, oaky, caramel finish. A sophisticated souvenir from Taiwan's award-winning distillery.","ingredients":"Dark chocolate (cocoa mass, sugar, cocoa butter), Kavalan single malt whisky, sea salt","nutrition":{"calories":540,"carbs":"45g","protein":"5g","fat":"36g","sodium":"180mg"},"allergens":"Milk, Soy","storage":"Cool dry place","expiry":"12 months","tags":["chocolate","whisky","premium gift"],"isNew":true,"isBestseller":false,"isOnSale":false},
  {"id":"kr016","name":"Jeju Tangerine Juice","brand":"Jeju","country":"Korea","category":"Asian Drinks","price":5.99,"originalPrice":null,"weight":"300ml","rating":4.7,"reviews":876,"sold":6300,"image":"https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=600&q=80&fit=crop","description":"Fresh-squeezed tangerine juice from the famous Jeju Island, Korea's subtropical paradise. Bright, sweet, and tangy with no added sugar or preservatives.","ingredients":"100% Jeju tangerine juice","nutrition":{"calories":60,"carbs":"14g","protein":"1g","fat":"0g","sodium":"0mg"},"allergens":"None","storage":"Refrigerate, consume within 3 days opening","expiry":"30 days refrigerated","tags":["Jeju","tangerine","fresh juice"],"isNew":false,"isBestseller":false,"isOnSale":false},
  {"id":"jp016","name":"Yakult Probiotic Drink","brand":"Yakult","country":"Japan","category":"Asian Drinks","price":6.99,"originalPrice":null,"weight":"65ml x 5","rating":4.8,"reviews":2300,"sold":18000,"image":"https://images.unsplash.com/photo-1550583724-b2692b85b150?w=600&q=80&fit=crop","description":"The original probiotic fermented milk drink. Each Yakult contains 6.5 billion Lactobacillus casei Shirota bacteria, supporting your gut health since 1935.","ingredients":"Skimmed milk, glucose, sucrose, water, natural flavor, Lactobacillus casei Shirota","nutrition":{"calories":50,"carbs":"10g","protein":"1g","fat":"0g","sodium":"15mg"},"allergens":"Milk","storage":"Keep refrigerated","expiry":"35 days refrigerated","tags":["probiotic","gut health","iconic"],"isNew":false,"isBestseller":true,"isOnSale":false},
  {"id":"cn014","name":"Three Squirrels Mixed Nuts","brand":"Three Squirrels","country":"China","category":"Asian Snacks","price":15.99,"originalPrice":18.99,"weight":"500g","rating":4.7,"reviews":1340,"sold":8900,"image":"https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=600&q=80&fit=crop","description":"China's most popular online snack brand. Premium roasted mixed nuts: macadamia, cashews, almonds, walnuts, pistachios, and dried fruit. Ideal as a health snack or gift.","ingredients":"Macadamia nuts, cashews, almonds, walnuts, pistachios, raisins, dried cranberries, salt","nutrition":{"calories":580,"carbs":"28g","protein":"16g","fat":"50g","sodium":"120mg"},"allergens":"Tree nuts","storage":"Cool dry place","expiry":"6 months","tags":["mixed nuts","healthy snack","gift"],"isNew":false,"isBestseller":false,"isOnSale":true},
  {"id":"vn012","name":"King Coffee Ground Premium","brand":"King Coffee","country":"Vietnam","category":"Coffee","price":16.99,"originalPrice":null,"weight":"250g","rating":4.7,"reviews":654,"sold":4100,"image":"https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80&fit=crop","description":"Premium Vietnamese ground coffee for a traditional phin filter brew. A blend of Arabica and Robusta grown in the Central Highlands, roasted with butter for a smooth, chocolatey finish.","ingredients":"100% Vietnamese coffee (Arabica/Robusta blend, roasted with butter)","nutrition":{"calories":2,"carbs":"0g","protein":"0g","fat":"0g","sodium":"0mg"},"allergens":"Milk","storage":"Airtight container","expiry":"18 months","tags":["ground coffee","phin filter","Vietnamese premium"],"isNew":false,"isBestseller":false,"isOnSale":false},
  {"id":"th013","name":"Tao Kae Noi Seaweed Snacks","brand":"Tao Kae Noi","country":"Thailand","category":"Asian Snacks","price":3.99,"originalPrice":null,"weight":"32g","rating":4.8,"reviews":2100,"sold":16000,"image":"https://images.unsplash.com/photo-1548907040-4baa42d10919?w=600&q=80&fit=crop","description":"Thailand's most popular seaweed snack brand. Crispy roasted seaweed with just a touch of seasoning. Light, healthy, and addictively crunchy.","ingredients":"Seaweed, vegetable oil, salt, sugar, soy sauce","nutrition":{"calories":45,"carbs":"4g","protein":"1g","fat":"3g","sodium":"120mg"},"allergens":"Soy","storage":"Cool dry place","expiry":"12 months","tags":["seaweed","crispy","healthy snack"],"isNew":false,"isBestseller":true,"isOnSale":false},
  {"id":"in013","name":"Patanjali Honey","brand":"Patanjali","country":"India","category":"Indian Food","price":12.99,"originalPrice":null,"weight":"500g","rating":4.6,"reviews":876,"sold":5600,"image":"https://images.unsplash.com/photo-1546173159-315724a31696?w=600&q=80&fit=crop","description":"Pure, natural honey sourced from Himalayan beehives. Patanjali's raw honey is unprocessed and unheated, retaining all natural enzymes and antioxidants.","ingredients":"Pure natural honey (multi-floral)","nutrition":{"calories":304,"carbs":"82g","protein":"0g","fat":"0g","sodium":"4mg"},"allergens":"None","storage":"Room temperature, away from sunlight","expiry":"24 months","tags":["honey","natural","Himalayan"],"isNew":false,"isBestseller":false,"isOnSale":false},
  {"id":"tw011","name":"Shea Terra Rose Tea","brand":"Wang De Chuan","country":"Taiwan","category":"Tea","price":19.99,"originalPrice":null,"weight":"100g","rating":4.8,"reviews":543,"sold":3200,"image":"https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=600&q=80&fit=crop","description":"Exquisite Taiwan ruby 18 (Hong Yuk) black tea with a natural honey and rose note. Crafted by Wang De Chuan, one of Taiwan's most prestigious tea houses.","ingredients":"100% Taiwan Ruby 18 black tea leaves","nutrition":{"calories":0,"carbs":"0g","protein":"0g","fat":"0g","sodium":"0mg"},"allergens":"None","storage":"Airtight, cool dry place","expiry":"24 months","tags":["ruby 18","black tea","Taiwan premium"],"isNew":false,"isBestseller":false,"isOnSale":false},
  {"id":"kr017","name":"Nongshim Chapagetti","brand":"Nongshim","country":"Korea","category":"Instant Noodles","price":3.29,"originalPrice":null,"weight":"140g","rating":4.7,"reviews":1120,"sold":7800,"image":"https://images.unsplash.com/photo-1607523601629-50cda4b0df41?w=600&q=80&fit=crop","description":"Korea's famous jajangmyeon-style instant noodle. Black bean sauce coats thick, chewy noodles for a satisfying, deeply savory dish made famous by the movie Parasite.","ingredients":"Wheat noodles, black bean paste, caramel coloring, onion, sesame oil, vegetable powder","nutrition":{"calories":560,"carbs":"82g","protein":"10g","fat":"20g","sodium":"1350mg"},"allergens":"Wheat, Soy","storage":"Cool dry place","expiry":"12 months","tags":["chapagetti","black bean","jajangmyeon","Parasite"],"isNew":false,"isBestseller":true,"isOnSale":false},
  {"id":"jp017","name":"Otsuka Pocari Sweat","brand":"Otsuka","country":"Japan","category":"Asian Drinks","price":2.79,"originalPrice":null,"weight":"500ml","rating":4.7,"reviews":1450,"sold":12000,"image":"https://images.unsplash.com/photo-1614977645540-7abd88ba8e78?w=600&q=80&fit=crop","description":"Japan's beloved electrolyte sports drink. Pocari Sweat replenishes lost ions with a mild, slightly sweet flavor. A staple in gyms, hospitals, and every Japanese household.","ingredients":"Water, glucose, fructose, citric acid, sodium chloride, potassium chloride, calcium lactate, magnesium carbonate","nutrition":{"calories":75,"carbs":"19g","protein":"0g","fat":"0g","sodium":"122mg"},"allergens":"None","storage":"Keep cool","expiry":"24 months","tags":["electrolyte","sports drink","ion supply"],"isNew":false,"isBestseller":false,"isOnSale":false},
  {"id":"cn015","name":"Nongfu Spring Tea Pi","brand":"Nongfu Spring","country":"China","category":"Asian Drinks","price":2.29,"originalPrice":null,"weight":"500ml","rating":4.6,"reviews":1230,"sold":9800,"image":"https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=600&q=80&fit=crop","description":"Nongfu Spring's premium bottled oolong tea with no sugar or sweetener – just pure, slightly oxidized tea flavor. Refreshing and sophisticated.","ingredients":"Water, oolong tea extract","nutrition":{"calories":0,"carbs":"0g","protein":"0g","fat":"0g","sodium":"0mg"},"allergens":"None","storage":"Keep cool","expiry":"18 months","tags":["oolong","no sugar","premium bottled tea"],"isNew":false,"isBestseller":false,"isOnSale":false},
  {"id":"vn013","name":"Nestlé MILO Vietnam","brand":"Nestlé","country":"Vietnam","category":"Asian Drinks","price":9.99,"originalPrice":null,"weight":"400g","rating":4.8,"reviews":1560,"sold":11000,"image":"https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80&fit=crop","description":"The beloved malt chocolate energy drink. MILO Vietnam has a distinctive, more cocoa-forward and malty taste compared to other markets. Mix with hot or cold milk or water.","ingredients":"Malt barley extract, sugar, whole milk powder, cocoa, vitamins and minerals","nutrition":{"calories":368,"carbs":"73g","protein":"10g","fat":"5g","sodium":"220mg"},"allergens":"Milk, Wheat","storage":"Cool dry place","expiry":"24 months","tags":["milo","malt chocolate","energy"],"isNew":false,"isBestseller":false,"isOnSale":false},
  {"id":"th014","name":"Papa Brand Crispy Garlic","brand":"Papa","country":"Thailand","category":"Sauces","price":5.49,"originalPrice":null,"weight":"200g","rating":4.7,"reviews":876,"sold":5600,"image":"https://images.unsplash.com/photo-1590301157890-4810ed352733?w=600&q=80&fit=crop","description":"Thai-style crispy fried garlic in oil. The perfect condiment to finish any Asian dish – rice, noodles, soups. Deep golden, fragrant, and crunchy.","ingredients":"Garlic, vegetable oil, salt","nutrition":{"calories":350,"carbs":"28g","protein":"4g","fat":"25g","sodium":"480mg"},"allergens":"None","storage":"Cool dry place","expiry":"12 months","tags":["crispy garlic","condiment","Thai topping"],"isNew":false,"isBestseller":false,"isOnSale":false},
  {"id":"in014","name":"Lijjat Papad Urad","brand":"Lijjat","country":"India","category":"Indian Food","price":3.49,"originalPrice":null,"weight":"200g","rating":4.6,"reviews":987,"sold":7800,"image":"https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=600&q=80&fit=crop","description":"Thin, crunchy lentil wafers that are an essential part of every Indian meal. Lijjat Papad is roasted or fried and served as an accompaniment to dal, rice, or as a snack.","ingredients":"Black lentil flour, salt, black pepper, cumin, vegetable oil","nutrition":{"calories":350,"carbs":"60g","protein":"25g","fat":"2g","sodium":"1050mg"},"allergens":"None","storage":"Cool dry place","expiry":"12 months","tags":["papad","lentil","Indian meal"],"isNew":false,"isBestseller":false,"isOnSale":false},
  {"id":"tw012","name":"I-Mei Sesame Peanut Butter","brand":"I-Mei","country":"Taiwan","category":"Taiwanese Food","price":9.99,"originalPrice":null,"weight":"370g","rating":4.7,"reviews":654,"sold":4200,"image":"https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=600&q=80&fit=crop","description":"Traditional Taiwanese peanut butter with roasted sesame. Rich, smooth, and fragrant – spread on toast or use as a dipping sauce for noodles and shabu-shabu.","ingredients":"Peanuts, sesame, sugar, salt, vegetable oil","nutrition":{"calories":592,"carbs":"17g","protein":"24g","fat":"50g","sodium":"300mg"},"allergens":"Peanuts, Sesame","storage":"Cool dry place, refrigerate after opening","expiry":"12 months","tags":["peanut butter","sesame","Taiwanese spread"],"isNew":false,"isBestseller":false,"isOnSale":false},
  {"id":"kr018","name":"Daesang Doenjang Soybean Paste","brand":"Daesang","country":"Korea","category":"Korean Food","price":7.99,"originalPrice":null,"weight":"500g","rating":4.8,"reviews":765,"sold":5400,"image":"https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=600&q=80&fit=crop","description":"Authentic Korean fermented soybean paste – the foundation of Korean cuisine. Deeply savory, earthy, and complex. Essential for doenjang jjigae (soybean paste stew) and marinades.","ingredients":"Soybeans, salt, water (fermented)","nutrition":{"calories":180,"carbs":"22g","protein":"20g","fat":"4g","sodium":"2800mg"},"allergens":"Soy, Wheat","storage":"Refrigerate after opening","expiry":"24 months","tags":["doenjang","fermented","Korean staple"],"isNew":false,"isBestseller":false,"isOnSale":false},
  {"id":"jp018","name":"S&B Golden Curry Medium","brand":"S&B","country":"Japan","category":"Japanese Food","price":5.99,"originalPrice":null,"weight":"92g","rating":4.8,"reviews":2100,"sold":16000,"image":"https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=600&q=80&fit=crop","description":"Japan's most popular curry roux. S&B Golden Curry creates a thick, glossy, mildly sweet and savory Japanese curry sauce in minutes. Perfect over rice with chicken or vegetables.","ingredients":"Wheat flour, palm oil, salt, sugar, curry powder, spices","nutrition":{"calories":472,"carbs":"60g","protein":"8g","fat":"22g","sodium":"2940mg"},"allergens":"Wheat, Milk, Soy","storage":"Cool dry place","expiry":"3 years","tags":["curry roux","Japanese curry","easy cooking"],"isNew":false,"isBestseller":true,"isOnSale":false},
  {"id":"cn016","name":"Wang Wang Senbei Rice Crackers","brand":"Want Want","country":"China","category":"Asian Snacks","price":5.49,"originalPrice":null,"weight":"360g","rating":4.6,"reviews":987,"sold":8700,"image":"https://images.unsplash.com/photo-1617196034183-421b4040ed20?w=600&q=80&fit=crop","description":"Large, puffy Japanese-style senbei rice crackers from China's beloved Want Want brand. Light, crunchy, and lightly seasoned – perfect for snacking.","ingredients":"Rice flour, sugar, soy sauce, salt, vegetable oil, MSG","nutrition":{"calories":385,"carbs":"84g","protein":"5g","fat":"2g","sodium":"580mg"},"allergens":"Soy, Wheat","storage":"Cool dry place","expiry":"12 months","tags":["senbei","rice cracker","puffy"],"isNew":false,"isBestseller":false,"isOnSale":false},
  {"id":"vn014","name":"Sinh Tố Bơ Avocado Smoothie Mix","brand":"Vinasoy","country":"Vietnam","category":"Asian Drinks","price":7.99,"originalPrice":null,"weight":"200g","rating":4.5,"reviews":432,"sold":2800,"image":"https://images.unsplash.com/photo-1536478880920-8a2f8936ff87?w=600&q=80&fit=crop","description":"Vietnamese avocado smoothie powder mix. Make the rich, creamy sinh tố bơ – a street food specialty – at home with this easy-mix blend that captures the essence of Saigon's coffee shops.","ingredients":"Avocado powder, coconut cream, sugar, whole milk powder, vanilla extract","nutrition":{"calories":260,"carbs":"38g","protein":"4g","fat":"11g","sodium":"90mg"},"allergens":"Milk, Tree nuts (coconut)","storage":"Cool dry place","expiry":"18 months","tags":["avocado smoothie","Vietnamese","street food"],"isNew":true,"isBestseller":false,"isOnSale":false},
  {"id":"th015","name":"MAMA Pork Flavor Noodle","brand":"Mama","country":"Thailand","category":"Instant Noodles","price":2.49,"originalPrice":null,"weight":"55g","rating":4.4,"reviews":1230,"sold":9200,"image":"https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=600&q=80&fit=crop","description":"The classic Thai pork-flavored instant noodle. Thin, springy noodles in a light, savory pork broth. Thailand's equivalent of Japan's Nissin – ubiquitous and universally loved.","ingredients":"Wheat noodles, pork extract, garlic, salt, MSG, vegetable flakes","nutrition":{"calories":330,"carbs":"57g","protein":"8g","fat":"8g","sodium":"1480mg"},"allergens":"Wheat, Soy","storage":"Cool dry place","expiry":"12 months","tags":["pork","Thai noodle","everyday"],"isNew":false,"isBestseller":false,"isOnSale":false}
]
;
  document.dispatchEvent(new Event('productsLoaded'));
}

// Get products by filter
function getProducts({ country, category, minPrice, maxPrice, sort, search, limit } = {}) {
  let result = [...ALL_PRODUCTS];

  if (country && country !== 'all') {
    result = result.filter(p => p.country.toLowerCase() === country.toLowerCase());
  }
  if (category && category !== 'all') {
    result = result.filter(p => p.category.toLowerCase() === category.toLowerCase());
  }
  if (minPrice !== undefined) result = result.filter(p => p.price >= minPrice);
  if (maxPrice !== undefined) result = result.filter(p => p.price <= maxPrice);
  if (search) {
    const q = search.toLowerCase();
    result = result.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      p.country.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q)
    );
  }

  switch (sort) {
    case 'bestseller': result.sort((a, b) => b.sold - a.sold); break;
    case 'new': result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0)); break;
    case 'price_asc': result.sort((a, b) => a.price - b.price); break;
    case 'price_desc': result.sort((a, b) => b.price - a.price); break;
    default: result.sort((a, b) => b.sold - a.sold); break;
  }

  if (limit) result = result.slice(0, limit);
  return result;
}

function getProductById(id) {
  return ALL_PRODUCTS.find(p => p.id === id);
}

function getBestsellers(limit = 8) {
  return getProducts({ sort: 'bestseller', limit });
}

function getNewArrivals(limit = 8) {
  return ALL_PRODUCTS.filter(p => p.isNew).slice(0, limit);
}

function getByCategory(cat, limit = 8) {
  return getProducts({ category: cat, limit });
}

function getByCountry(country, limit = 8) {
  return getProducts({ country, limit });
}

function getRelated(product, limit = 6) {
  return ALL_PRODUCTS
    .filter(p => p.id !== product.id && (p.country === product.country || p.category === product.category))
    .slice(0, limit);
}

// Stars HTML
function starsHtml(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  let html = '';
  for (let i = 0; i < full; i++) html += '★';
  if (half) html += '½';
  return html;
}

// Format price
function formatPrice(price, currency = 'USD') {
  return '$' + price.toFixed(2);
}

// Discount percent
function discountPct(original, current) {
  if (!original) return 0;
  return Math.round((1 - current / original) * 100);
}

// Cart Manager
const Cart = {
  get() {
    return JSON.parse(localStorage.getItem('saywee_cart') || '[]');
  },
  save(cart) {
    localStorage.setItem('saywee_cart', JSON.stringify(cart));
    Cart.updateBadge();
    document.dispatchEvent(new Event('cartChange'));
  },
  add(productId, qty = 1) {
    const cart = Cart.get();
    const idx = cart.findIndex(i => i.id === productId);
    if (idx > -1) {
      cart[idx].qty += qty;
    } else {
      cart.push({ id: productId, qty });
    }
    Cart.save(cart);
    showToast(LangManager.get('toast_added_cart'), 'success');
  },
  remove(productId) {
    const cart = Cart.get().filter(i => i.id !== productId);
    Cart.save(cart);
    showToast(LangManager.get('toast_removed_cart'), 'error');
  },
  updateQty(productId, qty) {
    const cart = Cart.get();
    const idx = cart.findIndex(i => i.id === productId);
    if (idx > -1) {
      if (qty <= 0) { cart.splice(idx, 1); }
      else { cart[idx].qty = qty; }
    }
    Cart.save(cart);
  },
  clear() {
    Cart.save([]);
  },
  total() {
    const cart = Cart.get();
    return cart.reduce((sum, item) => {
      const p = getProductById(item.id);
      return sum + (p ? p.price * item.qty : 0);
    }, 0);
  },
  count() {
    return Cart.get().reduce((sum, i) => sum + i.qty, 0);
  },
  updateBadge() {
    const count = Cart.count();
    document.querySelectorAll('.cart-badge').forEach(el => {
      el.textContent = count;
      el.style.display = count > 0 ? 'flex' : 'none';
    });
  }
};

// Wishlist Manager
const Wishlist = {
  get() {
    return JSON.parse(localStorage.getItem('saywee_wishlist') || '[]');
  },
  save(list) {
    localStorage.setItem('saywee_wishlist', JSON.stringify(list));
    Wishlist.updateBadge();
    document.dispatchEvent(new Event('wishlistChange'));
  },
  toggle(productId) {
    const list = Wishlist.get();
    const idx = list.indexOf(productId);
    if (idx > -1) {
      list.splice(idx, 1);
      Wishlist.save(list);
      showToast(LangManager.get('toast_removed_wish'));
      return false;
    } else {
      list.push(productId);
      Wishlist.save(list);
      showToast(LangManager.get('toast_added_wish'), 'success');
      return true;
    }
  },
  has(productId) {
    return Wishlist.get().includes(productId);
  },
  count() {
    return Wishlist.get().length;
  },
  updateBadge() {
    const count = Wishlist.count();
    document.querySelectorAll('.wishlist-badge').forEach(el => {
      el.textContent = count;
      el.style.display = count > 0 ? 'flex' : 'none';
    });
  }
};

// Recently Viewed
const RecentlyViewed = {
  get() {
    return JSON.parse(localStorage.getItem('saywee_recent') || '[]');
  },
  add(productId) {
    let list = RecentlyViewed.get().filter(id => id !== productId);
    list.unshift(productId);
    list = list.slice(0, 10);
    localStorage.setItem('saywee_recent', JSON.stringify(list));
  },
  getProducts(limit = 6) {
    return RecentlyViewed.get().slice(0, limit).map(id => getProductById(id)).filter(Boolean);
  }
};

// Auth Manager
const Auth = {
  get() {
    return JSON.parse(localStorage.getItem('saywee_user') || 'null');
  },
  login(email, password) {
    const users = JSON.parse(localStorage.getItem('saywee_users') || '[]');
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      const { password: _, ...safe } = user;
      localStorage.setItem('saywee_user', JSON.stringify(safe));
      Auth.updateUI();
      showToast(LangManager.get('toast_login'), 'success');
      return true;
    }
    return false;
  },
  register(name, email, password) {
    const users = JSON.parse(localStorage.getItem('saywee_users') || '[]');
    if (users.find(u => u.email === email)) return false;
    users.push({ name, email, password });
    localStorage.setItem('saywee_users', JSON.stringify(users));
    const safe = { name, email };
    localStorage.setItem('saywee_user', JSON.stringify(safe));
    Auth.updateUI();
    showToast(LangManager.get('toast_register'), 'success');
    return true;
  },
  logout() {
    localStorage.removeItem('saywee_user');
    Auth.updateUI();
    showToast(LangManager.get('toast_logout'));
  },
  isLoggedIn() {
    return !!Auth.get();
  },
  updateUI() {
    const user = Auth.get();

    // Auth name
    document.querySelectorAll('.auth-name').forEach(el => {
      el.textContent = user ? user.name : '';
    });

    // Login button – luôn dẫn đến login.html, không bao giờ '#'
    document.querySelectorAll('.login-link').forEach(el => {
      el.href = 'login.html';
      el.style.cursor = 'pointer';
      el.style.pointerEvents = 'auto';
      el.style.textDecoration = 'none';
      if (user) {
        // Đã login: hiện avatar chữ cái
        el.innerHTML = `<span style="
          display:inline-flex;align-items:center;justify-content:center;
          width:32px;height:32px;border-radius:50%;
          background:var(--primary);color:#111;
          font-size:13px;font-weight:800;letter-spacing:0;
          pointer-events:none;
        ">${user.name.charAt(0).toUpperCase()}</span>`;
        el.title = user.name + ' – 계정 관리';
      } else {
        // Chưa login: icon người
        el.innerHTML = '👤';
        el.title = '로그인';
      }
    });

    // Logout button (nếu có trong trang)
    document.querySelectorAll('.logout-btn').forEach(el => {
      el.style.display = user ? 'block' : 'none';
    });
  }
};

// Reviews Manager
const Reviews = {
  getKey(productId) { return `saywee_reviews_${productId}`; },
  get(productId) {
    return JSON.parse(localStorage.getItem(Reviews.getKey(productId)) || '[]');
  },
  add(productId, review) {
    const list = Reviews.get(productId);
    list.unshift({ ...review, id: Date.now(), date: new Date().toISOString() });
    localStorage.setItem(Reviews.getKey(productId), JSON.stringify(list));
  }
};

// Q&A Manager
const QA = {
  getKey(productId) { return `saywee_qa_${productId}`; },
  get(productId) {
    return JSON.parse(localStorage.getItem(QA.getKey(productId)) || '[]');
  },
  add(productId, question) {
    const list = QA.get(productId);
    list.unshift({ question, answer: null, date: new Date().toISOString(), id: Date.now() });
    localStorage.setItem(QA.getKey(productId), JSON.stringify(list));
  }
};

// Toast Notification
function showToast(msg, type = '') {
  const icons = { success: '✓', error: '✕', warning: '⚠' };
  const container = document.getElementById('toast-container');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `<span class="toast-icon">${icons[type] || 'ℹ'}</span><span>${msg}</span>`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.animation = 'none';
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// Build Product Card HTML
function buildProductCard(product) {
  const wishlisted = Wishlist.has(product.id);
  const discount = discountPct(product.originalPrice, product.price);
  const grad = (typeof getProductGradient === 'function') ? getProductGradient(product) : '#f7f3e8';
  const emoji = (typeof getProductEmoji === 'function') ? getProductEmoji(product) : '🛒';
  return `
    <div class="product-card" onclick="window.location.href='product.html?id=${product.id}'">
      <div class="product-card-img" style="background:${grad};position:relative;aspect-ratio:1/1;overflow:hidden;display:flex;align-items:center;justify-content:center;">
        <span style="font-size:58px;line-height:1;position:relative;z-index:1;filter:drop-shadow(0 4px 12px rgba(0,0,0,0.2));display:none;">${emoji}</span>
        <img src="${(typeof PRODUCT_IMAGES !== 'undefined' && PRODUCT_IMAGES['${product.id}']) || product.image}" alt="${product.name}" loading="lazy"
          style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:1;z-index:2;background:#f5f5f5;"
          onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=600&q=80';">
        <div class="product-badges">
          ${product.isOnSale && discount > 0 ? '<span class="badge-item badge-sale">-'+discount+'%</span>' : ''}
          ${product.isNew ? '<span class="badge-item badge-new">New</span>' : ''}
          ${product.isBestseller ? '<span class="badge-item badge-best">Best</span>' : ''}
        </div>
        <div class="product-card-actions">
          <button class="card-action-btn ${wishlisted ? 'wishlisted' : ''}" onclick="event.stopPropagation(); toggleWishCard(this, '${product.id}')" title="Wishlist">
            ${wishlisted ? '♥' : '♡'}
          </button>
          <button class="card-action-btn" onclick="event.stopPropagation(); Cart.add('${product.id}')" title="Add to cart">
            🛒
          </button>
        </div>
      </div>
      <div class="product-card-body">
        <div class="product-country">
          <span>${countryFlag(product.country)}</span>
          <span>${product.country}</span>
        </div>
        <div class="product-name">${product.name}</div>
        <div class="product-brand">${product.brand}</div>
        <div class="product-rating">
          <span class="stars">${starsHtml(product.rating)}</span>
          <span class="rating-count">(${product.reviews.toLocaleString()})</span>
        </div>
        <div class="product-price">
          <span class="price-current">${formatPrice(product.price)}</span>
          ${product.originalPrice ? '<span class="price-original">'+formatPrice(product.originalPrice)+'</span>' : ''}
          ${discount > 0 ? '<span class="price-discount">-'+discount+'%</span>' : ''}
        </div>
      </div>
      <div class="product-card-footer">
        <button class="add-to-cart-btn" onclick="event.stopPropagation(); Cart.add('${product.id}')">
          🛒 <span data-lang="add_to_cart">${LangManager.get('add_to_cart')}</span>
        </button>
      </div>
    </div>
  `;
}

function toggleWishCard(btn, id) {
  const added = Wishlist.toggle(id);
  btn.innerHTML = added ? '♥' : '♡';
  btn.classList.toggle('wishlisted', added);
}

function countryFlag(country) {
  const flags = {
    'Korea': '🇰🇷', 'Japan': '🇯🇵', 'China': '🇨🇳',
    'Vietnam': '🇻🇳', 'Thailand': '🇹🇭', 'India': '🇮🇳', 'Taiwan': '🇹🇼'
  };
  return flags[country] || '🌏';
}

// Render product grid into element
function renderGrid(products, container, emptyMsg) {
  if (!container) return;
  if (!products.length) {
    container.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:40px;color:var(--text-muted)">${emptyMsg || LangManager.get('no_products')}</div>`;
    return;
  }
  container.innerHTML = products.map(buildProductCard).join('');
}

// Init on load
document.addEventListener('DOMContentLoaded', () => {
  Cart.updateBadge();
  Wishlist.updateBadge();
  Auth.updateUI();
  // setTimeout 0 ensures page-specific listeners (initShopPage etc) register first
  setTimeout(loadProducts, 0);
});
