<template>
  <div id="navbar">
    <v-navigation-drawer v-model="drawer" app dark class="pt-5">
      <h2 style="color: white;" class="title">MENU</h2>
      <v-list dense class="text-left">
        <router-link to="/" style="color: white; text-decoration: none;">
          <v-divider class="mb-5"></v-divider>
          <v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-home</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title class="subtitle-1">Startseite</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>

        <router-link to="about" style="color: white; text-decoration: none;">
          <v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-information</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title class="subtitle-1">Über die App</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>

        <router-link to="contact" style="color: white; text-decoration: none;">
          <v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-card-account-mail</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title class="subtitle-1">Kontakt</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>

        <router-link to="impressum" style="color: white; text-decoration: none;">
          <v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-format-paragraph</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title class="subtitle-1">Impressum & Datenschutz</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>

        <div>
          <router-link to="dashboard" style="color: white; text-decoration: none;">
            <v-divider class="mt-5"></v-divider>
            <v-list-item link>
              <v-list-item-action>
                <v-icon>mdi-application-import</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title class="subtitle-1">Zurück zur App</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </router-link>
        </div>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <router-link to="dashboard" style="color: white; text-decoration: none;">
        <v-toolbar-title>Observation Map</v-toolbar-title>
      </router-link>
      <v-spacer></v-spacer>
    </v-app-bar>
  </div>
</template>

<script>

export default {
  name: "NavBar",
  props: {
    source: String
  },

  data: () => ({
    drawer: null
  }),
};
</script>

<style scoped></style>
