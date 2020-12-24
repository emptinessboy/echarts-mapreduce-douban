import Vue from "vue";
import VueRouter from "vue-router";
import CommentsWordCount from "@/views/CommentsWordCount";
import CountryAndPlace from "@/views/CountryAndPlace";
import AllInfo from "@/views/AllInfo";
import DirectorCount from "@/views/DirectorCount";
import ActorCount from "@/views/ActorCount";
import MovieType from "@/views/MovieType";

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
  {
    path: "/actor_count",
    name: "ActorCount",
    component: ActorCount
  },
  {
    path: "/movie_type",
    name: "MovieType",
    component: MovieType
  }
];

const router = new VueRouter({
  routes
});

export default router;
