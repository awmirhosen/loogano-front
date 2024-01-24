<template>
  <div class="w-full h-[350px] mt-6">

    <LMap
        ref="map"
        :zoom="zoom"
        :center="[props.loccationla, props.locationlo]"
    >
      <LMarker :lat-lng="[props.loccationla, props.locationlo]" draggable> </LMarker>
      <LTileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
          layer-type="base"
          name="OpenStreetMap"
      >

      </LTileLayer>
    </LMap>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const zoom = ref(17);


const props = defineProps([
    'loccationla', 'locationlo'
])


const leafletOptions = ref({
  url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  minZoom: 5,
  maxZoom: 13,
  zoom: 5.5,
  map: null,
  center: [47.040182, 2.536054],
  bounds: null,
  overlayLocation: false,
  colors: ["#ED722E", "#F6BE00", "#979B0B", "#DA2C81"],
});

</script>

<style>
body {
  margin: 0;
}
</style>
