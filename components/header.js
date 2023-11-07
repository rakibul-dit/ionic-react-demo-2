import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import MobileNav from "./mobile-nav";
import { useRouter } from "next/router";
import {
	arrowBackSharp,
	menuSharp,
	chevronBack,
	shareSocialOutline,
} from "ionicons/icons";
import {
	IonButton,
	IonButtons,
	IonHeader,
	IonIcon,
	IonTitle,
	IonToolbar,
} from "@ionic/react";
import { setIsBack } from "../store/actions";

export default function Header({ isTab, title }) {
	const router = useRouter();
	const [historyLength, setHistoryLength] = useState(0);

	useEffect(() => {
		setHistoryLength(window.history.length);
	});

	const [mobileNavOpen, setMobileNavOpen] = useState(false);
	const toggleMobileNav = (open) => (event) => {
		if (
			event.type === "keydown" &&
			(event.key === "Tab" || event.key === "Shift")
		) {
			return;
		}
		setMobileNavOpen(open);
	};

	const goBack = () => {
		// e.preventDefault();

		if (historyLength > 2) {
			router.back();
		} else {
			setIsBack(true);
			router.push(`${prev_page}`).then((r) => "/");
		}

		// if (prev_page !== "/") {
		// 	router.back();
		// } else router.push("/");
	};

	return (
		<>
			{isTab ? (
				<IonHeader>
					<IonToolbar>
						<IonButtons slot="start">
							{router.pathname == "/" ? (
								<div className="menu-btn">
									<IonButton onClick={toggleMobileNav(true)}>
										<IonIcon icon={menuSharp}></IonIcon>
									</IonButton>
								</div>
							) : (
								<>
									<div className="back-btn">
										<IonButton onClick={goBack}>
											<IonIcon icon={arrowBackSharp}></IonIcon>
										</IonButton>
									</div>
								</>
							)}
						</IonButtons>
						<IonTitle>
							<h3 style={{ color: "#106690" }}>{title || "Title"}</h3>
						</IonTitle>
					</IonToolbar>
				</IonHeader>
			) : (
				<>
					<header className="header header-3">
						<div className="page-width">
							<div className="box">
								<div className="header-ctn">
									<ul className="main-menu">
										<li>
											<Link href={`/`}>Home</Link>
										</li>
										<li>
											<Link href={`/list/all`}>Lists</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</header>
				</>
			)}
			<MobileNav navOpen={mobileNavOpen} navControl={toggleMobileNav} />
		</>
	);
}
