import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Image from "next/image";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#0b0f0d] text-emerald-50 selection:bg-emerald-500 selection:text-black font-sans">
      <Navbar/>
      {/* ================= بخش درباره ما: داستان ما ================= */}
      <section className="py-20 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <span className="text-xs text-emerald-400 font-semibold uppercase tracking-wider">درباره ما</span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-white leading-tight">
            داستان ما؛ <br />
            <span className="text-emerald-400">از یک ایده‌پردازی تا یک تجربه متفاوت</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            ما در فود با هدف ارائه غذای سالم، باکیفیت و متنوع برای آرامش خاطر در محیط‌های اداری، تلاش می‌کنیم. استانداردهای شرکتی، آماده‌سازی غذا با بهترین مواد اولیه و تعهد به زمان، از ارزش‌های بنیادین ماست.
          </p>
        </div>
        
        {/* تصویر سرآشپز */}
        <div className="relative w-full h-64 md:h-96 rounded-3xl overflow-hidden border border-[#1c2e24] bg-[#121a16] shadow-2xl flex items-end p-6 md:p-8">
  {/* تصویر به صورت پس‌زمینه کامل با object-cover */}
  <Image 
    src="/pic2.png"
    alt="تصویر حرفه‌ای از سرآشپز و تهیه غذا"
    fill
    className="absolute inset-0 h-full w-full object-cover object-center"
  />

  {/* لایه گرادینت تاریک برای خوانایی متن روی تصویر */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

  {/* متن روی تصویر */}
  <div className="relative z-10">
    <p className="text-sm md:text-base text-emerald-300 font-semibold drop-shadow-lg">
      تصویر حرفه‌ای از تهیه غذا
    </p>
  </div>
</div>
      </section>

      {/* ================= ویژگی‌های سه‌گانه (سلامت، رضایت، کیفیت) ================= */}
      <section className="py-12 bg-[#0e1411] border-y border-[#1c2e24]">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-6 rounded-2xl bg-[#121a16] border border-[#1c2e24] hover:border-emerald-500/50 transition">
            <span className="text-3xl">🌱</span>
            <h4 className="font-bold text-white text-base mt-3 mb-1">سلامت</h4>
            <p className="text-xs text-gray-400">غذای بهتر</p>
          </div>
          <div className="p-6 rounded-2xl bg-[#121a16] border border-[#1c2e24] hover:border-emerald-500/50 transition">
            <span className="text-3xl">❤️</span>
            <h4 className="font-bold text-white text-base mt-3 mb-1">رضایت</h4>
            <p className="text-xs text-gray-400">تجربه‌ای فراتر از انتظار</p>
          </div>
          <div className="p-6 rounded-2xl bg-[#121a16] border border-[#1c2e24] hover:border-emerald-500/50 transition">
            <span className="text-3xl">⭐</span>
            <h4 className="font-bold text-white text-base mt-3 mb-1">کیفیت</h4>
            <p className="text-xs text-gray-400">از بهترین مواد </p>
          </div>
        </div>
      </section>

      {/* ================= بخش وبلاگ و مقالات کاربردی ================= */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
          <div>
            <span className="text-xs text-emerald-400 font-semibold uppercase tracking-wider">وبلاگ</span>
            <h2 className="text-2xl md:text-3xl font-bold text-white mt-1">مقالات و نکات کاربردی</h2>
            <p className="text-xs md:text-sm text-gray-400 mt-2 max-w-xl">
              در این بخش، جدیدترین مقالات و مطالب در ارتباط با تغذیه شرکتی، سلامت کارکنان و سبک زندگی مدرن را مطالعه کنید.
            </p>
          </div>
          <Link href="/blog" className="text-xs text-emerald-400 hover:text-emerald-300 font-medium transition flex items-center gap-1">
            مشاهده همه مقالات ←
          </Link>
        </div>

        {/* گرید مقالات */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* کارت بزرگ مقاله ویژه */}
          <div className="lg:col-span-2 bg-[#121a16] border border-[#1c2e24] rounded-3xl overflow-hidden p-6 flex flex-col justify-between group hover:border-emerald-500/50 transition shadow-xl">
  <div className="h-56 rounded-2xl bg-[#0b0f0d] mb-6 border border-[#1c2e24] relative overflow-hidden">
    <Image 
      src='/pic1.png'
      alt="pic"
      fill
      className="object-cover object-center group-hover:scale-105 transition duration-500"
    />
  </div>
  <div>
    <span className="text-[11px] bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-full font-medium">تغذیه شرکتی</span>
    <h3 className="text-lg md:text-xl font-bold text-white mt-3 mb-2 group-hover:text-emerald-400 transition">۵ راهکار برای بهبود تغذیه کارکنان در محیط کار</h3>
    <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed">
      تغذیه مناسب در محیط کار تاثیر مستقیمی بر روی بهره‌وری، انرژی و خلق و خوی پرسنل دارد. راهکارهای عملی برای مدیران...
    </p>
  </div>
</div>


          {/* ستون مقالات کوچک‌تر */}
          <div className="space-y-6">
            <div className="bg-[#121a16] border border-[#1c2e24] p-5 rounded-2xl group hover:border-emerald-500/50 transition">
              <span className="text-[10px] text-emerald-400">مدیریت و بهره‌وری</span>
              <h4 className="font-bold text-sm text-white mt-1 mb-2 group-hover:text-emerald-400 transition">چگونه یک منوی سازمانی مؤثر طراحی کنیم؟</h4>
              <span className="text-[11px] text-gray-500">۴ دقیقه مطالعه</span>
            </div>
            
            <div className="bg-[#121a16] border border-[#1c2e24] p-5 rounded-2xl group hover:border-emerald-500/50 transition">
              <span className="text-[10px] text-emerald-400">سلامت کارکنان</span>
              <h4 className="font-bold text-sm text-white mt-1 mb-2 group-hover:text-emerald-400 transition">تاثیر غذای سالم بر بهره‌وری تیم‌ها</h4>
              <span className="text-[11px] text-gray-500">۳ دقیقه مطالعه</span>
            </div>

            <div className="bg-[#121a16] border border-[#1c2e24] p-5 rounded-2xl group hover:border-emerald-500/50 transition">
              <span className="text-[10px] text-emerald-400">تغذیه شرکتی</span>
              <h4 className="font-bold text-sm text-white mt-1 mb-2 group-hover:text-emerald-400 transition">روندهای جدید در تغذیه شرکتی</h4>
              <span className="text-[11px] text-gray-500">۵ دقیقه مطالعه</span>
            </div>
          </div>

        </div>
      </section>

      {/* ================= بنر نهایی دعوت به اقدام ================= */}
      <section className="py-12 max-w-7xl mx-auto px-6">
        <div className="bg-gradient-to-r from-[#121a16] to-[#0e1411] border border-[#1c2e24] rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-[#0b0f0d] border border-[#1c2e24] flex items-center justify-center text-2xl shrink-0">
              
            </div>
            <div className="space-y-1 text-center md:text-right">
              <h3 className="text-xl md:text-2xl font-bold text-white">با فود، آسانتر غذا بخرید، بهتر کار کنید</h3>
              <p className="text-xs text-gray-400">همین حالا اپلیکیشن را دانلود کنید و تفاوت را احساس کنید.</p>
            </div>
          </div>
          <button className="bg-emerald-500 hover:bg-emerald-400 text-black font-bold px-6 py-3.5 rounded-xl transition shadow-lg shadow-emerald-500/20 text-sm whitespace-nowrap">
             دانلود اپلیکیشن
          </button>
        </div>
      </section>

      {/* ================= فوتر کامل ================= */}
      <Footer/>

    </div>
  );
}
