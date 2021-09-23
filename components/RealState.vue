<template>
  <div class="rounded-lg overflow-hidden w-full">
    <div class="flex h-48 relative">
      <img
        src="https://lh-sobreplanos-staging.imgix.net/uploads/real_estate_attachment/picture/1451171/hacienda_niquia_apartamentos_en_venta_de_2_3_hab_gallery_e4dd46fae78e09fb034c.jpg"
        alt=""
        class="rounded-lg w-1/2 object-cover absolute h-full left-1/2"
      />
      <div
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
        <span>+16</span>
      </div>
      <img
        src="https://lh-sobreplanos-staging.imgix.net/uploads/real_estate_attachment/picture/29922/proyectos_gestor_5182c2e18313c4bda57fd07c4cc9ee62-41.jpg"
        alt=""
        class="rounded-lg w-1/2 object-cover absolute h-full left-1/4 border border-white"
      />
      <img
        src="https://lh-sobreplanos-staging.imgix.net/uploads/real_estate_attachment/picture/29919/proyectos_gestor_84e03a2f8c3667cc2db348a43060a787-45.jpg"
        alt=""
        class="rounded-lg w-1/2 object-cover absolute h-full border border-white"
      />
    </div>
    <article>
      <h3 class="text-lg text-green-900 font-semibold mt-5 mb-3">
        {{ realState.name }}
      </h3>
      <p class="text-gray-500 text-sm">
        {{ realState.realStatesByCategory.length }} propiedades guardadas
      </p>
    </article>
  </div>
</template>

<script>
export default {
  name: "RealState",
  props: ["realState"],
};
</script>