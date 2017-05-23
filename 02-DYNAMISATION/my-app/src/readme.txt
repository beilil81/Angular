CHAPITRE 1 -BOOTSTRAP --------------------------------------------

    1.1 NPM INSTALL BOWER -G
    1.2 BOWER INSTALL BOOTSTRAP SU MY-APP
    1.3 AJOUTER CHEMIN BOOTSTRAP.CSS DANS .ANGULAR-CLI.JSON
    1.4 ajouter class bootstrap sur index.html
    1.5 ahjouter class bootstrap sur item.component.html
    1.6 ajouter class bootstrap sur itemform.component.html
    1.7 supprimer button getDetails sur item.component.html
    1.8 supprimer OutPut, EventEmitter, et methode getDetails() sur item.component.ts
    1.9 supprimer methode getDetails sur app.compoent.ts


CHAPITRE 2 - ANIMATION ANGULAR----------------------------------------
    créer une animation avec angular 

    2.1 item.componet.ts
       2.1.1 import trigger, state, styles, transition, animate
       2.1.2 créer fonction changeState()

    2.2 item.component.html   
       2.2.1 ajout click pour appeler fonction toggleAnimateState()

    2.3 models/item.ts
       2.3.1 declarer variable animateState   
       2.3.2 init variable dans le constructeur
       2.3.3 créer fonction toggleAnimateState()

   pour utiliser les animations angular 
   npm install @angular/animations --save

   2.4 app.module.ts
       2.4.1 import { BrowserAnimationModule } from '@angular/platform-browser/animation
       2.4.2 declaration dans les imports
   2.5 item.component.ts
        2.5.1 creation animations dans@component
   2.6 item.component.html
        referncé le trigger sur le div panel-default et cabler à la proprièté animateState       


CHAPITRE 3 - ANNIMATION EN ENTREE ET EN SORTIE AVEC * ET VOID ------------------
   on veut faire une animation quand un item est ajouté dans le dom, puis faire une autre animation
   pour le faire disparaitre apères quelques secondes     
     
       3.1 app.componet.ts
            3.1.1 ajouter un setTimeOut dans la méthode createObject() pour passer l'état 
            à remove après 2 secondes
            3.1.2 remplacer push par un unShift pour add item au debut de declaration
       3.2 item.componet.ts
            3.2.1 créer deux transitionsde void (n'existe pas dans le dom) vers n'importe quel etat et
             de n'import quel etat vers void
       3.3 item.componetn.html
             3.3.1 ajouter un *ngIf pour masquer le div pannel si état ===removed
             3.3.2 ajouter div avec 2 btn pour passer d'une etat à l'autre grace
             grâce à a méthode changeState()        


CHAPITRE 4 - EXERCICE --------------------------------------------------------
    Une fois que la commande livrée (state === 2) on ajoute  un bouton avec un icon
    corbeille pour passer l'etat de la commande à removed et le sortir du dom
    grace à notre animation angular

        4.1 item.component.html
            4.1.1 ajout div et button si etat ===2
        4.2 app.component.ts
            4.2.1 suppression setTimout()
        4.3 item.component.ts
            4.3.1 creation fonction deletItem()

 CHAPITRE 5 - UTILISER LA LIBRAIRIE ANIMATE.CSS 

        5.1 item.componet.ts
           On veut que quand les annel disparaissent une animation rubberband.
           après avoir passé une commande en Livrée, la courbeille apparait et quans on clique sur la corbeille
           on veut une animation fadeOut.
           Ensuite on veut que le pannel dissparaisse du dom grace a un ngIf.
           quand le pannel apprait animatState vaut 'inactive'
           (models/item.ts) donc dans le html [ngClass] applique la class 'rubberband'
           quand on clique sur la corbeille, la méthode deleteItem() (item.component.ts)
           passe animateState a 'removed' donc le html [ngClass] applique la class
           'fadeOut

           dans la méthode deleteItem(), un steTimeout() passe animateState à 'removedFromDom'
            après 5 secondes, doc dans le html le *ngIf sur le pannel empeche le pannel de s'afficher
            dans le dom.

    5.1 app.component.ts
              5.1.1 supprimer setTimeout()  dans createobject() 
    5.2 item.component.ts
              5.2.1 dans deleteItem() ajouter setTimeout() pour passer à l'état
              removedFromDom
              5.2.2 supprimer animations dans @componet
              5.2.3 supprimer les imports pour animations
     5.3 item.componet.html
              5.3.1 modifier *ngIf pour supprimer pannel si annimateState = removedFromDom
              5.3.2 drective [ngClass] pour rubberBand ou fadeOut selon valeur de
              animateStaete

     5.4 models/item.ts
              5.4.1supprimer toggleAnimateState()

 CHAPITRE 6 - CREATION 

              Pour utiliser la création et l'utilisiation de modules on va créer module
              uniquement pour afficher le titre de l'appli et on va l'importer entièrement
              dans notre module principale

              creer un dossier title dans app
              créer  un fichier title.module.ts
              créer les fichiers title.component.ts, .css, .html

       6.1 title.componet.ts
             6.1.1 import de ngModule
             6.1.2 import de Titlecompont
             6.1.3 creer le @ngModule
             6.1.4 declaration de TitleComponet
             6.1.5 exports TitleComponent
        
        6.2 title.componet.ts
             6.2.1 import de component de config
             6.2.2 creer @component
             6.2.3 Creer class TitleComponet
             6.2.4 private title
             6.2.5 init this.title dans constructeur

        6.3 title.component.html
            6.3.1 couper coller la h1 depuis app.component.html

        6.4 title.component.html
             6.4.1 utiliser selecteur <app-title> pour afficher le template title.componet.html


         6.5 app.component.ts
              6.5.1 import du module TitleModule
              6.5.2 declarer TitleModule dans les imports             

CHAPITRE 7 - CREER NOS PROPRE DIRECTIVE

           Les directives permettent de donner les ordres, le plus souvent des ordres structurés (*ngIf, **ngFor ...)
           on trouve aussi des directives d'attribut et d'affichage ([ngClass], [hidden], [disabled]...)
           elles permettent d'ajouter
           du js dans le dom et d'agir sur l'affichage

           créer un dossier directives
           créer highlight.directives.ts
           