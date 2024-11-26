"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const Download = () => {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);
  const [isAndroid, setIsAndroid] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    const appScheme = "yarnapp://"; // Replace with your app's deep link scheme
    const androidPlayStoreLink =
      "https://play.google.com/store/apps/details?id=com.thehouseofsounds.yarnapp";
    const iosAppStoreLink =
      "https://apps.apple.com/us/app/yarn-for-fans-music-lovers/id6737612928"; // Replace with your App Store link

    const isAndroidDevice = /android/i.test(userAgent);
    const isIOSDevice = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;

    setIsAndroid(isAndroidDevice);
    setIsIOS(isIOSDevice);
    setIsMobile(isAndroidDevice || isIOSDevice);

    if (isAndroidDevice || isIOSDevice) {
      // Attempt to open the app using the custom scheme
      const deepLinkTimeout = setTimeout(() => {
        // If the app is not installed, redirect to the appropriate app store
        if (isAndroidDevice) {
          // window.location.href = androidPlayStoreLink;
          router.push(androidPlayStoreLink);
        } else if (isIOSDevice) {
          // window.location.href = iosAppStoreLink;
          router.push(iosAppStoreLink);
        }
      }, 2000); // Wait before redirecting to app store

      // Try to open the app
      // window.location.href = appScheme
      router.push(appScheme);

      // Clear timeout if the user has the app installed
      return () => clearTimeout(deepLinkTimeout);
    }
  }, [router]);

  const androidPlayStoreLink =
    "https://play.google.com/store/apps/details?id=com.thehouseofsounds.yarnapp";
  const iosAppStoreLink =
    "https://apps.apple.com/us/app/yarn-for-fans-music-lovers/id6737612928";

  return (
    <>
      <Navbar />
      <div
        style={{ textAlign: "center", padding: "20px" }}
        className="min-h-full border-t mt8"
      >
        <h1 className="h3">Redirecting to the app...</h1>
        <p>
          If the app doesn&apos;t open automatically, you&apos;ll be redirected
          to the app store.
        </p>
        {!isMobile && (
          <div>
            <p>Or download the app manually:</p>
            <div style={{ marginTop: "20px" }}>
              <a
                href={androidPlayStoreLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  margin: "10px",
                  padding: "10px 20px",
                  backgroundColor: "#0000ff90",
                  color: "#fff",
                  borderRadius: "5px",
                  textDecoration: "none",
                }}
              >
                Google Play
              </a>
              <a
                href={iosAppStoreLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  margin: "10px",
                  padding: "10px 20px",
                  backgroundColor: "#000",
                  color: "#fff",
                  borderRadius: "5px",
                  textDecoration: "none",
                }}
              >
                App Store
              </a>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Download;
