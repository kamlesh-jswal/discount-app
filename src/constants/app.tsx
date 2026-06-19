import {
  UtensilsCrossed,
  AirVent,
  BrushCleaning,
  Cake,
  Gift,
  LayoutGrid,
} from "lucide-react";

export const APP_MODULES = [
  {
    id: "all",
    title: "All",
    path: "/",
    icon: <LayoutGrid size={18} />,
  },
  {
    id: "dining",
    title: "Dining",
    path: "/restaurant",
    icon: <UtensilsCrossed size={18} />,
  },
  {
    id: "ac-services",
    title: "AC Services",
    path: "/ac-services",
    icon: <AirVent size={18} />,
  },
  {
    id: "cleaning",
    title: "Cleaning",
    path: "/cleaning",
    icon: <BrushCleaning size={18} />,
  },
  {
    id: "cakes",
    title: "Cakes",
    path: "/cakes",
    icon: <Cake size={18} />,
  },
  {
    id: "gifts",
    title: "Gift Items",
    path: "/gifts",
    icon: <Gift size={18} />,
  },
];
