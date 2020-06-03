<template>
  <div id="dashboard">
    <v-content>
      <v-container class="fill-height" fluid style="max-width: 700px">
        <v-row align="center" justify="center">
          <v-col class="text-center" cols="12">
            <h1 class="mb-3">Map</h1>

            <!-- App Navigation -->
            <v-btn color="primary" v-on="on" class="mr-2" disabled>
              <router-link
                to="dashboard"
                class="nav-link"
                style="color: white; text-decoration: none;"
              >
                <v-icon dark left>mdi-map</v-icon>Map
              </router-link>
            </v-btn>
            <v-btn color="primary" v-on="on" class="mr-2">
              <router-link to="table" class="nav-link" style="color: white; text-decoration: none;">
                <v-icon dark left>mdi-clipboard-list</v-icon>Liste
              </router-link>
            </v-btn>

            <!-- Filteroptionen -->
            <v-col class="mt-5 text-center" cols="12">
              <h3>Filters:</h3>
              <v-btn
                @click="selectedAll = true"
                color="white"
                class="mr-2 mt-2 filter"
                style="font-size: 0.7em; color: black; width: 90px !important"
              >Alle</v-btn>

              <!-- Steinwild -->
              <v-btn
                @click="
                  (selectedAll = false),
                  (selectedCurrentLoc = false),
                  (selectedSteinwild = true),
                  (selectedGamswild = false),
                  (selectedRotwild = false),
                  (selectedRehwild = false),
                  (selectedWolf = false),
                  (selectedLuchs = false),
                  (selectedFuchs = false),
                  (selectedNager = false),
                  (selectedGreifvögel = false),
                  (selectedVögel = false),
                  (selectedReptilien = false),
                  (selectedAmphibien = false),
                  (selectedAndere = false)
                "
                color="red darken-4"
                class="mr-2 mt-2"
                style="font-size: 0.7em; color: white; width: 90px !important"
              >Steinwild</v-btn>

              <!-- Gamswild -->
              <v-btn
                @click="
                  (selectedAll = false),
                  (selectedCurrentLoc = false),
                  (selectedSteinwild = false),
                  (selectedGamswild = true),
                  (selectedRotwild = false),
                  (selectedRehwild = false),
                  (selectedWolf = false),
                  (selectedLuchs = false),
                  (selectedFuchs = false),
                  (selectedNager = false),
                  (selectedGreifvögel = false),
                  (selectedVögel = false),
                  (selectedReptilien = false),
                  (selectedAmphibien = false),
                  (selectedAndere = false)
                "
                color="red"
                class="mr-2 mt-2"
                style="font-size: 0.7em; color: white; width: 90px !important"
              >Gamswild</v-btn>

              <!-- Rotwild -->
              <v-btn
                @click="
                  (selectedAll = false),
                  (selectedCurrentLoc = false),
                  (selectedSteinwild = false),
                  (selectedGamswild = false),
                  (selectedRotwild = true),
                  (selectedRehwild = false),
                  (selectedWolf = false),
                  (selectedLuchs = false),
                  (selectedFuchs = false),
                  (selectedNager = false),
                  (selectedGreifvögel = false),
                  (selectedVögel = false),
                  (selectedReptilien = false),
                  (selectedAmphibien = false),
                  (selectedAndere = false)
                "
                color="red accent-1"
                class="mr-2 mt-2"
                style="font-size: 0.7em; color: white; width: 90px !important"
              >Rotwild</v-btn>

              <!-- Rehwild -->
              <v-btn
                @click="
                  (selectedAll = false),
                  (selectedCurrentLoc = false),
                  (selectedSteinwild = false),
                  (selectedGamswild = false),
                  (selectedRotwild = false),
                  (selectedRehwild = true),
                  (selectedWolf = false),
                  (selectedLuchs = false),
                  (selectedFuchs = false),
                  (selectedNager = false),
                  (selectedGreifvögel = false),
                  (selectedVögel = false),
                  (selectedReptilien = false),
                  (selectedAmphibien = false),
                  (selectedAndere = false)
                "
                color="red lighten-4"
                class="mr-2 mt-2"
                style="font-size: 0.7em; color: white; width: 90px !important"
              >Rehwild</v-btn>

              <!-- Wolf -->
              <v-btn
                @click="
                  (selectedAll = false),
                  (selectedCurrentLoc = false),
                  (selectedSteinwild = false),
                  (selectedGamswild = false),
                  (selectedRotwild = false),
                  (selectedRehwild = false),
                  (selectedWolf = true),
                  (selectedLuchs = false),
                  (selectedFuchs = false),
                  (selectedNager = false),
                  (selectedGreifvögel = false),
                  (selectedVögel = false),
                  (selectedReptilien = false),
                  (selectedAmphibien = false),
                  (selectedAndere = false)
                "
                color="pink darken-4"
                class="mr-2 mt-2"
                style="font-size: 0.7em; color: white; width: 90px !important"
              >Wolf</v-btn>

              <!-- Luchs -->
              <v-btn
                @click="
                  (selectedAll = false),
                  (selectedCurrentLoc = false),
                  (selectedSteinwild = false),
                  (selectedGamswild = false),
                  (selectedRotwild = false),
                  (selectedRehwild = false),
                  (selectedWolf = false),
                  (selectedLuchs = true),
                  (selectedFuchs = false),
                  (selectedNager = false),
                  (selectedGreifvögel = false),
                  (selectedVögel = false),
                  (selectedReptilien = false),
                  (selectedAmphibien = false),
                  (selectedAndere = false)
                "
                color="pink darken-2"
                class="mr-2 mt-2"
                style="font-size: 0.7em; color: white; width: 90px !important"
              >Luchs</v-btn>

              <!-- Fuchs -->
              <v-btn
                @click="
                  (selectedAll = false),
                  (selectedCurrentLoc = false),
                  (selectedSteinwild = false),
                  (selectedGamswild = false),
                  (selectedRotwild = false),
                  (selectedRehwild = false),
                  (selectedWolf = false),
                  (selectedLuchs = false),
                  (selectedFuchs = true),
                  (selectedNager = false),
                  (selectedGreifvögel = false),
                  (selectedVögel = false),
                  (selectedReptilien = false),
                  (selectedAmphibien = false),
                  (selectedAndere = false)
                "
                color="pink lighten-1"
                class="mr-2 mt-2"
                style="font-size: 0.7em; color: white; width: 90px !important"
              >Fuchs</v-btn>

              <!-- Nager -->
              <v-btn
                @click="
                  (selectedAll = false),
                  (selectedCurrentLoc = false),
                  (selectedSteinwild = false),
                  (selectedGamswild = false),
                  (selectedRotwild = false),
                  (selectedRehwild = false),
                  (selectedWolf = false),
                  (selectedLuchs = false),
                  (selectedFuchs = false),
                  (selectedNager = true),
                  (selectedGreifvögel = false),
                  (selectedVögel = false),
                  (selectedReptilien = false),
                  (selectedAmphibien = false),
                  (selectedAndere = false)
                "
                color="purple darken-3"
                class="mr-2 mt-2"
                style="font-size: 0.7em; color: white; width: 90px !important"
              >Nager</v-btn>

              <!-- Greifvögel -->
              <v-btn
                @click="
                  (selectedAll = false),
                  (selectedCurrentLoc = false),
                  (selectedSteinwild = false),
                  (selectedGamswild = false),
                  (selectedRotwild = false),
                  (selectedRehwild = false),
                  (selectedWolf = false),
                  (selectedLuchs = false),
                  (selectedFuchs = false),
                  (selectedNager = false),
                  (selectedGreifvögel = true),
                  (selectedVögel = false),
                  (selectedReptilien = false),
                  (selectedAmphibien = false),
                  (selectedAndere = false)
                "
                color="indigo darken-4"
                class="mr-2 mt-2"
                style="font-size: 0.7em; color: white; width: 90px !important"
              >Greifvögel</v-btn>

              <!-- Vögel -->
              <v-btn
                @click="
                  (selectedAll = false),
                  (selectedCurrentLoc = false),
                  (selectedSteinwild = false),
                  (selectedGamswild = false),
                  (selectedRotwild = false),
                  (selectedRehwild = false),
                  (selectedWolf = false),
                  (selectedLuchs = false),
                  (selectedFuchs = false),
                  (selectedNager = false),
                  (selectedGreifvögel = false),
                  (selectedVögel = true),
                  (selectedReptilien = false),
                  (selectedAmphibien = false),
                  (selectedAndere = false)
                "
                color="indigo lighten-3"
                class="mr-2 mt-2"
                style="font-size: 0.7em; color: white; width: 90px !important"
              >Vögel</v-btn>

              <!-- Reptilien -->
              <v-btn
                @click="
                  (selectedAll = false),
                  (selectedCurrentLoc = false),
                  (selectedSteinwild = false),
                  (selectedGamswild = false),
                  (selectedRotwild = false),
                  (selectedRehwild = false),
                  (selectedWolf = false),
                  (selectedLuchs = false),
                  (selectedFuchs = false),
                  (selectedNager = false),
                  (selectedGreifvögel = false),
                  (selectedVögel = false),
                  (selectedReptilien = true),
                  (selectedAmphibien = false),
                  (selectedAndere = false)
                "
                color="green lighten-1"
                class="mr-2 mt-2"
                style="font-size: 0.7em; color: white; width: 90px !important"
              >Reptilien</v-btn>

              <!-- Amphibien -->
              <v-btn
                @click="
                  (selectedAll = false),
                  (selectedCurrentLoc = false),
                  (selectedSteinwild = false),
                  (selectedGamswild = false),
                  (selectedRotwild = false),
                  (selectedRehwild = false),
                  (selectedWolf = false),
                  (selectedLuchs = false),
                  (selectedFuchs = false),
                  (selectedNager = false),
                  (selectedGreifvögel = false),
                  (selectedVögel = false),
                  (selectedReptilien = false),
                  (selectedAmphibien = true),
                  (selectedAndere = false)
                "
                color="green darken-4"
                class="mr-2 mt-2"
                style="font-size: 0.7em; color: white; width: 90px !important"
              >Amphibien</v-btn>

              <!-- Andere -->
              <v-btn
                @click="
                  (selectedAll = false),
                  (selectedCurrentLoc = false),
                  (selectedSteinwild = false),
                  (selectedGamswild = false),
                  (selectedRotwild = false),
                  (selectedRehwild = false),
                  (selectedWolf = false),
                  (selectedLuchs = false),
                  (selectedFuchs = false),
                  (selectedNager = false),
                  (selectedGreifvögel = false),
                  (selectedVögel = false),
                  (selectedReptilien = false),
                  (selectedAmphibien = false),
                  (selectedAndere = true)
                "
                color="yellow accent-2"
                class="mr-2 mt-2"
                style="font-size: 0.7em; color: black; width: 90px !important"
              >Andere</v-btn>
            </v-col>

            <!-- Map -> activeMap -->
            <div v-if="activeMap == true">
              <vl-map
                :load-tiles-while-animating="true"
                :load-tiles-while-interacting="true"
                @click="clickCoordinate = $event.coordinate"
                data-projection="EPSG:4326"
                style="height: 400px"
              >
                <vl-view :zoom.sync="zoom" :center.sync="center" :rotation.sync="rotation"></vl-view>

                <!-- Current Position -->
                <vl-geoloc @update:position="geolocPosition = $event">
                  <template slot-scope="geoloc">
                    <vl-feature v-if="geoloc.position" id="position-feature">
                      <vl-geom-point :coordinates="geoloc.position"></vl-geom-point>
                      <vl-style-box>
                        <vl-style-circle :radius="4">
                          <vl-style-fill color="black"></vl-style-fill>
                        </vl-style-circle>
                      </vl-style-box>
                    </vl-feature>
                  </template>
                </vl-geoloc>

                <!-- Obs Points -->
                <vl-feature v-for="ob in obs" :key="ob.id">
                  <vl-geom-point :coordinates="ob.geoloc"></vl-geom-point>
                  <vl-style-box>
                    <!-- All -->
                    <vl-style-circle :radius="8" v-if="selectedAll">
                      <vl-style-fill v-if="ob.tierart == 'Steinwild'" color="#B71C1C"></vl-style-fill>
                      <vl-style-fill v-if="ob.tierart == 'Gamswild'" color="#F44336"></vl-style-fill>
                      <vl-style-fill v-if="ob.tierart == 'Rotwild'" color="#FF8A80"></vl-style-fill>
                      <vl-style-fill v-if="ob.tierart == 'Rehwild'" color="#FFCDD2"></vl-style-fill>
                      <vl-style-fill v-if="ob.tierart == 'Wolf'" color="#880E4F"></vl-style-fill>
                      <vl-style-fill v-if="ob.tierart == 'Luchs'" color="#C2185B"></vl-style-fill>
                      <vl-style-fill v-if="ob.tierart == 'Fuchs'" color="#EC407A"></vl-style-fill>
                      <vl-style-fill v-if="ob.tierart == 'Nager'" color="#6A1B9A"></vl-style-fill>
                      <vl-style-fill v-if="ob.tierart == 'Greifvögel'" color="#1A237E"></vl-style-fill>
                      <vl-style-fill v-if="ob.tierart == 'Vögel'" color="#9FA8DA"></vl-style-fill>
                      <vl-style-fill v-if="ob.tierart == 'Reptilien'" color="#66BB6A"></vl-style-fill>
                      <vl-style-fill v-if="ob.tierart == 'Amphibien'" color="#1B5E20"></vl-style-fill>
                      <vl-style-fill v-if="ob.tierart == 'Andere...'" color="#EEFF41"></vl-style-fill>
                    </vl-style-circle>

                    <vl-style-circle :radius="8" v-if="selectedSteinwild">
                      <vl-style-fill v-if="ob.tierart == 'Steinwild'" color="#B71C1C"></vl-style-fill>
                    </vl-style-circle>
                    <vl-style-circle :radius="8" v-if="selectedGamswild">
                      <vl-style-fill v-if="ob.tierart == 'Gamswild'" color="#F44336"></vl-style-fill>
                    </vl-style-circle>
                    <vl-style-circle :radius="8" v-if="selectedRotwild">
                      <vl-style-fill v-if="ob.tierart == 'Rotwild'" color="#FF8A80"></vl-style-fill>
                    </vl-style-circle>
                    <vl-style-circle :radius="8" v-if="selectedRehwild">
                      <vl-style-fill v-if="ob.tierart == 'Rehwild'" color="#FFCDD2"></vl-style-fill>
                    </vl-style-circle>
                    <vl-style-circle :radius="8" v-if="selectedWolf">
                      <vl-style-fill v-if="ob.tierart == 'Wolf'" color="#880E4F"></vl-style-fill>
                    </vl-style-circle>
                    <vl-style-circle :radius="8" v-if="selectedLuchs">
                      <vl-style-fill v-if="ob.tierart == 'Luchs'" color="#C2185B"></vl-style-fill>
                    </vl-style-circle>
                    <vl-style-circle :radius="8" v-if="selectedFuchs">
                      <vl-style-fill v-if="ob.tierart == 'Fuchs'" color="#EC407A"></vl-style-fill>
                    </vl-style-circle>
                    <vl-style-circle :radius="8" v-if="selectedNager">
                      <vl-style-fill v-if="ob.tierart == 'Nager'" color="#6A1B9A"></vl-style-fill>
                    </vl-style-circle>
                    <vl-style-circle :radius="8" v-if="selectedGreifvögel">
                      <vl-style-fill v-if="ob.tierart == 'Greifvögel'" color="#1A237E"></vl-style-fill>
                    </vl-style-circle>
                    <vl-style-circle :radius="8" v-if="selectedVögel">
                      <vl-style-fill v-if="ob.tierart == 'Vögel'" color="#9FA8DA"></vl-style-fill>
                    </vl-style-circle>
                    <vl-style-circle :radius="8" v-if="selectedReptilien">
                      <vl-style-fill v-if="ob.tierart == 'Reptilien'" color="#66BB6A"></vl-style-fill>
                    </vl-style-circle>
                    <vl-style-circle :radius="8" v-if="selectedAmphibien">
                      <vl-style-fill v-if="ob.tierart == 'Amphibien'" color="#1B5E20"></vl-style-fill>
                    </vl-style-circle>
                    <vl-style-circle :radius="8" v-if="selectedAndere">
                      <vl-style-fill v-if="ob.tierart == 'Andere...'" color="#EEFF41"></vl-style-fill>
                    </vl-style-circle>
                  </vl-style-box>
                </vl-feature>

                <!-- Map Type -->
                <vl-layer-tile id="osm">
                  <vl-source-osm></vl-source-osm>
                </vl-layer-tile>
              </vl-map>

              <!-- Add New Ob -->
              <div>
                <v-btn
                  color="primary"
                  fab
                  small
                  dark
                  @click="(dialog = true), (clickCoordinate = undefined)"
                >
                  <v-icon>mdi-plus</v-icon>
                </v-btn>
              </div>
            </div>

            <!-- activateMap -> activateMap -->
            <div v-else-if="activateMap == true">
              <vl-map
                :load-tiles-while-animating="true"
                :load-tiles-while-interacting="true"
                @click="(clickCoordinate = $event.coordinate), (dialog = true)"
                data-projection="EPSG:4326"
                style="height: 400px"
              >
                <vl-view :zoom.sync="zoom" :center.sync="center" :rotation.sync="rotation"></vl-view>

                <!-- Current Position -->
                <vl-geoloc @update:position="geolocPosition = $event">
                  <template slot-scope="geoloc">
                    <vl-feature v-if="geoloc.position" id="position-feature">
                      <vl-geom-point :coordinates="geoloc.position"></vl-geom-point>
                      <vl-style-box>
                        <vl-style-circle :radius="4">
                          <vl-style-fill color="red"></vl-style-fill>
                        </vl-style-circle>
                      </vl-style-box>
                    </vl-feature>
                  </template>
                </vl-geoloc>

                <!-- Map Type -->
                <vl-layer-tile id="osm">
                  <vl-source-osm></vl-source-osm>
                </vl-layer-tile>
              </vl-map>
            </div>
          </v-col>

          <v-col cols="12">
            <div>
              <h2>Wie funktionierts?</h2>
              <p>
                Die Karte zeigt dir alle Einträge der Gruppe an. Die verschiedenfarbigen Punkte
                Stehen jeweils für eine ander Kategorie. Jede Kategorie besitzt seine individuelle
                Farbe.
              </p>
            </div>
            <v-divider class="my-2"></v-divider>
            <div>
              <h3>Neuen Eintrag hinzufügen</h3>
              <p>
                Um einen neuen Eintrag hinzuzufügen, klicken sich auf das kleine Plus-Symbol
                unter der Karte. Nun öffnet sich ein Fenster. Tragen Sie hier
                alle relevanten Informationen ein. Schreiben Sie so relevant wie möglich und so detailiert
                wie nötig.
                <br />Um nun die Geolocation der Beobachtung zu setzten gibt es zwei möglichkeiten:
              </p>
              <h4>Eigenen Standort wählen</h4>
              <p>
                Durch einen Klick auf "Meine Koordinaten", versucht die App ihre GeoDaten auszulesen.
                Falls dies nicht möglich ist, aktivieren Sie diese für die App.
              </p>
              <h4>Standort setzten</h4>
              <p>
                Alternativ haben Sie die Möglichkeit, den Standort individuell auf der Karte zu setzen.
                Durch einen Klick auf "auf Karte wählen", schliesst sich das Fenster und Sie
                können einen Ort auf der Karte auswählen, anschliessend öffnet sich das Fenster wieder
                mit den eingetragenen Koordinaten.
              </p>
            </div>
            <v-divider class="my-2"></v-divider>
            <h3>Standort für die App freigeben</h3>
            <p>
              Damit Du den vollen Funktionsumfang der App nutzen kannst, musst du die Standortinformationen
              für die App freigeben. Da es sich um eine Webanwendung handelt, musst du dies von Hand erledigen.
            </p>
            <h4>Mit einem IOS Gerät (Safari)</h4>
            <p>Einstellungen -> Safari -> Standort -> Fragen oder Erlauben</p>
            <v-img :src="images.ios_geolocation" max-width="480px" class="mx-auto"></v-img>
            <br />
            <h4>Mit einem Android Gerät (Google Chrome)</h4>
            <p>Chrome App öffnen -> Dreipunkt-Menü und dann Einstellungen. -> Website-Einstellungen -> Standort</p>
            <br />
            <h4>Mit einem Desktop Computer (z.B. Firefox)</h4>
            <p>
              Es öffnet sich ein Pop-Up, hier kann man nun "Standortzugriff erlauben" wählen. Zusätzlich empfehle ich
              diese "Entscheidung zu merken" einzustellen.
            </p>
            <v-img :src="images.desktop_geolocation" max-width="480px" class="mx-auto"></v-img>
            <v-divider class="my-2"></v-divider>
            <h3>Die Webapp auf dem Smartphone speichern</h3>
            <p>
              Diese Webanwendung kann einfach auf dem Smartphone gespeichert werden. Dadurch ist sie
              schneller auffindbar und kann direkt gestarted werden. Dies ist auf IOS Geräten sowie auch
              auf Android Geräten möglich.
            </p>
            <h4>Auf IOS Geräten</h4>
            <v-img :src="images.save_app" max-width="480px" class="mx-auto"></v-img><br>
            <h4>Auf Android Geräten</h4>
            <p>
              Um die Webanwendung auf einem Homescreen eines Andoid Gerätes zu speichern, hat Chip
              eine kurze Anleitung geschrieben. <br>
              <a style="font-weight: 400" href="https://praxistipps.chip.de/android-lesezeichen-auf-dem-homescreen-ablegen-so-klappts_27640">Link - Chip Anleitung (WebApp auf Homescreen speichern)</a>
            </p>
            
          </v-col>
        </v-row>
      </v-container>
    </v-content>

    <!-- New Ob Dialog -->
    <v-dialog v-model="dialog" max-width="500">
      <v-card>
        <v-container>
          <!-- Input Form -->
          <v-form @submit.prevent="addOb">
            <v-row>
              <!-- Titel -->
              <v-col cols="12">
                <strong>
                  <v-text-field v-model="tiername" type="text" label="Titel*" clearable></v-text-field>
                </strong>
              </v-col>

              <!-- Tierart -->
              <v-col class="d-flex" cols="12">
                <v-select :items="tierarten" label="Tierart" v-model="tierart"></v-select>
              </v-col>

              <!-- Ort -->
              <v-col cols="12">
                <v-textarea v-model="beschreibung_ort" color="teal">
                  <template v-slot:label>
                    <div>Beschreibung des Ortes</div>
                  </template>
                </v-textarea>
              </v-col>

              <!-- Description Animal -->
              <v-col cols="12">
                <v-textarea v-model="beschreibung_tier" color="teal">
                  <template v-slot:label>
                    <div>Beschreibung des Tieres</div>
                  </template>
                </v-textarea>
              </v-col>

              <!-- -Choose Coordinates -->
              <v-col cols="12" style="margin-bottom: 0px !important" v-if="geolocPosition">
                <v-btn @click="(myPosition = true), (clickCoordinate = undefined)">
                  <v-icon left>mdi-crosshairs-gps</v-icon>Meine Koordinaten
                </v-btn>
              </v-col>
              <v-col cols="12" style="margin-top: 0px !important">
                <v-btn
                  @click="
                    (dialog = false), (activateMap = true), (activeMap = false), (clickCoordinate = true), (MyPosition = false)
                  "
                >
                  <v-icon left>mdi-map-marker</v-icon>Auf Karte wählen
                </v-btn>
              </v-col>

              <!-- Chosen Coordinates ClickCoordinate -->
              <v-col cols="12" v-if="clickCoordinate">
                <strong>
                  <v-text-field v-model="clickCoordinate" type="text" label="Koordinaten" disabled></v-text-field>
                </strong>
              </v-col>

              <!-- Chosen Coordinates geolocPosition -->
              <v-col cols="12" v-else-if="myPosition == true">
                <strong>
                  <v-text-field v-model="geolocPosition" type="text" label="Koordinaten" disabled></v-text-field>
                </strong>
              </v-col>

              <!-- datum -->
              <v-col cols="12" sm="6">
                <v-text-field v-model="datum" type="date" label="Datum"></v-text-field>
              </v-col>

              <!-- uhrzeit -->
              <v-col cols="12" sm="6">
                <v-text-field v-model="uhrzeit" type="time" label="Uhrzeit"></v-text-field>
              </v-col>

              <!-- Aktion-Buttons -->
              <v-col cols="6" class="picker-buttons">
                <v-btn type="submit" color="success">
                  <v-icon>mdi-content-save</v-icon>Speichern
                </v-btn>
              </v-col>
              <v-col cols="6">
                <v-btn
                  color="error"
                  @click="
                    (dialog = false), (activateMap = false), (activeMap = true), (myPosition = false)
                  "
                >
                  <v-icon>mdi-close</v-icon>Schliessen
                </v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-container>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>

export default {
  name: "Dashboard",

  data() {
    return {
      images: {
        ios_geolocation: require("../assets/img/ios_geolocation.png"),
        save_app: require("../assets/img/save_app.png"),
        desktop_geolocation: require("../assets/img/desktop_geolocation.png")
      },
      zoom: 10,
      center: [9.504547119140614, 46.84798223530902],
      rotation: 0,
      geolocPosition: undefined,
      clickCoordinate: undefined,

      dialog: false,
      tiername: null,
      beschreibung_tier: null,
      datum: null,
      uhrzeit: null,
      tierart: null,
      beschreibung_ort: null,
      tierarten: [
        "Steinwild",
        "Gamswild",
        "Rotwild",
        "Rehwild",
        "Wolf",
        "Luchs",
        "Fuchs",
        "Nager",
        "Greifvögel",
        "Vögel",
        "Reptilien",
        "Amphibien",
        "Andere..."
      ],
      selectedCurrentLoc: false,
      selectedSteinwild: false,
      selectedGamswild: false,
      selectedRotwild: false,
      selectedRehwild: false,
      selectedWolf: false,
      selectedLuchs: false,
      selectedFuchs: false,
      selectedNager: false,
      selectedGreifvögel: false,
      selectedVögel: false,
      selectedReptilien: false,
      selectedAmphibien: false,
      selectedAndere: false,
      selectedAll: true,
      activateMap: false,
      activeMap: true,
      myPosition: false
    };
  },
};
</script>

<style scoped>
.vl-geom-point {
  color: red !important;
  background-color: red;
}

.changeMap {
  position: absolute;
  background-color: rgba(255, 255, 255, 0.4);
  padding: 2px;
  bottom: 2em;
  right: 0.5em;
}
</style>
