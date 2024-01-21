import Swal from "sweetalert2";

export const ErrorMessage = ({message}) => Swal.fire({
    icon: "error",
    title: "Oops...",
    text: message,
    footer: '<a href="#">Why do I have this issue?</a>'
  });

