import Plus from "/plus.svg";

function InfoBucket({
  id,
  activeBucket,
  setActiveBucket,
  title,
  title1,
  description,
}) {
  const open = activeBucket === id;

  return (
    <div className="relative z-50 w-[26vw]">
      {/* Trigger */}
      <div className="flex items-center justify-between bg-white rounded-xl px-3 py-2 shadow-md">
        <p className="text-sm">
          <span className="text-gray-500">{title}</span> {title1}
        </p>

        <button
          onClick={() => setActiveBucket(open ? null : id)}
          className="h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center"
        >
          <img
            src={Plus}
            className={`transition-transform duration-200 ${
              open ? "rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Content */}
      {open && (
        <div className="mt-2 bg-white rounded-xl p-3 shadow-lg text-sm">
          {description}
        </div>
      )}
    </div>
  );
}

export default InfoBucket;
