export default function Home() {
  return (
    <div className="max-w-4xl mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Server Actions Demo
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <a
          href="/contact"
          className="bg-blue-600 text-white p-6 rounded-lg hover:bg-blue-700 text-center block"
        >
          <h2 className="text-xl font-semibold mb-2">Contact Form</h2>
          <p className="text-sm">Send us a message with validation</p>
        </a>

        <a
          href="/auth/login"
          className="bg-green-600 text-white p-6 rounded-lg hover:bg-green-700 text-center block"
        >
          <h2 className="text-xl font-semibold mb-2">Login</h2>
          <p className="text-sm">Authentication system</p>
        </a>

        <a
          href="/comments"
          className="bg-purple-600 text-white p-6 rounded-lg hover:bg-purple-700 text-center block"
        >
          <h2 className="text-xl font-semibold mb-2">Comments</h2>
          <p className="text-sm">Add and view comments</p>
        </a>

        <a
          href="/dashboard"
          className="bg-orange-600 text-white p-6 rounded-lg hover:bg-orange-700 text-center block"
        >
          <h2 className="text-xl font-semibold mb-2">Dashboard</h2>
          <p className="text-sm">Protected admin area</p>
        </a>
      </div>

      <div className="mt-12 bg-gray-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Features Demonstrated:</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Server Actions for form processing</li>
          <li>Form validation with error handling</li>
          <li>Loading states with useFormStatus</li>
          <li>Progressive enhancement (works without JavaScript)</li>
          <li>Post-Redirect-Get (PRG) pattern</li>
          <li>Cookie-based authentication</li>
          <li>Protected routes</li>
        </ul>
      </div>
    </div>
  );
}
