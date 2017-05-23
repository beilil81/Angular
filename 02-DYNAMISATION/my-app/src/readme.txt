RACCOURCI CLAVIER :
-indentation auto : SHIFT +ALT+F
-retour ligne auto : ALT + Z
-undo : CTRL +Z

CHAPITRE 1 - CONSTRUCTOR - VISIBILITE -TYPAGE ---

    1.1 app.component.ts
        1.1.1 créer constructeur qui initialise 2 variables
        1.1.2 déclarer 2 variables avec visibilité et typage dans notre class
    1.2 app.component.html    
        1.2.1 afficher variables dans le template html

CHAPITRE 2 - CREER BOUCLE SUR UN TABLEAU --------

        on veut créer un tableau d'objet avec commandes fictives pour les afficher dans le template à l'aide
        d'une BOUCLE
     2.1 app.component.ts
         2.1.1 declarer variablescollection dans la class
         2.1.2 init collection dans le constructeur
     2.2 app.component.html
         2.2.1 utiliser directive *ngFor pour afficher la collection dans la BOUCLE
         2.2.2 afficher chaque item dans la boucle à l'aide de 2 p 


 CHAPITRE 3 - CONDITIONNER L'AFFICHAGE--------
         On veut afficher à l'utilisateur l'état d'une commande (à livrer, 
         en cours de livraison, commande livrée)
    3.1 app.component.ts
         3.1.1 ajout p)rpriété aux objects de la collection
    3.2 app.component.html
         3.2.1 directive *ngIf pour conditionner
         l'affichage des états

 CHAPITRE 4 - STYLES DES COMPOSANTS--------         
      Ajouter des styles globales et des styles propres à un composant

      4.1 styles.css 
          4.1.1 ajout css sur les class state-0, state-1, state-2 et
          et inspecteur d'element

       4.2 app.component.css
           4.2.1 couper coller les css de styles.css vers app.component.css 

  CHAPITRE 5 - Event click--------  
            5.1 app.componet.html
               5.1.1 add button avec click pour appel getDetails() en lui passant $event enargument, et un argument personnalisé
               5.1.2 add attribut id dans le button avec item.reference comme valeur

            5.2 app.componet.ts
               5.2.1 créer fonction getDetails()
               5.2.2 récupérer et affiché dans un console.log $event


               on veut récuper l'élement html à l'origine du click et la valeur de son
               attr id

               5.2.3 variable elem pour récupérer l'element html à l'origine du click
               5.2.4 afficher la valeur récupéré
               5.2.5 afficher valeur att id
               5.2.6 afficher 2e argument presonnalisé                
     
  CHAPITRE 6 - UTILISER UN EVENT POUR CREER UN OBJET --------
               on veut créer un button pour ajouter une commande dans la collection

            6.1 app.component.html
                 6.1.1 add button avec click qui appel createObject() 

             6.2 app.comonent.ts    
                 6.2.1  push un objet dans la collection

       on veut permettre à l'utilisateur  de saisir lui même une commande
                  6.3.1  add 3 balises input avec directive ngModel cablé à un nouvel objet newItem
            
           6.4 app.component.html
                  6.4.1  declarer private newItem
                  6.4.2 init newItem dans le constructeur
                  6.4.3  push newItem dans createObject()
                  6.4.4 creer fonction resetItem() pour vider l'objet
                  6.4.5 utiliser resetItem() dans le constructeur
                  6.4.6 utiliser resetItem dans createPbject()                         
                  

     
  CHAPITRE 7 - CREER UN MODEL POUR LA COLLECTION --------

            on veut creer une class pour la collection et l'utiliser pour le composant
            on ncrée un dossier models
            on crée un fichier models/items.ts


            7.1 item.ts
                  7.1.1 creer class Item()
                  7.1.2 3 private
                  7.1.3 constructeur qui prend un obket en argument
            7.2 app.component.ts
                7.2.1 import de la class Item
                7.2.2 typage newItem
                7.2.3 instance de newItem dans constructeur
                7.2.4 instance newItem dans resetItem()     
                7.2.4 typage collection en Item[]  
                   

            
CHAPITRE 8 - UTILISER LES CONSTANTES--------    
      8.1 config.ts
            exemple de CONSTANTES
            creer un fichier app/config.ts       
            8.1.1 export class config
            8.1.2 declaration 2 CONSTANTES

     8.2 app.component.ts     
            8.2.1 import la class config
            8.2.2 use constantes dans constructor

  
  EXERCICES SUR LES CONSTANTES
   dans config.ts créer une constante pour la collection avec la collection de base.
   appeler la constante BASE_COLLECTION. utiliser la constante dans app.component.ts


      8.3 config.ts
             8.3.1 import class Item
             8.3.2 declaration constante BASE_COLLECTION
             8.3.3 couper coller tableau collection depuis app.compontent.ts

      8.4 app.component.ts
             8.4.1 user BASE_COLLECTION pour init variable collection dans CONSTRUCTOR       
        

CHAPITRE 9 - UTILISER LES FORMULAIRES--------    
       ON VEUT AJOUTER UN ITEM 0 L4AIDE D4UN FORMULAIRE ET V2RIFIER QUE LE FORMULAIRE
       EST VALIDE AVANT D AJOUTER L ITEM
         9.1 app.component.html

           9.1.1 add form avec une référence #itemForm="ngForm"
           9.1.2 add attr html aux input (name, required, minLength)
           9.1.3 use directive [disabled]="!itemForm" qui disabled le  
                 bouton tant que le le formulaire est invalide 
                 9.1.4 add #ref sur premier input cablé à ngModel
                 9.1.5 add span avec directive [hidden] pour afficher message erreur si
                 champ mal rempli

              
CHAPITRE 10 - CREER UN SOUS COMPOSANT--------   
      On veut créer un composant qui s'occupe d'afficher uniquement les items
      créer fichier item.component.ts, html, .css
      10.1 item.component.html

         10.1.1 couper coller contenu de la boucle for depuis app.component.html
    10.2 item.component.ts
         10.2.1 imports de component, item, de Item et de input
         10.2.2 @Component pour déclarer notre composant avec un selector, un template html, un un urlStyles
         10.2.3 export de la class ItemComponent    
         10.2.4 creer @Input() item 
     10.3 app.component.html
         10.3.1utiliser @input() iem dans la balise <item-rootcomponent>  

     10.4 app.module.ts
        10.4.1 import de ItemComponent
        10.4.2 declarer la class ItemComponent dans @ngModule
     10.5 item.component.css     

CHAPITRE 11- OUTPUT---------------------------------------------------
         11.1 item.component.ts
             11.1.1 import Output et EventEmitter
             11.1.2  on ndéclare le Output qui prend un new EventEmitter
             11.1.3 creer getDetails
             11.1.4 use methode emit sur l'evenement pour emmetre un item
         11.2 app.component.html
             11.2.1 dans le selector <item-component> on utilise l'EvenetEmitter
              pour appeler la fonction getDetails() qui se trouve sur ce composant
               et on lui passe $event qui contient un item    
         11.3 app.component.ts
               11.3.1 recuperer l'item et l'afficher dans la console   

CHAPITRE 12- EXERCICE---------------------------------------------------
  En prenant exemple sur item.component, créer un composant appelé
  itemform.compont qui ne contiendra que le formulaire


  CHAPITRE 13- LES PIPES---------------------------------------------------
      On veut créer UN PIPE PERSONALISé POUR FAIRE UN MOTEUR de recherche
          sur les propriètés name
          créer un dossier PIPES et un fichier item.filter.ts
    13.1 item.filter.ts
        13.1.1 import de pipe et pipeTransform
        13.1.2 declarer @PIPE
        13.1.3 utilisation methode pipeTransform
        13.1.4 return tableau à partir de notre collection filtrée

    13.2 app.component.html
        13.2.1 add input pour saisi d'une chaine de recherche avec ref et keyup
        13.2.2 utilisation du pipe dans la boucle ngFor sur la collection    

   13.3 app.module.ts
        13.3.1  import de ItemPipe
        13.3.2 declaration de ItemPipe  

          