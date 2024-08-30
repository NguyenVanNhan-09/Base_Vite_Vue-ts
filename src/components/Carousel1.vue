<template>
   <div>
      <div class="vietnam-location">
         <h1 class="text-2xl font-bold py-5">Khám phá Việt Nam</h1>
         <p>Các điểm đến phổ biến này có nhiều điều chờ đón bạn</p>
         <div class="carousel">
            <div id="carousel-1-inner-6" class="carousel-inner">
               <div class="carousel-item" style="flex: 0 0 16.6667%">
                  <div class="bg-white rounded-md">
                     <a href="">
                        <img
                           class="w-full h-32 object-cover rounded-md"
                           src="../assets/images/hcm.jpg"
                           alt="Card 1"
                        />
                        <h2 class="mt-2 text-lg font-bold">TP. Hồ Chí Minh</h2>
                        <p class="text-gray-600 text-sm">2.182 chỗ nghỉ</p>
                     </a>
                  </div>
               </div>
               <div class="carousel-item" style="flex: 0 0 16.6667%">
                  <div class="bg-white rounded-md">
                     <a href="">
                        <img
                           class="w-full h-32 object-cover rounded-md"
                           src="../assets/images/dl.jpg"
                           alt="Card 1"
                        />
                        <h2 class="mt-2 text-lg font-bold">Đà Lạt</h2>
                        <p class="text-gray-600 text-sm">3.132 chỗ nghỉ</p>
                     </a>
                  </div>
               </div>
               <div class="carousel-item" style="flex: 0 0 16.6667%">
                  <div class="bg-white rounded-md">
                     <a href="">
                        <img
                           class="w-full h-32 object-cover rounded-md"
                           src="../assets/images/dn.jpg"
                           alt="Card 1"
                        />
                        <h2 class="mt-2 text-lg font-bold">Đà Nẵng</h2>
                        <p class="text-gray-600 text-sm">4.091 chỗ nghỉ</p>
                     </a>
                  </div>
               </div>
               <div class="carousel-item" style="flex: 0 0 16.6667%">
                  <div class="bg-white rounded-md">
                     <a href="">
                        <img
                           class="w-full h-32 object-cover rounded-md"
                           src="../assets/images/hn.jpg"
                           alt="Card 1"
                        />
                        <h2 class="mt-2 text-lg font-bold">Hà Nội</h2>
                        <p class="text-gray-600 text-sm">2.182 chỗ nghỉ</p>
                     </a>
                  </div>
               </div>
               <div class="carousel-item" style="flex: 0 0 16.6667%">
                  <div class="bg-white rounded-md">
                     <a href="">
                        <img
                           class="w-full h-32 object-cover rounded-md"
                           src="../assets/images/hs.jpg"
                           alt="Card 1"
                        />
                        <h2 class="mt-2 text-lg font-bold">Hội An</h2>
                        <p class="text-gray-600 text-sm">2.182 chỗ nghỉ</p>
                     </a>
                  </div>
               </div>
               <div class="carousel-item" style="flex: 0 0 16.6667%">
                  <div class="bg-white rounded-md">
                     <a href="">
                        <img
                           class="w-full h-32 object-cover rounded-md"
                           src="../assets/images/pt.jpg"
                           alt="Card 1"
                        />
                        <h2 class="mt-2 text-lg font-bold">Phan Thiết</h2>
                        <p class="text-gray-600 text-sm">5.190 chỗ nghỉ</p>
                     </a>
                  </div>
               </div>
               <div class="carousel-item" style="flex: 0 0 16.6667%">
                  <div class="bg-white rounded-md">
                     <a href="">
                        <img
                           class="w-full h-32 object-cover rounded-md"
                           src="../assets/images/vt.jpg"
                           alt="Card 1"
                        />
                        <h2 class="mt-2 text-lg font-bold">Vũng Tàu</h2>
                        <p class="text-gray-600 text-sm">2.182 chỗ nghỉ</p>
                     </a>
                  </div>
               </div>

               <!-- Add more carousel items as needed -->
            </div>
            <button
               id="prev1-6"
               class="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white text-black shadow-md rounded-full px-4 py-2"
            >
               <i class="fa-solid fa-angle-left"></i>
            </button>
            <button
               id="next1-6"
               class="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white text-black shadow-md rounded-full px-4 py-2"
            >
               <i class="fa-solid fa-angle-right"></i>
            </button>
         </div>
      </div>
   </div>
</template>

<script setup>
import { onMounted } from "vue";
onMounted(() => {
   const carouselInner = document.getElementById("carousel-1-inner-6");
   const prevButton = document.getElementById("prev1-6");
   const nextButton = document.getElementById("next1-6");
   const items = Array.from(carouselInner.children);
   const itemCount = items.length;
   const itemWidth = items[0].offsetWidth;
   const visibleItemsCount = 6; // Số lượng item hiển thị cùng lúc
   let currentIndex = 0;

   function updateCarousel() {
      const offset = -currentIndex * itemWidth;
      carouselInner.style.transform = `translateX(${offset}px)`;

      // Ẩn/Hiện các nút điều hướng
      prevButton.style.display = currentIndex === 0 ? "none" : "block";
      nextButton.style.display =
         currentIndex >= itemCount - visibleItemsCount ? "none" : "block";
   }

   function showNextItem() {
      if (currentIndex < itemCount - visibleItemsCount) {
         currentIndex++;
         updateCarousel();
      }
   }

   function showPrevItem() {
      if (currentIndex > 0) {
         currentIndex--;
         updateCarousel();
      }
   }

   nextButton.addEventListener("click", showNextItem);
   prevButton.addEventListener("click", showPrevItem);

   updateCarousel();
});
</script>

<style lang="css" scoped></style>
