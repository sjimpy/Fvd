# Procesverslag
**Auteur:** Jimmy Dekker

**Het werk:** [opdracht 1](opdracht1/index.html) en [opdracht 2](opdracht2/index.html)

Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet). Nb. de standaardstructuur en de spartaanse opmaak zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.

## Bronnenlijst
- https://stackoverflow.com/questions/14651306/get-mouse-position-within-div

- https://gist.github.com/SleepWalker/da5636b1abcbaff48c4d

- https://stackoverflow.com/questions/4825683/how-do-i-create-and-read-a-value-from-cookie

- https://stackoverflow.com/questions/5876424/sort-array-of-objects





## Mijn code-dagboek

### Week 1
#### Wat was ik van plan?
Voor deze week wilde ik 2 schetsen hebben uitgewerkt voor de animaties. Ik moest ook nog 2 merken verzinnen waar ik de animaties voor kan gaan maken.
#### Wat heb ik nu?
Ik heb gekozen voor Minecraft en Nintendo Switch.
Voor Minecraft is het idee dat alle letters na elkaar verschijnen om vervolgens als een creeper op te blazen.
Voor Nintendo Switch wil ik de controllers van het logo in elkaar laten schuiven on vervolgens de tekst er tussen te onthullen.
#### Wat ging er goed?
Toen ik eenmaal 2 logo's had bedacht ging het verzinnen van de animaties redelijk snel.
#### Wat was lastig?
Het verzinnen van een merk waarmee ik vette animaties op kan gaan maken.
#### Wat ga ik nog doen?
Ik ga de animaties uitwerken in HTML, CSS en JS.

### Week 2
#### Wat was ik van plan?
Voor deze week wilde ik de basis van de webpagina af hebben. Hieronder valt de responsiveness van de containers en het zoeken en linken van de fonts in css.
#### Wat heb ik nu?
Ik heb de basis van de website afgekregen en 3 fonts gevonden die ik kan gaan gebruiken voor mijn idee. De basis staat op Github en alles werkt zoals ik wilde.
#### Wat ging er goed?
Eigenlijk ging alles deze week goed.
#### Wat was lastig?
Ik ben deze week niet op lastige punten gekomen.
#### Wat ga ik nog doen?
De pagina verder uitbouwen en gaan verzinnen hoe ik de letters van de Minecraft animatie in 3d kan krijgen.

![De HTML basis opzet.](https://raw.githubusercontent.com/sjimpy/Fvd/main/opdracht1/images/sc1.png "De HTML basis opzet.")

### Week 3
#### Wat was ik van plan?
Deze week wilde ik de (3d) letters en wolken van Minecraft afhebben. Ook wilde ik de basisvormen van het Nintendo Switch logo hebben gemaakt.
#### Wat heb ik nu?
Mijn planning is gelukt en de 3d letters en wolken staan er in. Ook heb ik de wolken alvast een animatie gegeven zodat ze van links naar rechts bewegen.
#### Wat ging er goed?
De css animaties waren redelijk snel gelukt. Ook ben ik erg tevreden over het resultaat van het neppe 3d effect van de wolken en letters.
#### Wat was lastig?
Het 3d effect van de letters in perspectief krijgen was niet perse lastig maar wel erg veel werk. Voor elke letter moest ik net andere css schrijven zodat het diepte effect realistisch blijft.
#### Wat ga ik nog doen?
Voor de onderkant van de Minecraft animatie moet ik nog veel background gradients schrijven zodat ik het patroon van een Minecraft block kan namaken. Ook moet ik de animaties van beide Logo's nog afmaken.

![De CSS die ik gebruik om de wolken een 3e effect te geven.](https://raw.githubusercontent.com/sjimpy/Fvd/main/opdracht1/images/sc2.png "De CSS die ik gebruik om de wolken een 3e effect te geven.")

### Week 4
#### Wat was ik van plan?
Voor deze week wilde ik alle animaties afronden, de Minecraft background maken, dark mode maken doormiddel van css variables, de thumbsticks van Nintendo switch animeren en de diepte van de wolken mee animeren zodat het er realistischer uit ziet.
#### Wat heb ik nu?
Beide animaties zijn af en worden geactiveerd als de gebruiker er met zijn muis overheen hovert. Alle animaties die ik in week 1 had bedacht zijn gelukt en ik ben erg tevreden over het resultaat.
#### Wat ging er goed?
ik ben erg tevreden over het gehele proces. Op een gegeven moment kwam ik op een punt waarop ik dacht dat ik iets onmogelijks had bedacht maar ik heb uiteindelijk een mannier gevonden om het te maken zonder extra html elementen toe te voegen.
#### Wat was lastig?
1. De onderkant van de Minecraft animatie bestaat uit allemaal gradients. Het heeft me veel tijd gekost om deze allemaal op kleur en op de juiste positie neer te zetten.
2. Ik wilde perse een gradient op de Minecraft letters hebben. Doordat ik de 3d effecten heb gemaakt met text-shadow was dat niet te doen op de normale mannier. Uiteindelijk heb ik dit opgelost door elke letter een :berfore te geven met daarin de zelfde letter met een gradient.
3. De thumbsticks van de switch controllers heb ik gemaakt met background gradients op een :after element. Toen ik begon met het animeren op basis van de muis positie kwam ik er pas achter dat het niet mogelijk is om :before of :after elementen te bewerken in JS. Na lang nadenken heb ik een mannier gevonden doormiddel van het toevoegen van classes aan de elementen van de :afters. Op die mannier kan ik toch de positie veranderen zodra de class veranderd.
![Met dit stukje JS laat ik de thumbsticks bewegen ook al zijn ze gemaakt met :after.](https://raw.githubusercontent.com/sjimpy/Fvd/main/opdracht1/images/sc3.png "Met dit stukje JS laat ik de thumbsticks bewegen ook al zijn ze gemaakt met :after.")
#### Wat ga ik nog doen?
Genieten van het eindresultaat en testen of de opdracht voldoet aan alle eisen.


## Opdracht 2

### Week 1
#### Wat was ik van plan?
Voor deze week wilde ik op een idee komen voor wat ik zou willen maken.
![Dit zijn de schetsen die ik voor de pagina heb gemaakt](https://raw.githubusercontent.com/sjimpy/Fvd/main/opdracht1/images/sc3.png "Dit zijn de schetsen die ik voor de pagina heb gemaakt")
#### Wat heb ik nu?
Ik heb gekozen voor een webapp waarop je de snelste tijden van je Mario Kart races kan opslaan. Ik wil de verschillende courses weergeven in een carousel en de desbetreffende banen daar onder laten zien. Als de gebruiker op een van de banen drukt moet deze ophoog schuiven en de behaalde scores laten zien.
#### Wat ging er goed?
Toen ik het idee eenmaal had bedacht was het schetsen redelijk snel gedaan.
#### Wat was lastig?
Ik vond het lastig om op een passend idee te komen.
#### Wat ga ik nog doen?
Volgende week ga ik beginnen met de html en css opbouw van de pagina.

### Week 2
#### Wat was ik van plan?
Voor deze week wilde ik de basis van de website hebben gemaakt, nog zonder afbeeldingen en responsiveness.
#### Wat heb ik nu?
Ik heb de carousel gemaakt en de vakken er onder gezet. Qua funcies werkt er nog niets maar de layout is er.
![Dit is de layout van de pagina.](https://raw.githubusercontent.com/sjimpy/Fvd/main/opdracht1/images/sc3.png "Dit is de layout van de pagina")
#### Wat ging er goed?
De layout was redelijk makkelijk neergezet, ik heb rekening gehouden met de responsiveness dus dat zou redelijk snel gedaan moeten zijn.
#### Wat was lastig?
Ik heb nog niet vaak een 3d carousel gemaakt, om beter te worden heb ik besloten om lekker te gaan klooien tot ik een werkende mannier heb gevonden.
#### Wat ga ik nog doen?
De volgende stap is het aanmaken van een array zodat ik alle namen en afbeeldingen aan de banen kan toevoegen

### Week 3
#### Wat was ik van plan?
Voor deze week wilde ik een array maken die alle namen van de banen laat zien.
#### Wat heb ik nu?
Ik heb de array gemaakt en alle namen van de banen in de html geladen zetten. Ook ben ik verder gegaan met het maken van een array met meerdere objecten zodat ik de scores kan weergeven.
![Met dit stukje JS laat ik de thumbsticks bewegen ook al zijn ze gemaakt met :after.](https://raw.githubusercontent.com/sjimpy/Fvd/main/opdracht1/images/sc3.png "Met dit stukje JS laat ik de thumbsticks bewegen ook al zijn ze gemaakt met :after.")
#### Wat ging er goed?
De array met namen ging erg snel en werkte ook in een keer goed.
#### Wat was lastig?
Ik heb nog niet vaak objecten nodig gehad in js. Ik vind dit redelijk lastig omdat er verschillende arrays en verschillende objecten in voor komen.
#### Wat ga ik nog doen?
Ik ga de pagina verder responsive maken en een knop toevoegen om nieuwe scores aan de array toe te voegen. Ook ga ik een functie schrijven om de scores te sorteren. Daarbij moet ik nog de darkmode maken.

###Week4
#### Wat was ik van plan?
Voor deze week wilde ik de pagina helemaal af hebben.
#### Wat heb ik nu?
De pagina is af, ik heb een form toegevoegd die scores aan de objecten kan toevoegen. Om nog wat extra's te doen heb ik er voor gezorgd dat de array met scores kan worden opgeslagen doormiddel van cookies. Ook heb ik radiobuttons aan de nav toegevoegd zodat gebruikers de scores kunnen sorteren op score en op naam. De carousel kan je nu besturen door swipe op mobiel en de highscores worden nu ook vantevoren weergegeven.
![Met dit stukje JS laat ik de thumbsticks bewegen ook al zijn ze gemaakt met :after.](https://raw.githubusercontent.com/sjimpy/Fvd/main/opdracht1/images/sc3.png "Met dit stukje JS laat ik de thumbsticks bewegen ook al zijn ze gemaakt met :after.")
#### Wat ging er goed?
Het hele proces ging best goed, Ik heb mezelf proberen uit te dagen door dingen net even anders te doen dan ik notmaal zou doen. Het responsiveness gedeelte en de darkmode was ook erg snel en makkelijk gemaakt.
#### Wat was lastig?
Het sorteren en van de scores en het toevoegen van de scores was niet erg makkelijk. Voor het formulier moest ik wat nieuwe dingetjes proberen zodat de pagina niet herladen zou worden bij submit.

#### Wat ga ik nog doen?
Mijn werk presenteren en zo snel mogelijk genieten van de vakantie.




https://www.pngitem.com/middle/ihJJmRw_transparent-mario-kart-8-png-png-download/
