import { BulunanIlanForm } from './BulunanIlanForm';

export default function BulunanIlanEklePage() {
  return (
    <div className="mx-auto max-w-lg">
      <h1 className="page-title">Bulunan Eşya İlanı Ekle</h1>
      <p className="mt-2 text-neutral-500">Bulduğunuz eşyayı tanımlayın</p>
      <BulunanIlanForm />
    </div>
  );
}
