import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6">
      <h1 className="text-4xl font-bold">404</h1>

      <p className="text-muted">요청하신 페이지를 찾을 수 없습니다.</p>

      <Link href="/" className="bg-primary rounded-lg px-4 py-2 text-white">
        홈으로 이동
      </Link>
    </div>
  );
};

export default NotFound;
