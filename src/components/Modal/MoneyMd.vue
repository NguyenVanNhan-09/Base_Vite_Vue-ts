<script setup>
import {onMounted} from 'vue';

onMounted(() => {
    const openModalMoney = document.getElementById('open-modal-money');
    const closeModalMoney = document.getElementById('close-modal-money');
    //  modal
    const modal = document.getElementById('money-modal');
    //  modal-content
    const modalContent = modal.querySelector('.md-content');

    openModalMoney.addEventListener('click', () => {
        modal.classList.remove('hidden');
    });

    closeModalMoney.addEventListener('click', (e) => {
        modal.classList.add('hidden');
        e.stopPropagation();
    });

    modal.addEventListener('click', () => {
        modal.classList.add('hidden');
    });

    // Ngăn sự kiện click lan ra ngoài khi click vào nội dung bên trong modal
    modalContent.addEventListener('click', (e) => {
        e.stopPropagation();
    });
});
</script>
<template>
    <div>
        <button
            id="open-modal-money"
            class="text-[16px] uppercase py-2 px-3 text-white font-medium hover:bg-[#1a4f9f] cursor-pointer"
        >
            Vnd
        </button>
        <div
            id="money-modal"
            class="fixed flex z-[999] inset-0 bg-black bg-opacity-50 justify-center items-center hidden"
        >
            <div class="bg-white p-6 rounded-md shadow-lg max-w-screen-lg w-full md-content">
                <div class="flex justify-between items-center mb-8">
                    <h2 class="text-xl font-semibold text-black">Chọn loại tiền tệ của bạn</h2>
                    <button id="close-modal-money" class="text-gray-500 hover:text-gray-700">
                        <svg
                            class="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M6 18L18 6M6 6l12 12"
                            ></path>
                        </svg>
                    </button>
                </div>
                <p class="text-sm text-black mb-5">
                    Trong trường hợp có thể áp dụng, giá sẽ được quy đổi và hiển thị theo loại tiền tệ mà bạn chọn. Có
                    thể bạn sẽ thanh toán bằng loại tiền tệ khác tùy vào chỗ nghỉ bạn đặt và phí dịch vụ cũng có thể
                    được áp dụng.
                </p>
                <div class="grid grid-cols-4 gap-2 text-black">
                    <div class="hover:bg-stone-600 hover:bg-opacity-5 p-2 rounded-lg cursor-pointer">
                        Đồng Việt Nam
                        <p class="text-black text-opacity-50">VND</p>
                    </div>
                    <div class="hover:bg-stone-600 hover:bg-opacity-5 p-2 rounded-lg cursor-pointer">
                        Đô la Mỹ
                        <p class="text-black text-opacity-50">USD</p>
                    </div>
                    <div class="hover:bg-stone-600 hover:bg-opacity-5 p-2 rounded-lg cursor-pointer">
                        Yên Nhật
                        <p class="text-black text-opacity-50">JPY</p>
                    </div>
                    <div class="hover:bg-stone-600 hover:bg-opacity-5 p-2 rounded-lg cursor-pointer">
                        Euro
                        <p class="text-black text-opacity-50">EUR</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>