import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL as string

export async function askQuestionApi(question: string) {
  const res = await axios.post(API_URL, { question });
  return res.data;
}
