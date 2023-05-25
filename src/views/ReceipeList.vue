<template>
    <h1>Liste des recettes</h1>

    <v-card
    max-width="400"
    class="mx-auto"
  >
    <v-container>
      <v-row dense>


        <v-col cols="12">
          <v-card
            color="#385F73"
            theme="dark"
          >
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title class="text-h5">
                  Spicy Arrabiata Penne
                </v-card-title>

                <v-card-subtitle>Vegetarian</v-card-subtitle>

                <v-card-actions>
                  <v-btn
                    class="ms-2"
                    variant="outlined"
                    size="small"
                  >
                    Voir la recette
                  </v-btn>

                </v-card-actions>
              </div>

              <v-avatar
                class="ma-3"
                size="125"
                rounded="0"
              >
                <v-img src="https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg"></v-img>
              </v-avatar>
            </div>
          </v-card>
        </v-col>

        
      </v-row>
    </v-container>
  </v-card>
</template>
  
<script setup>

</script>
  