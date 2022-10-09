<template>
  <div class="container">
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
</template>

<script>
export default {
  props: ["hotel"],
  data() {
    return {
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
  methods() {},
};
</script>

<style scoped>
a {
  color: #1a2b48;
}
.container {
  width: 100%;
  margin-top: 18px;
  border: 1px solid;
  border-color: #d7dce3;
}
.facility {
  text-decoration: none;
  color: #1a2b48;
}

.facility:hover {
  cursor: pointer;
}
</style>
