<template>
  <v-card
    class="mx-auto cards"
    :class="[variant]"
    :style="{ backgroundColor: backgroundColor }"
    :max-width="maxWidth"
    elevation="0"
  >
    <v-card-text class="card-text" :style="{ color: textColor }">
      {{ text }}
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
    backgroundColor: {
      type: String,
      default: 'rgba(42, 62, 247, 0.932)' 
      },
    textColor: {
      type: String,
      default: '#ffffff'
    },
    maxWidth: {
      type: [String, Number],
      default: 344
    },
    variant: {
      type: String,
      default: 'sent', 
      validator: (val) => ['sent', 'received'].includes(val)
    }
  }
}
</script>

<style scoped>
.cards {
  color: #ffffff;
  padding: 4px 8px;
}

.card-text {
  padding: 4px 8px;
  font-size: Clamp(12px, 2vw, 14px);
  line-height: 1.2;
  color: #ffffff;
}

.sent {
  border-top-left-radius: 12px;
  border-top-right-radius: 0;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
}

.received {
  border-top-left-radius: 0;
  border-top-right-radius: 12px;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
}
</style>
