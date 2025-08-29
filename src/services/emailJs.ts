import type { ContactFormData } from "@/types";
import emailjs from "@emailjs/browser";

export const sendEmail = async (data: ContactFormData) => {
  return await emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID as string,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string,
    {
      email: data.email,
      message: data.message,
      from_name: data.from_name,
    },
    import.meta.env.VITE_EMAILJS_PUBLIC as string
  );
};
