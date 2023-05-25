<template>
  <v-app id="inspire">
    <v-navigation-drawer
                         v-model="drawer"
                         expand-on-hover
                         rail
                         permanent>
      <v-list-item
                   prepend-avatar="./assets/monAvatar.jpg"
                   title="Membres du Club"
                   nav>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
              :lines="false"
              density="compact"
              nav>
        <v-list-item
                     v-for="(item, i) in items"
                     :key="i"
                     :value="item"
                     color="primary"
                     :to="item.to">
          <template v-slot:prepend>
            <v-icon :icon="item.icon"></v-icon>
          </template>

          <v-list-item-title> {{ item.text }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar>

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-main>
    
<router-view></router-view>
      
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: true,
    rail: false,
    selectedItem: 0,
    items: [
      { text: 'MembersList', icon: 'mdi-account-group', to: '/' },
      { text: 'MemberDetails', icon: 'mdi-file-account',to: '/receipedetails' },
      { text: 'AddMember', icon: 'mdi-account-plus', to: '/addreceipe' },

    ],


  }),
}
</script>