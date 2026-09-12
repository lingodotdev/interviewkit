import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/requests')({
  component: Requests,
});

function Requests() {
  return <h1 className="text-2xl font-bold">Requests</h1>;
}
