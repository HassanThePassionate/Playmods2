import Link from "next/link";
import { FaBuilding } from "react-icons/fa";
const Company = () => {
  return (
    <div>
      <div className='mb-6 font-semibold flex items-center gap-3'>
        <FaBuilding />
        <h2>Company</h2>
      </div>
      <ul className='flex flex-col gap-2'>
        <li>
          <Link href='#' className='hover:underline'>
            Privacy Policy
          </Link>
        </li>
        <li>
          <Link href='#' className='hover:underline'>
            Cookies Policy
          </Link>
        </li>
        <li>
          <Link href='#' className='hover:underline'>
            Contact
          </Link>
        </li>
        <li>
          <Link href='#' className='hover:underline'>
            About Us
          </Link>
        </li>
        <li>
          <Link href='#' className='hover:underline'>
            Terms and Conditions
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Company;
