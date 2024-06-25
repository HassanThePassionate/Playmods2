import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

const Languages = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className='outline-none'>
        <div className=' flex items-center flex-col gap-1 mt-1'>
          <Image
            src='https://qn-resource.playmods.net/dev/image/b2afda8c-2e82-d21f-84ec-d1bb14414822.png'
            alt='img'
            height={36}
            width={36}
            className=' rounded-full h-[32px] w-[32px]'
          />
          <span className='text-sm flex items-center  gap-1'>
            EN <ChevronDown size={14} />
          </span>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='grid grid-cols-2 py-2'>
        {data.map((lang) => {
          return (
            <DropdownMenuItem>
              <Link
                href='#'
                className='flex items-center hover:text-blue-600 hover:bg-[#fbfbfb] gap-3 w-[200px] h-[47px] border py-2 px-3 rounded-full'
              >
                <Image
                  src={lang.flag}
                  alt='img'
                  width={30}
                  height={30}
                  className='rounded-full h-[30px] w-[30px]'
                />
                <span>{lang.name}</span>
              </Link>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Languages;
const data = [
  {
    name: "العربية",
    flag: "https://savemp3.net/wp-content/plugins/sitepress-multilingual-cms/res/flags/ar.png",
  },
  {
    name: "简体中文",
    flag: "https://savemp3.net/wp-content/plugins/sitepress-multilingual-cms/res/flags/zh-hans.png",
  },
  {
    name: "Nederlands",
    flag: "https://savemp3.net/wp-content/plugins/sitepress-multilingual-cms/res/flags/nl.png",
  },
  {
    name: "English",
    flag: "https://savemp3.net/wp-content/plugins/sitepress-multilingual-cms/res/flags/en.png",
  },
  {
    name: "Français",
    flag: "https://savemp3.net/wp-content/plugins/sitepress-multilingual-cms/res/flags/fr.png",
  },
  {
    name: "Deutsch",
    flag: "https://savemp3.net/wp-content/plugins/sitepress-multilingual-cms/res/flags/de.png",
  },
  {
    name: "हिन्दी",
    flag: "https://savemp3.net/wp-content/plugins/sitepress-multilingual-cms/res/flags/hi.png",
  },
  {
    name: "עברית",
    flag: "https://savemp3.net/wp-content/plugins/sitepress-multilingual-cms/res/flags/he.png",
  },
  {
    name: "Italiano",
    flag: "https://savemp3.net/wp-content/plugins/sitepress-multilingual-cms/res/flags/it.png",
  },
  {
    name: "Indonesia",
    flag: "https://savemp3.net/wp-content/plugins/sitepress-multilingual-cms/res/flags/id.png",
  },
  {
    name: "日本語",
    flag: "https://savemp3.net/wp-content/plugins/sitepress-multilingual-cms/res/flags/ja.png",
  },
  {
    name: "한국어",
    flag: "https://savemp3.net/wp-content/plugins/sitepress-multilingual-cms/res/flags/ko.png",
  },
  {
    name: "Melayu",
    flag: "https://savemp3.net/wp-content/plugins/sitepress-multilingual-cms/res/flags/ms.png",
  },
  {
    name: "Polski",
    flag: "https://savemp3.net/wp-content/plugins/sitepress-multilingual-cms/res/flags/pl.png",
  },
  {
    name: "Português",
    flag: "https://savemp3.net/wp-content/plugins/sitepress-multilingual-cms/res/flags/pt-pt.png",
  },
  {
    name: "فارسی",
    flag: "https://savemp3.net/wp-content/plugins/sitepress-multilingual-cms/res/flags/fa.png",
  },
  {
    name: "Română",
    flag: "https://savemp3.net/wp-content/plugins/sitepress-multilingual-cms/res/flags/ro.png",
  },
  {
    name: "Русский",
    flag: "https://savemp3.net/wp-content/plugins/sitepress-multilingual-cms/res/flags/ru.png",
  },
  {
    name: "Español",
    flag: "https://savemp3.net/wp-content/plugins/sitepress-multilingual-cms/res/flags/es.png",
  },
  {
    name: "Svenska",
    flag: "https://savemp3.net/wp-content/plugins/sitepress-multilingual-cms/res/flags/sv.png",
  },
  {
    name: "ไทย",
    flag: "https://savemp3.net/wp-content/plugins/sitepress-multilingual-cms/res/flags/th.png",
  },
  {
    name: "Türkçe",
    flag: "https://savemp3.net/wp-content/plugins/sitepress-multilingual-cms/res/flags/tr.png",
  },
  {
    name: "Українська",
    flag: "https://savemp3.net/wp-content/plugins/sitepress-multilingual-cms/res/flags/uk.png",
  },
  {
    name: "Tiếng Việt",
    flag: "https://savemp3.net/wp-content/plugins/sitepress-multilingual-cms/res/flags/vi.png",
  },
];
