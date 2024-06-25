import MenuList from "./MenuList";
import Languages from "./Languages";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

const Menu = () => {
  return (
    <div className=' flex items-center gap-12 '>
      <MenuList
        title='Games'
        icon='https://qn-resource.playmods.net/html/2024052401/static/www/images/common/icon-menu-games.png'
      />
      <MenuList
        title='Apps'
        icon='https://qn-resource.playmods.net/html/2024052401/static/www/images/common/icon-menu-apps.png'
      />
      <MenuList
        title='Ranking'
        icon='https://qn-resource.playmods.net/html/2024052401/static/www/images/common/icon-menu-rankings.png'
      />
      <MenuList
        title='Modules'
        icon='https://qn-resource.playmods.net/html/2024052401/static/www/images/common/icon-menu-mod.png'
      />
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className='font-normal '>
              <MenuList
                title='Article'
                icon='https://qn-resource.playmods.net/html/2024052401/static/www/images/common/icon-menu-article.png'
              />
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>
                <Link href='#' className='hover:text-blue-700'>
                  News
                </Link>
              </NavigationMenuLink>
              <NavigationMenuLink>
                <Link href='#' className='hover:text-blue-700'>
                  Redeem Code
                </Link>
              </NavigationMenuLink>
              <NavigationMenuLink>
                <Link href='#' className='hover:text-blue-700'>
                  Guide
                </Link>
              </NavigationMenuLink>
              <NavigationMenuLink>
                <Link href='#' className='hover:text-blue-700'>
                  Reviews
                </Link>
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <MenuList
        title='Topic'
        icon='https://qn-resource.playmods.net/html/2024052401/static/www/images/common/icon-menu-topics.png'
      />
      <Languages />
    </div>
  );
};

export default Menu;
