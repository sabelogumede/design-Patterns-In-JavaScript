const fs = require('fs');

//The primary responsibility of Journal class is to add and remove entries
class Journal {
    constructor() {
        this.entries = {};
    }
    addEntry(text) {
        let c = ++Journal.count;
        //console.log('c', c);
        let entry = `${c}: ${text}`;
        //console.log('entry', entry);
        this.entries[c] = entry;
        return c;
    }
    removeEntry(index) {
        delete this.entries[index];
    }
    toString() {
        return Object.values(this.entries).join('\n');
    }
}
Journal.count = 0;


class PersistenceManager {
    preprocess(j) {
        //
    }
    load(filename) {
        //
    }
    loadFromUrl(url) {
        //
    }
    save(journal, filename) {
        fs.writeFileSync(filename, journal.toString());
    }
}


//j is an instance of a Journal Class
let j = new Journal();
j.addEntry('I cried today.');
j.addEntry('I ate a bug.');
console.log(j.toString());

//p is an instance of PersistenceManager
let p = new PersistenceManager();
let filename = 'Home/Desktop/journal.txt';
p.save(j, filename);


//separations of concerns