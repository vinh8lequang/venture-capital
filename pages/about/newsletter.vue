<template>
  <div class="pb-15 px-10">
    <div class="py-4">
      <div class="my-breadcrumbs">
        <span v-for="(item, index) in items" :key="index">
          <span v-if="!item.disabled">
            <router-link
              :to="item.href"
              :class="{
                'blue-link': index < items.length - 1,
                'last-link': index === items.length - 1,
              }"
              >{{ item.title }}</router-link
            >
          </span>
          <span v-else class="last-link">Newsletter</span>
          <span v-if="index < items.length - 1" class="divider">/</span>
        </span>
      </div>
    </div>
    <div class="pb-15 justify-center">
      <div class="p-4" style="display: flex; align-items: center">
        <v-card-title
          class="text-h6 text-md-h5 text-lg-h4"
          style="margin: 0 auto"
          >NEWSLETTER
        </v-card-title>
      </div>

      <div class="grid h-screen place-items-center">
        <v-card width="80%" class="pa-5" variant="outlined">
          <v-card-item>
            <div>
              <div class="text-overline mb-1 flex justify-center">
                Join our mailing list
              </div>
              <div class="flex justify-center text-h3 font-weight-normal ma-10">
                Get the best stories from the Horizon Equity Partners community.
              </div>
            </div>
          </v-card-item>
          <v-card-actions>
            <v-text-field
              ref="form"
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>

            <v-spacer></v-spacer>

            <v-btn
              rounded="xl"
              size="large"
              variant="flat"
              color="black"
              text-color="white"
              width="20%"
              @click="validate"
            >
              Submit
            </v-btn>

            <v-dialog v-model="dialog" width="auto">
              <v-card>
                <v-card-text> Thank you for joining us. </v-card-text>
                <v-card-actions>
                  <v-btn
                    color="black"
                    text-color="white"
                    block
                    @click="dialog = false"
                    >Close Dialog</v-btn
                  >
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-card-actions>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) =>
        /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()\\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          v
        ) || "E-mail must be valid",
    ],
    dialog: false,
    items: [
      {
        title: "Home",
        disabled: false,
        href: "/",
      },
      {
        title: "About",
        disabled: false,
        href: "/about/newsletter",
      },
      {
        title: "About",
        disabled: true,
        href: "/about/newsletter",
      },
    ],
  }),

  methods: {
    async validate() {
      const { valid } = await this.$refs.form.validate();
      if (valid) {
        this.dialog = true;
        this.$refs.form.reset();
      }
    },
  },
};
</script>

<style scoped>
.my-breadcrumbs {
  display: flex;
  align-items: center;
  padding-left: 0;
}

.my-breadcrumbs .divider {
  margin: 0 10px;
  color: #999;
}

.blue-link {
  color: #344c8e;
}

.last-link {
  color: rgb(55, 55, 55);
}
</style>
