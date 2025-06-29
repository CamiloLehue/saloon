import { FaWhatsapp } from "react-icons/fa";


type Props = {
    name: string;
    phone: string;
    message: string;
};

const WhatsAppButton = ({ phone = "56912345678", message = "Hola, quiero más información sobre sus servicios" }: Props) => {
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-fle˝x items-center px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition"
        >
            <FaWhatsapp className="mr-2" size={20} />
        </a>
    );
};

export default WhatsAppButton;