import Link from "next/link"
export default function MessageAd() {
    return (
        <div class="w-full flex min-h-screen justify-center overflow-hidden bg-white">
            <div class="max-w-xl px-5 text-center mt-20">
                <h2 class="mb-2 text-[42px] font-bold text-zinc-800">No tienes materias inscritas!</h2>
                <p class="mb-2 text-lg text-zinc-500">  </p>
                <Link href="/inscripcion" class="mt-3 inline-block w-96 rounded bg-indigo-600 px-5 py-3 font-medium text-white shadow-md shadow-indigo-500/20 hover:bg-indigo-700">Ir a la inscripciones </Link>
            </div>
        </div>
    )
}