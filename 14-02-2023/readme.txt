CREAZIONE DEL DATABASE:
use esercizio
'switched to db esercizio'

CREAZIONE DELLA COLLEZIONE 'COMMENTS':
db.createCollection('comments')
{ ok: 1 }

INSERIMENTO DI UN RECORD:
db.comments.insertOne(
{id: 1,
body: 'This is some awesome thinking!',
user: {
id: 54,
}

}
)
{
acknowledged: true,
insertedId: ObjectId("63eba99d7a96a2ae8c949739")
}

CANCELLAZIONE DI UN RECORD:
db.comments.deleteOne({id: 1})
{
acknowledged: true,
deletedCount: 1
}

INSERIMENTO DI UN RECORD:
db.comments.insertOne(
{id: 1,
body: "This is some awesome thinking!",
user: {
id: 63,
username: "eburras1q"
}

}
)
{
acknowledged: true,
insertedId: ObjectId("63ebaa427a96a2ae8c94973a")
}

INSERIMENTO DI PIù RECORD:
db.comments.insertMany([
{
id: 2,
body: "What terrific math skills you’re showing!",
user: {
id: 71,
username: "omarsland1y"
}
},
{
id: 3,
body: "You are an amazing writer!",
user: {
id: 29,
username: "jissetts"
}
},
{
id: 4,
body: "Wow! You have improved so much!",
user: {
id: 19,
username: "bleveragei"
}
},
{
id: 5,
body: "Nice idea!",
user: {
id: 70,
username: "cmasurel1x"
}
}
])
{
acknowledged: true,
insertedIds: {
'0': ObjectId("63ebabcf7a96a2ae8c94973b"),
'1': ObjectId("63ebabcf7a96a2ae8c94973c"),
'2': ObjectId("63ebabcf7a96a2ae8c94973d"),
'3': ObjectId("63ebabcf7a96a2ae8c94973e")
}
}

CREAZIONE DELLA COLLEZIONE 'PRODUCTS'
db.createCollection('products')
{ ok: 1 }
db.products.insertMany([
{
id: 1,
title: "iPhone 9",
description: "An apple mobile which is nothing like apple",
price: 549,
rating: 4.69,
brand: "Apple",
category: "smartphones"
},
{
id: 2,
title: "iPhone X",
description: "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
price: 899,
rating: 4.44,
brand: "Apple",
category: "smartphones"
},
{
id: 3,
title: "Samsung Universe 9",
description: "Samsung's new variant which goes beyond Galaxy to the Universe",
price: 1249,
rating: 4.09,
brand: "Samsung",
category: "smartphones"
},
{
id: 4,
title: "OPPOF19",
description: "OPPO F19 is officially announced on April 2021.",
price: 280,
rating: 4.3,
brand: "OPPO",
category: "smartphones"
},
{
id: 5,
title: "Huawei P30",
description: "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
price: 499,
rating: 4.09,
brand: "Huawei",
category: "smartphones"
},
{
id: 6,
title: "MacBook Pro",
description: "MacBook Pro 2021 with mini-LED display may launch between September, November",
price: 1749,
rating: 4.57,
brand: "Apple",
category: "laptops"
}
])
{
acknowledged: true,
insertedIds: {
'0': ObjectId("63ebaeb47a96a2ae8c94973f"),
'1': ObjectId("63ebaeb47a96a2ae8c949740"),
'2': ObjectId("63ebaeb47a96a2ae8c949741"),
'3': ObjectId("63ebaeb47a96a2ae8c949742"),
'4': ObjectId("63ebaeb47a96a2ae8c949743"),
'5': ObjectId("63ebaeb47a96a2ae8c949744")
}
}

RESTITUZIONE DI TUTTI I DATI DELLA COLLECTION 'PRODUCTS':
db.products.find()
{
\_id: ObjectId("63ebaeb47a96a2ae8c94973f"),
id: 1,
title: 'iPhone 9',
description: 'An apple mobile which is nothing like apple',
price: 549,
rating: 4.69,
brand: 'Apple',
category: 'smartphones'
}
{
\_id: ObjectId("63ebaeb47a96a2ae8c949740"),
id: 2,
title: 'iPhone X',
description: 'SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...',
price: 899,
rating: 4.44,
brand: 'Apple',
category: 'smartphones'
}
{
\_id: ObjectId("63ebaeb47a96a2ae8c949741"),
id: 3,
title: 'Samsung Universe 9',
description: "Samsung's new variant which goes beyond Galaxy to the Universe",
price: 1249,
rating: 4.09,
brand: 'Samsung',
category: 'smartphones'
}
{
\_id: ObjectId("63ebaeb47a96a2ae8c949742"),
id: 4,
title: 'OPPOF19',
description: 'OPPO F19 is officially announced on April 2021.',
price: 280,
rating: 4.3,
brand: 'OPPO',
category: 'smartphones'
}
{
\_id: ObjectId("63ebaeb47a96a2ae8c949743"),
id: 5,
title: 'Huawei P30',
description: 'Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.',
price: 499,
rating: 4.09,
brand: 'Huawei',
category: 'smartphones'
}
{
\_id: ObjectId("63ebaeb47a96a2ae8c949744"),
id: 6,
title: 'MacBook Pro',
description: 'MacBook Pro 2021 with mini-LED display may launch between September, November',
price: 1749,
rating: 4.57,
brand: 'Apple',
category: 'laptops'
}

RESTITUZIONE DEL PRIMO RECORD CHE SODDISFA IL CRITERIO SPECIFICATO:
db.products.findOne({brand: 'Apple'})
{
\_id: ObjectId("63ebaeb47a96a2ae8c94973f"),
id: 1,
title: 'iPhone 9',
description: 'An apple mobile which is nothing like apple',
price: 549,
rating: 4.69,
brand: 'Apple',
category: 'smartphones'
}

RESTITUZIONE DI TUTTI I RECORD CHE SODDISFANO IL CRITERIO SPECIFICATO:
db.products.find({brand: 'Apple'})
{
\_id: ObjectId("63ebaeb47a96a2ae8c94973f"),
id: 1,
title: 'iPhone 9',
description: 'An apple mobile which is nothing like apple',
price: 549,
rating: 4.69,
brand: 'Apple',
category: 'smartphones'
}
{
\_id: ObjectId("63ebaeb47a96a2ae8c949740"),
id: 2,
title: 'iPhone X',
description: 'SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...',
price: 899,
rating: 4.44,
brand: 'Apple',
category: 'smartphones'
}
{
\_id: ObjectId("63ebaeb47a96a2ae8c949744"),
id: 6,
title: 'MacBook Pro',
description: 'MacBook Pro 2021 with mini-LED display may launch between September, November',
price: 1749,
rating: 4.57,
brand: 'Apple',
category: 'laptops'
}

MODIFICA DI UN RECORD:
db.products.updateOne({id: 6},
{
$set: {
price: 9999,
}
}
)
{
acknowledged: true,
insertedId: null,
matchedCount: 1,
modifiedCount: 1,
upsertedCount: 0
}

ORDINAMENTO PER RATING DECRESCENTE:
db.products.find().sort({rating: -1})
{
\_id: ObjectId("63ebaeb47a96a2ae8c94973f"),
id: 1,
title: 'iPhone 9',
description: 'An apple mobile which is nothing like apple',
price: 549,
rating: 4.69,
brand: 'Apple',
category: 'smartphones'
}
{
\_id: ObjectId("63ebaeb47a96a2ae8c949744"),
id: 6,
title: 'MacBook Pro',
description: 'MacBook Pro 2021 with mini-LED display may launch between September, November',
price: 9999,
rating: 4.57,
brand: 'Apple',
category: 'laptops'
}
{
\_id: ObjectId("63ebaeb47a96a2ae8c949740"),
id: 2,
title: 'iPhone X',
description: 'SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...',
price: 899,
rating: 4.44,
brand: 'Apple',
category: 'smartphones'
}
{
\_id: ObjectId("63ebaeb47a96a2ae8c949742"),
id: 4,
title: 'OPPOF19',
description: 'OPPO F19 is officially announced on April 2021.',
price: 280,
rating: 4.3,
brand: 'OPPO',
category: 'smartphones'
}
{
\_id: ObjectId("63ebaeb47a96a2ae8c949741"),
id: 3,
title: 'Samsung Universe 9',
description: "Samsung's new variant which goes beyond Galaxy to the Universe",
price: 1249,
rating: 4.09,
brand: 'Samsung',
category: 'smartphones'
}
{
\_id: ObjectId("63ebaeb47a96a2ae8c949743"),
id: 5,
title: 'Huawei P30',
description: 'Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.',
price: 499,
rating: 4.09,
brand: 'Huawei',
category: 'smartphones'
}

CONTEGGIO DI TUTTI I RECORD:
db.products.countDocuments()
6

CONTEGGIO DI TUTTI I RECORD CHE SODDISFANO IL CRITERIO SPECIFICATO:
db.products.find({brand: 'Apple'}).itcount()
3

LIMITAZIONE DEL NUMERO DI RECORD:
db.products.find().limit(3)
{
\_id: ObjectId("63ebaeb47a96a2ae8c94973f"),
id: 1,
title: 'iPhone 9',
description: 'An apple mobile which is nothing like apple',
price: 549,
rating: 4.69,
brand: 'Apple',
category: 'smartphones'
}
{
\_id: ObjectId("63ebaeb47a96a2ae8c949740"),
id: 2,
title: 'iPhone X',
description: 'SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...',
price: 899,
rating: 4.44,
brand: 'Apple',
category: 'smartphones'
}
{
\_id: ObjectId("63ebaeb47a96a2ae8c949741"),
id: 3,
title: 'Samsung Universe 9',
description: "Samsung's new variant which goes beyond Galaxy to the Universe",
price: 1249,
rating: 4.09,
brand: 'Samsung',
category: 'smartphones'
}

RICERCA DI UN DATO E RESTITUZIONE DI UN CAMPO:
db.products.find({id: 5}, {description: 1})
{
\_id: ObjectId("63ebaeb47a96a2ae8c949743"),
description: 'Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.'
}
