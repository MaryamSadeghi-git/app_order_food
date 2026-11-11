//component/FeaturesGrid.tsx
import FoodScenarios from '@/components/FoodScenarios';
import InteractiveDemo from '@/components/InteractiveDemo';
import PaymentMethods from '@/components/PaymentMethods';
import PlatformMetrics from '@/components/PlatformMetrics';

export default function FeaturesGrid(){
    return(

<section className="max-w-6xl mx-auto px-6 ">
        <div className="text-center mb-16">
          <InteractiveDemo /> 
          <FoodScenarios /> 
          <span id="features" /> 
          <PlatformMetrics /> 
          <PaymentMethods /> 
          
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="p-8 rounded-2xl bg-white border border-emerald-600/20 hover:border-emerald-600/50 hover:bg-emerald-50/60 dark:bg-bg-card dark:border-emerald-500/20 dark:hover:border-emerald-500/50 dark:hover:bg-bg-cardHover transition duration-300 shadow-sm dark:shadow-none">
            <h3 className="text-xl font-bold text-stone-900 dark:text-white mb-2">بنر شاخص صفحه اول</h3>
            <p className="text-sm text-stone-600 dark:text-slate-400 leading-relaxed">
              نمایش برند شما در نخستین ثانیه‌های باز شدن اپلیکیشن برای تمام کاربران محله شما؛ مناسب کمپین‌های لانچ، تغییر منو و تخفیف روزانه.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-8 rounded-2xl bg-white border border-emerald-600/20 hover:border-emerald-600/50 hover:bg-emerald-50/60 dark:bg-bg-card dark:border-emerald-500/20 dark:hover:border-emerald-500/50 dark:hover:bg-bg-cardHover transition duration-300 shadow-sm dark:shadow-none">
            <h3 className="text-xl font-bold text-stone-900 dark:text-white mb-2">صدر نتایج جستجو (Sponsored)</h3>
            <p className="text-sm text-stone-600 dark:text-slate-400 leading-relaxed">
              هنگامی که کاربر کلماتی مثل «کباب»، «پاستا» یا «سالاد» را سرچ می‌کند، منوی رستوران شما با تگ ویژه بالاتر از سایر رقبا دیده می‌شود.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-8 rounded-2xl bg-white border border-emerald-600/20 hover:border-emerald-600/50 hover:bg-emerald-50/60 dark:bg-bg-card dark:border-emerald-500/20 dark:hover:border-emerald-500/50 dark:hover:bg-bg-cardHover transition duration-300 shadow-sm dark:shadow-none">
            <h3 className="text-xl font-bold text-stone-900 dark:text-white mb-2">پیشنهاد هوشمند پیش از پرداخت</h3>
            <p className="text-sm text-stone-600 dark:text-slate-400 leading-relaxed">
              افزایش مبلغ هر فاکتور با پیشنهاد مکمل‌ها، دسرها و نوشیدنی‌های سودده درست در آخرین گام تسویه‌حساب مشتری.
            </p>
          </div>
        </div>
      </section>
    )
}