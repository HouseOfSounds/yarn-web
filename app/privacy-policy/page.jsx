import Navbar from "@/components/navbar";
import Head from "next/head";

const PrivacyPolicy = () => {
  return (
    <main className="px-6">
      <Head>
        <title>Privacy Policy - Yarn</title>
        <meta name="description" content="Privacy Policy of Yarn" />
      </Head>
      <Navbar />
      <div className="mx-auto max-w-screen-lg w-full py-5   ">
        <main className="max-w-4xl mx-auto p-6">
          <h1 className="text-3xl font-semibold mb-4">Privacy Policy</h1>
          <p className="text-lg text-gray-700 mb-4">
            <strong>Effective Date:</strong> 26/10/2024
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-3">1. Introduction</h2>
          <p className="text-lg text-gray-700 mb-4">
            Welcome to Yarn (the &quot;App&quot;). We value your privacy and are
            committed to protecting your personal data. This Privacy Policy
            explains how we collect, use, share, and protect your information
            when you use our App and related services.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-3">
            2. Information We Collect
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            We may collect and process the following types of information:
          </p>
          <ul className="list-disc pl-8 space-y-2 text-lg text-gray-700">
            <li>
              <strong>Personal Information:</strong> When you sign up for an
              account, we may collect your name, email address, username,
              profile picture, and other identifying information.
            </li>
            <li>
              <strong>Usage Data:</strong> We may collect information about your
              interactions with the App, such as the music you listen to,
              communities you join, comments, likes, and other activities within
              the App.
            </li>
            <li>
              <strong>Device Information:</strong> We may collect information
              about the device you use to access the App, including IP address,
              browser type, operating system, and device identifiers.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-3">
            3. How We Use Your Information
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-8 space-y-2 text-lg text-gray-700">
            <li>Provide and improve the App&quot;s features and services.</li>
            <li>Personalize your experience within the App.</li>
            <li>
              Communicate with you about updates, promotions, and other relevant
              information.
            </li>
            <li>Monitor and analyze usage and trends to improve the App.</li>
            <li>Ensure the security and integrity of the App.</li>
            <li>Comply with legal obligations and protect our rights.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-3">
            4. Sharing Your Information
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            We do not sell, trade, or rent your personal information to third
            parties. We may share your information with:
          </p>
          <ul className="list-disc pl-8 space-y-2 text-lg text-gray-700">
            <li>
              <strong>Service Providers:</strong> Third-party service providers
              who assist us in operating the App, such as hosting providers,
              analytics services, and customer support.
            </li>
            <li>
              <strong>Legal Compliance:</strong> If required by law, we may
              disclose your information to government authorities or other third
              parties in response to legal requests.
            </li>
            <li>
              <strong>Business Transfers:</strong> In the event of a merger,
              acquisition, or sale of assets, your information may be
              transferred as part of that transaction.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-3">
            5. Your Rights and Choices
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            You have the following rights regarding your personal data:
          </p>
          <ul className="list-disc pl-8 space-y-2 text-lg text-gray-700">
            <li>
              <strong>Access:</strong> You can request access to the personal
              information we hold about you.
            </li>
            <li>
              <strong>Correction:</strong> You can request that we correct any
              inaccuracies in your personal information.
            </li>
            <li>
              <strong>Deletion:</strong> You can request that we delete your
              personal information, subject to certain legal limitations.
            </li>
            <li>
              <strong>Opt-Out:</strong> You can opt out of receiving promotional
              communications from us by following the unsubscribe instructions
              in those communications.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-3">6. Security</h2>
          <p className="text-lg text-gray-700 mb-4">
            We take reasonable measures to protect your personal information
            from unauthorized access, use, or disclosure. However, no data
            transmission over the internet or storage system can be guaranteed
            to be 100% secure.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-3">
            7. Children&quot;s Privacy
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Our App is not intended for use by children under the age of 13. We
            do not knowingly collect personal information from children under
            13. If we become aware that we have collected such information, we
            will take steps to delete it.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-3">
            8. Changes to This Privacy Policy
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            We may update this Privacy Policy from time to time. When we do, we
            will revise the &quot;Effective Date&quot; at the top of this
            policy. We encourage you to review this Privacy Policy periodically
            to stay informed about how we are protecting your information.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-3">9. Contact Us</h2>
          <p className="text-lg text-gray-700 mb-4">
            If you have any questions or concerns about this Privacy Policy or
            our data practices, please contact us at:{" "}
            <a
              href="mailto:sounds@those.app"
              className="text-blue-500 hover:underline"
            >
              sounds@those.app
            </a>
          </p>
        </main>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
