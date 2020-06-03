<!-- PROJECT LOGO -->
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

<!-- TABLE OF CONTENTS -->
## Table of Contents

* [Über das Projekt](#Über-das-Projekt)
  * [Warum dieses Projekt?](#Warum-dieses-Projekt?)
  * [Vorwissen](#Vorwissen)
  * [Verwendete Technologien](#Verwendete-Technologien)
* [Einblick in die WebApp](#Einblick-in-die-WebApp)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)
* [Roadmap](#roadmap)
* [Contributing](#contributing)
* [License](#license)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)

<!-- ABOUT THE PROJECT -->
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

## Einblick in die WebApp

Um eine Übersicht über die Applikation zu erlangen, wurde eine Demoversion erstellt. Diese ist nicht an Firebase gekoppelt, dadurch fällt der Schritt der Anmeldung/Registrierung weg und auch das Erstellen von neuen Einträgen.

Damit aber dieser Einblick nicht komplett wegfällt, hier ein paar kleinere Ausschnitte.

![obs-map](https://user-images.githubusercontent.com/61183121/83629109-d4621b00-a599-11ea-856d-677e08ce6444.jpg)


### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
```sh
npm install npm@latest -g
```

### Installation

1. Get a free API Key at [https://example.com](https://example.com)
2. Clone the repo
```sh
git clone https://github.com/your_username_/Project-Name.git
```
3. Install NPM packages
```sh
npm install
```
4. Enter your API in `config.js`
```JS
const API_KEY = 'ENTER YOUR API';
```



<!-- USAGE EXAMPLES -->
## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_



<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/othneildrew/Best-README-Template/issues) for a list of proposed features (and known issues).



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Your Name - [@your_twitter](https://twitter.com/your_username) - email@example.com

Project Link: [https://github.com/your_username/repo_name](https://github.com/your_username/repo_name)



<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
* [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
* [Img Shields](https://shields.io)
* [Choose an Open Source License](https://choosealicense.com)
* [GitHub Pages](https://pages.github.com)
* [Animate.css](https://daneden.github.io/animate.css)
* [Loaders.css](https://connoratherton.com/loaders)
* [Slick Carousel](https://kenwheeler.github.io/slick)
* [Smooth Scroll](https://github.com/cferdinandi/smooth-scroll)
* [Sticky Kit](http://leafo.net/sticky-kit)
* [JVectorMap](http://jvectormap.com)
* [Font Awesome](https://fontawesome.com)





<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=flat-square
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=flat-square
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=flat-square
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=flat-square
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=flat-square
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
