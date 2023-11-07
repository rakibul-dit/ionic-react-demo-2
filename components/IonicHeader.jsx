import { menuController } from "@ionic/core";
import { menuSharp, arrowBackSharp } from "ionicons/icons";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { setIsBack } from "../store/actions";
import {
	IonButton,
	IonButtons,
	IonHeader,
	IonIcon,
	IonTitle,
	IonToolbar,
} from "@ionic/react";

export default function IonicHeader({ title, prev_page, listId }) {
	const menuClick = async (e) => {
		e.preventDefault();
		window.menuController = menuController;
		await menuController.open();
	};

	const router = useRouter();

	const [historyLength, setHistoryLength] = useState(0);
	console.log("history length:" + historyLength);
	useEffect(() => {
		setHistoryLength(window.history.length);
	}, [router]);

	const goBack = () => {
		if (historyLength > 2) {
			router.back();
		} else {
			if (router.pathname == "/list") {
				setIsBack(false);
			} else {
				setIsBack(true);
			}
			router.push(prev_page);
		}
	};

	return (
		<>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot="start">
						{router.pathname === "/" ? (
							<IonButton onClick={menuClick}>
								<IonIcon icon={menuSharp}></IonIcon>
							</IonButton>
						) : (
							<IonButton onClick={goBack}>
								<IonIcon icon={arrowBackSharp}></IonIcon>
							</IonButton>
						)}
					</IonButtons>
					<IonTitle>{title}</IonTitle>
				</IonToolbar>
			</IonHeader>
		</>
	);
}
