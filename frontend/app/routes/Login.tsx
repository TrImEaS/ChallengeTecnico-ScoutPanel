import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Login - ScoutPanel" },
    { name: "description", content: "Login - ScoutPanel" },
  ];
}

export default function Login() {
  return (
    <div>
      <h1>Login</h1>
    </div>
  )
}