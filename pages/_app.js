import Head from "next/head";
/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
// import "@ionic/react/css/structure.css"; // Remove if nothing is visible
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";
import "../styles/globals.css";
import "../styles/custom.css";
import {
	IonFooter,
	IonIcon,
	IonLabel,
	IonPage,
	IonTabButton,
	setupIonicReact,
} from "@ionic/react";
import { useRouter } from "next/router";

import NonSSRWrapper from "../components/NoSSRWrapper";

import { IonApp } from "@ionic/react";
import Menu from "../components/Menu";
import { useEffect, useState } from "react";
import { setIsBack } from "../store/actions";
import IonicFooter from "../components/Footer";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
	setupIonicReact();

	const [isTab, setIsTab] = useState(false);

	useEffect(() => {
		if (typeof window !== "undefined") {
			// set isTab depending on screen size
			const x = window.matchMedia("(max-width: 768px)");
			if (x.matches) {
				setIsTab(true);
			} else {
				setIsTab(false);
			}
			x.onchange = () => {
				if (x.matches) {
					setIsTab(true);
				} else {
					setIsTab(false);
				}
			};
		}
	}, []);

	const router = useRouter();
	useEffect(() => {
		router.beforePopState(() => {
			setIsBack(true);
			return true;
		});
	}, [router]);

	return (
		<>
			{isTab ? (
				<IonPage id="main-content">
					<Head>
						<title>Create Next App</title>
						<meta name="description" content="Generated by create next app" />
						<meta
							name="viewport"
							content="width=device-width, initial-scale=1, viewport-fit=cover"
						/>
						<link rel="icon" href="/favicon.ico" />
					</Head>
					<NonSSRWrapper>
						{/* <Menu /> */}
						<Component {...pageProps} isTab={isTab} />
						<Footer isTab={isTab} />
					</NonSSRWrapper>
				</IonPage>
			) : (
				<>
					<Head>
						<title>Create Next App</title>
						<meta name="description" content="Generated by create next app" />
						<meta
							name="viewport"
							content="width=device-width, initial-scale=1, viewport-fit=cover"
						/>
						<link rel="icon" href="/favicon.ico" />
					</Head>
					<NonSSRWrapper>
						<Component {...pageProps} isTab={isTab} />
						<Footer isTab={isTab} />
					</NonSSRWrapper>
				</>
			)}
		</>
	);
}

export default MyApp;
