import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

class toasts {
  static toastSuccess(text) {
    toast(text, {
      theme: "auto",
      type: "success",
      dangerouslyHTMLString: true,
    });
  }
  static toastFailed(text) {
    toast(text, {
      theme: "auto",
      type: "error",
      dangerouslyHTMLString: true,
    });
  }
}
export default toasts;
