import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Languages = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className=" flex items-center flex-col gap-1 mt-1">
          <Image
            src="https://qn-resource.playmods.net/dev/image/b2afda8c-2e82-d21f-84ec-d1bb14414822.png"
            alt="img"
            height={36}
            width={36}
            className=" rounded-full h-[32px] w-[32px]"
          />
          <span className="text-sm ">EN</span>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Languages;
const data = [
  {
    name: "Português",
    image:
      "https://qn-resource.playmods.net/dev/image/a66c5192-59a6-4084-9e62-fe096b63ed17.png",
  },
  {
    name: "Türkçe",
    image:
      "https://qn-resource.playmods.net/dev/image/c0c40c4d-f125-778a-1571-d8b21673ac69.png",
  },
  {
    name: "العربية",
    image:
      "https://qn-resource.playmods.net/dev/image/7edf65f3-b86f-2ee5-a829-67bc36ad2f33.png",
  },
  {
    name: "Tiếng Việt",
    image:
      "https://qn-resource.playmods.net/prd/image/32ec9c91-45a3-d910-7140-15d779ecfb5e.jpg",
  },
  {
    name: "Español",
    image:
      "https://qn-resource.playmods.net/prd/image/e8436cba-dc95-e836-c77b-f9b225da329a.jpg",
  },
  {
    name: "English",
    image:
      "https://qn-resource.playmods.net/dev/image/b2afda8c-2e82-d21f-84ec-d1bb14414822.png",
  },
  {
    name: "English",
    image:
      "https://qn-resource.playmods.net/dev/image/b2afda8c-2e82-d21f-84ec-d1bb14414822.png",
  },
  {
    name: "English",
    image:
      "https://qn-resource.playmods.net/dev/image/b2afda8c-2e82-d21f-84ec-d1bb14414822.png",
  },
  {
    name: "English",
    image:
      "https://qn-resource.playmods.net/dev/image/b2afda8c-2e82-d21f-84ec-d1bb14414822.png",
  },
];
