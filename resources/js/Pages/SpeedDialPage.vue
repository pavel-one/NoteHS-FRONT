<template>
  <div>
    <speed-dial></speed-dial>

    <vs-row>
      <vs-col style="margin-left: 20px">
        <h2>Часто посещаете</h2>
      </vs-col>
    </vs-row>
    <speed-dial :type="1"></speed-dial>
  </div>
</template>

<script>
import SpeedDial from "../components/speed-dial.vue";

export default {
  name: 'SpeedDialPage',
  components: {SpeedDial},
}
</script>