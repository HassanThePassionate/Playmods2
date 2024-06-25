const ModInfo = () => {
  return (
    <div className='p-6 mt-[30px] bg-[#FFFBF4]'>
      <div className='flex gap-3 items-center text-sm font-bold mb-3'>
        <img
          src='https://qn-resource.playmods.net/html/2024061901/static/www/images/tips.png'
          alt='img'
          height={16}
          width={16}
        />
        Mod Info :
      </div>
      <ul className='text-sm text-[#cc8a3f]'>
        <li>Mod Menu</li>
        <li>Paid games free download</li>
        <li>Move faster</li>
        <li>Jump enhancement</li>
        <li>
          <span>NOTE:</span> If you encounter a black screen, the game is
          loading, please wait patiently.
        </li>
      </ul>
    </div>
  );
};

export default ModInfo;
