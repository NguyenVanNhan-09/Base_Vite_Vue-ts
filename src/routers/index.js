import { createRouter, createWebHistory } from "vue-router";
import client from "./client";
import admin from "./admin";

// dùng các routes bằng cách import vào và dtruc "..." vào mảng
const routes = [...client, ...admin];

const routers = createRouter({
   history: createWebHistory(),
   routes,
});
export default routers;
