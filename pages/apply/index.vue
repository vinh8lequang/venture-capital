<template>
    <div class="pb-15 justify-center">
        <div class="p-4">
            <v-card-title class="text-h6 text-md-h5 text-lg-h4">Apply</v-card-title>
        </div>

          <v-sheet width="300" class="mx-auto">
            <!-- form to fill in for the application -->
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
              <!-- apply button to proceed with the application -->
              <div class="d-flex flex-column">
                <v-btn
                  color="rgb(0,0,0, 0.4)"
                  class="mt-4"
                  block
                  @click="validate"
                >
                  Apply
                </v-btn>
                <!-- reset button to clear the form -->
                <v-btn
                  color="rgb(0,0,0, 0.4)"
                  class="mt-4"
                  block
                  @click="reset"
                >
                  Clear
                </v-btn>
                <!-- dialog popping out after successful application -->
                <v-dialog
                  v-model="dialog"
                  width="auto"
                >
                  <v-card>
                    <v-card-text>
                      Thank you for applying.
                    </v-card-text>
                    <v-card-actions>
                      <v-btn 
                      color="black" 
                      text-color="white"
                      block 
                      @click="dialog = false">Close Dialog</v-btn>
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
      // rules to validate name
      nameRules: [
        v => !!v || 'Name is required'
      ],
      // rules to validate surname
      surnameRules: [
        v => !!v || 'Surname is required'
      ],
      // rules to validate email
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()\\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v) || 'E-mail must be valid',
      ],
      // rules to validate phone number
      phoneRules: [
        v => !!v || 'Phone number is required',
        v => (v.length > 9 && /[0-9-]+/.test(v)) || 'Phone number needs to be at least 9 digits'
      ],
      // boolean to open the successful application dialog when the validation was successful
      dialog: false,
    }),

    methods: {
      //validate the form based on the rules and reset the form if the validation was successful
      async validate () {
        const { valid } = await this.$refs.form.validate()

        if (valid) {
          this.dialog = true,
          this.$refs.form.reset()
        }
      },
      //reset the form
      reset () {
        this.$refs.form.reset()
      },
      //open the dialog
      open () {
        this.dialog = true
      }
    },
  }
</script>

<style scoped></style>