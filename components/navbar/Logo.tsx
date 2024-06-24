import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src="https://qn-resource.playmods.net/html/2024052401/static/www/images/logo.png"
        alt="img"
        height={43}
        width={189}
      />
    </Link>
  );
};

export default Logo;
