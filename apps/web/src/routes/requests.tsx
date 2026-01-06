import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/requests')({
  component: Requests,
});

function Requests() {
  return (
    <div className="p-4">
      <h1 className="mb-4 text-2xl font-bold">Requests</h1>
    </div>
  );
}
