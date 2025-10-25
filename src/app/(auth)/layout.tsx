import AuthLayout from '@layouts/AuthLayout';

export default function AuthenticateLayout({ children }: { children: React.ReactNode }) {
  return <AuthLayout>{children}</AuthLayout>;
}
