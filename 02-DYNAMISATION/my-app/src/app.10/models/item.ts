//   7.1.1 creer class Item()
export class Item {
    //  7.1.2 3 private
    private reference: string;
    private name: string;
    private state: number;
//  7.1.3 constructeur qui prend un obket en argument
    constructor(data:any) {
         this.reference = data.reference;
         this.name = data.name;
         this.state = data.state;
    }
}