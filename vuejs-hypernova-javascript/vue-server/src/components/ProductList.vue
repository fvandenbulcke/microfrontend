<template>
  <div class="columns">
		<div class="column">
		  <div class="card">
        <div class="card-content">
          <div class="content">
            1298
          </div>
          <progress class="progress is-link" value="1298" max="1500"
            @mouseover="logMessage()"
            @mouseleave="logMessage()"
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
      <div class="card">
        <header class="card-header">
          <p class="card-header-title">
            Advantages
          </p>
          <a href="#" class="card-header-icon" aria-label="more options">
            <span class="icon">
              <i class="fas fa-angle-down" aria-hidden="true"></i>
            </span>
          </a>
        </header>
        <div class="card-content">
          <div class="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
          </div>
        </div>
        <article class="panel is-primary">
          <a class="panel-block is-active">
            <span class="panel-icon">
            <i class="fas fa-book" aria-hidden="true"></i>
            </span>
            SEE ALL HISTORY
          </a>
        </article>
      </div>
		</div>
    <div class="column">
      <div class="card">
        <header class="card-header">
          <p class="card-header-title">
            Component
          </p>
          <a href="#" class="card-header-icon" aria-label="more options">
            <span class="icon">
              <i class="fas fa-angle-down" aria-hidden="true"></i>
            </span>
          </a>
        </header>
        <div class="card-content">
          <div class="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
            <a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
            <br/>
            <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
          </div>
        </div>
        <article class="panel is-primary">
          <a class="panel-block is-active">
            <span class="panel-icon">
            <i class="fas fa-book" aria-hidden="true"></i>
            </span>
            bulma
          </a>
          <a class="panel-block">
            <span class="panel-icon">
            <i class="fas fa-book" aria-hidden="true"></i>
            </span>
            marksheet
          </a>
          <a class="panel-block">
            <span class="panel-icon">
            <i class="fas fa-book" aria-hidden="true"></i>
            </span>
            minireset.css
          </a>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import loyaltyService from '../services/loyaltyService';

export default {
  props: {
    token: {
      type: String,
      required: true
    },
    customer: {
      type: String,
      required: true
    }
  },
  data(){
    return {
      account: {}
    }
  },
  beforeMount() {
    loyaltyService.getLoyaltyAccount({ customerNumber: this.customer, token: this.token })
      .then((response) => this.account = response);
  },
  methods: {
    addItem() {
      const event = new CustomEvent('addProductItem', { detail: 'item' });
      document.dispatchEvent(event)
    },
    logMessage() {
      console.log('is hover')
    }
  }
}
</script>
