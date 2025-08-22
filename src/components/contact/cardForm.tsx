import { Button } from "@/components/ui/button"
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

export function CardContact() {
  return (
    <Card className="w-full max-w-lg">
      <CardHeader>
        <CardTitle className="sansation-bold">Envoyez-moi votre message</CardTitle>
        <CardDescription className="sansation-regular">
          Entrez votre adresse e-mail ci-dessous
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2 sansation-bold">
              <Label htmlFor="email">Nom</Label>
              <Input
                id="nom"
                type="text"
                placeholder="Votre nom"
                required
              />
            </div>
            <div className="grid gap-2 sansation-bold">
              <Label htmlFor="email">Adresse email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2 sansation-bold">
              <Label htmlFor="email">Sujet</Label>
              <Input
                id="subject"
                type="text"
                placeholder="Sujet de votre message"
                required
              />
            </div>
            <div className="grid gap-2 sansation-bold">
              <div className="flex items-center sansation-bold">
                <Label htmlFor="password">Message</Label>
              </div>
              <Textarea
                placeholder=""
                className="resize-none"
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full sansation-bold">
          Envoyer votre email
        </Button>
      </CardFooter>
    </Card>
  )
}
