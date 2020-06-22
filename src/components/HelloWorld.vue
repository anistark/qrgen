<template>
  <v-container>
    <v-layout
      row
      wrap
      class="pa-0"
    >
      <v-flex xs12 md12>
        <v-img
          :src="require('../assets/devfest.jpg')"
          class="mt-0"

          height="500"
        ></v-img>
      </v-flex>

      <v-flex xs12 md6 offset-md3 mb-4 mt-4 text-center>
        <h1 class="google-font mb-3">
          QRgen
        </h1>
        <p class="subheading font-weight-regular google-font">
          Generate easy and quick QR Codes ready to be integrated into your business. We provide custom QR Codes as well with your branding.

        </p>

        <p class="subheading font-weight-regular google-font">
         <b>Maintained By: </b> Kumar Anirudha

        </p>

      </v-flex>



    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({

  }),
};
</script>
