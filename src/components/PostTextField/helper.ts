import * as Yup from "yup";

export const postFormInitialValues = {
  emoji: "💬",
  text: "",
};

export const postFormSchema = Yup.object({
  emoji: Yup.string().required("Emoji is required"),
  text: Yup.string()
    .max(500, "Please limit your input to 500 characters.")
    .required("Please write at least one character."),
});
