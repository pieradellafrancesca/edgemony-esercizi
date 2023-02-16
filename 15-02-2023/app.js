const MongoClient = require("mongodb").MongoClient;
let url =
  "mongodb+srv://francesca:carlinO45@cluster0.lkwmvsj.mongodb.net/school?retryWrites=true";

// Connessione al db
MongoClient.connect(url)
  .then((db) => {
    accountDb = db;
    collection = accountDb.db("school");
    console.log("Database connesso");
  })
  .catch((err) => {
    console.log(err);
  });

// Creazione collection 'students'
MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  let dbase = db.db("school");
  dbase.createCollection("students", (err, res) => {
    if (err) throw err;
    console.log("Collezione creata");
    db.close();
  });
});

// Creazione collection 'courses'
MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  let dbase = db.db("school");
  dbase.createCollection("courses", (err, res) => {
    if (err) throw err;
    console.log("Collezione creata");
    db.close();
  });
});

// Inserimento di più documenti in 'students' => insertMany()
MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  let dbase = db.db("school");

  let myObj = [
    {
      nome: "Mario",
      cognome: "Rossi",
      matricola: 123456,
      corsi: ["Analisi 1", "Termodinamica applicata", "Meccanica razionale"],
      esami: ["Analisi 2", "Fisica 1", "Fisica 2"],
    },
    {
      nome: "Luigi",
      cognome: "Armadilli",
      matricola: 456789,
      corsi: ["Anatomia comparata", "Fisiologia applicata", "Microbiologia"],
      esami: ["Farmacologia", "Istologia", "Biologia molecolare"],
    },
    {
      nome: "Federico",
      cognome: "Secondo",
      matricola: 963852,
      corsi: [
        "Economia politica",
        "Diritto commerciale",
        "Filosofia del diritto",
      ],
      esami: ["Diritto privato", "Bioetica", "Diritto parlamentare"],
    },
    {
      nome: "Anna",
      cognome: "Panna",
      matricola: 248563,
      corsi: ["Matematica computazionale", "Teoria dei numeri", "Algebra"],
      esami: ["Analisi 3", "Geometria 2", "Fisica matematica"],
    },
    {
      nome: "Carla",
      cognome: "Scaletta",
      matricola: 711125,
      corsi: [
        "Modelli probabilistici",
        "Matematica computazionale",
        "Ingegneria del software",
      ],
      esami: ["Simulazione di sistemi", "Intelligenza artificiale", "Fisica 2"],
    },
    {
      nome: "Sara",
      cognome: "Pepperoni",
      matricola: 952564,
      corsi: ["Diritto privato", "Analisi 1", "Microeconomia"],
      esami: ["Diritto pubblico", "Economia aziendale", "Storia economica"],
    },
  ];

  dbase.collection("students").insertMany(myObj, (err, res) => {
    if (err) throw err;
    console.log(`Numero di record inseriti: ${res.insertedCount}`);
    db.close();
  });
});

// Inserimento di più documenti in 'courses' => insertMany()
MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  let dbase = db.db("school");

  let myObj = [
    {
      nome: "Medicina e chirurgia",
      materia: "Fisioterapia",
      docenti: ["Umberto Eco", "Carla Bruni", "Gerry Scotti"],
    },
    {
      nome: "Ingegneria e architettura",
      materia: "Ingegneria informatica",
      docenti: ["Carlo Cracco", "Manuel Agnelli", "Anne Hathaway"],
    },
    {
      nome: "Scienze",
      materia: "Chimica",
      docenti: ["Alessandro Borghese", "Marco van Basten", "Calvin Klein"],
    },
    {
      nome: "Studi umanistici",
      materia: "Beni culturali",
      docenti: ["Spike Lee", "Enrico Mattei", "Ivan Drago"],
    },
    {
      nome: "Economia e management",
      materia: "Economia e commercio",
      docenti: ["Ivana Trump", "Jack Ma", "Maurizio Costanzo"],
    },
  ];

  dbase.collection("courses").insertMany(myObj, (err, res) => {
    if (err) throw err;
    console.log(`Numero di record inseriti: ${res.insertedCount}`);
    db.close();
  });
});

// Filtro i documenti => find()
MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  let dbase = db.db("school");
  let query = { corsi: "Analisi 1" };
  dbase
    .collection("students")
    .find(query)
    .toArray((err, res) => {
      if (err) throw err;
      console.log(res);
      db.close();
    });
});

// Aggiornamento record => updateOne()
MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  let dbase = db.db("school");
  let query = { nome: "Ingegneria e architettura" };
  let newValue = {
    $set: { materia: "Ingegneria elettronica" },
  };
  dbase.collection("courses").updateOne(query, newValue, (err, obj) => {
    if (err) throw err;
    console.log("record aggiornato");
    db.close();
  });
});

// Elimino uno o più record => deleteMany()
MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  let dbase = db.db("school");
  let query = { corsi: "Matematica computazionale" };
  dbase.collection("students").deleteMany(query, (err, obj) => {
    if (err) throw err;
    console.log("record eliminati");
    db.close();
  });
});
