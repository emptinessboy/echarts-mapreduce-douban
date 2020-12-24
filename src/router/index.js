import Vue from "vue";
import VueRouter from "vue-router";
import CommentsWordCount from "@/views/CommentsWordCount";
import CountryAndPlace from "@/views/CountryAndPlace";
import AllInfo from "@/views/AllInfo";
import DirectorCount from "@/views/DirectorCount";

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
  {
    path: "/director_count",
    name: "DirectorCount",
    component: DirectorCount
  },
];

const router = new VueRouter({
  routes
});

export default router;
