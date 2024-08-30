<template>
   <div>
      <div class="search-categories-area">
         <h1 class="text-2xl font-bold py-5">Tìm theo loại chỗ nghỉ</h1>
         <!-- carousel 4item -->
         <div class="carousel mb-8">
            <div id="carousel-2-inner-4" class="carousel-inner">
               <div class="carousel-item" style="flex: 0 0 25%">
                  <div class="bg-white rounded-md">
                     <img
                        class="w-full h-48 object-cover rounded-md"
                        src="../assets/images/anh1.jpeg"
                        alt="Card 1"
                     />
                     <h2 class="mt-2 text-lg font-bold">Khách sạn</h2>
                  </div>
               </div>
               <div class="carousel-item" style="flex: 0 0 25%">
                  <div class="bg-white rounded-md">
                     <img
                        class="w-full h-48 object-cover rounded-md"
                        src="../assets/images/anh2.jpeg"
                        alt="Card 1"
                     />
                     <h2 class="mt-2 text-lg font-bold">Các căn hộ</h2>
                  </div>
               </div>
               <div class="carousel-item" style="flex: 0 0 25%">
                  <div class="bg-white rounded-md">
                     <img
                        class="w-full h-48 object-cover rounded-md"
                        src="../assets/images/anh3.jpeg"
                        alt="Card 1"
                     />
                     <h2 class="mt-2 text-lg font-bold">Các resort</h2>
                  </div>
               </div>
               <div class="carousel-item" style="flex: 0 0 25%">
                  <div class="bg-white rounded-md">
                     <img
                        class="w-full h-48 object-cover rounded-md"
                        src="../assets/images/anh4.jpeg"
                        alt="Card 1"
                     />
                     <h2 class="mt-2 text-lg font-bold">Các biệt thự</h2>
                  </div>
               </div>
               <div class="carousel-item" style="flex: 0 0 25%">
                  <div class="bg-white rounded-md">
                     <img
                        class="w-full h-48 object-cover rounded-md"
                        src="../assets/images/anh5.jpeg"
                        alt="Card 1"
                     />
                     <h2 class="mt-2 text-lg font-bold">Cabin nghỉ dưỡng</h2>
                  </div>
               </div>
               <div class="carousel-item" style="flex: 0 0 25%">
                  <div class="bg-white rounded-md">
                     <img
                        class="w-full h-48 object-cover rounded-md"
                        src="../assets/images/anh1.jpeg"
                        alt="Card 1"
                     />
                     <h2 class="mt-2 text-lg font-bold">Khách sạn</h2>
                  </div>
               </div>
               <div class="carousel-item" style="flex: 0 0 25%">
                  <div class="bg-white rounded-md">
                     <img
                        class="w-full h-48 object-cover rounded-md"
                        src="../assets/images/anh7.jpeg"
                        alt="Card 1"
                     />
                     <h2 class="mt-2 text-lg font-bold">Cottage</h2>
                  </div>
               </div>

               <!-- Add more carousel items as needed -->
            </div>
            <button
               id="prev2-4"
               class="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white text-black shadow-md rounded-full px-4 py-2"
            >
               <i class="fa-solid fa-angle-left"></i>
            </button>
            <button
               id="next2-4"
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
   const carouselInner = document.getElementById("carousel-2-inner-4");
   const prevButton = document.getElementById("prev2-4");
   const nextButton = document.getElementById("next2-4");
   const items = Array.from(carouselInner.children);
   const itemCount = items.length;
   const itemWidth = items[0].offsetWidth; // Lấy chiều rộng của một item
   const visibleItemsCount = 4; // Số lượng item hiển thị cùng lúc
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

   // Cập nhật trạng thái nút khi tải trang
   updateCarousel();
});
</script>

<style lang="scss" scoped></style>
