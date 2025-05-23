import { IoStar, IoStarHalf, IoStarOutline } from "react-icons/io5";
import Card from "../../components/Card";
import { FaPen, FaTrash } from "react-icons/fa";
import Button from "../../components/Button";

const CourseList = ({ data, handleDelete, handleEdit }) => {
  if (!data) {
    return <p>Loading...</p>;
  }

  if (data.length === 0) {
    return <p className="text-center w-full">Belum ada kursus</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {data &&
        data.map((item, index) => (
          <div key={index} className="hover:-translate-y-2 duration-200">
            <Card
              className={" w-full p-2 md:p-5 rounded-xl gap-2 md:gap-3 "}
              key={index}>
              <div className="flex flex-row md:flex-col gap-3">
                <img
                  src="/assets/courses/course-1.png"
                  alt={item.slug}
                  className="size-24 md:size-full rounded-xl"
                />
                <div className="flex flex-col gap-1 md:gap-3">
                  <div className="flex justify-between">
                    <h1 className="font-poppins/[120%] font-semibold text-base md:text-lg text-text-primary ">
                      {item.name}
                    </h1>
                    <div className="flex gap-1">
                      <Button onClick={() => handleEdit(item)} className="bg-warning-secondary text-white"><FaPen /></Button>
                      <Button onClick={() => handleDelete(item.id)} className="bg-danger-tight text-white"><FaTrash /></Button>
                    </div>
                  </div>
                  <p className="invisible md:visible h-0 md:h-auto line-clamp-2 font-dm/[140%] font-medium tracking-[0.2px] text-text-secondary text-base">
                    {item.description}
                  </p>
                  <div className="flex items-center gap-2.5">
                    <img src={item.mentor.avatar} alt="" />
                    <div>
                      <p className="font-dm/[140%] font-medium text-base text-text-primary capitalize">
                        {item.mentor.name}
                      </p>
                      <div className="flex flex-col md:flex-row gap-1 font-dm text-sm font-normal text-text-secondary">
                        <p>{item.mentor.profession}</p>
                        <p className="hidden md:flex">di</p>
                        <p className="hidden md:flex font-bold">{item.mentor.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                  <div className="flex gap-1 text-warning">
                    <IoStar />
                    <IoStar />
                    <IoStar />
                    <IoStarHalf />
                    <IoStarOutline />
                  </div>
                  <p className="font-dm/[140%] font-medium text-sm text-text-secondary underline underline-offset-2">
                    {item.rating} ({item.sold})
                  </p>
                </div>
                <p className="font-poppins/[120%] text-success text-2xl font-semibold">
                  Rp {item.price}
                </p>
              </div>
            </Card>
          </div>

        ))}
    </div>
  );
};

export default CourseList;
