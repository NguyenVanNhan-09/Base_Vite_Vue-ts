<template>
    <div>
        <img src="../../assets/iconsSvg/vn.svg" alt="Icon" class="w-[25px] h-[25px]" id="open-modal" />
        <div
            id="modal-lang"
            class="fixed hidden flex justify-center items-center inset-0 z-[999] h-screen w-screen place-items-center bg-black bg-opacity-60 backdrop-blur-sm transition-opacity duration-300"
        >
            <div
                class="md-content relative m-4 min-w-[70%] max-w-[80%] rounded-lg bg-white font-sans text-base font-light leading-relaxed text-blue-gray-500 antialiased shadow-2xl"
            >
                <i id="close-modal" class="absolute fa-regular fa-circle-xmark top-[10px] right-[10px] text-2xl"></i>
                <div
                    class="flex items-center p-4 font-sans text-2xl antialiased font-semibold leading-snug shrink-0 text-blue-gray-900"
                >
                    Chọn ngôn ngữ của bạn
                </div>
                <div class="p-4">
                    <div class="">
                        <div class="font-bold text-sm">Được đề xuất cho bạn</div>
                        <div class="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-4 mt-3">
                            <div class="rounded-md flex items-center p-3 hover:bg-[#f2f2f2] lg:col-span-1">
                                <img src="../../assets/iconsSvg/vn.svg" alt="Icon" class="mr-3 w-[25px] h-[25px]" />

                                <div class="text-base font-normal text-[#1a1a1a]">Tiếng việt</div>
                            </div>
                            <div class="rounded-md flex items-center p-3 hover:bg-[#f2f2f2] lg:col-span-1">
                                <img src="../../assets/iconsSvg/vn.svg" alt="Icon" class="mr-3 w-[25px] h-[25px]" />
                                <div class="text-base font-normal text-[#1a1a1a]">Tiếng việt</div>
                            </div>
                            <div class="rounded-md flex items-center p-3 hover:bg-[#f2f2f2] lg:col-span-1">
                                <img src="../../assets/iconsSvg/vn.svg" alt="Icon" class="mr-3 w-[25px] h-[25px]" />
                                <div class="text-base font-normal text-[#1a1a1a]">Tiếng việt</div>
                            </div>
                            <div class="rounded-md flex items-center p-3 hover:bg-[#f2f2f2] lg:col-span-1">
                                <img src="../../assets/iconsSvg/vn.svg" alt="Icon" class="mr-3 w-[25px] h-[25px]" />
                                <div class="text-base font-normal text-[#1a1a1a]">Tiếng việt</div>
                            </div>
                            <div class="rounded-md flex items-center p-3 hover:bg-[#f2f2f2] lg:col-span-1">
                                <img src="../../assets/iconsSvg/vn.svg" alt="Icon" class="mr-3 w-[25px] h-[25px]" />
                                <div class="text-base font-normal text-[#1a1a1a]">Tiếng việt</div>
                            </div>
                        </div>
                    </div>
                    <div class="mt-6">
                        <div class="font-bold text-sm">Tất cả ngôn ngữ</div>
                        <div class="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-4 mt-3">
                            <div class="rounded-md flex items-center p-3 hover:bg-[#f2f2f2] lg:col-span-1">
                                <img src="../../assets/iconsSvg/vn.svg" alt="Icon" class="mr-3 w-[25px] h-[25px]" />
                                <div class="text-base font-normal text-[#1a1a1a]">Tiếng việt</div>
                            </div>
                            <div class="rounded-md flex items-center p-3 hover:bg-[#f2f2f2] lg:col-span-1">
                                <img src="../../assets/iconsSvg/vn.svg" alt="Icon" class="mr-3 w-[25px] h-[25px]" />
                                <div class="text-base font-normal text-[#1a1a1a]">Tiếng việt</div>
                            </div>
                            <div class="rounded-md flex items-center p-3 hover:bg-[#f2f2f2] lg:col-span-1">
                                <img src="../../assets/iconsSvg/vn.svg" alt="Icon" class="mr-3 w-[25px] h-[25px]" />
                                <div class="text-base font-normal text-[#1a1a1a]">Tiếng việt</div>
                            </div>
                            <div class="rounded-md flex items-center p-3 hover:bg-[#f2f2f2] lg:col-span-1">
                                <img src="../../assets/iconsSvg/vn.svg" alt="Icon" class="mr-3 w-[25px] h-[25px]" />
                                <div class="text-base font-normal text-[#1a1a1a]">Tiếng việt</div>
                            </div>
                            <div class="rounded-md flex items-center p-3 hover:bg-[#f2f2f2] lg:col-span-1">
                                <img src="../../assets/iconsSvg/vn.svg" alt="Icon" class="mr-3 w-[25px] h-[25px]" />
                                <div class="text-base font-normal text-[#1a1a1a]">Tiếng việt</div>
                            </div>
                            <div class="rounded-md flex items-center p-3 hover:bg-[#f2f2f2] lg:col-span-1">
                                <img src="../../assets/iconsSvg/vn.svg" alt="Icon" class="mr-3 w-[25px] h-[25px]" />
                                <div class="text-base font-normal text-[#1a1a1a]">Tiếng việt</div>
                            </div>
                            <div class="rounded-md flex items-center p-3 hover:bg-[#f2f2f2] lg:col-span-1">
                                <img src="../../assets/iconsSvg/vn.svg" alt="Icon" class="mr-3 w-[25px] h-[25px]" />
                                <div class="text-base font-normal text-[#1a1a1a]">Tiếng việt</div>
                            </div>
                            <div class="rounded-md flex items-center p-3 hover:bg-[#f2f2f2] lg:col-span-1">
                                <img src="../../assets/iconsSvg/vn.svg" alt="Icon" class="mr-3 w-[25px] h-[25px]" />
                                <div class="text-base font-normal text-[#1a1a1a]">Tiếng việt</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {onMounted} from 'vue';

onMounted(() => {
    const openModal = document.getElementById('open-modal');
    const closeModal = document.getElementById('close-modal');
    const modalLang = document.getElementById('modal-lang');
    const modalContent = modalLang.querySelector('.md-content');

    openModal.addEventListener('click', () => {
        modalLang.classList.remove('hidden');
    });

    closeModal.addEventListener('click', (e) => {
        modalLang.classList.add('hidden');
        e.stopPropagation();
    });

    modalLang.addEventListener('click', () => {
        modalLang.classList.add('hidden');
    });

    // Ngăn sự kiện click lan ra ngoài khi click vào nội dung bên trong modal
    modalContent.addEventListener('click', (e) => {
        e.stopPropagation();
    });
});
</script>

<style lang="scss" scoped></style>