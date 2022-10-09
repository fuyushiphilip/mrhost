<template>
  <div class="container">
    <div class="d-flex col-md-auto">
      <!-- filter section -->
      <div class="w-25 row-md-auto mt-3 filter-section">
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
          <h3 class="col font-size px-2">找到{{ hotelsData.length }}間住宿</h3>
        </div>

        <div class="col" v-for="hotel in hotelsData" :key="hotel.id">
          <Hotel v-bind:hotel="hotel" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HotelCard from "../components/HotelCard.vue";
import hotels from "../data/hotels.js";

export default {
  components: {
    Hotel: HotelCard,
  },
  data: () => ({
    hotelsData: hotels,
    facilities: [
      "禁菸客房",
      "廚房",
      "洗衣房",
      "停車場",
      "寵物友善",
      "免費無線網路",
    ],
    checkedFacilities: [],
    selectedSorting: "0",
  }),
  methods: {
    filterHotels() {
      console.log("filter");

      var tmpHotels = [];
      for (var i = 0; i < hotels.length; i++) {
        for (var j = 0; j < hotels[i].facilities.length; j++) {
          if (this.checkedFacilities.includes(hotels[i].facilities[j])) {
            tmpHotels.push(hotels[i]);
            console.log("have");
            break;
          }
        }
      }
      if (tmpHotels.length == 0) tmpHotels = hotels;
      this.hotelsData = tmpHotels;
    },
  },
};
</script>

<style scoped>
.font-size {
  font-size: 24px;
}

.filter-section {
  border: 1px solid;
  border-color: #d7dce3;
  height: 50%;
  padding: 20px;
}
</style>
