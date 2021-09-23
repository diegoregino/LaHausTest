<template>
  <nav
    class="
      flex
      justify-start
      md:justify-between
      items-center
      border-b
      px-6
      py-4
      border-gray
    "
  >
    <div class="mr-2.5 md:hidden relative">
      <img src="@/assets/hamburger-icon.svg" alt="Menu" title="Menu" />
      <NotificationIcon class="absolute top-0 right-0"></NotificationIcon>
    </div>
    <div>
      <img
        src="@/assets/la-haus-logo.svg"
        alt="La Haus logo"
        title="La Haus logo"
      />
    </div>
    <ul class="hidden md:flex text-lh">
      <li class="px-6"><a href="">Cundinamarca</a></li>
      <li class="px-6"><a href="">Antioquia</a></li>
      <li class="px-6"><a href="">Recursos</a></li>
      <li class="px-6 flex items-center relative font-medium">
        <a href="">Mi Perfil</a>
        <img
          src="@/assets/arrow-down.svg"
          alt="Arrow"
          title="Arrow"
          class="ml-2.5"
        />
        <NotificationIcon class="absolute top-0 right-3"></NotificationIcon>
      </li>
    </ul>
  </nav>
</template>