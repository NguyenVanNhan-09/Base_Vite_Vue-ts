const client = [
   {
      path: "",
      component: () => import("../layouts/Client.vue"),
      children: [
         {
            path: "home",
            component: () => import("../pages/Home.vue"),
         },
         {
            path: "search",
            component: () => import("../pages/Search.vue"),
         },
         {
            path: "checkout",
            component: () => import("../pages/Checkout.vue"),
         },
         {
            path: "checkout-info",
            component: () => import("../pages/CheckoutInfo.vue"),
         },
         {
            path: "your-property",
            component: () => import("../pages/YourProperty.vue"),
         },
         {
            path: "login",
            component: () => import("../pages/Login.vue"),
         },
         {
            path: "detail",
            component: () => import("../pages/Detail.vue"),
         },
         {
            path: "test",
            component: () => import("../components/Modal/LanguageMd.vue"),
         },
      ],
   },
];
export default client;
