<template>
  <div class="is-flex">
    <div class="container card">

      <div class="card-content">
        <div class="content">
          1298
        </div>
        <progress class="progress is-link" value="1298" max="1500"
          @mouseover="logMessageOn()"
          @mouseleave="logMessageOut()"
        />
      </div>
      <article class="panel is-primary">
        <a class="panel-block is-active">
          <span class="panel-icon">
            <i class="fas fa-book" aria-hidden="true"></i>
          </span>
          REGULARIZATION
        </a>
      </article>
      
    </div>
  </div>
</template>

<script>
export default {
  name:"Points",
  props: {
    token: {
      type: String,
      required: false,
      default: "1234"
    },
    customer: {
      type: String,
      required: false,
      default: "1234"
    }
  },
  methods: {
    logMessageOn() {
      console.log('is hover')
    },
    logMessageOut() {
      console.log('is no more hover')
    }
  }
}
</script>