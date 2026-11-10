// app/blog/page.tsx
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Image from "next/image";

const values = [
  { icon: "🌱", title: "سلامت", description: "غذای بهتر" },
  { icon: "❤️", title: "رضایت", description: "تجربه‌ای فراتر از انتظار" },
  { icon: "⭐", title: "کیفیت", description: "از بهترین مواد" },
];

const articles = [
  {
    category: "مدیریت و بهره‌وری",
    title: "چگونه یک منوی سازمانی مؤثر طراحی کنیم؟",
    readingTime: "۴ دقیقه مطالعه",
  },
  {
    category: "سلامت کارکنان",
    title: "تاثیر غذای سالم بر بهره‌وری تیم‌ها",
    readingTime: "۳ دقیقه مطالعه",
  },
  {
    category: "تغذیه شرکتی",
    title: "روندهای جدید در تغذیه شرکتی",
    readingTime: "۵ دقیقه مطالعه",
  },
];

export default function BlogPage() {
  return (
    <div
      dir="rtl"
      className="min-h-screen bg-[#FAF7F2] text-stone-900 font-sans transition-colors duration-300 selection:bg-emerald-200 selection:text-stone-900 dark:bg-[#0b0f0d] dark:text-emerald-50 dark:selection:bg-emerald-500 dark:selection:text-black"
    >
      <Navbar />

      {/* داستان ما */}
      <section className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-20 md:grid-cols-2">
        <div className="space-y-6">
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            درباره ما
          </span>

          <h2 className="text-2xl font-extrabold leading-tight text-stone-900 md:text-4xl dark:text-white">
            داستان ما؛ <br />
            <span className="text-emerald-600 dark:text-emerald-400">
              از یک ایده‌پردازی تا یک تجربه متفاوت
            </span>
          </h2>

          <p className="text-sm leading-relaxed text-stone-600 md:text-base dark:text-gray-400">
            ما در فود با هدف ارائه غذای سالم، باکیفیت و متنوع برای آرامش خاطر
            در محیط‌های اداری، تلاش می‌کنیم. استانداردهای شرکتی، آماده‌سازی غذا
            با بهترین مواد اولیه و تعهد به زمان، از ارزش‌های بنیادین ماست.
          </p>
        </div>

        <div className="relative flex h-64 w-full items-end overflow-hidden rounded-3xl border border-stone-200 bg-white p-6 shadow-xl md:h-96 md:p-8 dark:border-[#1c2e24] dark:bg-[#121a16] dark:shadow-2xl">
          <Image
            src="/pic2.png"
            alt="سرآشپز در حال تهیه غذا"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
          <p className="relative z-10 text-sm font-semibold text-emerald-300 drop-shadow-lg md:text-base">
            تصویر حرفه‌ای از تهیه غذا
          </p>
        </div>
      </section>

      {/* ارزش‌ها */}
      <section className="border-y border-stone-200 bg-[#F4EFE6] py-12 dark:border-[#1c2e24] dark:bg-[#0e1411]">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 px-6 text-center md:grid-cols-3">
          {values.map((value) => (
            <div
              key={value.title}
              className="rounded-2xl border border-stone-200 bg-white p-6 transition hover:border-emerald-600/50 dark:border-[#1c2e24] dark:bg-[#121a16] dark:hover:border-emerald-500/50"
            >
              <span className="text-3xl" aria-hidden="true">
                {value.icon}
              </span>
              <h3 className="mb-1 mt-3 text-base font-bold text-stone-900 dark:text-white">
                {value.title}
              </h3>
              <p className="text-xs text-stone-600 dark:text-gray-400">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* مقالات */}
      <section id="articles" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              وبلاگ
            </span>
            <h2 className="mt-1 text-2xl font-bold text-stone-900 md:text-3xl dark:text-white">
              مقالات و نکات کاربردی
            </h2>
            <p className="mt-2 max-w-xl text-xs text-stone-600 md:text-sm dark:text-gray-400">
              در این بخش، جدیدترین مقالات و مطالب در ارتباط با تغذیه شرکتی،
              سلامت کارکنان و سبک زندگی مدرن را مطالعه کنید.
            </p>
          </div>

          <Link
            href="#articles"
            className="flex items-center gap-1 text-xs font-medium text-emerald-600 transition hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300"
          >
            مشاهده همه مقالات ←
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* مقاله ویژه */}
          <div className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-stone-200 bg-white p-6 shadow-lg transition hover:border-emerald-600/50 lg:col-span-2 dark:border-[#1c2e24] dark:bg-[#121a16] dark:shadow-xl dark:hover:border-emerald-500/50">
            <div className="relative mb-6 h-56 overflow-hidden rounded-2xl border border-stone-200 bg-[#FAF7F2] dark:border-[#1c2e24] dark:bg-[#0b0f0d]">
              <Image
                src="/pic1.png"
                alt="غذای سالم برای کارکنان در محیط کار"
                fill
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-cover object-center transition duration-500 group-hover:scale-105"
              />
            </div>

            <div>
              <span className="rounded-full bg-emerald-100 px-3 py-1 text-[11px] font-medium text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400">
                تغذیه شرکتی
              </span>
              <h3 className="mb-2 mt-3 text-lg font-bold text-stone-900 transition group-hover:text-emerald-600 md:text-xl dark:text-white dark:group-hover:text-emerald-400">
                ۵ راهکار برای بهبود تغذیه کارکنان در محیط کار
              </h3>
              <p className="line-clamp-2 text-xs leading-relaxed text-stone-600 dark:text-gray-400">
                تغذیه مناسب در محیط کار تاثیر مستقیمی بر روی بهره‌وری، انرژی و
                خلق و خوی پرسنل دارد. راهکارهای عملی برای مدیران...
              </p>
            </div>
          </div>

          {/* مقالات کوچک‌تر */}
          <div className="space-y-6">
            {articles.map((article) => (
              <div
                key={article.title}
                className="group rounded-2xl border border-stone-200 bg-white p-5 transition hover:border-emerald-600/50 dark:border-[#1c2e24] dark:bg-[#121a16] dark:hover:border-emerald-500/50"
              >
                <span className="text-[10px] text-emerald-600 dark:text-emerald-400">
                  {article.category}
                </span>
                <h3 className="mb-2 mt-1 text-sm font-bold text-stone-900 transition group-hover:text-emerald-600 dark:text-white dark:group-hover:text-emerald-400">
                  {article.title}
                </h3>
                <span className="text-[11px] text-stone-500 dark:text-gray-500">
                  {article.readingTime}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* دعوت به اقدام */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-8 rounded-3xl border border-stone-200 bg-gradient-to-r from-white to-[#F4EFE6] p-8 shadow-xl md:flex-row md:p-12 dark:border-[#1c2e24] dark:from-[#121a16] dark:to-[#0e1411] dark:shadow-2xl">
          <div className="flex items-center gap-6">
            <div
              className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-stone-200 bg-[#FAF7F2] dark:border-[#1c2e24] dark:bg-[#0b0f0d]"
              aria-hidden="true"
            />
            <div className="space-y-1 text-center md:text-right">
              <h3 className="text-xl font-bold text-stone-900 md:text-2xl dark:text-white">
                با فود، آسانتر غذا بخرید، بهتر کار کنید
              </h3>
              <p className="text-xs text-stone-600 dark:text-gray-400">
                همین حالا اپلیکیشن را دانلود کنید و تفاوت را احساس کنید.
              </p>
            </div>
          </div>

          <button
            type="button"
            className="whitespace-nowrap rounded-xl bg-emerald-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-600/20 transition hover:bg-emerald-500 dark:bg-emerald-500 dark:text-black dark:shadow-emerald-500/20 dark:hover:bg-emerald-400"
          >
            دانلود اپلیکیشن
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
