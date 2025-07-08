import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToHashElement() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Delay để đảm bảo DOM render xong
      setTimeout(() => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" }); // hoặc "auto"
        }
      }, 100); // tăng thời gian nếu data load chậm
    }
  }, [hash]);

  return null;
}
