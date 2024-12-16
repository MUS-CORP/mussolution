import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/about2Dark.svg"
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/about2Light.svg"
                alt="about image"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Kode Bebas Bug
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Kami memastikan setiap website dibangun dengan kode bersih dan
                  bebas bug, sehingga performa situs Anda stabil, cepat, dan
                  optimal. Kualitas kode kami menjamin pengalaman pengguna
                  terbaik dan kemudahan dalam pengelolaan di masa depan.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Dukungan Prima
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Layanan pelanggan prioritas yang siap membantu Anda kapan
                  saja. Tim support profesional kami selalu tersedia untuk
                  memastikan bisnis Anda berjalan lancar tanpa hambatan.
                  Keberhasilan Anda adalah prioritas kami!
                </p>
              </div>
              {/* <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Teknologi Terbaru
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Website modern dengan teknologi/FrameWork terbaru untuk
                  performa super cepat dan SEO-friendly. Solusi ini ideal untuk
                  meningkatkan visibilitas Anda di mesin pencari dan memberikan
                  pengalaman pengguna yang tak tertandingi.
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
