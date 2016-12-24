class MyMap<T>{
    private map: {[key: string]: T} = {};

    setItem(key: string, item: T){
        this.map[key] = item;
       
    }

    getItem(key: string){
        return this.map[key];
    }

    clear(){
        this.map = {};
    }

    printMap(){
        for (let key in this.map) {
            console.log(key, this.map[key]);
        }
    }

}

const numberMap = new MyMap<number>();
numberMap.setItem("apples", 5);
numberMap.setItem("bananas", 6); 
numberMap.printMap();
numberMap.clear();


const stringMap = new MyMap<string>();
stringMap.setItem("apples", "5");
stringMap.setItem("bananas", "6"); 
stringMap.printMap();
stringMap.clear();

