import { data2 } from "./data";

const DaGym = () => {
  return (
    <>
      {data2.map((v) => {
        return (
          <section
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
            }}
          >
            <div
              style={{
                width: "150px",
                height: "150px",
                display: "flex",
              }}
            >
              <img
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
                src={v.gymPhotoSmall}
                alt=""
              />
            </div>
            <div style={{ width: "400px" }} className="flex flex-col gap-3">
              <span className="text-sm text-gray-400">{v.tags}</span>
              <span className="font-semibold text-2xl">{v.gymName}</span>
              <span className="text-lg font-bold text-red-600">
                {v.price.originalPrice.toLocaleString()}원~
              </span>
              <span className="text-sm text-gray-400 font-bold">
                무료 서비스 :
                <span className="text-sm text-gray-400">{v.service.free}</span>
              </span>
            </div>
          </section>
        );
      })}
    </>
  );
};

export default DaGym;
