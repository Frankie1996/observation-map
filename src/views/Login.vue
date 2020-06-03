<template>
  <div id="login">
    <v-content>
      <v-container class="fill-height" fluid style="max-width: 700px">
        <v-row align="center" justify="center">
          <v-col class="text-center" cols="12">
            <h1>Startseite</h1>
            <h2>Was ist die Observation Map?</h2>
            <p>
              Die Observation-Map ist eine Webapplikation für das Erfassen von
              verschiedenen Beobachtungen in der Wildnis. Mittels einer OpenStreetMap kurz OSM
              können die verschiedenen Sichtungen gespeichert werden.
            </p>
            <iframe
              src="https://giphy.com/embed/YPP27W7qyzHfG"
              width="90%"
              max-width="480"
              height="270"
              frameborder="0"
              class="giphy-embed"
              allowfullscreen
            ></iframe>
            <p>
              <a href="https://giphy.com/gifs/deer-YPP27W7qyzHfG">via GIPHY</a>
            </p>
            <p>
              Durch die Geolocation des Nutzergeräts wird der aktuelle Standort ausgelsen. So
              kann man sehr einfach, aktuelle Beobachtungen speichern. Wenn man aber erst zu Hause
              die Einträge vornehemen möchte, dann ist das auch kein Problem. Auf der Karte kann man dann seine
              jeweilige Beobachtung Nachtragen.
              <br />
              <br />Diese Beobachtungen werden diversen Kategorien zugeteilt.<br>Mögliche Kategorien sind:
            </p>
            <v-simple-table fixed-header height="300px">
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">Kategorie</th>
                    <th class="text-left">Beschreibung</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in kategories" :key="item.name">
                    <td class="text-left">{{ item.name }}</td>
                    <td class="text-left">{{ item.description }}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
            <br />
            <p class="text--secondary">
              Quelle der Beschreibungen:
              <br />Alle Beschreibungen wurden aus der freien Enzyklopädie "Wikipedia" übernommen.
            </p>

            <p>
              Je nach zugeteilter Kategorie, bekommt der Eintrag eine Farbe. Diese
              wird dann so auf der Karte erscheinen. Zusätzlich, für eine bessere Übersicht,
              können die verschiedenen Kategorien gefiltert werden.
            </p>
            <v-img :src="images.map_scr" max-width="480px" class="mx-auto"></v-img>
            <p class="text--secondary">Screenshot aus der App</p>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </div>
</template>

<script>

export default {
  data: () => ({
    error: null,
    images: {
      map_scr: require("../assets/img/map_scr.png")
    },
    kategories: [
      {
        name: "Steinwild",
        description:
          "Der Alpensteinbock (Capra ibex) oder Gemeiner Steinbock – zur Abgrenzung von anderen Steinböcken – ist eine in den Alpen verbreitete Art der Ziegen. Ein weiblicher Steinbock wird Steingeiss genannt. "
      },
      {
        name: "Gamswild",
        description:
          "Die (Alpen-)Gämse, ist eine in Europa und Kleinasien beheimatete Art der Ziegenartigen."
      },
      {
        name: "Rotwild",
        description:
          "Der Rothirsch (Cervus elaphus), jägersprachlich Rotwild und seltener auch Edelhirsch genannt, ist eine Art der Echten Hirsche. Unter den Hirscharten zeichnet sich der Rothirsch, kurz auch Hirsch genannt, durch ein besonders grosses und weitverzweigtes Geweih aus"
      },
      {
        name: "Rehwild",
        description:
          "Das Reh (Capreolus capreolus), ist die in Europa häufigste und kleinste Art der Hirsche. Als Trughirsch ist es näher mit Ren, Elch und dem amerikanischen Weißwedelhirsch verwandt als mit dem in Mitteleuropa ebenfalls heimischen Rothirsch. "
      },
      {
        name: "Wolf",
        description:
          "Der Wolf (Canis lupus) ist rezent das größte Raubtier aus der Familie der Hunde (Canidae). Wölfe leben meist in Familienverbänden, fachsprachlich Rudel genannt. Hauptbeute sind in den meisten Regionen mittelgroße bis grosse Huftiere."
      },
      {
        name: "Luchs",
        description:
          "Die Luchse (Lynx) sind eine Gattung in der Familie der Katzen."
      },
      {
        name: "Fuchs",
        description:
          "Ein Fuchs ist ein Vertreter der Familie der Hunde (Canidae). Im deutschen Sprachgebrauch ist damit meistens der Rotfuchs gemeint, allgemeiner die Gattungsgruppe der Echten Füchse. "
      },
      {
        name: "Nager",
        description:
          "Die Nagetiere (Rodentia) sind eine Ordnung der Säugetiere (Mammalia). Mit etwa 2500[1] bis 2600[2] Arten stellen sie rund 40 % aller Säugetierspezies und sind somit die bei weitem artenreichste Ordnung dieser Gruppe."
      },
      {
        name: "Greifvögel",
        description:
          "Die Greifvögel (Accipitriformes) sind eine Ordnung größtenteils fleischfressender Vögel. Sie umfasst die Habichtartigen (Accipitridae) sowie den Fischadler, den Sekretär und die Neuweltgeier (Cathartidae)."
      },
      {
        name: "Vögel",
        description:
          "Die Vögel sind – nach traditioneller Taxonomie – eine Klasse der Wirbeltiere, deren Vertreter als gemeinsame Merkmale unter anderem Flügel, eine aus Federn bestehende Körperbedeckung und einen Schnabel aufweisen."
      },
      {
        name: "Reptilien",
        description:
          "Die Reptilien oder Kriechtiere (lat. reptilis „kriechend“) sind nach traditioneller Auffassung eine Klasse der Wirbeltiere am Übergang von den „niederen“ (Anamnia) zu den „höheren“ Wirbeltieren (Säugetiere und Vögel)."
      },
      {
        name: "Amphibien",
        description:
          "Unter den Bezeichnungen Amphibien (Amphibia) oder Lurche werden alle Landwirbeltiere zusammengefasst, die sich, im Gegensatz zu den Amnioten („Nabeltieren“), nur in Gewässern fortpflanzen können."
      },
      {
        name: "Andere...",
        description:
          "In der Kategorie Andere... werden jegliche Tiere untergebracht, welche keiner der oben aufgeführten Kategorien entspricht."
      }
    ]
  }),
};
</script>

<style></style>
