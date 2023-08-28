import MobileView from "@/components/page/home/mobile";
import WebView from "@/components/page/home/web";

export default function Home() {
  return (
    <main className="overflow-y-auto h-screen w-full" style={{ background: "linear-gradient(180deg, rgba(255, 255, 255, 0.87) 0%, #3EC25B 100%)" }}>
      {/* Web */}
      <div className="w-full hidden lg:block pb-[60px]">
        <WebView/>
      </div>

      {/* Mobile */}
      <div className="w-full block lg:hidden pb-[60px]">
        <MobileView/>
      </div>
    </main>
  );
}
