<template>
  <div class="container">
    <div class="row justify-content-center">
      <!-- filter section -->
      <div class="col-md-2 mb-4">
        <div class="border p-2">
          <h6>透過以下分類搜尋</h6>
          <hr />

          <a
            class="text d-flex justify-content-between"
            data-bs-toggle="collapse"
            href="#collapseExample"
            role="button"
            aria-expanded="true"
            aria-controls="collapseExample"
          >
            飯店設施
            <i class="fas fa-chevron-down fw-lighter pt-1"></i>
          </a>
          <div class="show mt-2" id="collapseExample">
            <div
              class="form-check"
              v-for="facility in facilities"
              :key="facility"
            >
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
        </div>
      </div>

      <div class="col-md-10">
        <div class="row">
          <h3 class="col font-size">找到{{ hotelsData.length }}間住宿</h3>
          <!-- sorting section  -->
          <div class="col-auto">
            <select
              class="form-select form-select-sm mb-3"
              v-model="selectedSorting"
              @change="onSelect"
            >
              <option selected value="0">為你精選</option>
              <option value="1">價錢由低至高</option>
              <option value="2">價錢由高至低</option>
              <option value="3">星級最高</option>
            </select>
          </div>
        </div>
        <!-- Hotel Card section -->
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
    onSelect() {
      console.log("sorting");

      switch (this.selectedSorting) {
        case "1":
          this.hotelsData = this.hotelsData.sort((a, b) => a.price - b.price);
          console.log(this.hotelsData);
          break;
        case "2":
          this.hotelsData = this.hotelsData.sort((a, b) => b.price - a.price);
          break;
        case "3":
          this.hotelsData = this.hotelsData.sort((a, b) => b.scores - a.scores);
          break;
        default:
          break;
      }
    },
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

.text {
  text-decoration: none;
  color: #1a2b48;
}
</style>
