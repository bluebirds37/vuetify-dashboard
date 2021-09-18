<template>
  <v-list-group :prepend-icon="item.icon">
    <template v-slot:activator>
      <v-list-item-content v-if="item.title">
        <v-list-item-title v-text="item.title" />
      </v-list-item-content>
    </template>
    <template v-for="(child, i) in item.items">
      <default-list-group
        v-if="child.items"
        :key="`sub-group-${i}`"
        :item="child"
      />
      <default-list-item
        v-if="!child.items"
        :key="`child-${i}`"
        :item="child"
      />
    </template>
  </v-list-group>
</template>

<script>
//import { get } from "vuex-pathify";

export default {
  name: "DefaultListGroup",
  components: {
    DefaultListItem: () => import("@/components/ListItem"),
  },
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>
