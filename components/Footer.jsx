import Link from "next/link";
import {
	ellipsisHorizontalCircleOutline,
	logoStencil,
	logoYoutube,
} from "ionicons/icons";
import {
	IonButton,
	IonFooter,
	IonIcon,
	IonLabel,
	IonPage,
	IonTabButton,
	setupIonicReact,
} from "@ionic/react";

export default function Footer({ isTab }) {
	return (
		<>
			{isTab ? (
				<IonFooter>
					<div className="footer-link" color="light">
						<Link href="/">
							<IonButton>
								<IonIcon icon={logoYoutube} size="small" />
								<IonLabel>Home</IonLabel>
							</IonButton>
						</Link>
						<Link href="/list/all">
							<IonButton>
								<IonIcon icon={logoStencil} size="small" />
								<IonLabel>List</IonLabel>
							</IonButton>
						</Link>

						<Link href="/about">
							<IonButton>
								<IonIcon icon={ellipsisHorizontalCircleOutline} size="small" />
								<IonLabel>About</IonLabel>
							</IonButton>
						</Link>
					</div>
				</IonFooter>
			) : (
				<>
					<div className="footer-link" color="light">
						<Link href="/">Home</Link>
						<Link href="/list/all">Lists</Link>
						<Link href="/about">About</Link>
					</div>
				</>
			)}
		</>
	);
}
