<template>
  <div class="rounded-lg overflow-hidden w-full">
    <div class="flex h-48 relative">
      <img
        v-for="(image, i) in imagesList"
        :key="image.id"
        :src="image.attributes.gallery_urls[0]"
        alt=""
        class="rounded-lg object-cover absolute h-full"
        :class="{
          'w-full': imagesLength === 1,
          'w-1/2': imagesLength > 1,
          'w-3/4': imagesLength === 2 && i === 0,
          'left-1/2': imagesLength > 1 && i === 0,
          'left-1/4':
            (imagesLength > 2 && i === 1) || (imagesLength === 2 && i === 0),
          'border border-white':
            (imagesLength > 2 && (i === 1 || i === 2)) ||
            (imagesLength === 2 && i === 1),
        }"
      />
      <div
        v-show="imagesLength > 2"
        class="
          rounded-lg
          w-1/4
          text-center
          flex
          items-center
          justify-center
          text-white
          absolute
          h-full
          left-3/4
          bg-green-900 bg-opacity-70
          text-lg
          font-semibold
        "
      >
        <span>+{{imagesLength - 2}}</span>
      </div>
    </div>
    <article>
      <h3 class="text-lg text-green-900 font-semibold mt-5 mb-3">
        {{ name }}
      </h3>
      <p class="text-gray-500 text-sm">
        {{ realStatesByCategory.length }} propiedades guardadas
      </p>
    </article>
  </div>
</template>

<script>
export default {
  name: "RealState",
  props: ["name", "realStatesByCategory", "id"],
  data() {
    return {
      imagesLength: 0,
      imagesList: 0,
    };
  },
  created() {
    this.imagesList = this.realStatesByCategory.slice(0, 3);
    this.imagesLength = this.realStatesByCategory.length;
  },
};
</script>