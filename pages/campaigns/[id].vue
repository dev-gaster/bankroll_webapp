<template>
    <div>
        <v-navigation-drawer :mobile="$vuetify.display.mobile" color="transparent" class="pa-4" width="400" floating location="right">
            <v-card color="#E6F8E5" variant="flat" class="py-8 px-4" rounded="xl">
                <v-row >
                    <v-col cols="8" class=" mb-6" >
                        <h3>Raised: UGX. 12,500,000</h3>
                        <p>Goal: UGX. 20,000,000</p>
                    </v-col>
                    <v-col>
                        <CircularProgress
              :current="20"
              :total="100"
              :size="60"
              :width="8"
              color="success"
              bg-color="#FFFFFF"
            />
                    </v-col>
             
            </v-row>

            <v-col class="mt-2">
                <v-row class="mb-2">
                    <v-btn color="primary" elevation="0" block>Donations</v-btn>
                </v-row>
                <v-row class="mb-2">
                    <v-btn
                        color="white"
                        class="text-success"
                        elevation="0"
                        
                        block
                    >
                        Join
                    </v-btn>
                </v-row>

             
                </v-col>

            </v-card>
        </v-navigation-drawer>
        <v-container>
            <NuxtPage/>
        </v-container>
    </div>
</template>
<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();
const id = route.params.id;
</script>
