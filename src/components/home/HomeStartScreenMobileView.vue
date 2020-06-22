<template>
  <div>
  <v-card
    flat
    class="mx-auto my-1 elevation-0"
    max-width="374"
    height="90%"
    style="border:1px solid #EEEEEE;border-radius:8px"
  >
    <v-img
      height="250"
      :src="require('@/assets/img/logo.png')"
      :lazy-src="require('@/assets/img/logo.png')"
    ></v-img>

    <v-card-title class="google-font">QRgen</v-card-title>
    <v-card-text>
      <div class="my-0 subtitle-1 black--text google-font">
        Generate QR Codes Easily
      </div>

      <div class="google-font">Generate easy and quick QR Codes ready to be integrated into your business. We provide custom QR Codes as well with your branding.</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-text class="google-font">
      <div class="subtitle-1 text--primary">View on desktop</div>
      <div class="subtitle-2 text--primary">Our minions are at work to make this website mobile enabled. Till then, please use a larger screen.</div>
      <v-chip-group
        small
      >
        <v-chip href="https://twitter.com/hashtag/qrgen" target="_blank">#qrgen</v-chip>
        <v-chip href="https://twitter.com/hashtag/acyclic" target="_blank">#acyclic</v-chip>
        <!-- <v-chip small outlined>#GDGJalandhar</v-chip>
        <v-chip small outlined>#GDGChandigarh</v-chip> -->
      </v-chip-group>
    </v-card-text>

    <v-card-actions class="text-center px-4 mb-5">
        <!-- <p class="google-font">Registration Comming Soon...</p> -->
      <v-btn
        dark
        target="_blank"
        color="primary"
        aria-label="Registration Button"
      >
        Generate QR code
      </v-btn>
      <!-- <v-btn
        text
        color="deep-purple accent-4"
      >
        Learn More
      </v-btn> -->
    </v-card-actions>
  </v-card>

  <v-flex xs12>
    <v-img
      height="1x50"
      :src="require('@/assets/img/svg/footer.svg')"
      :lazy-src="require('@/assets/img/svg/footer.svg')"
    ></v-img>
  </v-flex>

  </div>
</template>

<script>
  export default {
    data: () => ({
      loading: false,
      selection: 1,
    }),

    methods: {
      reserve () {
        this.loading = true

        setTimeout(() => (this.loading = false), 2000)
      },
    },
  }
</script>
