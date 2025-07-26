import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Halo,</h1>
            <p className="py-6">
              Perkenalkan, Nama saya adalah <span className="font-semibold">Dikdik Fajar Permadi</span>. saya adalah seorang web developer yang yang sudah bekerja lebih dari 3 tahun, dan saat ini saya bekerja di perusahaan <span className="font-semibold">Tech Mayantara Asia (TMA)</span>
            </p>

            <p className="py-6">
             Harapan saya, kepada TMA ini tidak hanya sukses secara bisnis, tetapi juga menjadi tempat kerja yang menginspirasi dan memberdayakan setiap karyawannya. Saya percaya bersama visi dan semangat yang sama, kita bisa mencapai hal-hal besar.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
