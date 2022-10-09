<template>
  <div class="card mb-3">
    <div class="row g-0">
      <div class="col-auto">
        <img :src="hotel.imgUrl" class="hotel-img" alt="hotel-img" />
      </div>
      <div class="col-md">
        <div class="card-body">
          <h5 class="card-title hotel-name name">{{ hotel.name }}</h5>
          <p class="card-text text-muted mb-2">
            <i class="fas fa-map-marker-alt red-text"></i>
            <span class="ms-1 red-text">{{ hotel.location }}</span>
          </p>
          <p class="card-text maxlines">{{ hotel.description }}</p>
        </div>
      </div>
      <div
        class="col-md-auto my-3 mx-3 d-flex flex-column justify-content-between"
      >
        <div class="d-flex">
          <h6 class="mt-2">{{ hotel.feedback }}</h6>
          <span class="badge text-bg-danger fs-5 ms-3">{{ hotel.scores }}</span>
        </div>
        <div class="">
          <h5>
            {{
              "NT$" +
              hotel.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }}<span class="fs-6 fw-light px-2">起</span>
          </h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["hotel"],
  data() {
    return {};
  },
};
</script>

<style scoped>
.hotel-img {
  overflow: hidden;
  object-fit: cover;
}

.hotel-img:hover {
  cursor: pointer;
}
.hotel-name:hover {
  cursor: pointer;
}

.name {
  font-weight: bold;
  font-size: 18px;
}

.red-text {
  color: #e60013;
}

.maxlines {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4; /* number of lines to show */
  line-clamp: 4;
  -webkit-box-orient: vertical;
}

@media only screen and (min-width: 765px) {
  img {
    width: 250px;
    height: 200px;
    overflow: hidden;
    object-fit: cover;
  }
}

@media only screen and (max-width: 764px) {
  img {
    max-width: 100%;
    height: auto;
    overflow: hidden;
    object-fit: cover;
  }
}
</style>
