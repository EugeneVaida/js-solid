// Dependency inversion principle

class Fetch {
    request(url){
        //return fetch(url).then(r => r.json())
        return Promise.resolve('data from fetch')
    }
}

class LocalStorage {
    get(){
        const dataFromLocalStorage = 'data from local storage'
        return dataFromLocalStorage
    }
}

class Database {

    constructor(){
        //this.fetch = new Fetch()
        this.LocalStorage = new LocalStorage()
    }

    getData(){
        //return this.fetch.request('vk.com')
        return this.LocalStorage.get('ls key')
    }
}

const db = new Database()

console.log(db.getData())