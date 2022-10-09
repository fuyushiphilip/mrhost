<template>
  <div class="container">
    <div class="card mb-3">
      <div class="row">
        <div class="col-auto">
          <div>
            <img :src="hotel.imgUrl" class="hotel-img" alt="hotel-img" />
          </div>
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
        <div class="col-md-auto my-3 mx-3 flex-column">
          <div class="center-text d-flex justify-content-start">
            <h6 class="d-flex">{{ hotel.feedback }}</h6>
            <span class="badge text-bg-danger fs-5 py-3">{{
              hotel.scores
            }}</span>
          </div>
          <br />
          <br />

          <div class=" ">
            <h5 class="py-3">
              {{
                "NT$" +
                hotel.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }}<span class="fs-6 fw-light px-2">起</span>
            </h5>
          </div>
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
  min-width: 430px;
  height: 200px;
  object-fit: cover;
}

.hotel-img:hover {
  cursor: pointer;
}

.padding-right {
  padding-right: 3px;
}

.center-text {
  display: flex;
  justify-content: center;
  align-items: center;
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
</style>
