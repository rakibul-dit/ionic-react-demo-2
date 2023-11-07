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
import { category, listDetails } from "../../data/items";
import { arrowBackSharp, menuSharp } from "ionicons/icons";
import Home from "../index";
import { useEffect, createRef, useRef } from "react";
import IonicHeader from "../../components/IonicHeader";
import Header from "../../components/header";
import * as selectors from "../../store/selectors";
import Store from "../../store";
import { setIsBack, setScrollPosition } from "../../store/actions";
import { useRouter } from "next/router";

export default function List({ items, category, isTab }) {
	const contentRef = useRef(null);
	const router = useRouter();

	const handleCatClick = (e) => {
		if (isTab) {
			// e.preventDefault();
			// router.push(e.target.href);
			contentRef.current.scrollToTop();
		}
	};

	const contentJsx = (
		<>
			<div className="list-cat">
				<Link href={"/list/all"}>
					<a onClick={handleCatClick}>All</a>
				</Link>
				{category.map((item, i) => (
					<Link href={"/list/" + item.id} key={i}>
						<a onClick={handleCatClick}>{item.title}</a>
					</Link>
				))}
			</div>

			{items &&
				items.map((item) => (
					<Link href={"/list/details/" + item.id} key={item.id}>
						<div className="card" key={item.id}>
							<h2>{item.title}</h2>
							<p>{item.description}</p>
						</div>
					</Link>
				))}
		</>
	);

	// const contentRef = createRef(); // Add contentRef in ion content

	// useEffect(() => {
	// 	let xp = sessionStorage.getItem("xp");
	// 	let yp = sessionStorage.getItem("yp");

	// 	if (
	// 		typeof xp !== "undefined" &&
	// 		xp !== null &&
	// 		typeof yp !== "undefined" &&
	// 		yp !== null
	// 	) {
	// 		console.log(
	// 			"contentRef.current?.scrollToPoint(xp, yp); :: " + xp + " :: " + yp
	// 		);
	// 		// contentRef.current?.scrollToPoint(xp, yp);
	// 	}
	// }, []);

	function handleScrollEnd(ev) {
		console.log("scroll end");
		// console.log(ev.detail);
	}
	function handleScrollStart() {
		console.log("scroll start");
	}
	function handleScroll(ev) {
		setScrollPosition(router.pathname, ev.detail.scrollTop);
		// console.log(ev.detail.scrollTop);
	}

	let isBack = Store.useState(selectors.getIsBack);
	let yp = Store.useState(selectors.getScrollPosition);

	useEffect(() => {
		if (isTab) {
			console.log("isBack: " + isBack, yp);

			if (isBack == true) {
				// setTimeout(() => {
				contentRef.current.scrollToPoint(0, yp[router.pathname]);
				// }, 100);
			} else {
				setScrollPosition(router.pathname, 0);
			}
			return () => {
				setIsBack(false);
			};
		}
	}, [isBack]);

	return (
		<>
			{/* <IonicHeader title={"Home"} prev_page={"/"} listId={""} isTab={isTab} /> */}

			<Header isTab={isTab} title={"List"} />

			{isTab ? (
				<IonContent
					className="ion-padding"
					id="main-content"
					ref={contentRef}
					scrollEvents={true}
					onIonScrollStart={handleScrollStart}
					onIonScroll={handleScroll}
					onIonScrollEnd={handleScrollEnd}>
					{contentJsx}
				</IonContent>
			) : (
				<div className="content">{contentJsx}</div>
			)}
		</>
	);
}

export async function getStaticProps({ params }) {
	const catId = params.pid;
	let items = [];

	if (catId == "all") {
		items = listDetails;
	} else {
		items = listDetails.filter((item) => item.catId.toString() == catId);
	}

	return {
		props: {
			items,
			category,
		},
		revalidate: 60,
	};
}
export async function getStaticPaths() {
	let paths = [
		{
			params: { pid: "all" },
		},
	];

	category.map((item) => {
		paths.push({
			params: { pid: item.id.toString() },
		});
	});

	return {
		paths,
		fallback: "blocking",
	};
}
