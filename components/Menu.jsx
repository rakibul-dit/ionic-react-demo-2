import {
	IonContent,
	IonHeader,
	IonIcon,
	IonItem,
	IonList,
	IonMenu,
	IonMenuToggle,
	IonTitle,
	IonToolbar,
} from "@ionic/react";
import {
	shareSocialOutline,
	informationCircleOutline,
	homeOutline,
} from "ionicons/icons";
import Link from "next/link";

const menus = [
	{
		title: "হোম",
		icon: homeOutline,
		url: "/",
	},
	{
		title: "About",
		icon: informationCircleOutline,
		url: "/about",
	},
	{
		title: "List",
		icon: informationCircleOutline,
		url: "/list",
	},
	{
		title: "শেয়ার করুন",
		icon: shareSocialOutline,
		url: "#",
	},
];

const Menu = () => {
	return (
		<IonMenu side="start" contentId="main-content">
			<IonHeader>
				<IonToolbar>
					<IonTitle>Menu</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent className="menu">
				<IonList>
					{menus.map((m, k) => (
						<IonMenuToggle auto-hide={false} key={k}>
							<Link href={m.url} passHref>
								<IonItem detail={false} lines="none">
									{/* <a> */}
									<IonIcon icon={m.icon} slot="start" />
									{m.title}
									{/* </a> */}
								</IonItem>
							</Link>
						</IonMenuToggle>
					))}
				</IonList>
			</IonContent>
		</IonMenu>
	);
};

export default Menu;
