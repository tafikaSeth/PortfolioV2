import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "../ui/textarea"
import type { ContactFormData } from "@/types"
import { sendEmail } from "@/serviceEmail/emailJs"
import { toast } from "sonner"
import { useTranslation } from "react-i18next"

export function CardContact() {

  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ContactFormData>()
  const onSubmit = async (data: ContactFormData) => {
    try {
      await sendEmail(data);
      toast.success("Message envoyé avec succès 🎉");
      reset();
    } catch (error) {
      console.error(error);
      toast.error("Échec de l’envoi 😢");
    }
  };
  const { t } = useTranslation();

  return (
    <Card className="w-full max-w-lg">
      <CardHeader>
        <CardTitle className="sansation-bold">{t('contactTitle')}</CardTitle>
        <CardDescription className="sansation-regular">
          {t('contactSubtitle')}
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2 sansation-bold">
              <Label htmlFor="email">{t('formName')}</Label>
              <Input
                id="nom"
                type="text"
                placeholder="Votre nom"
                {...register('from_name', { required: 'Nom obligatoire' })}
              />
              {errors.from_name && <p className="text-red-500 font-light">{errors.from_name.message}</p>}
            </div>
            <div className="grid gap-2 sansation-bold">
              <Label htmlFor="email">{t('formEmail')}</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                {...register('email', { required: 'Email obligatoire' })}
              />
              {errors.email && <p className="text-red-500 font-light">{errors.email.message}</p>}
            </div>
            <div className="grid gap-2 sansation-bold">
              <div className="flex items-center sansation-bold">
                <Label htmlFor="password">Message</Label>
              </div>
              <Textarea
                placeholder=""
                className="resize-none"
                {...register('message', { required: 'Message obligatoire' })}
              />
              {errors.message && <p className="text-red-500 font-light">{errors.message.message}</p>}
            </div>
            <CardFooter className="flex-col gap-2">
              <Button type="submit" className="w-full sansation-bold" disabled={isSubmitting}>
                {
                  isSubmitting && (
                    <span className="w-4 h-4 border-2 border-foreground border-t-transparent rounded-full animate-spin"></span>
                  )}
                {isSubmitting ? "Envoi..." : t('formSend')}
              </Button>
            </CardFooter>
          </div>
        </CardContent>
      </form>
    </Card>
  )
}
