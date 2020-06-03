<template>
  <div id="footer" style="width: 100%; margin-top: 20px; z-index: 0">
    <v-content>
      <v-container>
        <v-row>
          <v-col>
            <v-footer padless>
              <v-card
                flat
                tile
                class="lighten-1 white--text text-center"
                style="width: 100%"
              >
                <v-card-text
                  class="white--text"
                  style="background-color: black;"
                >
                  {{ new Date().getFullYear() }} —
                  <strong>Frank Zinsli</strong>
                </v-card-text>
              </v-card>
            </v-footer>
          </v-col></v-row
        ></v-container
      ></v-content
    >
  </div>
</template>

<script>

export default {
  name: "Footer",
  props: {
    source: String
  },
};
</script>

<style scoped>
.container {
  padding: 5px !important;
}
.v-content {
  padding: 0px !important;
}
.col {
  padding: 5px !important;
}
.v-footer {
  margin-right: 5vw !important;
  margin-left: 5vw !important;
}
</style>
