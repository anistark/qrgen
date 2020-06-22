<template>
    <v-container>
      <v-layout row wrap align-center justify-center fill-height>
        <v-flex xs12 md10 >
          <v-container>
            <v-layout row wrap align-center justify-center fill-height>
              <v-flex xs12 md4 class="text-xs-center pa-5">
                <v-img
                    :src="require('@/assets/img/devfest-logo.jpg')"
                    :lazy-src="require('@/assets/img/devfest-logo.jpg')"
                    width="100%">
                    <v-layout
                        slot="placeholder"
                        fill-height
                        align-center
                        justify-center
                        ma-0
                    >
                        <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                    </v-layout>
                </v-img>
              </v-flex>
              <v-flex xs12 class="px-5 text-center">
                <p class="google-font mb-1" style="font-weight: 350;color: #616161;font-size:300%"><b>QR
                    <span style="color: #1a73e8;">generator</span></b>
                </p>
                <p class="google-font mt-0" style="font-size:180%">Generate QR Codes Easily</p>
                <p class="google-font" style="font-size:110%">Generate easy and quick QR Codes ready to be integrated into your business. We provide custom QR Codes as well with your branding.</p>

                <p class="google-font" style="font-size:110%">Email: hello@qrgen.dev </p>



                <!-- <v-btn href="#" target="_blank" class="ma-0 google-font elevation-1" color="#1a73e8" style="text-transform: capitalize;border-radius:5px;color:white">Request for an Invitation</v-btn>

                &nbsp;

                <v-btn href="#" target="_blank" rounded color="cyan" style="text-transform: capitalize;border-radius:5px;text-transform: capitalize;" outlined  class="ml-0" dark>Learn More</v-btn> -->

            </v-flex>
            <v-flex xs12 md6 class="px-5 text-center">
              <p class="google-font" style="color:red;border:1px solid red">Hey, this is still a work in progress, don't worry if it doesn't look right yet (it will soon!)</p>
            </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </v-container>
</template>
