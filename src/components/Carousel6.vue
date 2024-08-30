<template>
   <div>
      <div class="luutru">
         <h1 class="text-2xl font-bold py-5">
            Lưu trú tại các chỗ nghỉ độc đáo hàng đầu
         </h1>
         <p>
            Từ biệt thự, lâu đài cho đến nhà thuyền, igloo, chúng tôi đều có hết
         </p>
         <!-- carousel 4item -->
         <div class="carousel mb-8">
            <div id="carousel-6-inner-4" class="carousel-inner">
               <div class="carousel-item" style="flex: 0 0 25%">
                  <div class="bg-white rounded-md shadow-md">
                     <img
                        class="w-full h-48 object-cover rounded-md"
                        src="../assets/images/rosamay.jpg"
                        alt="Card 1"
                     />
                     <div class="p-2">
                        <h4 class="mt-2 text-base font-bold">
                           RosaMAY Hotel Thủ Khoa Huân
                        </h4>
                        <p class="text-xs mt-2">TP. Hồ Chí Minh, Việt Nam</p>
                        <div class="flex flex-row mt-2 mb-5">
                           <div
                              class="rate bg-blue-900 w-8 rounded-md text-center text-white"
                           >
                              9.6
                           </div>
                           <div class="ml-2 text-xs pt-1">
                              <p>Tuyệt vời - 32 đánh giá</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="carousel-item" style="flex: 0 0 25%">
                  <div class="bg-white rounded-md shadow-md">
                     <img
                        class="w-full h-48 object-cover rounded-md"
                        src="../assets/images/rosamay.jpg"
                        alt="Card 1"
                     />
                     <div class="p-2">
                        <h4 class="mt-2 text-base font-bold">
                           RosaMAY Hotel Thủ Khoa Huân
                        </h4>
                        <p class="text-xs mt-2">TP. Hồ Chí Minh, Việt Nam</p>
                        <div class="flex flex-row mt-2 mb-5">
                           <div
                              class="rate bg-blue-900 w-8 rounded-md text-center text-white"
                           >
                              9.6
                           </div>
                           <div class="ml-2 text-xs pt-1">
                              <p>Tuyệt vời - 32 đánh giá</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="carousel-item" style="flex: 0 0 25%">
                  <div class="bg-white rounded-md shadow-md">
                     <img
                        class="w-full h-48 object-cover rounded-md"
                        src="../assets/images/rosamay.jpg"
                        alt="Card 1"
                     />
                     <div class="p-2">
                        <h4 class="mt-2 text-base font-bold">
                           RosaMAY Hotel Thủ Khoa Huân
                        </h4>
                        <p class="text-xs mt-2">TP. Hồ Chí Minh, Việt Nam</p>
                        <div class="flex flex-row mt-2 mb-5">
                           <div
                              class="rate bg-blue-900 w-8 rounded-md text-center text-white"
                           >
                              9.6
                           </div>
                           <div class="ml-2 text-xs pt-1">
                              <p>Tuyệt sắc - 32 đánh giá</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="carousel-item" style="flex: 0 0 25%">
                  <div class="bg-white rounded-md shadow-md">
                     <img
                        class="w-full h-48 object-cover rounded-md"
                        src="../assets/images/rosamay.jpg"
                        alt="Card 1"
                     />
                     <div class="p-2">
                        <h4 class="mt-2 text-base font-bold">
                           RosaMAY Hotel Thủ Khoa Huân
                        </h4>
                        <p class="text-xs mt-2">TP. Hồ Chí Minh, Việt Nam</p>
                        <div class="flex flex-row mt-2 mb-5">
                           <div
                              class="rate bg-blue-900 w-8 rounded-md text-center text-white"
                           >
                              9.6
                           </div>
                           <div class="ml-2 text-xs pt-1">
                              <p>Tuyệt vời - 32 đánh giá</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="carousel-item" style="flex: 0 0 25%">
                  <div class="bg-white rounded-md shadow-md">
                     <img
                        class="w-full h-48 object-cover rounded-md"
                        src="../assets/images/rosamay.jpg"
                        alt="Card 1"
                     />
                     <div class="p-2">
                        <h4 class="mt-2 text-base font-bold">
                           RosaMAY Hotel Thủ Khoa Huân
                        </h4>
                        <p class="text-xs mt-2">TP. Hồ Chí Minh, Việt Nam</p>
                        <div class="flex flex-row mt-2 mb-5">
                           <div
                              class="rate bg-blue-900 w-8 rounded-md text-center text-white"
                           >
                              9.6
                           </div>
                           <div class="ml-2 text-xs pt-1">
                              <p>Tuyệt hảo - 32 đánh giá</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               <!-- Add more carousel items as needed -->
            </div>
            <button
               id="prev6-4"
               class="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white text-black shadow-md rounded-full px-4 py-2"
            >
               <i class="fa-solid fa-angle-left"></i>
            </button>
            <button
               id="next6-4"
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
   const carouselInner = document.getElementById("carousel-6-inner-4");
   const prevButton = document.getElementById("prev6-4");
   const nextButton = document.getElementById("next6-4");
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
