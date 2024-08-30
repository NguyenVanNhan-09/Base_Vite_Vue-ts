<script setup>
import Carousel1 from '../components/Carousel1.vue';
import Carousel2 from '../components/Carousel2.vue';
import Carousel3 from '../components/Carousel3.vue';
import Carousel4 from '../components/Carousel4.vue';
import Carousel5 from '../components/Carousel5.vue';
import Carousel6 from '../components/Carousel6.vue';
</script>
<template>
    <div class="mt-6">
        <main class="max-w-screen-lg container mx-auto">
            <div class="sale py-5">
                <h1 class="text-2xl font-bold">Ưu đãi</h1>
                <p class="py-4">Khuyến mãi, giảm giá và ưu đãi đặc biệt dành riêng cho bạn</p>
                <div class="sliderAx h-auto">
                    <div id="slider-1" class="container mx-auto">
                        <div
                            class="bg-cover bg-center h-auto text-white py-11 rounded-md object-fill"
                            style="
                                background-image: url(https://r-xx.bstatic.com/xdata/images/xphoto/714x300/350960127.jpeg?k=e2732d40882766c8edd0001d7cca566de1d43af2d117b964f2e3ccf579d9a498&o=);
                            "
                        >
                            <div class="md:w-1/2 pl-5">
                                <p class="font-bold text-lg uppercase pb-2">Đặt liền tay bắt ngay ưu đãi</p>
                                <p class="text-sm pb-5">Tiết kiệm từ 15% trở lên khi đặt và lưu trú trước 1/10/2024</p>
                                <a
                                    href="#"
                                    class="w-full p-2 text-sm bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
                                    >Tìm Ưu Đãi Mùa Du Lịch</a
                                >
                            </div>
                        </div>
                        <!-- container -->
                    </div>
                </div>
            </div>
            <div class="trend-location">
                <h1 class="text-2xl font-bold py-5">Điểm đến đang thịnh hành</h1>
                <p>Các lựa chọn phổ biến nhất cho du khách từ Việt Nam</p>
                <div class="flex flex-row gap-4">
                    <div
                        class="w-full h-64 z-0 relative rounded-md overflow-hidden cursor-pointer border hover:border-orange-500"
                    >
                        <a href="#" class="block">
                            <img
                                src="../assets/images/hcm.jpg"
                                alt="TP. Hồ Chí Minh"
                                class="w-full h-64 object-cover"
                            />
                            <div class="absolute top-0 left-0 items-center p-5 text-white flex space-x-3">
                                <span class="font-bold text-lg uppercase">TP. Hồ Chí Minh</span>
                                <img src="../assets/images/cờ.png" alt="" class="w-6 shadow-lg" />
                            </div>
                        </a>
                    </div>
                    <div
                        class="w-full h-64 relative rounded-md overflow-hidden cursor-pointer border hover:border-orange-500"
                    >
                        <a href="" class="block">
                            <img src="../assets/images/vt.jpg" alt="Vũng Tàu" class="w-full h-64 object-cover" />
                            <div class="absolute top-0 left-0 items-center p-5 text-white flex space-x-3">
                                <span class="font-bold text-lg uppercase">Vũng Tàu</span>
                                <img src="../assets/images/cờ.png" alt="" class="w-6 shadow-lg" />
                            </div>
                        </a>
                    </div>
                </div>
                <div class="location flex flex-row gap-4 py-5">
                    <div
                        class="w-full relative rounded-md overflow-hidden cursor-pointer border hover:border-orange-500"
                    >
                        <a href="" class="block">
                            <img src="../assets/images/dn.jpg" alt="Đà Nẵng" class="w-full h-auto object-cover" />
                            <div class="absolute top-0 left-0 items-center p-5 text-white flex space-x-3">
                                <span class="font-bold text-lg uppercase">Đà Nẵng</span>
                                <img src="../assets/images/cờ.png" alt="" class="w-6 shadow-lg" />
                            </div>
                        </a>
                    </div>
                    <div
                        class="w-full relative rounded-md overflow-hidden cursor-pointer border hover:border-orange-500"
                    >
                        <a href="" class="block">
                            <img src="../assets/images/dl.jpg" alt="Đà Lạt" class="w-full h-auto object-cover" />
                            <div class="absolute top-0 left-0 items-center p-5 text-white flex space-x-3">
                                bắn ngu vãi cả lồn
                                <span class="font-bold text-lg uppercase">Đà Lạt</span>
                                <img src="../assets/images/cờ.png" alt="" class="w-6 shadow-lg" />
                            </div>
                        </a>
                    </div>
                    <div
                        class="w-full relative rounded-md overflow-hidden cursor-pointer border hover:border-orange-500"
                    >
                        <a href="" class="block">
                            <img src="../assets/images/hn.jpg" alt="Hà Nội" class="w-full h-auto object-cover" />
                            <div class="absolute top-0 left-0 items-center p-5 text-white flex space-x-3">
                                <span class="font-bold text-lg uppercase">Hà Nội</span>
                                <img src="../assets/images/cờ.png" alt="" class="w-6 shadow-lg" />
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            <!-- Carousel 1 Khám phá Việt Nam-->
            <Carousel1 />

            <!-- Carousel 2 Tìm theo loại chỗ nghỉ-->
            <Carousel2 />

            <!-- Carousel 3 Ưu đãi cho cuối tuần-->
            <Carousel3 />

            <!-- Carousel 4 Lên kế hoạch dễ dàng và nhanh chóng-->
            <Carousel4 />

            <!-- banner 3 items -->
            <div class="flex flex-row my-3">
                <div class="flex flex-row border border-stone-200 p-4 m-2 rounded-lg">
                    <img class="size-14" src="../assets/images/FreeCancellation.png" alt="" />
                    <div class="ml-3">
                        <h2 class="text-base font-bold">Đặt bây giờ, thanh toán tại chỗ nghỉ</h2>
                        <p class="text-sm mt-2">MIỄN PHÍ hủy cho hầu hết các phòng</p>
                    </div>
                </div>
                <div class="flex flex-row border border-stone-200 p-4 m-2 rounded-lg">
                    <img class="size-14" src="../assets/images/TripsGlobe.png" alt="" />
                    <div class="ml-3">
                        <h2 class="text-base font-bold">Hơn 2 triệu chỗ nghỉ toàn cầu</h2>
                        <p class="text-sm mt-2">Khách sạn, guest house, căn hộ và nhiều loại chỗ ở khác…</p>
                    </div>
                </div>
                <div class="flex flex-row border border-stone-200 p-4 m-2 rounded-lg">
                    <img class="size-14" src="../assets/images/CustomerSupport.png" alt="" />
                    <div class="ml-3">
                        <h2 class="text-base font-bold">Dịch vụ khách hàng đáng tin cậy, hoạt động 24/7</h2>
                        <p class="text-sm mt-2">Chúng tôi luôn sẵn sàng giúp đỡ bạn</p>
                    </div>
                </div>
            </div>

            <!-- Carousel 5 Nhà ở mà khách yêu thích -->
            <Carousel5 />

            <!-- Carousel 6 Lưu trú tại các chỗ nghỉ độc đáo hàng đầu-->
            <Carousel6 />

            <!-- banner: Nhận giảm giá tức thì -->
            <div class="flex flex-row border rounded-md p-4">
                <img class="size-40" src="../assets/images/GlobeGeniusBadge.png" alt="" />
                <div class="ml-5">
                    <h1 class="text-xl font-bold">Nhận giảm giá tức thì</h1>
                    <p class="mt-2">
                        Chỉ cần đăng nhập tài khoản Booking.com của bạn và tìm logo Genius màu xanh dương để tiết kiệm
                    </p>
                    <div class="dangnhap mt-5">
                        <a
                            href=""
                            class="border border-blue-600 p-2 text-center hover:bg-blue-600 hover:bg-opacity-10 text-blue-600 rounded-md"
                            >Đăng nhập</a
                        >
                        <a
                            href=""
                            class="hover:bg-blue-600 hover:bg-opacity-10 p-2 text-center text-blue-600 rounded-md"
                            >Đăng kí</a
                        >
                    </div>
                </div>
            </div>

            <!-- Điểm đến được ưa thích -->
            <div class="mt-5 mb-20">
                <h1 class="text-2xl font-bold py-5">Các điểm đến được chúng tôi ưa thích</h1>
                <ul class="flex flex-nowrap gap-4 p-4">
                    <li
                        class="flex items-center justify-center py-4 border border-blue-600 bg-slate-100 rounded-full p-4"
                    >
                        <a href=""><i class="fa-solid fa-umbrella-beach"></i> Khu vực</a>
                    </li>
                    <li class="flex items-center justify-center py-4 hover:bg-slate-100 rounded-full p-4">
                        <a href=""><i class="fa-solid fa-bicycle"></i> Thành phố</a>
                    </li>
                    <li class="flex items-center justify-center py-4 hover:bg-slate-100 rounded-full p-4">
                        <a href=""><i class="fa-solid fa-city"></i> Địa điểm được quan tâm</a>
                    </li>
                </ul>
                <div class="grid grid-cols-5 gap-4">
                    <div class="mt-2">
                        <a href="" class="font-bold text-sm underline hover:underline-offset-4">TP. Hồ Chí Minh</a>
                        <p class="text-xs">5,009 chỗ nghỉ</p>
                    </div>
                    <div class="mt-2">
                        <a href="" class="font-bold text-sm underline hover:underline-offset-4">TP. Hồ Chí Minh</a>
                        <p class="text-xs">5,009 chỗ nghỉ</p>
                    </div>
                    <div class="mt-2">
                        <a href="" class="font-bold text-sm underline hover:underline-offset-4">TP. Hồ Chí Minh</a>
                        <p class="text-xs">5,009 chỗ nghỉ</p>
                    </div>
                    <div class="mt-2">
                        <a href="" class="font-bold text-sm underline hover:underline-offset-4">TP. Hồ Chí Minh</a>
                        <p class="text-xs">5,009 chỗ nghỉ</p>
                    </div>
                    <div class="mt-2">
                        <a href="" class="font-bold text-sm underline hover:underline-offset-4">TP. Hồ Chí Minh</a>
                        <p class="text-xs">5,009 chỗ nghỉ</p>
                    </div>
                    <div class="mt-2">
                        <a href="" class="font-bold text-sm underline hover:underline-offset-4">TP. Hồ Chí Minh</a>
                        <p class="text-xs">5,009 chỗ nghỉ</p>
                    </div>
                    <div class="mt-2">
                        <a href="" class="font-bold text-sm underline hover:underline-offset-4">TP. Hồ Chí Minh</a>
                        <p class="text-xs">5,009 chỗ nghỉ</p>
                    </div>
                    <div class="mt-2">
                        <a href="" class="font-bold text-sm underline hover:underline-offset-4">TP. Hồ Chí Minh</a>
                        <p class="text-xs">5,009 chỗ nghỉ</p>
                    </div>
                    <div class="mt-2">
                        <a href="" class="font-bold text-sm underline hover:underline-offset-4">TP. Hồ Chí Minh</a>
                        <p class="text-xs">5,009 chỗ nghỉ</p>
                    </div>
                    <div class="mt-2">
                        <a href="" class="font-bold text-sm underline hover:underline-offset-4">TP. Hồ Chí Minh</a>
                        <p class="text-xs">5,009 chỗ nghỉ</p>
                    </div>
                    <div class="mt-2">
                        <a href="" class="font-bold text-sm underline hover:underline-offset-4">TP. Hồ Chí Minh</a>
                        <p class="text-xs">5,009 chỗ nghỉ</p>
                    </div>
                    <div class="mt-2">
                        <a href="" class="font-bold text-sm underline hover:underline-offset-4">TP. Hồ Chí Minh</a>
                        <p class="text-xs">5,009 chỗ nghỉ</p>
                    </div>
                    <div class="mt-2">
                        <a href="" class="font-bold text-sm underline hover:underline-offset-4">TP. Hồ Chí Minh</a>
                        <p class="text-xs">5,009 chỗ nghỉ</p>
                    </div>
                    <div class="mt-2">
                        <a href="" class="font-bold text-sm underline hover:underline-offset-4">TP. Hồ Chí Minh</a>
                        <p class="text-xs">5,009 chỗ nghỉ</p>
                    </div>
                    <div class="mt-2">
                        <a href="" class="font-bold text-sm underline hover:underline-offset-4">TP. Hồ Chí Minh</a>
                        <p class="text-xs">5,009 chỗ nghỉ</p>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<style lang="css" scoped></style>