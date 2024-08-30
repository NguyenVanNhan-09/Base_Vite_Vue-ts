<template>
   <div>
      <div class="kehoach_dedang">
         <h1 class="text-2xl font-bold py-5">
            Lên kế hoạch dễ dàng và nhanh chóng
         </h1>
         <p>Khám phá các điểm đến hàng đầu theo cách bạn thích ở Việt Nam</p>
         <ul class="flex flex-nowrap gap-4 p-4">
            <li
               class="flex items-center justify-center py-4 border hover:bg-slate-100 rounded-full p-4"
            >
               <a href=""
                  ><i class="fa-solid fa-umbrella-beach"></i> Bãi biển</a
               >
            </li>
            <li
               class="flex items-center justify-center py-4 hover:bg-slate-100 rounded-full p-4"
            >
               <a href=""><i class="fa-solid fa-bicycle"></i> Thiên nhiên</a>
            </li>
            <li
               class="flex items-center justify-center py-4 hover:bg-slate-100 rounded-full p-4"
            >
               <a href=""><i class="fa-solid fa-city"></i> Thành phố</a>
            </li>
            <li
               class="flex items-center justify-center py-4 hover:bg-slate-100 rounded-full p-4"
            >
               <a href=""><i class="fa-regular fa-heart"></i> Lãng mạn</a>
            </li>
            <li
               class="flex items-center justify-center py-4 hover:bg-slate-100 rounded-full p-4"
            >
               <a href=""><i class="fa-solid fa-tree"></i> Thư giãn</a>
            </li>
         </ul>
         <div class="carousel">
            <div id="carousel-4-inner-6" class="carousel-inner">
               <div class="carousel-item" style="flex: 0 0 16.6667%">
                  <div class="bg-white rounded-md">
                     <a href="">
                        <img
                           class="w-full h-32 object-cover rounded-md"
                           src="../assets/images/hcm.jpg"
                           alt="Card 1"
                        />
                        <h2 class="mt-2 text-lg font-bold">TP. Hồ Chí Minh</h2>
                        <p class="text-gray-600 text-sm">Cách đây 2.398km</p>
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
                        <p class="text-gray-600 text-sm">Cách đây 1.890km</p>
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
                        <p class="text-gray-600 text-sm">Cách đây 1.982km</p>
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
                        <p class="text-gray-600 text-sm">Cách đây 2km</p>
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
                        <p class="text-gray-600 text-sm">Cách đây 1.890km</p>
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
                        <p class="text-gray-600 text-sm">Cách đây 1.290km</p>
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
                        <p class="text-gray-600 text-sm">Cách đây 1.920km</p>
                     </a>
                  </div>
               </div>

               <!-- Add more carousel items as needed -->
            </div>
            <button
               id="prev4-6"
               class="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white text-black shadow-md rounded-full px-4 py-2"
            >
               <i class="fa-solid fa-angle-left"></i>
            </button>
            <button
               id="next4-6"
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
   const carouselInner = document.getElementById("carousel-4-inner-6");
   const prevButton = document.getElementById("prev4-6"); // Lưu ý: ID này trùng với carousel cũ. Bạn có thể đổi ID thành một cái mới như 'prev-6'.
   const nextButton = document.getElementById("next4-6"); // Lưu ý: ID này trùng với carousel cũ. Bạn có thể đổi ID thành một cái mới như 'next-6'.
   const items = Array.from(carouselInner.children);
   const itemCount = items.length;
   const itemWidth = items[0].offsetWidth; // Lấy chiều rộng của một item
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

   // Cập nhật trạng thái nút khi tải trang
   updateCarousel();
});
</script>

<style lang="scss" scoped></style>
