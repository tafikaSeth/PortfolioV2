import { PhoneCallIcon, MapPin, Linkedin } from "lucide-react";
import { IoMdMail } from "react-icons/io";
import { CardText } from "@/components/contact/cardText";
import { CardContact } from "@/components/contact/cardForm";

const Contact = () => {
    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-xl text-center md:text-4xl md:text-left font-bold">Contact</h1>
            <div className="flex flex-col gap-4 md:flex md:flex-row md:gap-12 w-[100%] items-center justify-center">
                <div className="grid grid-col-1 w-[90%] gap-4 md:grid md:grid-cols-2">
                    <CardText icon={<MapPin size={30} />} title="Adresse" description="Madagascar" />
                    <CardText icon={<IoMdMail size={30} />} title="Email" description="tafikaseth@gmail.com" />
                    <CardText icon={<PhoneCallIcon size={30} />} title="Phone" description="+261384816313" />
                    <CardText icon={<Linkedin size={30} />} title="Linkedin" description="Seth Tafika" />
                </div>
                <div className="flex w-[90%] gap-5 flex-col md:flex-row justify-between items-center">
                    <CardContact />
                </div>
            </div>
        </div>
    );
}
export default Contact