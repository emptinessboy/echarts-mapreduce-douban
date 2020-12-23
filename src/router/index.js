import Vue from "vue";
import VueRouter from "vue-router";
import CommentsWordCount from "@/views/CommentsWordCount";
import CountryAndPlace from "@/views/CountryAndPlace";
import AllInfo from "@/views/AllInfo";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "AllInfo",
    component: AllInfo
  },
  {
    path: "/comments-word",
    name: "CommentWordCount",
    component: CommentsWordCount
  },
  {
    path: "/country-and-place",
    name: "CountryAndPlace",
    component: CountryAndPlace
  },
];

const router = new VueRouter({
  routes
});

export default router;
