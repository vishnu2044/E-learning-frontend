import Swal from "sweetalert2";
import "./ErrorMessage.css"; //
export const ErrorMessage = ({message}) => Swal.fire({
    icon: "error",
    title: "Oops...",
    text: message,
    customClass: {
      confirmButton: 'custom-confirm-button-class'
    }
  });
