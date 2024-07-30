import { Outlet } from 'react-router-dom';
import { slidesItemType } from '../../App';
import EmblaCarousel from '../../components/EmblaCarousel';

const AuthLayout = () => {
  const slides: slidesItemType[] = [
    {
      imageUrl:
        'https://preview.colorlib.com/theme/coffeeblend/images/bg_1.jpg',
      content: ' loremadf dasfadsf adfdasfdsfsdf sdfsdfsdf sdf ssdf sdf sfdgsf',
    },
    {
      imageUrl:
        'https://preview.colorlib.com/theme/coffeeblend/images/bg_2.jpg',
      content: ' loremadf dasfadsf adfdasfdsfsdf sdfsdfsdf sdf ssdf sdf sfdgsf',
    },
    {
      imageUrl:
        'https://preview.colorlib.com/theme/coffeeblend/images/bg_3.jpg',
      content: ' loremadf dasfadsf adfdasfdsfsdf sdfsdfsdf sdf ssdf sdf sfdgsf',
    },
  ];

  const options = {
    loop: true,
  };
  return (
    <div className="flex items-center justify-center bg-black w-dvw h-dvh">
      <div className="relative box">
        <EmblaCarousel slides={slides} options={options}></EmblaCarousel>
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
