<template>
  <div :class="$style.team">
    <div :class="$style.description">
      <p>{{ teamDescription }}</p>
    </div>

    <div :class="$style.members" v-if="hasMembers">
      <h2>Qualified specialists:</h2>

      <div :class="$style.list">
        <div
          :class="$style.listItem"
          v-for="member in teamMembers"
          :key="member.name"
        >
          <member
            :name="member.name"
            :image-url="member.photo"
            :job-title="member.job_title"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Member from '@/components/partials/Member/Member'

export default {
  name: 'SubRouteTeam',
  components: {
    Member
  },
  props: {
    teamDescription: {
      type: String,
      required: false,
      default: ''
    },
    teamMembers: {
      type: Array || null,
      required: false,
      default: null
    }
  },
  computed: {
    hasMembers () {
      return this.teamMembers?.length > 0
    }
  }
}
</script>

<style lang="scss" module>
@import "~@/assets/style/variables/varibales.scss";
@import "~@/assets/style/base/typography.scss";
@import "~@/assets/style/utils/grid.scss";

$gap-desktop: $offset-300;
$gap-mobile: $offset-150;

$max-item-width: 162px;

.list {
  @media (min-width: $screen-md-min){
    @include gridContainer($gap-desktop);
    justify-content: flex-start;
  }

  @media (max-width: $screen-md) {
    @include gridContainer($gap-mobile);
    justify-content: flex-start;
  }
}

.listItem {
  @media (min-width: $screen-md-min){
    @include gridItem(3, $gap-desktop);
    max-width: $max-item-width;
  }

  @media (max-width: $screen-md) {
    @include gridItem(1, $gap-mobile);
    max-width: none;
  }
}

.description {
  margin-bottom: $offset-400;
}

</style>
