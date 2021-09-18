<template>
  <v-list-item
    active-class="primary white--text"
    link
    :to="item.to"
    class="py-1"
  >
    <v-list-item-icon>
      <v-icon v-text="item.icon"></v-icon>
    </v-list-item-icon>
    <v-list-item-content v-if="item.title">
      <v-list-item-title v-text="item.title" />
    </v-list-item-content>
  </v-list-item>
</template>

<script>
export default {
  name: "DefaultListItem",
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    title() {
      const matches = this.item.title.match(/\b(\w)/g);
      return matches.join("");
    },
  },
  methods: {},
};
</script>
