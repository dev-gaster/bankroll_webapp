<template>
  <v-card
    class="mx-auto cardbubble"
    :max-width="maxWidth"
    elevation="0"
    
  >
    <v-card-text class="card-text" >
      <div class="icon-text-row">
        <v-icon color="white" class="mr-2">mdi-whatsapp</v-icon>
        <span>{{ text }}</span>
      </div>
    </v-card-text>
  </v-card>
</template>


<script>
export default {
  name: "ReusableCard",
  props: {
    text: {
      type: String,
      required: true
    },
   
    textColor: {
      type: String,
      default: '#ffffff'
    },
    maxWidth: {
      type: [String, Number],
      default: 344
    },
  
  }
}
</script>

<style scoped>
.icon-text-row {
  display: flex;
  align-items: center;
}

.cardbubble {
    backdrop-filter: blur(11px) saturate(180%);
    -webkit-backdrop-filter: blur(11px) saturate(180%);
    background-color: rgba(249, 252, 250, 0.29);
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.125);
}

.card-text {
  padding: 2px 8px;
  font-size: 14px;
  line-height: 1.2;
  color: #ffffff;
}




</style>
