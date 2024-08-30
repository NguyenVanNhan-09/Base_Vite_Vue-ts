<template>
   <div>
      <main>
         <div class="max-w-screen-lg mx-auto my-10">
            <!-- nav search -->
            <nav aria-label="Breadcrumb" class="mb-4">
               <ol class="flex items-center gap-1 text-sm text-gray-600">
                  <li>
                     <a href="#" class="block transition hover:text-gray-700">
                        <span class="sr-only"> Home </span>

                        <i class="fa-solid fa-house"></i>
                     </a>
                  </li>

                  <li class="rtl:rotate-180">
                     <i class="fa-solid fa-angle-right"></i>
                  </li>

                  <li>
                     <a href="#" class="block transition hover:text-gray-700">
                        Shirts
                     </a>
                  </li>

                  <li class="rtl:rotate-180">
                     <i class="fa-solid fa-angle-right"></i>
                  </li>

                  <li>
                     <a href="#" class="block transition hover:text-gray-700">
                        Plain Tee
                     </a>
                  </li>
               </ol>
            </nav>

            <div class="grid grid-cols-1 gap-4 lg:grid-cols-7">
               <!-- sidebar sreach -->
               <SideBarSearch />
               <!-- list item -->
               <ListItemSearch />
            </div>
         </div>
      </main>
   </div>
</template>

<script setup>
import SideBarSearch from "../components/SideBarSearch.vue";
import ListItemSearch from "../components/ListItemSearch.vue";
</script>

<style lang="scss" scoped></style>
