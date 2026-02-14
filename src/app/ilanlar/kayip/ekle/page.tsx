import { KayipIlanForm } from './KayipIlanForm';

export default function KayipIlanEklePage() {
  return (
    <div className="mx-auto max-w-lg">
      <h1 className="page-title">Kayıp Eşya İlanı Ekle</h1>
      <p className="mt-2 text-neutral-500">Kaybettiğiniz eşyayı tanımlayın</p>
      <KayipIlanForm />
    </div>
  );
}
