import Head from "next/head";
import Link from "next/link";
import {
	IonHeader,
	IonTitle,
	IonToolbar,
	IonPage,
	IonContent,
	IonFooter,
	IonList,
	IonApp,
	IonCard,
	IonCardHeader,
	IonCardTitle,
	IonCardContent,
} from "@ionic/react";
import { listDetails } from "../../../data/items";
import IonicHeader from "../../../components/IonicHeader";
import Header from "../../../components/header";

export default function List({ item, isTab }) {
	const contentJsx = (
		<>
			<div className="card">
				<h2>{item.title}</h2>
				<p>{item.description}</p>
			</div>
		</>
	);

	return (
		<>
			{/* <IonicHeader title={"Home"} prev_page={"/"} listId={""} isTab={isTab} /> */}
			<Header isTab={isTab} title={"List"} />

			{isTab ? (
				<IonContent className="ion-padding">{contentJsx}</IonContent>
			) : (
				<div className="content">{contentJsx}</div>
			)}
		</>
	);
}

export async function getStaticProps({ params }) {
	let id = params.id;
	let item = listDetails.filter((item) => item.id.toString() == id);
	return {
		props: {
			item: item[0],
		},
		revalidate: 60,
	};
}

export async function getStaticPaths() {
	let paths = [];
	for (const i in listDetails) {
		paths.push({
			params: { id: listDetails[i].id.toString() },
		});
	}

	return {
		paths,
		fallback: "blocking",
	};
}
