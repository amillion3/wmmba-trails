import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import Trails from "@/views/Trails.vue";

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/trails",
		name: "Trails",
		component: Trails,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;