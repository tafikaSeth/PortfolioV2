import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"

export function ModalProfil() {
    return (
        <Avatar className="w-[50%] h-50 md:h-100">
            <AvatarImage src="/assets/images/profile.png" alt="profile" />
            <AvatarFallback>Profile</AvatarFallback>
        </Avatar>
    )
}
