<br />
<p align="center">
  <a href="https://digezz.ch">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Observation Map mit VueJs and OSM</h3>

  <p align="center">
    Eine Webanwenung für Wildlife Fotografen. 
    <br>
    Mithilfe dieser Webanwendung, soll das Wild besser beobachtet werden können. Dies dient auch zum Schutz der Tiere, damit diese nicht durch plötzliches Auftreten, aufgescheucht werden.
    <br />
    <br />
    <a href="https://github.com/othneildrew/Best-README-Template">View Demo</a>
  </p>
</p>

## Inhaltsverzeichnis

* [Über das Projekt](#Über-das-Projekt)
  * [Warum dieses Projekt?](#Warum-dieses-Projekt?)
  * [Vorwissen](#Vorwissen)
  * [Verwendete Technologien](#Verwendete-Technologien)
  * [Einblick in die WebApp](#Einblick-in-die-WebApp)
* [Weitere Infos](#Weitere-Infos)
  * [HotReload für Entwicklung](#HotReload-für-Entwicklung)
  * [Kompilieren für Produktion](#Kompilieren-für-Produktion)
  * [Anpassen der Konfiguration](#Anpassen-der-Konfiguration)
* [Lizenz](#Lizenz)
* [Kontakt](#Kontakt)

## Über das Projekt

Die Anwendung "Observation Map" ist im Rahmen eines Schulprojekts entstanden. Nachdem mich zwei Wildlife Fotografen angefragt haben, ob
ich für Sie eine Beobachtungsmap erstellen könnte, habe ich mich in das 
Thema eingelesen und begann das Projekt zu planen. 

*Wichtige Randbemerkung: Die Applikation wurde grundsätzlich für Mobile Geräte programmiert.*

### Warum dieses Projekt? ###

Beim Projekt geht es nicht nur primär um die Wildlife Fotografie, sondern
auch um das Verstehen des Verhaltens der Tiere. Sobald man die Tiere versteht, ist es auch möglich Sie besser zu schützen. 

Indem man ihr Verhalten und ihren Lebensraum kennenlernt, ist es möglich sich Ihnen langsam und vorsichtig zu nähern. Zuvor war das Problem, dass durch planloses suchen, die Tiere vermehrt aufgescheucht wurden, was den Tieren viel Energie kostete.

Zudem war es natürlich auch ein sehr spannendes Projekt. Mit den Geocoordinaten und OpenStreetMap lernte ich zwei ganz neue Bereiche kennen.

### Vorwissen ###

In einem früheren Projekt namens [zizers-hilft](https://www.digezz.ch/isoliert-aber-nicht-allein-coronavirus-community-maps/) habe ich bereits das Zusammenspiel mit Geodaten und einer Karte gelernt. Dabei gibt es aber signifikante Unterschiede in Bezug zu den verwendeten Technologien dieser beiden Projekte. 

| zizers-hilft  | Observation Map |
| ------------- |:---------------:|
| Gatsby JS     | Vue JS          |
| Maptiler      | VueLayer        |
| no auth.      | Firebase auth.  |

### Verwendete Technologien

Die Webapplikation "Observation Map" wurde mit verschiedenen Webtechnologien, wie z.T. bereits oben beschrieben umgesetzt.

* [VueJS](https://vuejs.org/)
* [Vuetify](https://vuetifyjs.com/)
* [VueLayer](https://vuelayers.github.io)
* [Firebase](https://firebase.google.com/)

**Vue JS**
Das JS Framework Vue, wurde aufgrund seiner Aktualität und Einfachheit gewählt. VueJS geniesst momentan eine Art Boom unter den Entwicklern. Dadurch war es mir ein grosses anliegen, mich in dieses Famework ein zu arbeiten und dieses kennen zu lernen.

**Vuetify**
Vuetify ist das "Material Design component framework" für VueJs. Mit diversen vorprogrammierten Komponenten, vereinfacht es das Programmieren um einiges. Zusätzlich besitzt es ein, von Haus aus, ansehnliches Design, was die weitere Ausarbeitung des Layouts verringert.

**VueLayers**
Die Komponenten-Bibliothek von VueLayers vereinfacht die Zusammenarbeit zwischen der *OpenLayers API* und Vue.js. Durch viele vordefinierte Komponenten, bleibt das Programmieren sehr übersichtlich und einfach zu verstehen.

**Firebase**
Für die Speicherung von neuen Einträgen wurde ähnlich wie beim Projekt zizers-hilf die Firebase Database gewählt. Zusätzlich wurde aber diesmal noch der Authentifizierungsdienst von Firebase integriert. Dadurch können nur Registrierte User auf das Dashboard und deren Funktionsumfang gelangen.

### Einblick in die WebApp

Um eine Übersicht über die Applikation zu erlangen, wurde eine Demoversion erstellt. Diese ist nicht an Firebase gekoppelt, dadurch fällt der Schritt der Anmeldung/Registrierung weg und auch das Erstellen von neuen Einträgen.

[Demo Version](https://example.com)

Damit aber dieser Einblick nicht komplett wegfällt, hier ein paar kleinere Ausschnitte.

![obs-map](https://user-images.githubusercontent.com/61183121/83629109-d4621b00-a599-11ea-856d-677e08ce6444.jpg)

## Weitere Infos
### Projekt setup
```
npm install
```

### HotReload für Entwicklung
```
npm run serve
```

### Kompilieren für Produktion
```
npm run build
```

### Anpassen der Konfiguration
Hier [Konfiguration Referenz](https://cli.vuejs.org/config/).

## Lizenz

Unter der MIT-Lizenz vertrieben. Weitere Informationen finden Sie unter `LICENSE`.

## Kontakt

Frank Zinsli - [frankzinsli.ch](https://frankzinsli.ch) - frank.zinsli@gmail.com

Projekt Link: [https://github.com/Frankie1996/observation-map](https://github.com/Frankie1996/observation-map)