<template>
    <div class="pb-15 justify-center">
        <div class="p-4">
            <v-card-title class="text-h6 text-md-h5 text-lg-h4">Apply</v-card-title>
        </div>

          <v-sheet width="300" class="mx-auto">

            <v-form ref="form">
              <v-text-field
                v-model="name"
                :rules="nameRules"
                label="Name"
                required
              ></v-text-field>

              <v-text-field
                v-model="surname"
                :rules="surnameRules"
                label="Surname"
                required
              ></v-text-field>

              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required
              ></v-text-field>

              <v-text-field
                v-model="phone"
                :rules="phoneRules"
                label="Phone number"
                required
              ></v-text-field>

             <!--  <v-checkbox
                v-model="checkbox"
                :rules="[v => !!v || 'You must agree to continue!']"
                label="Do you agree?"
                required
              ></v-checkbox> -->

              <div class="d-flex flex-column">
                <v-btn
                  color="rgb(0,0,0, 0.4)"
                  class="mt-4"
                  block
                  @click="validate(); open();"
                >
                  Apply
                </v-btn>

                <v-btn
                  color="rgb(0,0,0, 0.4)"
                  class="mt-4"
                  block
                  @click="reset"
                >
                  Clear
                </v-btn>

                <v-dialog
                  v-model="dialog"
                  width="auto"
                >
                  <v-card>
                    <v-card-text>
                      Thank you for applying.
                    </v-card-text>
                    <v-card-actions>
                      <v-btn color="primary" block @click="dialog = false">Close Dialog</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </div>
            </v-form>
          </v-sheet>
    
    </div>
</template>


<script>
  export default {
    data: () => ({
      name: '',
      surname: '',
      email: '',
      phone: '',
      nameRules: [
        v => !!v || 'Name is required'
      ],
      surnameRules: [
        v => !!v || 'Surname is required'
      ],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()\\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v) || 'E-mail must be valid',
      ],
      phoneRules: [
        v => !!v || 'Phone number is required',
        v => (v.length > 9 && /[0-9-]+/.test(v)) || 'Phone number needs to be at least 9 digits'
      ],
      dialog: false,
    }),

    methods: {
      async validate () {
        const { valid } = await this.$refs.form.validate()

        if (valid) {

          this.$refs.form.reset()
        }
      },
      reset () {
        this.$refs.form.reset()
      },
      open () {
        this.dialog = true
      }
    },
  }
</script>

<style scoped></style>