export const Topbar = () => {
  return (
    <div className="py-2 w-full text-white bg-emerald-600">
      <div className="container flex justify-center items-center px-4 mx-auto text-sm md:text-base">
        <p className="text-center">
          আমাদের যে কোন পণ্য অর্ডার করতে কল বা WhatsApp করুন:{" "}
          <a
            href="tel:+8801727815959"
            className="font-semibold underline transition-colors hover:text-emerald-100"
          >
            Call +8801885517676
          </a>
        </p>
      </div>
    </div>
  );
};
