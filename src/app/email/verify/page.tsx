// Import the VerifyEmail component from the specified path
import VerifyEmail from '@/components/email/verify/verify-email';

// Import the Suspense component from React
import { Suspense } from 'react';

// Define the Verify function component
export default function Verify() {
  return (
    <Suspense>
      <div className="flex flex-col">
        <VerifyEmail />
      </div>
    </Suspense>
  );
}
