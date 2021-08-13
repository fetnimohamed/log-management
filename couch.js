var PouchDB = require("pouchdb-core");
PouchDB.plugin(require("pouchdb-adapter-http"));
var db = new PouchDB("http://localhost:5984/todo");
console.log(db.adapter);
