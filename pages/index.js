import Head from "next/head";
import { Share } from "@capacitor/share";
import {
	IonHeader,
	IonTitle,
	IonToolbar,
	IonPage,
	IonContent,
	IonFooter,
	IonApp,
	IonCard,
	IonCardHeader,
	IonCardTitle,
	IonCardContent,
} from "@ionic/react";
import { Capacitor } from "@capacitor/core";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import IonicHeader from "../components/IonicHeader";
import Header from "../components/header";

export default function Home({ isTab }) {
	const router = useRouter();
	const contentJsx = (
		<>
			<div className="card">
				<p>sdf sdoufiodsf idosuf</p>
			</div>
			<div className="card">
				<p>sdf sdoufiodsf idosuf</p>
			</div>

			<ul>
				<li>
					<Link href="/list/all">List</Link>s
				</li>
				<li>{/* <Link href="/list/1">List Detail</Link> */}</li>
				<li>
					<Link href="/about">About</Link>
				</li>
			</ul>
		</>
	);

	// useEffect(() => {
	//     // Detect the platform and add platform-specific CSS classes
	//     if (typeof window !== 'undefined' && window.Ionic) {
	//         document.body.classList.add('md');
	//     }
	// }, [router]);

	return (
		<>
			{/*{Capacitor.isNativePlatform() && (*/}
			{/*    <IonHeader>*/}
			{/*        <IonToolbar color="primary">*/}
			{/*            <IonTitle>Simons Capacitor App</IonTitle>*/}
			{/*        </IonToolbar>*/}
			{/*    </IonHeader>*/}
			{/*)}*/}

			{/* <IonicHeader title={"Home"} prev_page={"/"} listId={""} isTab={isTab} /> */}
			<Header isTab={isTab} title={"home"} />

			{isTab ? (
				<IonContent className="ion-padding" id="main-content">
					{contentJsx}
				</IonContent>
			) : (
				<div className="content">{contentJsx}</div>
			)}
		</>
	);
}
