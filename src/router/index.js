import Vue from "vue";
import VueRouter from "vue-router";
import CommentsWordCount from "@/views/CommentsWordCount";
import CountryAndPlace from "@/views/CountryAndPlace";
import AllInfo from "@/views/AllInfo";
import DirectorCount from "@/views/DirectorCount";
import ActorCount from "@/views/ActorCount";
import MovieType from "@/views/MovieType";
import YearCount from "@/views/YearCount";
import ListComments from "@/views/ListComments";
import ListCountry from "@/views/ListCountry";
import ListType from "@/views/ListType";

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
  },
  {
    path: "/year_count",
    name: "YearCount",
    component: YearCount
  },
  {
    path: "/list_comments",
    name: "ListComments",
    component: ListComments
  },
  {
    path: "/list_country",
    name: "ListCountry",
    component: ListCountry
  },
  {
    path: "/list_type",
    name: "ListType",
    component: ListType
  }
];

const router = new VueRouter({
  routes
});

export default router;
