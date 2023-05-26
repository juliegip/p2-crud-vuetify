<template>
    <h1 class="pl-5">Annuaire</h1>


    <v-container v-for="e in employees" :key="e.id.value" >
      <v-row dense>
        <v-col cols="6">
          <v-card
            color="#385F73"
            theme="dark">
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title class="text-h5">
                  {{ e.name.last }}  {{ e.name.first }}
                </v-card-title>
                <v-card-subtitle>{{e.email}}</v-card-subtitle>
                <v-card-subtitle>{{e.phone}}</v-card-subtitle>
                <v-card-actions>
                  <v-btn
                    class="ms-2"
                    variant="outlined"
                    size="small">
                    Voir détails
                </v-btn>
                <v-btn
                    class="ms-2"
                    icon="mdi-file-edit"
                    variant="text"
                  ></v-btn>
                <v-btn
                    class="ms-2"
                    icon="mdi-delete"
                    variant="text"
                  ></v-btn>
                </v-card-actions>
              </div>
              <v-avatar
                class="ma-3"
                size="125"
                rounded="0">
                <v-img :src="e.picture.medium"></v-img>
              </v-avatar>
            </div>
          </v-card>
        </v-col>

        
      </v-row>
    </v-container>

</template>
  
<script >

export default {
  data: () => ({

    employees : [],
  }),
  methods:{
    getReceipe() {
      fetch('https://randomuser.me/api/?results=20')
        .then(response => response.json())
        // .then(data => console.log(data.results))
        .then(data => this.employees =data.results);
      
    


    }
  },
  created(){
    this.getReceipe();
  }
}
</script>
  