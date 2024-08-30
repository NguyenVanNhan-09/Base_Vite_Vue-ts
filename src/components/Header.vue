<script setup>
import Banner from './Banner.vue';
import NavSearch from './NavSearch.vue';
import MoneyMd from '../components/Modal/MoneyMd.vue';
import LanguageMd from '../components/Modal/LanguageMd.vue';
</script>

<template>
    <div>
        <header class="bg-[#003b95]">
            <div class="w-[1024px] mx-auto max-w-full">
                <div class="h-full relative">
                    <div class="flex justify-between pt-5">
                        <h2 class="text-3xl font-bold text-white leading-none grow">logo.com</h2>
                        <div class="flex gap-2.5 items-center justify-end">
                            <!-- modal tiền tệ -->
                            <MoneyMd />
                            <div class="py-2 px-3 hover:bg-[#1a4f9f] cursor-pointer">
                                <!-- modal ngôn ngữ -->
                                <LanguageMd />
                            </div>
                            <a
                                href="#"
                                class="fa-regular fa-circle-question text-xl text-white py-2 px-3 hover:bg-[#1a4f9f] cursor-pointer"
                            ></a>
                            <div
                                class="leading-none text-base font-medium text-white py-2 px-3 hover:bg-[#1a4f9f] cursor-pointer"
                            >
                                Đăng chỗ nghỉ của quý vị
                            </div>
                            <button class="py-2 px-4 bg-white font-medium text-[#006ce4] text-sm rounded">
                                Đăng ký
                            </button>
                            <button class="py-2 px-4 bg-white font-medium text-[#006ce4] text-sm rounded">
                                Đăng nhập
                            </button>
                        </div>
                    </div>
                    <div>
                        <nav class="flex justify-start py-4 text-white">
                            <a
                                href="#"
                                class="flex items-center space-x-2 py-[11px] px-[16px] rounded-3xl text-sm border hover:bg-[#1a4f9f]"
                            >
                                <!-- icon -->
                                <img src="../assets/iconsSvg/bed.svg" class="h-5 w-5" alt="" />
                                <span>Lưu trú</span>
                            </a>
                            <a
                                href="#"
                                class="flex items-center space-x-2 py-[11px] px-[16px] rounded-3xl text-sm hover:bg-[#1a4f9f]"
                            >
                                <i class="fa-solid fa-plane"></i>
                                <span>Chuyến bay</span>
                            </a>
                            <a
                                href="#"
                                class="flex items-center space-x-2 py-[11px] px-[16px] rounded-3xl text-sm hover:bg-[#1a4f9f]"
                            >
                                <i class="fa-solid fa-earth-americas"></i>
                                <span>Chuyến bay + Khách sạn</span>
                            </a>
                            <a
                                href="#"
                                class="flex items-center space-x-2 py-[11px] px-[16px] rounded-3xl text-sm hover:bg-[#1a4f9f]"
                            >
                                <i class="fa-solid fa-car"></i>
                                <span>Thuê xe</span>
                            </a>
                            <a
                                href="#"
                                class="flex items-center space-x-2 py-[11px] px-[16px] rounded-3xl text-sm hover:bg-[#1a4f9f]"
                            >
                                <i class="fa-solid fa-map-location-dot"></i>
                                <span>Địa điểm tham quan</span>
                            </a>
                            <a
                                href="#"
                                class="flex items-center space-x-2 py-[11px] px-[16px] rounded-3xl text-sm hover:bg-[#1a4f9f]"
                            >
                                <i class="fa-solid fa-taxi"></i>
                                <span>Taxi sân bay</span>
                            </a>
                        </nav>
                    </div>
                    <!-- banner -->
                    <Banner />
                    <!-- nav-search -->
                    <NavSearch />
                </div>
            </div>
        </header>
    </div>
</template>

<style lang="scss" scoped></style>