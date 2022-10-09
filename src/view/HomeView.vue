<template>
  <div class="container">
    <div class="d-flex col-md-auto">
      <!-- filter section -->
      <div class="w-25 row-md-auto">
        <div class="">
          <h5>透過以下分類搜尋</h5>
        </div>
        <hr />
        <h6>飯店設施</h6>
        <div class="form-check" v-for="facility in facilities" :key="facility">
          <input
            class="form-check-input"
            type="checkbox"
            :value="facility"
            :id="facility"
            v-model="checkedFacilities"
            @change="filterHotels"
          />
          <label class="form-check-label" :for="facility">
            {{ facility }}
          </label>
        </div>
        <div v-for="fac in hotel" :key="fac.id">
          {{ fac.facilities }}
        </div>
      </div>
      <!-- Hotel Card section -->
      <div class="container">
        <div class="d-flex justify-content-between py-3">
          <h3 class="col font-size px-2">找到{{ dataLen }}間住宿</h3>
        </div>
        <div class="col" v-for="hotel in data" :key="hotel.id">
          <Hotel v-bind:hotel="hotel" v-bind:dataLen="dataLen" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HotelCard from "../components/HotelCard.vue";
import jsonData from "../data/hotels.json";
export default {
  components: {
    Hotel: HotelCard,
  },
  data() {
    return {
      data: jsonData.hotels,
      dataLen: Object.keys(jsonData.hotels).length,
      facilities: [
        "禁菸客房",
        "廚房",
        "洗衣房",
        "停車場",
        "寵物友善",
        "免費無線網路",
      ],
    };
  },
};
</script>

<style scoped>
.font-size {
  font-size: 24px;
}
</style>
