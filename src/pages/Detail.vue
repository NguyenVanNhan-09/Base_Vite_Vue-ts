<script setup></script>

<style lang="css">
.active {
    border-bottom: 3px solid #006ce4;
}
</style>
<template>
    <div class="container mx-auto mt-14">
        <div class="max-w-[1100px] mx-auto">
            <!-- navbar 1 -->
            <nav>
                <ol class="flex space-x-2">
                    <li class="flex items-center">
                        <a href="#" class="text-blue-500 text-xs">Trang chủ</a>
                        <i class="fa-solid fa-chevron-right text-[8px] px-3"></i>
                    </li>
                    <li class="flex items-center">
                        <a href="#" class="text-blue-500 text-xs">Khách sạn</a>
                        <i class="fa-solid fa-chevron-right text-[8px] px-3"></i>
                    </li>
                    <li class="flex items-center">
                        <a href="#" class="text-blue-500 text-xs">Việt Nam</a>
                        <i class="fa-solid fa-chevron-right text-[8px] px-3"></i>
                    </li>
                    <li class="flex items-center">
                        <a href="#" class="text-blue-500 text-xs">Hà Nội</a>
                        <i class="fa-solid fa-chevron-right text-[8px] px-3"></i>
                    </li>
                    <li class="flex items-center">
                        <a href="#" class="text-blue-500 text-xs">Hoàn Kiếm</a>
                        <i class="fa-solid fa-chevron-right text-[8px] px-3"></i>
                    </li>
                    <li class="flex items-center">
                        <a href="#" class="text-blue-500 text-xs"
                            >Ưu đãi cho Eliana Signature Hanoi Hotel (Khách sạn), Hà Nội (Việt Nam)</a
                        >
                    </li>
                </ol>
            </nav>
            <!-- navbar 2 -->
            <nav class="pt-4 border-b">
                <ul class="flex justify-between">
                    <li class="w-full hover:bg-gray-200 active">
                        <a href="#overview" class="text-center block py-4">
                            <span class="inline-block text-sm">Tổng quan</span>
                        </a>
                    </li>
                    <li class="w-full hover:bg-gray-200">
                        <a href="#price-info" class="text-center block py-4">
                            <span class="inline-block text-sm">Thông tin giá</span>
                        </a>
                    </li>
                    <li class="w-full hover:bg-gray-200">
                        <a href="#amenities" class="text-center block py-4">
                            <span class="inline-block text-sm">Tiện nghi</span>
                        </a>
                    </li>
                    <li class="w-full hover:bg-gray-200">
                        <a href="#reviews" class="text-center block py-4">
                            <span class="inline-block text-sm">Quy tắc chung</span>
                        </a>
                    </li>
                    <li class="w-full hover:bg-gray-200">
                        <a href="#reviews" class="text-center block py-4">
                            <span class="inline-block text-sm">Đánh giá</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
        <!----------------------------------------------------------------------------------->
        <div class="max-w-[1100px] mx-auto">
            <!-- title product -->
            <div class="grid grid-cols-10 gap-4 mt-4">
                <div class="col-span-7 grid grid-rows-2 gap-2">
                    <div class="flex items-center">
                        <svg xmls="http://www.w3.org/2000/svg" viewBox="0 0 112 128" class="w-3 h-3">
                            <path
                                fill="#ffb700"
                                d="M96 8H16A16 16 0 0 0 0 24v96h96a16 16 0 0 0 16-16V24A16 16 0 0 0 96 8M56 88a24 24 0 1 1 24-24 24 24 0 0 1-24 24"
                            ></path>
                        </svg>
                        <svg xmls="http://www.w3.org/2000/svg" viewBox="0 0 112 128" class="w-3 h-3">
                            <path
                                fill="#ffb700"
                                d="M96 8H16A16 16 0 0 0 0 24v96h96a16 16 0 0 0 16-16V24A16 16 0 0 0 96 8M56 88a24 24 0 1 1 24-24 24 24 0 0 1-24 24"
                            ></path>
                        </svg>
                        <svg xmls="http://www.w3.org/2000/svg" viewBox="0 0 112 128" class="w-3 h-3">
                            <path
                                fill="#ffb700"
                                d="M96 8H16A16 16 0 0 0 0 24v96h96a16 16 0 0 0 16-16V24A16 16 0 0 0 96 8M56 88a24 24 0 1 1 24-24 24 24 0 0 1-24 24"
                            ></path>
                        </svg>
                        <svg xmls="http://www.w3.org/2000/svg" viewBox="0 0 112 128" class="w-3 h-3">
                            <path
                                fill="#ffb700"
                                d="M96 8H16A16 16 0 0 0 0 24v96h96a16 16 0 0 0 16-16V24A16 16 0 0 0 96 8M56 88a24 24 0 1 1 24-24 24 24 0 0 1-24 24"
                            ></path>
                        </svg>

                        <span class="block px-1 ml-2 bg-[#ffbb02]"
                            ><i class="fa-solid fa-thumbs-up text-white text-sm"></i
                        ></span>
                    </div>

                    <div class="flex items-center">
                        <h2 class="text-2xl font-bold">The Song Vung Tau Apartment</h2>
                    </div>

                    <div class="flex items-center justify-start space-x-2 text-sm mb-5">
                        <i class="fas fa-map-marker-alt text-blue-500"></i>
                        <div class="flex">
                            <p>66 Lê Trọng Tấn</p>
                            <span class="text-[#006ce4] font-bold"
                                >-<a href="">Vị trí xuất sắc-hiển thị bản đồ</a></span
                            >
                        </div>
                    </div>
                </div>

                <div class="col-span-3 grid grid-rows-2 gap-4">
                    <div class="flex items-center justify-end space-x-2">
                        <button class="flex items-center justify-center hover:bg-[#eff6fe] text-[#006ce3] w-10 h-10">
                            <i class="text-xl fa-regular fa-heart"></i>
                        </button>
                        <button class="flex items-center justify-center hover:bg-[#eff6fe] text-[#006ce3] w-10 h-10">
                            <i class="text-xl fa-solid fa-share-nodes"></i>
                        </button>
                        <button
                            type="submit"
                            class="flex items-center justify-center bg-[#006ce3] text-white rounded-md px-4 py-2"
                        >
                            <span>Đặt căn hộ của bạn</span>
                        </button>
                    </div>

                    <div class="flex items-center justify-end space-x-2">
                        <span><i class="fas fa-tag text-[#006ce3]"></i></span>
                        <span class="text-[#006ce4] font-medium">Chúng tôi luôn khớp giá!</span>
                    </div>
                </div>
            </div>
            <!-- images, comment, address -->
            <div class="grid lg:grid-cols-12 gap-4">
                <!-- images -->
                <div class="col-span-9">
                    <div class="grid gap-4">
                        <div class="flex flex-row gap-2">
                            <div class="flex flex-col w-1/2">
                                <div class="w-full h-full mb-2">
                                    <img
                                        class="h-auto w-full rounded-sm"
                                        src="https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg"
                                        alt=""
                                    />
                                </div>
                                <div class="w-full">
                                    <img
                                        class="h-auto w-full rounded-sm"
                                        src="https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div class="w-full">
                                <img
                                    class="h-full w-full rounded-sm"
                                    src="https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg"
                                    alt=""
                                />
                            </div>
                        </div>

                        <div class="grid grid-cols-5 gap-4">
                            <div>
                                <img
                                    class="h-auto max-w-full rounded-sm"
                                    src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
                                    alt=""
                                />
                            </div>
                            <div>
                                <img
                                    class="h-auto max-w-full rounded-sm"
                                    src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
                                    alt=""
                                />
                            </div>
                            <div>
                                <img
                                    class="h-auto max-w-full rounded-sm"
                                    src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
                                    alt=""
                                />
                            </div>
                            <div>
                                <img
                                    class="h-auto max-w-full rounded-sm"
                                    src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
                                    alt=""
                                />
                            </div>
                            <div>
                                <img
                                    class="h-auto max-w-full rounded-sm"
                                    src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-span-3">
                    <div class="flex flex-col h-full w-full">
                        <!-- rate -->
                        <div class="flex justify-end items-center p-3 border">
                            <div class="flex flex-col justify-between mr-2">
                                <div class="text-end text-base text-black leading-none">Rất tốt</div>
                                <div class="text-end text-xs text-[#333] leading-none">2.802 đánh giá</div>
                            </div>
                            <div
                                class="text-base text-white bg-[#003c95] py-[5.9px] px-[6.9px] rounded-tl rounded-tr rounded-br flex justify-center items-center"
                            >
                                <p>8,1</p>
                            </div>
                        </div>
                        <!-- comment -->
                        <div class="border p-3">
                            <div class="text-xs text-[#1a1a1a]">Khách lưu trú ở đây thích điều gì?</div>
                            <div class="mx-4">
                                <p class="text-xs text-[#1a1a1a] py-3">
                                    “Thủ tục check in và check out rất nhanh chóng. Các em lễ tân vui vẻ, dễ mến. Các
                                    chú bảo vệ và các cô lao công cực kì thân thiện. Chỗ ở sạch sẽ,...”
                                </p>
                                <div class="flex">
                                    <div class="flex items-center mr-2">
                                        <img
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrKhO81lwBpTySRIn6KqSSLNbiUA5s99aqWg&s"
                                            class="w-[24px] h-[24px] rounded-full mr-2"
                                            alt=""
                                        />
                                        <span class="text-xs text-[#595959]">Nhân</span>
                                    </div>
                                    <div class="flex items-center">
                                        <img
                                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/1200px-Flag_of_Vietnam.svg.png"
                                            class="w-[24px] h-[24px] rounded-full mr-2"
                                            alt=""
                                        />
                                        <span class="text-xs text-[#595959]">Việt Nam</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- rate nhân viên -->
                        <div class="border">
                            <div class="p-3 flex justify-between items-center">
                                <div class="text-sm text-[#1a1a1a]">Nhân viên phục vụ</div>
                                <div
                                    class="text-base text-[#1a1a1a] border border-[#1a1a1a] py-[5.9px] px-[6.9px] rounded-tl rounded-tr rounded-br flex justify-center items-center"
                                >
                                    <p>8,9</p>
                                </div>
                            </div>
                        </div>
                        <!-- address gg map -->
                        <div class="py-2 px-1 relative">
                            <img
                                src="https://cdn.buttercms.com/Ym1iRZNbRHOeWv0X4x3w"
                                class="object-cover h-full w-full"
                                alt=""
                            />
                            <button
                                class="absolute whitespace-nowrap left-[50%] top-[50%] text-base translate-y-[-50%] translate-x-[-50%] py-2 px-3 bg-[#006ce3] text-white rounded-md"
                            >
                                Hiện thị trên bản đồ
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- service (có cái có có cái khôgn) -->
            <!-- <div>
                <div class="">
                    <ul class="flex flex-wrap justify-between">
                        <li class="w-1/5 break-words">Căn hộ</li>
                        <li class="w-1/5 break-words">Căn hộ</li>
                        <li class="w-1/5 break-words">Căn hộ</li>
                        <li class="w-1/5 break-words">Căn hộ</li>
                        <li class="w-1/5 break-words">Căn hộaaa</li>
                        <li class="w-1/5 break-words">Căn hộ</li>
                    </ul>
                </div>
            </div> -->
            <!-- description -->
            <div class="grid lg:grid-cols-12 gap-8 my-4">
                <div class="flex-initial col-span-8">
                    <p class="text-sm">
                        Bạn đủ điều kiện nhận giảm giá Genius tại Eliana Signature Hanoi Hotel! Để tiết kiệm tại chỗ
                        nghỉ này, bạn chỉ cần
                        <a href="">Đăng nhập</a>
                    </p>
                    <div>
                        <p>
                            Với sân hiên, Eliana Signature Hanoi Hotel nằm ở trung tâm Hà Nội và cách Nhà hát múa rối
                            Thăng Long 2 phút đi bộ. Khách sạn 4 sao này có bàn bán tour và phòng giữ hành lý. Chỗ nghỉ
                            cung cấp lễ tân 24/24, dịch vụ đưa đón sân bay, dịch vụ tiền sảnh và Wi-Fi miễn phí ở toàn
                            bộ chỗ nghỉ.
                        </p>
                        <p>
                            Khách sạn sẽ cung cấp cho khách các phòng được trang bị điều hòa có bàn làm việc, ấm đun
                            nước, tủ lạnh, minibar, két an toàn, TV màn hình phẳng và phòng tắm riêng với vòi xịt/chậu
                            rửa vệ sinh.
                        </p>
                        <p>
                            Khách có thể thưởng thức bữa sáng thực đơn buffet, thực đơn à la carte hoặc kiểu Anh/ Ai-len
                            tại chỗ nghỉ.
                        </p>
                        <p>
                            Các điểm tham quan nổi tiếng gần Eliana Signature Hanoi Hotel bao gồm Hồ Hoàn Kiếm, Ô Quan
                            Chưởng và Nhà hát Lớn Hà Nội. Sân bay gần nhất là Sân bay Quốc tế Nội Bài, cách chỗ nghỉ 24
                            km.
                        </p>
                        <p>
                            Các cặp đôi đặc biệt thích địa điểm này — họ cho điểm
                            <strong>9,8</strong> khi đánh giá chuyến đi 2 người
                        </p>
                        <p>Các khoảng cách nêu trong mô tả chỗ nghỉ được tính toán bằng © OpenStreetMap</p>
                    </div>
                    <div>
                        <h2 class="text-lg font-bold mt-4">các tiện nghi được ưa chuộng nhất</h2>
                        <ul class="flex flex-wrap">
                            <li class="p-2">
                                <div class="inline-flex items-center gap-2 p-2 rounded-lg">
                                    <i class="fas fa-shuttle-van text-lg text-green-500"></i>
                                    <span class="text-sm">Xe đưa đón sân bay</span>
                                </div>
                            </li>
                            <li class="p-2">
                                <div class="inline-flex items-center gap-2 p-2 rounded-lg">
                                    <i class="fas fa-smoking-ban text-lg text-green-500"></i>
                                    <span class="text-sm">Phòng không hút thuốc</span>
                                </div>
                            </li>
                            <li class="p-2">
                                <div class="inline-flex items-center gap-2 p-2 rounded-lg">
                                    <i class="fas fa-spa text-lg text-green-500"></i>
                                    <span class="text-sm">Trung tâm Spa & chăm sóc sức khỏe</span>
                                </div>
                            </li>
                            <li class="p-2">
                                <div class="inline-flex items-center gap-2 p-2 rounded-lg">
                                    <i class="fas fa-wifi text-lg text-green-500"></i>
                                    <span class="text-sm">WiFi miễn phí</span>
                                </div>
                            </li>
                            <li class="p-2">
                                <div class="inline-flex items-center gap-2 p-2 rounded-lg">
                                    <i class="fas fa-bed text-lg text-green-500"></i>
                                    <span class="text-sm">Phòng gia đình</span>
                                </div>
                            </li>
                            <li class="p-2">
                                <div class="inline-flex items-center gap-2 p-2 rounded-lg">
                                    <i class="fas fa-clock text-lg text-green-500"></i>
                                    <span class="text-sm">Lễ tân 24h</span>
                                </div>
                            </li>
                            <li class="p-2">
                                <div class="inline-flex items-center gap-2 p-2 rounded-lg">
                                    <i class="fas fa-sun text-lg text-green-500"></i>
                                    <span class="text-sm">Sân thượng/hiên</span>
                                </div>
                            </li>
                            <li class="p-2">
                                <div class="inline-flex items-center gap-2 p-2 rounded-lg">
                                    <i class="fas fa-caret-square-up text-lg text-green-500"></i>
                                    <span class="text-sm">Thang máy</span>
                                </div>
                            </li>
                            <li class="p-2">
                                <div class="inline-flex items-center gap-2 p-2 rounded-lg">
                                    <i class="fas fa-coffee text-lg text-green-500"></i>
                                    <span class="text-sm">Máy pha cà phê trong tất cả các phòng</span>
                                </div>
                            </li>
                            <li class="p-2">
                                <div class="inline-flex items-center gap-2 p-2 rounded-lg">
                                    <i class="fas fa-mug-hot text-lg text-green-500"></i>
                                    <span class="text-sm">Bữa sáng tuyệt vời</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="flex-initial col-span-4 text-sm">
                    <div class="bg-blue-50 p-3">
                        <div class="p-2">
                            <h3 class="text-lg font-bold">Điểm nổi bật của chỗ nghỉ</h3>
                        </div>
                        <div class="p-2">
                            <h4 class="text-lg font-bold">Hoàn hảo cho kỳ nghỉ 1 đêm</h4>
                        </div>
                        <div class="flex items-center gap-2">
                            <i class="fas fa-check"></i>
                            <p class="text-sm">Nằm ngay trung tâm Hà Nội, khách sạn này có điểm vị trí tuyệt vời 9,7</p>
                        </div>
                        <div class="p-2">
                            <h4 class="text-lg font-bold">Thông tin về bữa sáng</h4>
                        </div>
                        <div class="p-2">
                            <span
                                >Kiểu Anh/ Ai Len, Thực đơn chay, Thực đơn chay không trứng, sữa, Kiêng Gluten, Kiểu Á,
                                Tự chọn, Bữa sáng mang đi</span
                            >
                        </div>
                        <div class="p-2">
                            <h4 class="text-lg font-bold">Phòng có:</h4>
                        </div>
                        <div class="flex items-center gap-2 p-2">
                            <i class="fas fa-home"></i>
                            <p>Nhìn ra thành phố</p>
                        </div>
                        <div class="p-4">
                            <button class="w-full bg-blue-500 text-white px-4 py-2 mt-4 rounded-md">Đặt ngay</button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- banner login -->
            <div class="flex justify-between border p-4">
                <div class="flex flex-col justify-between">
                    <div class="mb-2">
                        <h1 class="text-xl font-bold">Đăng nhập để tiết kiệm</h1>
                    </div>
                    <div class="mb-2">
                        <p class="text-xs">Cơ hội tiết kiệm 10% trở lên tại chỗ nghỉ này khi đăng nhập</p>
                    </div>
                    <div class="flex items-center gap-4">
                        <a href="#" class="btn border border-blue-500 py-2 px-4 text-sm rounded-full text-blue-500"
                            >Đăng nhập</a
                        >
                        <a href="#" class="text-xs hover:underline hover:text-blue-500 text-blue-500">Tạo tài khoản</a>
                    </div>
                </div>

                <div class="flex">
                    <img
                        src="https://q-xx.bstatic.com/xdata/images/xphoto/248x248/294910959.jpeg?k=e459f57356fb64e8550e5b8c3d2352d50b49de3555b7bcea982678ef36e636ea&o="
                        alt="no img"
                        height="104px"
                        width="104px"
                    />
                </div>
            </div>
            <!-- filter Phòng trống-->

            <!-- đánh giá của khách -->
            <div>
                <div class="flex justify-between mt-4">
                    <div>
                        <h3 class="font-bold text-xl">Đánh giá của khách</h3>
                    </div>
                    <div>
                        <button
                            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline w-"
                        >
                            <span>Xem phòng trống</span>
                        </button>
                    </div>
                </div>
                <div class="flex justify-start">
                    <div class="flex justify-center">
                        <div class="bg-blue-500 w-10 h-8 text-xl">
                            <span class="ml-2">9,3</span>
                        </div>
                        <span class="ml-2 font-bold">Tuyệt hảo</span>
                        <span> .10009 đánh giá </span>
                    </div>
                    <div>
                        <span class="text-blue-500">Đọc tất cả đánh giá</span>
                    </div>
                </div>
                <div>
                    <div>
                        <h3 class="text-xl font-bold mt-2 mb-2">Hạng mục:</h3>
                    </div>
                    <div class="grid grid-cols-3 gap-4 mt-2">
                        <div>
                            <div class="flex justify-between">
                                <div>
                                    <div>
                                        Nhân viên phục vụ
                                        <span><i class="fas fa-arrow-up"></i></span>
                                    </div>
                                </div>
                                <div>9,8</div>
                            </div>
                            <div class="bg-gray-200 h-2">
                                <span class="bg-green-500 block h-2" style="width: 90%"></span>
                            </div>
                        </div>
                        <div>
                            <div class="flex justify-between">
                                <div>
                                    <div>Tiện nghi</div>
                                </div>
                                <div>9,0</div>
                            </div>
                            <div class="bg-gray-200 h-2">
                                <span class="bg-blue-500 block h-2" style="width: 90%"></span>
                            </div>
                        </div>
                        <div>
                            <div class="flex justify-between">
                                <div>
                                    <div>
                                        Sạch sẽ
                                        <span><i class="fas fa-arrow-up"></i></span>
                                    </div>
                                </div>
                                <div>9,3</div>
                            </div>
                            <div class="bg-gray-200 h-2">
                                <span class="bg-green-500 block h-2" style="width: 90%"></span>
                            </div>
                        </div>
                        <div>
                            <div class="flex justify-between">
                                <div>
                                    <div>Thoải mái</div>
                                </div>
                                <div>9,3</div>
                            </div>
                            <div class="bg-gray-200 h-2">
                                <span class="bg-blue-500 block h-2" style="width: 90%"></span>
                            </div>
                        </div>
                        <div>
                            <div class="flex justify-between">
                                <div>
                                    <div>
                                        Đáng giá tiền<span><i class="fas fa-arrow-up"></i></span>
                                    </div>
                                </div>
                                <div>9,2</div>
                            </div>
                            <div class="bg-gray-200 h-2">
                                <span class="bg-green-500 block h-2" style="width: 90%"></span>
                            </div>
                        </div>
                        <div>
                            <div class="flex justify-between">
                                <div>
                                    <div>
                                        Địa điểm
                                        <span><i class="fas fa-arrow-up"></i></span>
                                    </div>
                                </div>
                                <div>9,7</div>
                            </div>
                            <div class="bg-gray-200 h-2">
                                <span class="bg-green-500 block h-2" style="width: 97%"></span>
                            </div>
                        </div>
                        <div>
                            <div class="flex justify-between">
                                <div>
                                    <div>
                                        WiFi miễn phí
                                        <span><i class="fas fa-arrow-up"></i></span>
                                    </div>
                                </div>
                                <div>8,8</div>
                            </div>
                            <div class="bg-gray-200 h-2">
                                <span class="bg-blue-500 block h-2" style="width: 80%"></span>
                            </div>
                        </div>
                        <div class="row-start-3 col-start-3">
                            <div>
                                <div class="flex justify-end">
                                    <span class="text-sm mt-2"
                                        ><i class="fas fa-arrow-up text-green-500"></i> Địa điểm cao ở Hà Nội</span
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- comment: đánh giá -->
            <div>
                <div class="mt-4 mb-4">
                    <h3 class="flex justify-start text-xl font-bold mt-2 mb-2">Chọn chủ đề để đọc đánh giá</h3>
                </div>
                <div class="flex justify-start gap-4">
                    <span class="border rounded-full gap-4 p-2">
                        <span><i class="fas fa-plus"></i></span>
                        <span>Vị trí</span>
                    </span>
                    <span class="border rounded-full gap-4 p-2">
                        <span><i class="fas fa-plus"></i></span>
                        <span>Bữa sáng</span>
                    </span>
                    <span class="border rounded-full gap-4 p-2">
                        <span><i class="fas fa-plus"></i></span>
                        <span>Phòng</span>
                    </span>
                    <span class="border rounded-full gap-4 p-2">
                        <span><i class="fas fa-plus"></i></span>
                        <span>Sạch sẽ</span>
                    </span>
                    <span class="border rounded-full gap-4 p-2">
                        <span><i class="fas fa-plus"></i></span>
                        <span>Giường</span>
                    </span>
                </div>
                <div class="">
                    <h3 class="font-bold">Đọc xem khác yêu thích gì nhất:</h3>
                    <div class="container mx-auto max-w-6xl gap-">
                        <div class="relative overflow-hidden">
                            <div id="carousel" class="flex transition-transform duration-300 ease-out gap-4 ml-2">
                                <div class="flex-shrink-0 p-4" style="width: 300px; height: 256px">
                                    <div class="p-4 bg-white rounded-md shadow-md h-full">
                                        <div class="flex items-center space-x-4">
                                            <div>
                                                <img
                                                    class="object-cover rounded-full"
                                                    src="./image/1.jpg"
                                                    alt="Card 1"
                                                    style="height: 32px; width: 32px"
                                                />
                                            </div>
                                            <div>
                                                <div class="" height="20">
                                                    <p class="font-bold">An</p>
                                                </div>
                                                <div class="flex items-center space-x-2">
                                                    <img
                                                        src="./image/2.webp"
                                                        alt="Flag"
                                                        style="height: 12px; width: 12px"
                                                    />
                                                    <p style="height: 18px" class="text-sm">Đài Loan</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <textarea name="" id="">Vãi cả con chim non</textarea>
                                        </div>
                                        <p class="text-green-600 text-sm">Tìm hiểu thêm</p>
                                    </div>
                                </div>
                                <div class="flex-shrink-0 p-4" style="width: 300px; height: 256px">
                                    <div class="p-4 bg-white rounded-md shadow-md h-full">
                                        <div class="flex items-center space-x-4">
                                            <div>
                                                <img
                                                    class="object-cover rounded-full"
                                                    src="./image/1.jpg"
                                                    alt="Card 1"
                                                    style="height: 32px; width: 32px"
                                                />
                                            </div>
                                            <div>
                                                <div class="" height="20">
                                                    <p class="font-bold">An</p>
                                                </div>
                                                <div class="flex items-center space-x-2">
                                                    <img
                                                        src="./image/2.webp"
                                                        alt="Flag"
                                                        style="height: 12px; width: 12px"
                                                    />
                                                    <p style="height: 18px" class="text-sm">Đài Loan</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <textarea name="" id="">Vãi cả con chim non</textarea>
                                        </div>
                                        <p class="text-green-600 text-sm">Tìm hiểu thêm</p>
                                    </div>
                                </div>
                                <div class="flex-shrink-0 p-4" style="width: 300px; height: 256px">
                                    <div class="p-4 bg-white rounded-md shadow-md h-full">
                                        <div class="flex items-center space-x-4">
                                            <div>
                                                <img
                                                    class="object-cover rounded-full"
                                                    src="./image/1.jpg"
                                                    alt="Card 1"
                                                    style="height: 32px; width: 32px"
                                                />
                                            </div>
                                            <div>
                                                <div class="" height="20">
                                                    <p class="font-bold">An</p>
                                                </div>
                                                <div class="flex items-center space-x-2">
                                                    <img
                                                        src="./image/2.webp"
                                                        alt="Flag"
                                                        style="height: 12px; width: 12px"
                                                    />
                                                    <p style="height: 18px" class="text-sm">Đài Loan</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <textarea name="" id="">Vãi cả con chim non</textarea>
                                        </div>
                                        <p class="text-green-600 text-sm">Tìm hiểu thêm</p>
                                    </div>
                                </div>
                            </div>
                            <button
                                id="prev"
                                class="absolute top-1/2 left-0 transform -translate-y-1/2 rounded-full bg-white text-white px-4 py-2"
                            >
                                <span class="text-black"><i class="fas fa-angle-left"></i></span>
                            </button>
                            <button
                                id="next"
                                class="absolute top-1/2 right-0 transform -translate-y-1/2 rounded-full bg-white text-white px-4 py-2"
                            >
                                <span class="text-black"><i class="fas fa-angle-right"></i></span>
                            </button>
                        </div>
                    </div>

                    <button
                        data-modal-target="default-modal"
                        data-modal-toggle="default-modal"
                        class="border border-blue-500 rounded-lg px-4 py-2 block text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        type="button"
                    >
                        <span class="text-blue-500">Đọc tất cả đánh giá</span>
                    </button>
                </div>
            </div>
        </div>

        <!-- <div>
         <div>
            <section id="price-info" class="p-4">
               <div class="flex justify-between">
                  <div>
                     <h2 class="text-2xl font-bold">Phòng trống</h2>
                  </div>
                  <div class="flex gap-2">
                     <div><i class="fas fa-tags text-blue-500"></i></div>
                     <div>
                        <span class="text-blue-500"
                           >Chúng tôi luôn khớp giá</span
                        >
                     </div>
                  </div>
               </div>
               <div class="flex justify-start items-center w-full mt-4 mb-2">
                  <div
                     class="col-span-3 flex items-center border-yellow-500 box-border h-12 p-4 border-2"
                  >
                     <div class="flex items-center w-full">
                        <i class="fas fa-calendar-alt mr-2"></i>
                        <button><span>CN, 14 tháng 7</span></button>
                        <span>-</span>
                        <button><span>CN, 14 tháng 8</span></button>
                     </div>
                  </div>
                  <div
                     class="flex items-center bg-white box-border h-12 p-4 border-2 border-yellow-500 w-3xl"
                  >
                     <div class="flex justify-between items-center w-full">
                        <i class="fas fa-user mr-2"></i>
                        <button>
                           <span>2 Người lớn - 0 trẻ em - 1 phòng</span>
                        </button>
                     </div>
                     <div>
                        <p>&#x25BE;</p>
                     </div>
                  </div>
                  <div class="col-span-1">
                     <button
                        type="submit"
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline w-"
                     >
                        Thay đổi tìm kiếm
                     </button>
                  </div>
               </div>
               <div class="text-xl font-bold">
                  <h2>Lọc theo:</h2>
               </div>
               <div class="flex">
                  <div class="mr-4">
                     <label class="flex items-center">
                        <input
                           type="checkbox"
                           class="form-checkbox h-4 w-4 text-blue-500"
                        />
                        <span class="ml-2">Phòng</span>
                     </label>
                  </div>
                  <div>
                     <label class="flex items-center">
                        <input
                           type="checkbox"
                           class="form-checkbox h-4 w-4 text-blue-500"
                        />
                        <span class="ml-2">Suite</span>
                     </label>
                  </div>
               </div>
               <div class="container mx-auto px-4 lg:px-8 max-w-6xl">
                  <form action="">
                     <div class="flex justify-between">
                        <div>
                           <table
                              class="table-auto w-full border border-blue-500"
                           >
                              <thead class="bg-blue-500 text-white">
                                 <tr>
                                    <th
                                       scope="col"
                                       class="border-2 border-green-500 text-left text-xs font-medium text-white uppercase tracking-wider"
                                    >
                                       Loại chỗ nghỉ
                                    </th>
                                    <th
                                       scope="col"
                                       class="border-2 border-green-500 text-left text-xs font-medium text-white uppercase tracking-wider"
                                    >
                                       Số lượng khách
                                    </th>
                                    <th
                                       scope="col"
                                       class="border-2 border-green-500 text-left text-xs font-medium text-white uppercase tracking-wider"
                                    >
                                       Giá hôm nay
                                    </th>
                                    <th
                                       scope="col"
                                       class="border-2 border-green-500 text-left text-xs font-medium text-white uppercase tracking-wider"
                                    >
                                       Các lựa chọn
                                    </th>
                                    <th
                                       scope="col"
                                       class="border-2 border-green-500 text-left text-xs font-medium text-white uppercase tracking-wider"
                                    >
                                       Chọn phòng
                                    </th>
                                    <th
                                       scope="col"
                                       class="border-2 border-green-500 text-left text-xs font-medium text-white uppercase tracking-wider"
                                    ></th>
                                 </tr>
                              </thead>
                              <tbody
                                 class="bg-white divide-y divide-gray-200 border-blue-500"
                              >
                                 <tr class="">
                                    <td
                                       class="px-6 py-4 whitespace-nowrap border border-blue-500"
                                       rowspan="2"
                                    >
                                       <div>
                                          <div class="">
                                             <a href=""
                                                ><span
                                                   class="font-bold text-blue-500 underline"
                                                   >Phòng Deluxe Giường
                                                   Đôi</span
                                                ></a
                                             >
                                          </div>
                                          <div>
                                             <span
                                                class="text-red-500 font-bold text-sm"
                                                ><i class="fas fa-circle"></i
                                                >Chỉ còn 3 phòng trên trang của
                                                chúng tôi</span
                                             >
                                          </div>
                                          <ul class="">
                                             <li>
                                                <span>
                                                   1 giường đôi lớn
                                                   <i
                                                      class="fas fa-bed-pulse"
                                                   ></i
                                                ></span>
                                             </li>
                                          </ul>
                                          <div class="flex flex-wrap gap-2 p-2">
                                             <div>
                                                <span
                                                   ><i
                                                      class="fas fa-door-open"
                                                   ></i
                                                   >Phòng</span
                                                >
                                             </div>
                                             <div>
                                                <span
                                                   ><i
                                                      class="fas fa-house-user"
                                                   ></i
                                                   >18m2</span
                                                >
                                             </div>
                                             <div>
                                                <span
                                                   ><i
                                                      class="fas fa-snowflake"
                                                   ></i
                                                   >Điều hòa không khí</span
                                                >
                                             </div>
                                             <div>
                                                <span
                                                   ><i class="fas fa-bath"></i
                                                   >Phòng tắm riêng trong
                                                   phòng</span
                                                >
                                             </div>
                                             <div>
                                                <span
                                                   ><i class="fas fa-tv"></i>TV
                                                   màn hình phẳng</span
                                                >
                                             </div>
                                             <div>
                                                <span
                                                   ><i
                                                      class="fas fa-mug-saucer"
                                                   ></i
                                                   >Minibar</span
                                                >
                                             </div>
                                          </div>
                                          <ul class="flex flex-wrap p-2">
                                             <li class="">
                                                <div
                                                   class="inline-flex items-center"
                                                >
                                                   <span
                                                      class="inline-flex items-center text-sm"
                                                   >
                                                      <i
                                                         class="fas fa-check text-green-500"
                                                      ></i>
                                                      Đồ vệ sinh cá nhân miễn
                                                      phí
                                                   </span>
                                                </div>
                                             </li>
                                             <li class="flex-basis">
                                                <div
                                                   class="inline-flex items-center"
                                                >
                                                   <span
                                                      class="inline-flex items-center text-sm"
                                                   >
                                                      <i
                                                         class="fas fa-check text-green-500"
                                                      ></i>
                                                      Áo choàng tắm
                                                   </span>
                                                </div>
                                             </li>
                                             <li class="flex-basis">
                                                <div
                                                   class="inline-flex items-center"
                                                >
                                                   <span
                                                      class="inline-flex items-center text-sm"
                                                   >
                                                      <i
                                                         class="fas fa-check text-green-500"
                                                      ></i>
                                                      Két an toàn
                                                   </span>
                                                </div>
                                             </li>
                                             <li class=" ">
                                                <div
                                                   class="inline-flex items-center"
                                                >
                                                   <span
                                                      class="inline-flex items-center text-sm"
                                                   >
                                                      <i
                                                         class="fas fa-check text-green-500"
                                                      ></i>
                                                      Chậu rửa vệ sinh
                                                   </span>
                                                </div>
                                             </li>
                                             <li class=" ">
                                                <div
                                                   class="inline-flex items-center"
                                                >
                                                   <span
                                                      class="inline-flex items-center text-sm"
                                                   >
                                                      <i
                                                         class="fas fa-check text-green-500"
                                                      ></i>
                                                      Nhà vệ sinh
                                                   </span>
                                                </div>
                                             </li>
                                             <li class="">
                                                <div
                                                   class="inline-flex items-center"
                                                >
                                                   <span
                                                      class="inline-flex items-center text-sm"
                                                   >
                                                      <i
                                                         class="fas fa-check text-green-500"
                                                      ></i>
                                                      Bồn tắm hoặc vòi sen
                                                   </span>
                                                </div>
                                             </li>
                                             <li class="">
                                                <div
                                                   class="inline-flex items-center"
                                                >
                                                   <span
                                                      class="inline-flex items-center text-sm"
                                                   >
                                                      <i
                                                         class="fas fa-check text-green-500"
                                                      ></i>
                                                      Bàn làm việc
                                                   </span>
                                                </div>
                                             </li>
                                             <li class="">
                                                <div
                                                   class="inline-flex items-center"
                                                >
                                                   <span
                                                      class="inline-flex items-center text-sm"
                                                   >
                                                      <i
                                                         class="fas fa-check text-green-500"
                                                      ></i>
                                                      Dép
                                                   </span>
                                                </div>
                                             </li>
                                             <li class="">
                                                <div
                                                   class="inline-flex items-center"
                                                >
                                                   <span
                                                      class="inline-flex items-center text-sm"
                                                   >
                                                      <i
                                                         class="fas fa-check text-green-500"
                                                      ></i>
                                                      Tủ lạnh
                                                   </span>
                                                </div>
                                             </li>
                                             <li class="">
                                                <div
                                                   class="inline-flex items-center"
                                                >
                                                   <span
                                                      class="inline-flex items-center text-sm"
                                                   >
                                                      <i
                                                         class="fas fa-check text-green-500"
                                                      ></i>
                                                      Máy pha trà cà phê
                                                   </span>
                                                </div>
                                             </li>
                                             <li class="">
                                                <div
                                                   class="inline-flex items-center"
                                                >
                                                   <span
                                                      class="inline-flex items-center text-sm"
                                                   >
                                                      <i
                                                         class="fas fa-check text-green-500"
                                                      ></i>
                                                      Hệ thống sưởi
                                                   </span>
                                                </div>
                                             </li>
                                             <li class="">
                                                <div
                                                   class="inline-flex items-center"
                                                >
                                                   <span
                                                      class="inline-flex items-center text-sm"
                                                   >
                                                      <i
                                                         class="fas fa-check text-green-500"
                                                      ></i>
                                                      Máy sấy tóc
                                                   </span>
                                                </div>
                                             </li>
                                             <li class="">
                                                <div
                                                   class="inline-flex items-center"
                                                >
                                                   <span
                                                      class="inline-flex items-center text-sm"
                                                   >
                                                      <i
                                                         class="fas fa-check text-green-500"
                                                      ></i>
                                                      Ấm đun nước điện
                                                   </span>
                                                </div>
                                             </li>
                                             <li class="">
                                                <div
                                                   class="inline-flex items-center"
                                                >
                                                   <span
                                                      class="inline-flex items-center text-sm"
                                                   >
                                                      <i
                                                         class="fas fa-check text-green-500"
                                                      ></i>
                                                      Giấy vệ sinh
                                                   </span>
                                                </div>
                                             </li>
                                          </ul>
                                       </div>
                                    </td>
                                    <td
                                       class="px-6 py-4 whitespace-nowrap border border-blue-500"
                                    >
                                       <div>
                                          <i class="fas fa-user"></i>
                                       </div>
                                    </td>
                                    <td
                                       class="whitespace-nowrap border border-blue-500 mt-0"
                                    >
                                       <div class="bg-white rounded-md mt-0">
                                          <div class="">
                                             <span
                                                class="text-xs text-red-500 line-through"
                                                >VND 7.500.000</span
                                             >
                                          </div>
                                          <div class="">
                                             <h3
                                                class="text-sm font-bold text-black"
                                             >
                                                VND 1.650.000
                                             </h3>
                                          </div>
                                          <div
                                             class="flex flex-col items-start"
                                          >
                                             <div
                                                class="inline-flex items-center bg-green-500 rounded-full px-2 mb-1"
                                             >
                                                <span
                                                   class="text-white font-medium text-xs"
                                                   >tiết kiệm 78%</span
                                                >
                                             </div>
                                             <div
                                                class="inline-flex items-center bg-green-500 rounded-full px-2"
                                             >
                                                <span
                                                   class="text-white font-medium text-xs"
                                                   >Ưu Đãi Trong Thời Gian Có
                                                   hạn</span
                                                >
                                             </div>
                                          </div>
                                       </div>
                                    </td>

                                    <td class="border border-blue-500">
                                       <div class=" ">
                                          <ul>
                                             <li>
                                                <div>
                                                   <i class="fas fa-coffee"></i
                                                   >Bữa sáng
                                                   <span class="font-bold"
                                                      >Tuyệt vời</span
                                                   >
                                                   - VND 123.000
                                                </div>
                                             </li>
                                             <li>
                                                <div class="text-green-500">
                                                   <i class="fas fa-check"></i
                                                   ><span class="font-bold"
                                                      >Miễn phí bất kỳ lúc
                                                      nào</span
                                                   >
                                                   bất kỳ lúc nào
                                                </div>
                                             </li>
                                             <li>
                                                <div class="text-green-500">
                                                   <i class="fas fa-check"></i
                                                   ><span class="font-bold"
                                                      >Không cần thanh toán
                                                      trước</span
                                                   >
                                                   thanh toán tại chỗ nghỉ
                                                </div>
                                             </li>
                                          </ul>
                                       </div>
                                    </td>
                                    <td
                                       class="px-6 py-4 whitespace-nowrap border border-blue-500"
                                    >
                                       <select
                                          class="border border-black text-black px-4 py-2 rounded-md"
                                       >
                                          <option value=""></option>

                                          <option value="500000">
                                             Phòng giá 500,000 VND
                                          </option>
                                          <option value="600000">
                                             Phòng giá 600,000 VND
                                          </option>
                                          <option value="700000">
                                             Phòng giá 700,000 VND
                                          </option>
                                       </select>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td
                                       class="px-6 py-4 whitespace-nowrap border border-blue-500"
                                    >
                                       <div>
                                          <i class="fas fa-user"></i
                                          ><i class="fas fa-user"></i>
                                       </div>
                                    </td>
                                    <td
                                       class="px-3 py-2 whitespace-nowrap border border-blue-500"
                                    >
                                       <div class="bg-white">
                                          <div class="p-2">
                                             <span
                                                class="text-sm text-red-500 line-through"
                                                >VND 7.500.000</span
                                             >
                                          </div>
                                          <div class="">
                                             <h3
                                                class="text-xl font-bold text-black"
                                             >
                                                VND 1.650.000
                                             </h3>
                                          </div>
                                          <div
                                             class="flex flex-col items-start"
                                          >
                                             <div
                                                class="inline-flex items-center bg-green-500 rounded-full px-2 mb-2"
                                             >
                                                <span
                                                   class="text-white font-medium text-sm"
                                                   >tiết kiệm 78%</span
                                                >
                                             </div>
                                             <div
                                                class="inline-flex items-center bg-green-500 rounded-full px-2"
                                             >
                                                <span
                                                   class="text-white font-medium text-sm"
                                                   >Ưu Đãi Trong Thời Gian Có
                                                   hạn</span
                                                >
                                             </div>
                                          </div>
                                       </div>
                                    </td>
                                    <td
                                       class="px-6 py-4 whitespace-nowrap border border-blue-500"
                                    >
                                       <div class=" ">
                                          <ul>
                                             <li>
                                                <div>
                                                   <i class="fas fa-coffee"></i
                                                   >Bữa sáng
                                                   <span class="font-bold"
                                                      >Tuyệt vời</span
                                                   >
                                                   - VND 123.000
                                                </div>
                                             </li>
                                             <li>
                                                <div class="text-green-500">
                                                   <i class="fas fa-check"></i
                                                   ><span class="font-bold"
                                                      >Miễn phí bất kỳ lúc
                                                      nào</span
                                                   >
                                                   bất kỳ lúc nào
                                                </div>
                                             </li>
                                             <li>
                                                <div class="text-green-500">
                                                   <i class="fas fa-check"></i
                                                   ><span class="font-bold"
                                                      >Không cần thanh toán
                                                      trước</span
                                                   >
                                                   thanh toán tại chỗ nghỉ
                                                </div>
                                             </li>
                                          </ul>
                                       </div>
                                    </td>
                                    <td
                                       class="px-6 py-4 whitespace-nowrap border border-blue-500"
                                    >
                                       <select
                                          class="border border-black text-black px-4 py-2 rounded-md"
                                       >
                                          <option value="500000"></option>
                                          <option value="500000">
                                             Phòng giá 500,000 VND
                                          </option>
                                          <option value="600000">
                                             Phòng giá 600,000 VND
                                          </option>
                                          <option value="700000">
                                             Phòng giá 700,000 VND
                                          </option>
                                       </select>
                                    </td>
                                 </tr>
                              </tbody>
                           </table>
                        </div>
                     </div>
                  </form>
               </div>
               <div>
                  
                  
                  

                     <div
                        id="default-modal"
                        tabindex="-1"
                        aria-hidden="true"
                        class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full h-full bg-gray-500 bg-opacity-50"
                     >
                        <div
                           class="modal-content bg-white rounded-lg shadow-md dark:bg-gray-700 w-full max-w-6xl mx-auto mt-20 p-8"
                        >
                           <div
                              class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600"
                           >
                              <h3
                                 class="text-xl font-semibold text-gray-900 dark:text-white"
                              >
                                 Đánh giá cao của khách về
                                 <span
                                    class="text-xl font-semibold text-gray-900 dark:text-white"
                                 >
                                    Elioana Signature Hanoi Hotel</span
                                 >
                              </h3>
                              <button
                                 type="button"
                                 class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                 data-modal-hide="default-modal"
                              >
                                 <svg
                                    class="w-3 h-3"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 14 14"
                                 >
                                    <path
                                       stroke="currentColor"
                                       stroke-linecap="round"
                                       stroke-linejoin="round"
                                       stroke-width="2"
                                       d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                    />
                                 </svg>
                                 <span class="sr-only">Close modal</span>
                              </button>
                           </div>
                           <div class="p-4 md:p-5 space-y-4">
                              <div class="grid grid-cols-3 gap-4 mt-2">
                                 <div>
                                    <div class="flex justify-between">
                                       <div>
                                          <div>
                                             Nhân viên phục vụ
                                             <span
                                                ><i class="fas fa-arrow-up"></i
                                             ></span>
                                          </div>
                                       </div>
                                       <div>9,8</div>
                                    </div>
                                    <div class="bg-gray-200 h-2">
                                       <span
                                          class="bg-green-500 block h-2"
                                          style="width: 90%"
                                       ></span>
                                    </div>
                                 </div>
                                 <div>
                                    <div class="flex justify-between">
                                       <div>
                                          <div>Tiện nghi</div>
                                       </div>
                                       <div>9,0</div>
                                    </div>
                                    <div class="bg-gray-200 h-2">
                                       <span
                                          class="bg-blue-500 block h-2"
                                          style="width: 90%"
                                       ></span>
                                    </div>
                                 </div>
                                 <div>
                                    <div class="flex justify-between">
                                       <div>
                                          <div>
                                             Sạch sẽ
                                             <span
                                                ><i class="fas fa-arrow-up"></i
                                             ></span>
                                          </div>
                                       </div>
                                       <div>9,3</div>
                                    </div>
                                    <div class="bg-gray-200 h-2">
                                       <span
                                          class="bg-green-500 block h-2"
                                          style="width: 90%"
                                       ></span>
                                    </div>
                                 </div>
                                 <div>
                                    <div class="flex justify-between">
                                       <div>
                                          <div>Thoải mái</div>
                                       </div>
                                       <div>9,3</div>
                                    </div>
                                    <div class="bg-gray-200 h-2">
                                       <span
                                          class="bg-blue-500 block h-2"
                                          style="width: 90%"
                                       ></span>
                                    </div>
                                 </div>
                                 <div>
                                    <div class="flex justify-between">
                                       <div>
                                          <div>
                                             Đáng giá tiền<span
                                                ><i class="fas fa-arrow-up"></i
                                             ></span>
                                          </div>
                                       </div>
                                       <div>9,2</div>
                                    </div>
                                    <div class="bg-gray-200 h-2">
                                       <span
                                          class="bg-green-500 block h-2"
                                          style="width: 90%"
                                       ></span>
                                    </div>
                                 </div>
                                 <div>
                                    <div class="flex justify-between">
                                       <div>
                                          <div>
                                             Địa điểm
                                             <span
                                                ><i class="fas fa-arrow-up"></i
                                             ></span>
                                          </div>
                                       </div>
                                       <div>9,7</div>
                                    </div>
                                    <div class="bg-gray-200 h-2">
                                       <span
                                          class="bg-green-500 block h-2"
                                          style="width: 97%"
                                       ></span>
                                    </div>
                                 </div>
                                 <div>
                                    <div class="flex justify-between">
                                       <div>
                                          <div>
                                             WiFi miễn phí
                                             <span
                                                ><i class="fas fa-arrow-up"></i
                                             ></span>
                                          </div>
                                       </div>
                                       <div>8,8</div>
                                    </div>
                                    <div class="bg-gray-200 h-2">
                                       <span
                                          class="bg-blue-500 block h-2"
                                          style="width: 80%"
                                       ></span>
                                    </div>
                                 </div>
                                 <div class="row-start-3 col-start-3">
                                    <div>
                                       <div class="flex justify-end">
                                          <span class="text-sm mt-2"
                                             ><i
                                                class="fas fa-arrow-up text-green-500"
                                             ></i>
                                             Địa điểm cao ở Hà Nội</span
                                          >
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div class="mt-4 mb-4">
                              <h3
                                 class="flex justify-start text-xl font-bold mt-2 mb-2"
                              >
                                 Chọn chủ đề để đọc đánh giá
                              </h3>
                           </div>
                           <div class="flex justify-start gap-4">
                              <span class="border rounded-full gap-4 p-2">
                                 <span><i class="fas fa-plus"></i></span>
                                 <span>Vị trí</span>
                              </span>
                              <span class="border rounded-full gap-4 p-2">
                                 <span><i class="fas fa-plus"></i></span>
                                 <span>Bữa sáng</span>
                              </span>
                              <span class="border rounded-full gap-4 p-2">
                                 <span><i class="fas fa-plus"></i></span>
                                 <span>Phòng</span>
                              </span>
                              <span class="border rounded-full gap-4 p-2">
                                 <span><i class="fas fa-plus"></i></span>
                                 <span>Sạch sẽ</span>
                              </span>
                              <span class="border rounded-full gap-4 p-2">
                                 <span><i class="fas fa-plus"></i></span>
                                 <span>Giường</span>
                              </span>
                           </div>
                           <div class="flex justify-between">
                              <h3 class="text-xl font-bold">
                                 Đánh giá của khách
                              </h3>
                              <div class="flex justify-center gap-2">
                                 <label for="">Sắp xếp đánh giá theo:</label>
                                 <div class="border border-black px-1">
                                    <select name="" id="">
                                       <option value="">Phù hợp nhất</option>
                                       <option value="">Mới nhất</option>
                                       <option value="">Cũ nhất</option>
                                       <option value="">Điểm cao nhất</option>
                                       <option value="">Điểm thấp nhất</option>
                                    </select>
                                 </div>
                              </div>
                           </div>
                           <div>
                              <div>
                                 <div class="flex gap-2">
                                    <div
                                       class="flex-shrink-0 p-4"
                                       style="width: 300px; height: 256px"
                                    >
                                       <div
                                          class="p-4 bg-white rounded-md shadow-md h-full"
                                       >
                                          <div
                                             class="flex items-center space-x-4"
                                          >
                                             <div>
                                                <img
                                                   class="object-cover rounded-full"
                                                   src="./image/1.jpg"
                                                   alt="Card 1"
                                                   style="
                                                      height: 32px;
                                                      width: 32px;
                                                   "
                                                />
                                             </div>
                                             <div>
                                                <div class="" height="20">
                                                   <p class="font-bold">An</p>
                                                </div>
                                                <div
                                                   class="flex items-center space-x-2"
                                                >
                                                   <img
                                                      src="./image/2.webp"
                                                      alt="Flag"
                                                      style="
                                                         height: 12px;
                                                         width: 12px;
                                                      "
                                                   />
                                                   <p
                                                      style="height: 18px"
                                                      class="text-sm"
                                                   >
                                                      Đài Loan
                                                   </p>
                                                </div>
                                             </div>
                                          </div>
                                          <div class="">
                                             <ul class="space-y-4">
                                                <li>
                                                   <div
                                                      class="flex items-center gap-2"
                                                   >
                                                      <span
                                                         ><i
                                                            class="fas fa-bed-pulse"
                                                         ></i
                                                      ></span>
                                                      <div>
                                                         <button
                                                            class="max-w-full text-left whitespace-normal"
                                                         >
                                                            <span
                                                               class="text-xs"
                                                               >Phòng Deluxe
                                                               Giường Đôi/2
                                                               Giường Đơn Với
                                                               Cửa Sổ Bên
                                                               Trong</span
                                                            >
                                                         </button>
                                                      </div>
                                                   </div>
                                                </li>
                                                <li>
                                                   <div
                                                      class="flex items-center gap-2"
                                                   >
                                                      <span>
                                                         <svg
                                                            class="w-6 h-6 text-gray-800 dark:text-white"
                                                            aria-hidden="true"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="24"
                                                            height="24"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                         >
                                                            <path
                                                               stroke="currentColor"
                                                               stroke-linecap="round"
                                                               stroke-linejoin="round"
                                                               stroke-width="2"
                                                               d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"
                                                            />
                                                         </svg>
                                                      </span>
                                                      <div>
                                                         <button
                                                            class="max-w-full text-left whitespace-normal"
                                                         >
                                                            <span
                                                               class="text-xs"
                                                               >12 đêm- tháng
                                                               6/2024</span
                                                            >
                                                         </button>
                                                      </div>
                                                   </div>
                                                </li>
                                                <li>
                                                   <div
                                                      class="flex items-center gap-2"
                                                   >
                                                      <span
                                                         ><i
                                                            class="fas fa-user"
                                                         ></i
                                                      ></span>
                                                      <div>
                                                         <button
                                                            class="max-w-full text-left whitespace-normal"
                                                         >
                                                            <span
                                                               class="text-xs"
                                                               >Khách lẻ</span
                                                            >
                                                         </button>
                                                      </div>
                                                   </div>
                                                </li>
                                             </ul>
                                          </div>
                                       </div>
                                    </div>
                                    <div class="flex">
                                       <div>
                                          <div>
                                             <div>
                                                <div>
                                                   <svg
                                                      class="w-6 h-6 text-gray-800 dark:text-white"
                                                      aria-hidden="true"
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      width="24"
                                                      height="24"
                                                      fill="currentColor"
                                                      viewBox="0 0 24 24"
                                                   >
                                                      <path
                                                         d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
                                                      />
                                                   </svg>
                                                   <div>
                                                      <span
                                                         >Đánh giá hàng
                                                         đầu</span
                                                      >
                                                   </div>
                                                </div>
                                                <span
                                                   >Ngày đánh giá: ngày 6 tháng
                                                   6 năm 2024</span
                                                >
                                             </div>
                                             <div>
                                                <span>Kỳ nghỉ tốt..</span>
                                             </div>
                                          </div>
                                          <div
                                             class="border border-blue-500 bg-blue-500"
                                          >
                                             10
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            <section id="amenities" class="p-4">
               <h2>Tiện nghi</h2>
               <p>Nội dung tiện nghi của bạn ở đây...</p>
            </section>

            <section id="reviews" class="p-4">
               <h2>Đánh giá</h2>
               <p>Nội dung đánh giá của bạn ở đây...</p>
            </section>
         </div>
      </div> -->
        <!----------------------------------------------------------------------------------->
        <!-- <div class="grid grid-cols-5 gap-4 px-4 py-6 lg:py-8 md:grid-cols-4">
         <div>
            <h2
               class="mb-6 text-sm text-gray-900 uppercase dark:text-white font-bold"
            >
               Hỗ trợ
            </h2>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
               <li class="mb-4">
                  <a href="#" class="hover:underline text-sm"
                     >Các câu hỏi thường gặp về virus corona (COVID-19)</a
                  >
               </li>
               <li class="mb-4">
                  <a href="#" class="hover:underline text-sm"
                     >Quản lí các chuyến đi của bạn</a
                  >
               </li>
               <li class="mb-4">
                  <a href="#" class="hover:underline text-sm"
                     >Liên hệ Dịch vụ Khách hàng</a
                  >
               </li>
               <li class="mb-4">
                  <a href="#" class="hover:underline text-sm"
                     >Trung tâm thông tin bảo mật</a
                  >
               </li>
            </ul>
         </div>
         <div>
            <h2
               class="mb-6 text-sm font-bold text-gray-900 uppercase dark:text-white"
            >
               Khám phá thêm
            </h2>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
               <li class="mb-4">
                  <a href="#" class="hover:underline"
                     >Chương trình khách hàng thân thiết Genius</a
                  >
               </li>
               <li class="mb-4">
                  <a href="#" class="hover:underline"
                     >Ưu đãi theo mùa và dịp lễ</a
                  >
               </li>
               <li class="mb-4">
                  <a href="#" class="hover:underline">Bài viết về du lịch</a>
               </li>
               <li class="mb-4">
                  <a href="#" class="hover:underline">Cho thuê xe hơi</a>
               </li>
            </ul>
         </div>
         <div>
            <h2
               class="mb-6 text-sm font-bold text-gray-900 uppercase dark:text-white"
            >
               Điều khoản và cài đặt
            </h2>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
               <li class="mb-4">
                  <a href="#" class="hover:underline">Bảo mật & Cookie</a>
               </li>
               <li class="mb-4">
                  <a href="#" class="hover:underline"
                     >Điều khoản và điều kiện</a
                  >
               </li>
               <li class="mb-4">
                  <a href="#" class="hover:underline"> Tranh chấp đối tác</a>
               </li>
            </ul>
         </div>
         <div>
            <h2
               class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"
            >
               Dành cho đối tác
            </h2>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
               <li class="mb-4">
                  <a href="#" class="hover:underline"
                     >Đăng nhập vào trang Extranet</a
                  >
               </li>
               <li class="mb-4">
                  <a href="#" class="hover:underline">Trợ giúp đối tác</a>
               </li>
               <li class="mb-4">
                  <a href="#" class="hover:underline"
                     >Đăng chỗ nghỉ của Quý vị</a
                  >
               </li>
               <li class="mb-4">
                  <a href="#" class="hover:underline"
                     >Trở thành đối tác phân phối</a
                  >
               </li>
            </ul>
         </div>
         <div>
            <h2
               class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"
            >
               Về chúng tôi
            </h2>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
               <li class="mb-4">
                  <a href="#" class="hover:underline"
                     >Chúng tôi hoạt động như thế nào</a
                  >
               </li>
               <li class="mb-4">
                  <a href="#" class="hover:underline">Du lịch bền vững</a>
               </li>
               <li class="mb-4">
                  <a href="#" class="hover:underline">Truyền thông</a>
               </li>
               <li class="mb-4">
                  <a href="#" class="hover:underline">Cơ hội việc làm</a>
               </li>
            </ul>
         </div>
      </div> -->
    </div>
</template>