import { Item } from './models/item';
//  8.1.1 export class config
export class Config {
    // 8.1.2 declaration 2 CONSTANTES
    public static get APP_TITLE(): string { return "Application livreur"; }
    public static get APP_VERSION(): string { return "Version 1.0"; }
    //8.3.2 declaration constante BASE_COLLECTION
        public static get BASE_COLLECTION(): Item[] {
        return [
            new Item({ reference: '1234', name: 'Mohamed', state: 0 }),
            new Item({ reference: '5648', name: 'Christophe', state: 1 }),
            new Item({ reference: '3578', name: 'Maria', state: 2 })

        ]

    }


}