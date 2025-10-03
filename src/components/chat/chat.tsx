import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { askQuestionApi } from "@/services/chat";
import { useTranslation } from "react-i18next";

type QAEntry = {
  question: string;
  answer: string;
};

export function QuestionResponse() {
  const [question, setQuestion] = useState("");
  const [history, setHistory] = useState<QAEntry[]>([]);
  const [loading, setLoading] = useState(false);

  const { t } = useTranslation();

  const askQuestion = async () => {
    if (!question.trim()) return;
    setLoading(true);

    try {
      const data = await askQuestionApi(question.trim());
      const newEntry = {
        question: question.trim(),
        answer: data.answer || "Pas de réponse trouvée",
      };
      setHistory((prev) => [newEntry, ...prev]);
      setQuestion("");
    } catch (err) {
      console.error(err);
      alert("Erreur lors de l'envoi de la question.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    askQuestion();
  };

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl font-semibold">{t("askYourQuestion")}</h1>
      <ScrollArea className="h-64 w-full border rounded-md p-3">
        {history.length === 0 ? (
          <p className="text-sm text-muted-foreground">{t("noQuestionsYet")}</p>
        ) : (
          history.map((entry, index) => (
            <div key={index} className="mb-4">
              <p className="font-medium text-primary">Q: {entry.question}</p>
              <p className="text-muted-foreground">R: {entry.answer}</p>
              <hr className="my-2" />
            </div>
          ))
        )}
      </ScrollArea>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <Input
          placeholder={t("writeAQuestion")}
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <Button type="submit" disabled={loading} aria-label="Button envoyer question">
          {loading ? <Loader2 className="animate-spin h-4 w-4" /> : t("send")}
        </Button>
      </form>
    </div>
  );
}
