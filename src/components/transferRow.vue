<template>
  <div class="transfer-row" :class="[transfer.state.toLowerCase().trim()]">
    <div class="transfer-row__main">
      <div class="left">
        <div class="amount">€{{ transfer.amount }}</div>
        <div class="date">
          <div class="date__description">Date</div>
          <div class="date__date">
            {{ transfer.recordDate }}
          </div>
        </div>
      </div>
      <div class="right">
        <div class="holders">
          <div class="holders__icon">
            <div class="circle"></div>
            <div class="line"></div>
            <div class="circle"></div>
          </div>
          <div class="holders__holders">
            <div class="from">{{ transfer.fromSecurityHolder }}</div>
            <div class="to">
              {{ transfer.toSecurityHolder.fullName }}
            </div>
          </div>
        </div>
        <div class="info">
          <div class="info__item">
            <div class="info__description">State</div>
            <div class="info__info">
              {{ transfer.state.toLowerCase().trim() }}
            </div>
          </div>
          <div class="info__item">
            <div class="info__description">Position</div>
            <div class="info__info">
              {{ transfer.positionWithinDay }}
            </div>
          </div>
          <div class="info__item">
            <div class="info__description">S. Class</div>
            <div class="info__info">
              {{ transfer.securityClass.name.toLowerCase().trim() }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="transfer.forgottenProperty" class="alert">
      {{ transfer.forgottenProperty }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { Transaction } from "@/types/types";

@Component({
  name: "TransferRow",
})
export default class TransferRow extends Vue {
  @Prop({ required: true }) transfer!: Transaction;
}
</script>

<style lang="scss">
.transfer-row {
  border-left: 0.5rem solid #777;
  margin: 1rem auto;
  max-width: 400px;
  text-align: left;
  background-color: #fff;
  color: #777;
  border-radius: 0.5rem;
  overflow: hidden;

  &__main {
    padding: 1rem;
    display: flex;
  }
}

.left,
.right {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.left {
  border-right: 1px solid #f4f4f4;
  padding: 0.4rem 0.4rem 0.4rem 0;
}

.right {
  flex-grow: 1;
  padding: 0.5rem 0.5rem 0 1.25rem;
}

.amount {
  font-size: 1.25rem;
  font-weight: 500;
}

.date {
  &__description {
    font-size: 0.75rem;
    text-transform: uppercase;
    color: #c1c1c1;
  }

  &__date {
    font-size: 0.75rem;
    font-weight: 500;
  }
}

.holders {
  margin-bottom: 2rem;
  display: flex;

  &__icon {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    top: -0.1rem;

    .circle {
      height: 0.5rem;
      width: 0.5rem;
      border: 2px solid #777;
      border-radius: 50%;
    }

    .line {
      height: 1.5rem;
      border-left: 2px dashed #777;
      margin: 0.2rem 0;
    }
  }

  &__holders {
    flex-grow: 1;
    padding-left: 0.75rem;

    .from,
    .to {
      font-size: 0.9rem;
      font-weight: 500;
      line-height: 2rem;
    }

    .from {
      border-bottom: 1px solid #f4f4f4;
    }
  }
}

.info {
  display: flex;
  justify-content: space-between;

  &__description {
    font-size: 0.75rem;
    text-transform: uppercase;
    color: #c1c1c1;
  }

  &__info {
    color: #acacac;
    font-weight: 700;
  }
}

.alert {
  background-color: #f8d7da;
  color: #721c24;
  padding: 0.25rem;
  text-align: center;
  font-weight: 700;
}

// colors by class

$color-new: #be64c8;
$color-published: #4ea43d;
$color-modified: #f5a915;
$color-old: #ee534e;

.transfer-row {
  &.new {
    border-color: $color-new;

    .holders {
      &__icon {
        .circle,
        .line {
          border-color: $color-new;
        }
      }
    }
  }

  &.published {
    border-color: $color-published;

    .holders {
      &__icon {
        .circle,
        .line {
          border-color: $color-published;
        }
      }
    }
  }

  &.modified {
    border-color: $color-modified;

    .holders {
      &__icon {
        .circle,
        .line {
          border-color: $color-modified;
        }
      }
    }
  }

  &.old {
    border-color: $color-old;

    .holders {
      &__icon {
        .circle,
        .line {
          border-color: $color-old;
        }
      }
    }
  }
}
</style>
