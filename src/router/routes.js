
const routes = [
  {
    path: '/',
    component: () => import('../layouts/MainLayout'),
    children: [
      {name: "Home", path: "/", component: () => import("../pages/Home.vue")},
      {
        name: "Facial Area",
        path: "/facial-area",
        component: () => import("../pages/FacialArea.vue"),
      },
      {
        name: "Patient Concern",
        path: "/patient-concern",
        component: () => import("../pages/PatientConcern.vue"),
      },
      {
        name: "Upper Face",
        path: "/upper-face",
        component: () => import("../pages/UpperFace.vue"),
      },
      {
        name: "Lower Face",
        path: "/lower-face",
        component: () => import("../pages/LowerFace.vue"),
      },
      {
        name: "Mid Face",
        path: "/mid-face",
        component: () => import("../pages/MidFace.vue"),
      },
      {
        name: "Lips",
        path: "/lips",
        component: () => import("../pages/Lips.vue"),
      },
      {
        name: "Facial Lift",
        path: "/facial-lift",
        component: () => import("../pages/FacialLift.vue"),
      },
      {
        name: "Reduce Signs Of Aging",
        path: "/reduce-signs-of-aging",
        component: () => import("../pages/ReduceSignsOfAging.vue"),
      },
      {
        name: "Plump Lips",
        path: "/plump-lips",
        component: () => import("../pages/PlumpLips.vue"),
      },
      {
        name: "Improve Specific Facial Features",
        path: "/improve-specific-facial-features",
        component: () => import("../pages/ImproveSpecificFacialFeatures"),
      },
      // Always leave this as last one,
      // but you can also remove it
      {
        path: "/:catchAll(.*)*",
        component: () => import("../pages/Error404.vue"),
      },
    ]
  }
]

export default routes
