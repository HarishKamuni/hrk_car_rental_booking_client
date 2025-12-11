import React, { useState } from 'react';
import { assets, dummyUserData, ownerMenuLinks } from '../../assets/assets';
import { NavLink, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const user = dummyUserData;
  const location = useLocation();
  const [image, setImage] = useState('');
  const updateImage = async () => {
    user.image = URL.createObjectURL(image);
    setImage('');
  };
  return (
    <div className="relative min-h-screen md:flex flex-col items-center pt-8 max-w-13 md:max-w-60 w-full border-r border-borderColor text-sm">
      <div className="group relative">
        <label htmlFor="image">
          <img
            src={
              image
                ? URL.createObjectURL(image)
                : user?.image ||
                  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAL0AAACUCAMAAADxqtj8AAAASFBMVEX6+vqPj4+Li4v////x8fGioqKHh4f39/elpaWWlpbg4ODu7u6SkpKfn5/p6emDg4PV1dW4uLiysrLAwMCsrKzNzc3Hx8d8fHySRURAAAAEDklEQVR4nO2c2XasIBBFkVImFXH+/z+9kGR10qNC21DexX7IS162taoZjxKSyWQymUwmk8lkMv878E1qDX+sNK+1cuian+sRgGgzDqKVTdPIVgyj0afxBz4LWVBL4aCU0aadZnIGf+CjNS5usE/SLOj9oRw7dqv+A2Mzx+wPRMnuibuja1VqxefYwrO7nrlpoAVr+aGeXrt/+Q8lSn0o2215qy8wVh/4Rtdc9GVq1XuAN/vk7djTppa9g+/o+Yv+kNr2lnG/vG2eGVXrg/Jwt0iFSb8UPqV34yZPrfwLzK9m2Ed0Bk/xS7/KF6iGTRifLczOUHzwLr1FIrEH4196W3yNQx9EgHxRDCjsoW6C7HH8bsEEyRcNihkLxjD7YsFgT4aQIccO+T0Ge99VwsV+Sm3u0Lu2VA/sRZla3S0vZZB8QSud2v0d+xbBfBVsX5zaHknt22D71O7W/tRjzhvjPYrdocdZyJU9ikUm9GH2xYjCfg6Tx7HGJHXYkClRtD2BKkQeR9tb+yWk8TscjUMID9mVUyTyBAL2JwzFiOOA0vcg0JY+tfQv/odpbE7t/Idaep4hVxjWOBdmz85Hc4r5hc/FjztOSO17Dfj0DkV37Qb6PlrxTL7Bd+EMZqc+bRDsCO8As6t5aItliXCN3Z/vyClg2Is/xG5xt2atDmVK4YetSZfhuma+BbR4+uOlzVSjlnfxKDM0D9IilMnBoA+mubSIGiW7egDasXZUiDv+L0BqtQi6rp1jXalYVHmCul9RKmWMUdotJ0+m7jhtDjmTySAECC+PgCcYleyMuvRT9T5TP6vY0wGowa0GjoAx2cdd88PieYDzEkplzBMS6EPOXV/B4gVGYFwPli+KNVb1QR1deQeL1Ps8LIe2QaTAS2iSa4s4t3DBN5wb0Cj3EXXg3fimfYy7c9ChiZYt+6qOYB+cx9myj3HKlu2zPTb7Koa9DkxybdqLCGMOqatPjfcxbkH9rgc97OO8BxSYmt60j7JSgOUj8kUT5WYCVNi7DlvIOPFM/plBR8TZnYDXG5F7oZF2tqA/sjOMdbUCHxjxWbT3OED7Z6E27SO5k5Of5/hnobagbdSslG8WagsTU56QQ3snfrzxwLVa/FAv8Oqo6rMEr40BF8fop5B3CdjhCH3Wp0myAw94n/wGStOFYkHtDgI+kZcpc14Awxv+tOkTpxhADU1Y/zA5pA/YATd9EfA9haaPftH5EBeGKjqfBmKdHDWaqBQQbsS68wHouk6Ko6j7BQAwk7Q/Yfr8Gb7+JXuFMnFkpfTcu68Dfn1d7+o63H2rrq2m3tQo1b9xaqUy89j3wySEqCr7R0xDPy6z0SVi8wvfWTRe1hbt/pScnDGgdkbnTCaTyWQymUwmkwngH2PFNCAGvIXdAAAAAElFTkSuQmCC?q=80&w=300'
            }
            alt=""
            className="h-9 md:h-14 w-9 md:w-14 rounded-full mx-auto"
          />
          <input
            type="file"
            id="image"
            accept="image/*"
            hidden
            onChange={(e) => setImage(e.target.files[0])}
          />
          <div className="absolute hidden top-0 right-0 left-0 bottom-0 bg-black/10 rounded-full group-hover:flex items-center justify-center cursor-pointer">
            <img src={assets.edit_icon} alt="" />
          </div>
        </label>
      </div>
      {image && (
        <button className="absolute top-0 right-0 flex p-2 gap-1 bg-primery/10 text-primery cursor-pointer">
          save{' '}
          <img
            src={assets.check_icon}
            width={13}
            alt=""
            onClick={updateImage}
          />
        </button>
      )}
      <p className="mt-2 text-base max-md:hidden">{user?.name}</p>
      <div className="w-full">
        {ownerMenuLinks.map((link, index) => (
          <NavLink
            key={index}
            to={link.path}
            className={`relative flex items-center gap-2 w-full py-3 pl-4 first:mt-6 ${
              link.path === location.pathname
                ? 'bg-primery/10 text-primery'
                : 'text-gray-600'
            }`}
          >
            <img
              src={
                link.path === location.pathname ? link.coloredIcon : link.icon
              }
              alt="car icon"
            />
            <span className="max-md:hidden">{link.name}</span>
            <div
              className={`${
                link.path === location.pathname && 'bg-primery'
              } w-1.5 h-8 rounded-l right-0 absolute`}
            ></div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
