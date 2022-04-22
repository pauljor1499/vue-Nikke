<template>
  <body>
    <div class="container">
      <div class="container-head">
        <h1>Welcome to your Dashboard!</h1>
      </div>
      <div class="card-content">
        <div class="cards">
          <div class="card">
            <n-card
              title="Product List"
              :segmented="{
                content: true,
                footer: 'soft',
              }"
              hoverable
            >
              <template #header-extra>View</template>
              Card Content
            </n-card>
          </div>

          <div class="card">
            <n-card
              title="User List"
              :segmented="{
                content: true,
                footer: 'soft',
              }"
              hoverable
            >
              <template #header-extra>View</template>
              Card Content
            </n-card>
          </div>

          <div class="card">
            <n-card
              title="Notifications"
              :segmented="{
                content: true,
                footer: 'soft',
              }"
              hoverable
            >
              <template #header-extra>View</template>
              Card Content
            </n-card>
          </div>

          <div class="card">
            <n-card class="calendar" hoverable>
              <div class="date">21</div>
              <div>
                <div class="month">December</div>
                <div class="year">2018</div>
                <div class="day">Sunday</div>
              </div>
            </n-card>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>
<script>
export default {
  name: "AdminDashboard",
  components: {},
  props: { sidebar_status: Boolean },
  setup() {
    return {};
  },
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  list-style: none;
}

.container {
  width: 100%;
}

.container .container-head {
  padding: 80px 20px 120px 0px;
  background-color: gray;
  overflow: hidden;
}

.container .container-head h1 {
  color: white;
  margin-left: 5%;
  float: left;
}

.container .card-content {
  display: flex;
  align-items: center;
  justify-content: center;
}

.cards {
  /* display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 20px;
  padding: 20px; */

  display: flex;
  flex-wrap: wrap;
  grid-gap: 10px;
  margin-top: -50px;
}

.card {
  /* width: 100%;
  height: 200px;
  text-align: left;
  margin-top: -80px;
  cursor: pointer; */

  width: 250px;
}

.card .calendar {
  display: flex;
}

.card .calendar .date {
  float: left;
  font-weight: bold;
  font-size: 55px;
  margin: 0px 20px 0px;
}

.card .calendar .month {
  font-weight: bold;
  font-size: 16px;
  margin: 10px 0px 0px;
}
</style>
