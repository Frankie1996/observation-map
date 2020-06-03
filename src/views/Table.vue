<template>
  <div id="table">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col class="text-center" cols="12">
            <h1 class="mb-3">Liste aller Einträge</h1>

            <!-- App Navigation -->
            <v-btn color="primary" v-on="on" class="mr-2">
              <router-link
                to="dashboard"
                class="nav-link"
                style="color: white; text-decoration: none;"
              >
                <v-icon dark left>mdi-map</v-icon>Map
              </router-link>
            </v-btn>
            <v-btn color="primary" v-on="on" class="mr-2" disabled>
              <router-link to="table" class="nav-link" style="color: white; text-decoration: none;">
                <v-icon dark left>mdi-clipboard-list</v-icon>Liste
              </router-link>
            </v-btn>
          </v-col>

          <!-- Table -->
          <v-data-iterator
            :items="obs"
            :items-per-page.sync="itemsPerPage"
            :page="page"
            :search="search"
            :sort-by="sortBy.toLowerCase()"
            :sort-desc="sortDesc"
            hide-default-footer
          >
            <!-- Header SearchBox -->
            <template v-slot:header>
              <v-toolbar dark color="blue darken-3" class="mb-1">
                <v-text-field
                  v-model="search"
                  clearable
                  flat
                  solo-inverted
                  hide-details
                  prepend-inner-icon="mdi-magnify"
                  label="Search"
                ></v-text-field>
              </v-toolbar>
            </template>

            <!-- Cards -->
            <template v-slot:default="props">
              <v-row >
                <transition-group leave-active-class="animated bounceOut">
                  <v-col v-for="item in props.items" :key="item.id" cols="12">
                    <v-card>
                      <v-card-title
                        class="subheading font-weight-bold"
                        style="background-color: #1976D2; color: white"
                      >
                        <img
                          v-if="item.tierart == 'Greifvögel'"
                          style="max-width: 40px;"
                          color="white"
                          class="mr-2"
                          :src="icon_falcon"
                        />
                        <img
                          v-if="item.tierart == 'Gamswild'"
                          style="max-width: 40px;"
                          color="white"
                          class="mr-2"
                          :src="icon_chamois"
                        />
                        <img
                          v-if="item.tierart == 'Rehwild'"
                          style="max-width: 40px;"
                          color="white"
                          class="mr-2"
                          :src="icon_deer_reh"
                        />
                        <img
                          v-if="item.tierart == 'Wolf'"
                          style="max-width: 40px;"
                          color="white"
                          class="mr-2"
                          :src="icon_wolf"
                        />
                        <img
                          v-if="item.tierart == 'Luchs'"
                          style="max-width: 40px;"
                          color="white"
                          class="mr-2"
                          :src="icon_lynx"
                        />
                        <img
                          v-if="item.tierart == 'Fuchs'"
                          style="max-width: 40px;"
                          color="white"
                          class="mr-2"
                          :src="icon_fox"
                        />
                        <img
                          v-if="item.tierart == 'Nager'"
                          style="max-width: 40px;"
                          color="white"
                          class="mr-2"
                          :src="icon_beaver"
                        />
                        <img
                          v-if="item.tierart == 'Reptilien'"
                          style="max-width: 40px;"
                          color="white"
                          class="mr-2"
                          :src="icon_snake"
                        />
                        <img
                          v-if="item.tierart == 'Amphibien'"
                          style="max-width: 40px;"
                          color="white"
                          class="mr-2"
                          :src="icon_frog"
                        />
                        <img
                          v-if="item.tierart == 'Andere...'"
                          style="max-width: 40px;"
                          color="white"
                          class="mr-2"
                          :src="icon_unicorn"
                        />
                        <img
                          v-if="item.tierart == 'Steinwild'"
                          style="max-width: 40px;"
                          color="white"
                          class="mr-2"
                          :src="icon_capricorn"
                        />
                        <img
                          v-if="item.tierart == 'Rotwild'"
                          style="max-width: 40px;"
                          color="white"
                          class="mr-2"
                          :src="icon_deer"
                        />
                        <img
                          v-if="item.tierart == 'Vögel'"
                          style="max-width: 40px;"
                          color="white"
                          class="mr-2"
                          :src="icon_bird"
                        />
                        {{ item.tiername }}
                        <v-spacer></v-spacer>
                      </v-card-title>

                      <v-divider></v-divider>

                      <v-list dense>
                        <v-list-item v-for="(key, index) in filteredKeys" :key="index">
                          <v-list-item-content>{{ key }}:</v-list-item-content>
                          <v-list-item-content class="align-end">
                            {{
                            item[key.toLowerCase()]
                            }}
                          </v-list-item-content>
                        </v-list-item>
                      </v-list>
                    </v-card>
                  </v-col>
                </transition-group>
              </v-row>
            </template>

            <!-- Table Footer -->
            <template v-slot:footer>
              <v-row class="mt-2 mb-5" align="center" justify="center">
                <span class="grey--text">Einträge pro Seite</span>
                <v-menu offset-y class="mb-5">
                  <template v-slot:activator="{ on }">
                    <v-btn dark text color="primary" class="ml-2" v-on="on">
                      {{ itemsPerPage }}
                      <v-icon>mdi-chevron-down</v-icon>
                    </v-btn>
                  </template>
                  <v-list class="mb-5">
                    <v-list-item
                      v-for="(number, index) in itemsPerPageArray"
                      :key="index"
                      @click="updateItemsPerPage(number)"
                    >
                      <v-list-item-title>{{ number }}</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>

                <v-spacer></v-spacer>

                <span class="mr-4 grey--text">Seite {{ page }} von {{ numberOfPages }}</span>
                <v-btn fab dark color="blue darken-3" class="mr-1" @click="formerPage">
                  <v-icon>mdi-chevron-left</v-icon>
                </v-btn>
                <v-btn fab dark color="blue darken-3" class="ml-1" @click="nextPage">
                  <v-icon>mdi-chevron-right</v-icon>
                </v-btn>
              </v-row>
            </template>
          </v-data-iterator>
        </v-row>
      </v-container>
    </v-content>
  </div>
</template>

<script>

export default {
  data() {
    return {
      icon_beaver: require("../assets/icons/beaver.svg"),
      icon_bird: require("../assets/icons/bird.svg"),
      icon_capricorn: require("../assets/icons/capricorn.svg"),
      icon_chamois: require("../assets/icons/chamois.svg"),
      icon_deer: require("../assets/icons/deer.svg"),
      icon_deer_reh: require("../assets/icons/deer_reh.svg"),
      icon_falcon: require("../assets/icons/falcon.svg"),
      icon_fox: require("../assets/icons/fox.svg"),
      icon_frog: require("../assets/icons/frog.svg"),
      icon_lynx: require("../assets/icons/lynx.svg"),
      icon_snake: require("../assets/icons/snake.svg"),
      icon_unicorn: require("../assets/icons/unicorn.svg"),
      icon_wolf: require("../assets/icons/wolf.svg"),
      tiername: null,
      tierart: null,
      datum: null,
      beschreibung_tier: null,
      geoloc: null,
      uhrzeit: null,
      obs: [],
      beschreibung_ort: null,
      selectedCurrentLoc: false,
      selectedWild: false,
      selectedVogel: false,
      selectedSteinwild: false,
      selectedGreifvogel: false,
      selectedAll: true,
      itemsPerPageArray: [8, 16, 32],
      search: "",
      filter: {},
      sortDesc: true,
      page: 1,
      itemsPerPage: 8,
      sortBy: "datum",
      keys: [
        "tiername",
        "tierart",
        "uhrzeit",
        "datum",
        "beschreibung_ort",
        "beschreibung_tier",
        "Geoloc"
      ],
      iconPath: null,
      deleteAlert: false,
      updateItem: false
    };
  },

  computed: {
    numberOfPages() {
      return Math.ceil(this.obs.length / this.itemsPerPage);
    },
    filteredKeys() {
      return this.keys.filter(key => key !== `tiername`);
    }
  },

  methods: {
    nextPage() {
      if (this.page + 1 <= this.numberOfPages) this.page += 1;
    },
    formerPage() {
      if (this.page - 1 >= 1) this.page -= 1;
    },
    updateItemsPerPage(number) {
      this.itemsPerPage = number;
    }
  }
};
</script>
<style scoped>
.v-list.v-sheet.v-sheet--tile.theme--light.v-list--dense {
  justify-content: left;
  display: grid;
  text-align: left;
}
</style>
