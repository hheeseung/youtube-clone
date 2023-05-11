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
    <header className="flex items-center w-full px-4 lg:px-0 py-2 bg-white">
      <div onClick={goHome} className="cursor-pointer">
        <img
          className="w-24"
          src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png"
          alt="youtube"
        />
      </div>
      <form
        className="md:w-1/3 relative mx-auto"
        onSubmit={handleSubmit(onValid)}
      >
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
    </header>
  );
}
