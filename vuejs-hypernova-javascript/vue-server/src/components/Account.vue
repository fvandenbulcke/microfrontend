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
            <li><span>id : </span><span style="font-weight: bold;">{{ account.id }}</span></li>
            <li><span>bu code : </span><span style="font-weight: bold;">{{ account.buId }}</span></li>
            <li><span>status : </span><span style="font-weight: bold;">{{ account.status }}</span></li>
          </ul>
        </div>
      </div>
      <article class="panel is-primary">
        <a class="panel-block is-active">
          HISTORY
          <span class="panel-icon has-text-right">
            <i class="fas fa-id-card has-text-link" aria-hidden="true"></i>
          </span>
        </a>
        <a class="panel-block is-active">
          CHANGE SUPPORT
        </a>
        <a class="panel-block is-active">
          RENEWAL
        </a>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      account: {
        id: "1236547899",
        buId: 26,
        status: "VALID"
      }
    }
  },
}
</script>
