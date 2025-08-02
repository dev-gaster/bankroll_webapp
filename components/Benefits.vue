<template>
    <v-list dense class="text-subtitle-1 text-primary text-left">
            <v-list-item v-for="(benefit, index) in benefits" :key="index">
                
               <v-avatar
                    size="40"
                    tile
                    variant="tonal"
                    class="mr-2"
                    style="border-radius: 5px!important;"
                >
                <v-icon>{{ benefit.icon }}</v-icon>
                </v-avatar>

                   {{ benefit.title }}
            </v-list-item>
        </v-list>

</template>
<style scoped>

</style>
<script setup>
defineProps({
  title: {
    type: String,
    default: 'Benefits'
  },
  icon: {
    type: String,
    default: 'mdi-check-decagram'
  }

})

const benefits = ref([
    {
        title: 'Private groups for trusted friends and family',
        icon: 'mdi-account-multiple'
    },
    {
        title: 'Real-time updates just like a chat app',
        icon: 'mdi-chat'
    },
    {
        title: 'Track pledges and contributions with ease',
        icon: 'mdi-cash-clock'
    },
    {
        title: 'Organized and secure fundraising made simple',
        icon: 'mdi-check-decagram'
    }
])

</script>