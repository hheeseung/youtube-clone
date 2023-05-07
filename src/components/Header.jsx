import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function Header() {
  const navigate = useNavigate();
  const goHome = () => navigate("/");
  const { register, handleSubmit } = useForm();
  const onValid = (data) => {
    navigate(`/videos/${data.keyword}`);
  };

  return (
    <header className="fixed flex w-screen justify-between items-center px-10 py-3 z-[1] bg-white">
      <div onClick={goHome} className="cursor-pointer">
        <img
          className="w-24"
          src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png"
          alt="youtube"
        />
      </div>
      <form className="md:w-1/3 relative" onSubmit={handleSubmit(onValid)}>
        <input
          {...register("keyword", { required: true })}
          className="w-full border-[1.5px] border-gray-300 rounded-3xl py-2 pl-4 pr-10 focus:border-blue-300 focus:outline-none"
          type="text"
          placeholder="검색..."
        />
        <button className="absolute right-4 top-3">
          <BsSearch />
        </button>
      </form>
      <div>
        <img
          className="w-10 rounded-full"
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
          alt="avatar"
        />
      </div>
    </header>
  );
}
