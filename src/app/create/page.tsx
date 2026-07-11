export default function CreateRoomPage() {
  return (
    <main className="min-h-screen bg-green-800 flex items-center justify-center">
      <div className="w-96 rounded-2xl bg-green-700 p-8 text-center shadow-xl">

        <h1 className="mb-6 text-3xl font-bold text-white">
          🏠 建立房間
        </h1>

        <input
          type="text"
          placeholder="請輸入你的名字"
          className="w-full rounded-lg p-3 text-black"
        />

        <button
          className="mt-6 w-full rounded-lg bg-red-600 py-3 text-lg font-bold text-white hover:bg-red-700"
        >
          建立房間
        </button>

      </div>
    </main>
  );
}