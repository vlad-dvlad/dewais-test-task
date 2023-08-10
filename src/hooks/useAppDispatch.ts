import { useDispatch } from "react-redux";
import { AppDisparch } from "../store/store";

export const useAppDispatch = () => useDispatch<AppDisparch>();
