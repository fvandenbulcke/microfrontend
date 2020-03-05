<template>
  <div class="is-flex">
    <div class="container card">
      <header class="card-header">
        <p class="card-header-title">
          <span class="panel-icon">
            <i class="fas fa-id-card has-text-link" aria-hidden="true"></i>
          </span>
          Cards
        </p>
        <a href="#" class="card-header-icon" aria-label="more options">
          <span class="icon">
            <i class="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </a>
      </header>
      <div class="card-content">
        <div class="content">
          <ul type="1">
            <li><span>id : </span><span style="font-weight: bold;">{{ loyaltyAccount.id }}</span></li>
            <li><span>bu code : </span><span style="font-weight: bold;">{{ loyaltyAccount.buId }}</span></li>
            <li><span>status : </span><span style="font-weight: bold;">{{ loyaltyAccount.status }}</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex';

export default {
  name:"FirstView",
  data(){
    return {
      loyaltyAccount: {}
    }
  },
  /* computed: {
    ...mapGetters(['loyaltyAccount']),
  }, */
}
</script>
