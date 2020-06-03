<template>
  <div id="about">
    <v-content>
      <v-container class="fill-height" fluid style="max-width: 700px">
        <v-row align="center" justify="center">
          <v-col class="text-center" align="center" justify="center">
            <h1>Über die App</h1>
            <p>
              Die Webapplikation "Observation Map" ist im Rahmen eines Schulprojektes entstanden.
              Das Design wurde für die Nutzung mit einem Mobile Gerät optimiert.
              Sie soll begeisterte Wildtierbeobachter und Wildlife-Fotografen dabei unterstützen, die Tierwelt
              und deren Verhalten zu verstehen.
              <br />
              <br />Durch die App sollen die wildlebenden Tiere nicht vermehrt gestört werden, sondern es soll deren verhalten verstanden werden.
              Druch ein zielgerichtetes vorgehen und wichtiges Wissen über dessen Aufenthaltsort, können die Tiere
              besser beobachtet werden und werden dadurch weniger Verschreckt.
              <br />
              <br />Dabei gilt es natürlich auch, auf den normalen Menschenverstand zu setzen.
            </p>
            <iframe
              src="https://giphy.com/embed/l378b59fSuMV12tzO"
              width="90%"
              max-width="480"
              height="261"
              frameborder="0"
              class="giphy-embed"
              allowfullscreen
            ></iframe>
            <p>
              <a href="https://giphy.com/gifs/foxhomeent-predator-l378b59fSuMV12tzO">via GIPHY</a>
            </p>
            <h2>Funktionen der App</h2>
            <p>
              In der aktuellen Version 1.0 der App, geht es um die grundsätzlichen Funktionalitäten dieser App.
              Dies umfasst, das Erfassen von Beobachtungen und das abrufen der erfassten Daten.
            </p>
            <h3>1. Erfassen von Beobachtungen</h3>
            <p>
              Momentan steht im Fokus der App, das Erfassen von Beobachtungen. Durch eine interaktive Karte
              und der Geolocation der Mobilgeräte, werden die Beobachtungen auf einer Karte erfasst.
            </p>
            <v-img :src="images.new_scr" max-width="480" class="mx-auto"></v-img>
            <p class="text--secondary">Screenshot für einen neuen Eintrag</p>
            <h3>2. Abrufen von erfassten Daten</h3>
            <p>Die erfassten Daten können auf zwei verschiedene Art und Weisen abgerufen werden.</p>

            <strong>Über die interaktive Karte mit Filterfunktion.</strong>

            <v-img :src="images.map_scr" max-width="480" class="mx-auto"></v-img>
            <p class="text--secondary">Screenshot aus der interaktiven Karte</p>

            <strong>Oder über eine Datentabelle mit Suchfunktion.</strong>

            <v-img :src="images.tbl_scr" max-width="480" class="mx-auto"></v-img>
            <p class="text--secondary">Screenshot von der Daten-Tabelle.</p>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </div>
</template>

<script>
export default {
  data: () => ({
    images: {
      new_scr: require("../assets/img/new_scr.png"),
      map_scr: require("../assets/img/map_scr.png"),
      tbl_scr: require("../assets/img/tbl_scr.png")
    }
  })
};
</script>

<style scoped>
</style>>
